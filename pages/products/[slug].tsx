import { Leads } from "components/pages/Leads";
import { Tabs, TabItem, Box, Container, Stack, Button } from "components";
import React, { useState } from "react";
import { LayoutProduct } from "components/layouts/LayoutProduct";
import { CardModal } from "components/organisms/CardModal";
import { UpgradeConfirmationModal } from "components/organisms/UpgradeConfirmationModal";
import { ProductUpgradeSplash } from "components/organisms/ProductUpgradeSplash";
import { InternalLink } from "components/atoms";
import { useRouter } from "next/router";
import { HiPhone } from "react-icons/hi";
import { fetchAddons } from "services/api";
import _ from "underscore";

export default function PageValuationTool({product}) {
  

  return (
    <LayoutProduct title={product.name}>
      <Box p={10} border="1px solid" rounded="md" borderColor="gray.200">
        <ProductUpgradeSplash product={product} />
      </Box>
    </LayoutProduct>
  );
}


export async function getServerSideProps({query}) {

  const { slug } = query;

  const products = fetchAddons();
  const product = _.findWhere(products, { slug });

  return {
    props: {
      product
    },
  }
}