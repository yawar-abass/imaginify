import MobileNav from "@/components/Layout/MobileNav";
import Sidebar from "@/components/Layout/Sidebar";
import { Toaster } from "@/components/ui/toaster";
import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root">
      <Sidebar />
      <MobileNav />
      <div className="root-container">
        <div className="wrapper">{children}</div>
      </div>
      <Toaster />
    </main>
  );
};

export default RootLayout;
