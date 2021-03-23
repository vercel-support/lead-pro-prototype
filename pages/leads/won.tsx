import { Leads } from "components/pages/Leads";
import React from "react";

export default function PageDashboard({status}) {
  return <Leads status={status}/>;
}

export async function getServerSideProps(ctx) {

  return {
    props: {status: "business"},
  };
}
