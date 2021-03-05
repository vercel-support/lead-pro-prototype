import { Leads } from "components/pages/Leads";
import React from "react";

export default function PageDashboard({status}) {
  return <Leads status={status}/>;
}

export async function getServerSideProps(ctx) {
  const { query } = ctx;

  const { status } = query;

  return {
    props: {status},
  };
}
