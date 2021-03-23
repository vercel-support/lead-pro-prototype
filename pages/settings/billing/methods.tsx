import { Leads } from "components/pages/Leads";
import { Tabs, TabItem, Box, Container, Stack, Modal } from "components";
import React, { useState } from "react";
import { LayoutSettings } from "components/layouts/LayoutSettings";
import { Section, Field } from "components/molecules/Settings";
import { fetchAddons } from "services/api";
import { Addon } from "components/molecules/Addon";
import { AddonsModal } from "components/pages/Billing/components/AddonsModal";
import { PaymentDetails } from "components/pages/Billing/components/PaymentDetails";
import { Invoices } from "components/pages/Billing/components/Invoices";
import { LayoutBilling } from "components/layouts/LayoutBilling";

export default function PageBilling() {
  const addons = fetchAddons();
  const [isOpen, setOpen] = useState(false);

  return (
    <LayoutSettings title="Billing">
        <LayoutBilling>
      <PaymentDetails />
      </LayoutBilling>
    </LayoutSettings>
  );
}
