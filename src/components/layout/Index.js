import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "../common/ScrollToTop";
import Loading from "@/app/[locale]/loading";
import Header2 from "./Header2";

const Index = ({ children, arabic, header2 }) => {
  return (
    <div className={`${arabic ? "rtl" : "ltr"}`}>
      <ScrollToTop />
      {header2 ? <Header2 arabic={arabic} /> : <Header arabic={arabic} />}
      <main>{children}</main>
      <Footer arabic={arabic} />
    </div>
  );
};

export default Index;
