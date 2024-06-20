import GlobalNavBar from "@/components/molecules/global-nav-bar";
import { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="">
      <GlobalNavBar />
      <div>{children}</div>
    </main>
  );
};

export default MainLayout;
