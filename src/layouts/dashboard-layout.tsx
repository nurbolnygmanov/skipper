import { useRouter } from "next/router";
import { ReactNode } from "react";

import { Protected, useUser } from "@/features/auth";
import { Button } from "@/components/button";
import { useLogout } from "@/features/auth/api/logout";
import styles from "./dashboard-layout.module.scss";
import Image from "next/image";
import logo from "../../public/logo-skipperndt.png";

type DashboardLayoutProps = {
  children: ReactNode;
};

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <Protected>
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>
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
      <Image src={logo} alt="skipper logo" className={styles.logo} />

      <nav className={styles.usernav}>
        <span className={styles["user-name"]}>{user.data?.name}</span>
        <Button variant="outline" onClick={() => logout.submit()}>
          Log out
        </Button>
      </nav>
    </header>
  );
}
