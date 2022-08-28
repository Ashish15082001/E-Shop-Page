import React from "react";
import PageHeader from "../components/page header/PageHeader";
import { PageBody } from "./OrderStyles";

export default function Order(props) {
  return (
    <React.Fragment>
      <PageHeader />
      <PageBody>
        <h1>Order Page</h1>
      </PageBody>
    </React.Fragment>
  );
}
