import { useRouter } from "next/router";
import { ReactNode } from "react";

import { Protected, useUser } from "@/features/auth";
import { Link } from "@/components/link";
import { Button } from "@/components/button";
import { useLogout } from "@/features/auth/api/logout";
import styles from "./dashboard-layout.module.scss";
import Image from "next/image";
import logo from "../../public/logo-skipperndt.png";
import profile from "../../public/profile.png";
import { FiMessageSquare, FiBookmark, FiLogOut, FiMap } from "react-icons/fi";

type DashboardLayoutProps = {
  children: ReactNode;
};

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <Protected>
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>
          <nav className={styles.sidebar}>
            <ul>
              <li>
                <FiMap size={22} color={"var(--color-grey-light-1)"} />{" "}
                <span>INSPECTIONS</span>
              </li>
            </ul>
          </nav>

          <main className={styles.view}>{children}</main>
        </div>
      </div>
    </Protected>
  );
}

function Header() {
  const router = useRouter();
  const user = useUser();
  const logout = useLogout({
    onSuccess: () => router.push("/"),
  });

  return (
    <header className={styles.header}>
      <Image
        src={logo}
        alt="skipper logo"
        className={styles.logo}
        width={185}
        height={28}
      />

      <nav className={styles.usernav}>
        <p>
          <FiMessageSquare size={22} color={"var(--color-grey-dark-2)"} />
        </p>

        <p>
          <FiBookmark size={22} color={"var(--color-grey-dark-2)"} />
        </p>

        <span className={styles["user-name"]}>{user.data?.name}</span>
        <Button variant="outline" onClick={() => logout.submit()}>
          <FiLogOut size={22} color={"var(--color-grey-dark-2)"} /> Log out
        </Button>
      </nav>
    </header>
  );
}
