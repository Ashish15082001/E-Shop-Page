import React from "react";
import Footer from "../components/footer/Footer";
import PageBody from "../components/page body/PageBody";
import PageHeader from "../components/page header/PageHeader";

export default function Order(props) {
  return (
    <React.Fragment>
      <PageHeader />
      <PageBody />
      <Footer />
    </React.Fragment>
  );
}
