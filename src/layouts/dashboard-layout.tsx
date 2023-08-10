import { useRouter } from "next/router";
import { ReactNode } from "react";

import { Protected, useUser } from "@/features/auth";
import { Link } from "@/components/link";
import { Button } from "@/components/button";
import { useLogout } from "@/features/auth/api/logout";
import styles from "./dashboard-layout.module.scss";
import Image from "next/image";
import logo from "../../public/logo-skipperndt.png";

type DashboardLayoutProps = {
  children: ReactNode;
};

// export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
//   return (
//     <Protected>
//       <Header />
//       <main>{children}</main>
//     </Protected>
//   );
// };

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>Header part</header>
      <div className={styles.content}>
        <nav className={styles.sidebar}>Navigation</nav>

        <main className={styles.view}>{children}</main>
      </div>
    </div>
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
      <Link href="/dashboard/inspections">
        <Image
          src={logo}
          alt="skipper logo"
          className={styles.logo}
          width={193}
          height={32}
        />
      </Link>
      <nav className={styles.navmain}>
        <p>{user.data?.name}</p>
        <Button variant="outline" onClick={() => logout.submit()}>
          Log Out
        </Button>
      </nav>
    </header>
  );
}
