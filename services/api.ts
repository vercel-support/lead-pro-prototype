export const fetchTeam = () => {
  return [
    {
      id: 1,
      name: "Hannah Swift",
      email: "hannahswift@your-move.co.uk",
      color: "purple",
      avatar:
        "https://s3.amazonaws.com/profile_photos/1150295469120596.hDqezwpgpUKfHSCHK8J9_60x60.png",
    },
    {
      id: 2,
      name: "Debbie Phillips",
      email: "debbie.phillips@lslps.co.uk",
      color: "teal",
      avatar:
        "https://s3.amazonaws.com/profile_photos/9385458149476.ro69QIeUi8md7Lr0OAFD_huge.jpeg",
    },
    {
      id: 3,
      name: "Caitlin Crombie",
      email: "caitlin.crombie@your-move.co.uk",
      color: "red",
      avatar:
        "https://s3.amazonaws.com/profile_photos/9385458149476.ro69QIeUi8md7Lr0OAFD_huge.jpeg",
    },
    {
      id: 4,
      name: "Sarah Cooper",
      email: "sarah.couper@your-move.co.uk",
      color: "orange",
      avatar:
        "https://s3.amazonaws.com/profile_photos/9385458149476.ro69QIeUi8md7Lr0OAFD_huge.jpeg",
    },
  ];
};

export const fetchIntegrationsCategories = () => {
  return [
    {
      name: "CRM",
      count: 12,
    },
    { name: "Marketing", count: 24 },
  ];
};

export const fetchPlans = () => {
  return [
    {
      name: "Starter",
      description:
      
        "For estate agents who want a few extra instructions each month.",
        price: "Free",
      count: 12,
      features: [
        "Instant online valuation tool",
        "Portal responder & applicant pre-qualification",
        "Track the source of instructions",
      ],
    },
    {
      name: "Premium",
      description:
        "For estate agents who want to significantly grow their business.",
      count: 24,
      price: "£99",
      features: [
        "Over 10 valuations per month",
        "Over 500 pre-qualified portal enquires per month",
        "In-depth reporting including ROI analysis of Rightmove vs Zoopla vs OTM",
        "Branded and customisable email templates",
        "Unlimited number of branches",
        "Integrations to Jupix, Reapit, your website and other 3rd party tools",
      ],
    },
    {
      name: "Enterprise",
      count: 24,
      price: "Let's talk",
      description:
        "For multi-branch estate agencies who want custom features and deep integrations.",
      features: [
        "Over 250 valuations per month",
        "Over 10,000 pre-qualified portal enquiries per month",
        "Advanced analytics including branch comparison analysis",
      ],
    },
  ];
};

export const fetchAddons = () => {
  return [
    {
      name: "Lead Responder",
      isActive: true,
      description:
        "Leads portals & the agent’s website receive email and text message replies, with a custom questionnaire to identify vendor, mortgage and landlord leads.",
      price: 39,
      color: "blue",
    },
    {
      name: "Instant Valuation Tool",
      price: 50,
      color: "teal",
      description:
        "In 5 minutes agents can start converting unknown website visitors into valuation leads.  The tool can be used in social media and in google campaigns to generate vendor and landlord leads.",
      usage: {
        type: "valuations",
        allowance: 50,
        used: 35,
        feePerAdditionalUnit: 0.25,
      },
    },
    {
      name: "AutoCaller",
      description:
        "High value email leads are converted from an email to a call, causing  the office phone to ring, connecting the agent directly to the lead, ahead of any competitors.",
      price: 82.5,
      usage: {
        type: "mins",
        allowance: 500,
        used: 510,
        feePerAdditionalUnit: 0.03,
      },
      color: "green",
    },
    {
      name: "Drip Integration",
      price: 25,
      color: "purple",
      description: "Connect third party marketing tools e.g. Drip",
    },
    {
      name: "Marketing Package",
      price: 699,
      color: "orange",
      description:
        "Lead Generation: Facebook Advertising, Instagram Advertising",
    },
  ];
};

