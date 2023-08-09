import { useRouter } from "next/router";
import { ReactNode } from "react";

import { Protected } from "@/features/auth";
import { Link } from "@/components/link";
import { Button } from "@/components/button";
import { useLogout } from "@/features/auth/api/logout";

type DashboardLayoutProps = {
  children: ReactNode;
};

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <Protected>
      <Navbar />
      {children}
    </Protected>
  );
};

function Navbar() {
  const router = useRouter();
  const logout = useLogout({
    onSuccess: () => router.push("/"),
  });

  return (
    <nav>
      <Link href="/dashboard/inspections">Inspections</Link>
      <Button variant="outline" onClick={() => logout.submit()}>
        Log Out
      </Button>
    </nav>
  );
}