export const fetchIntegrations = () => {
  return [
    {
      name: "MailChimp",
      category: "Marketing",
      logo: "mailchimp.png",
      activatedAt: "2020-01-02",
      description:
        "Discover how people find and interact with your typeform. Get the data you need to measure campaigns, improve conversions, and more.",
    },
    {
      name: "Vebra Alto",
      category: "Marketing",
      logo: "vebra-alto.png",
      activatedAt: null,
      description:
        "Discover how people find and interact with your typeform. Get the data you need to measure campaigns, improve conversions, and more.",
    },
    {
      name: "Reapit",
      category: "Marketing",
      logo: "reapit.png",
      activatedAt: null,
      description:
        "Discover how people find and interact with your typeform. Get the data you need to measure campaigns, improve conversions, and more.",
    },
    {
      name: "Jupix",
      category: "Marketing",
      logo: "jupix.png",
      activatedAt: null,
      description:
        "Discover how people find and interact with your typeform. Get the data you need to measure campaigns, improve conversions, and more.",
    },
    {
      name: "Drip",
      category: "Marketing",
      logo: "drip.png",
      activatedAt: null,
      description:
        "Discover how people find and interact with your typeform. Get the data you need to measure campaigns, improve conversions, and more.",
    },
    {
      name: "SME Professional",
      category: "Marketing",
      logo: "sme-professional.png",
      activatedAt: null,
      description:
        "Discover how people find and interact with your typeform. Get the data you need to measure campaigns, improve conversions, and more.",
    },
    {
      name: "Autopilot",
      category: "Marketing",
      logo: "autopilot.png",
      activatedAt: null,
      description:
        "Discover how people find and interact with your typeform. Get the data you need to measure campaigns, improve conversions, and more.",
    },
  ];
};

export const fetchLeads = () => {
  return [
    {
      id: 3971462,
      status: 50,
      createdAt: "2021-02-04T09:42:14.878Z",
      updatedAt: "2021-02-04T09:42:14.878Z",
      source: "ivt",
      type: "vendor",
      email: "karlanthonyfisher@gmail.com",
      postcode: "SL3 8UT",
      address: "25 Torridge Road",
      advertPostcode: null,
      advertAddress: null,
      assignee: null,
      person: {
        fullName: "Karl Fisher",
        phone: "07368874295",
        email: "karlanthonyfisher@gmail.com",
        address: "25 Torridge Road",
        source: "ivt",
      },
      subRows: [
        {
          type: "mortgage",
        },
        {
          type: "sale",
        },
      ],
    },
    {
      id: 3971462,
      status: 50,
      createdAt: "2021-02-04T09:42:14.878Z",
      updatedAt: "2021-02-04T09:42:14.878Z",
      source: "ivt",
      type: "vendor",
      email: "karlanthonyfisher@gmail.com",
      postcode: "SL3 8UT",
      address: "25 Torridge Road",
      advertPostcode: null,
      advertAddress: null,
      assignee: null,
      person: {
        fullName: "Joe Smith",
        phone: "07368874295",
        email: "karlanthonyfisher@gmail.com",
        address: "25 Torridge Road",
        source: "ivt",
      },
    },
    {
      id: 3971462,
      status: 50,
      createdAt: "2021-02-04T09:42:14.878Z",
      updatedAt: "2021-02-04T09:42:14.878Z",
      source: "ivt",
      type: "vendor",
      email: "karlanthonyfisher@gmail.com",
      postcode: "SL3 8UT",
      address: "25 Torridge Road",
      advertPostcode: null,
      advertAddress: null,
      assignee: null,
      person: {
        fullName: "Steve Clarke",
        phone: "07368874295",
        email: "karlanthonyfisher@gmail.com",
        address: "25 Torridge Road",
        source: "ivt",
      },
    },
    {
      id: 3971462,
      status: 50,
      createdAt: "2021-02-04T09:42:14.878Z",
      updatedAt: "2021-02-04T09:42:14.878Z",
      source: "ivt",
      type: "vendor",
      email: "karlanthonyfisher@gmail.com",
      postcode: "SL3 8UT",
      address: "25 Torridge Road",
      advertPostcode: null,
      advertAddress: null,
      assignee: null,
      person: {
        fullName: "Chantelle Woods",
        phone: "07368874295",
        email: "karlanthonyfisher@gmail.com",
        address: "25 Torridge Road",
        source: "ivt",
      },
    },
    {
      id: 3971462,
      status: 50,
      createdAt: "2021-02-04T09:42:14.878Z",
      updatedAt: "2021-02-04T09:42:14.878Z",
      source: "ivt",
      type: "vendor",
      email: "karlanthonyfisher@gmail.com",
      postcode: "SL3 8UT",
      address: "25 Torridge Road",
      advertPostcode: null,
      advertAddress: null,
      assignee: null,
      person: {
        fullName: "Jonathan Norris",
        phone: "07368874295",
        email: "karlanthonyfisher@gmail.com",
        address: "25 Torridge Road",
        source: "ivt",
      },
    },
  ];
};
