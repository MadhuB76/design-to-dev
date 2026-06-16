// Ported verbatim from the Next.js (:3000) demo - lib/projects.ts.
// Full case-study data used by the /projects/:id detail page.

export const categories = [
  "All",
  "Design",
  "Development",
  "Branding",
  "Freelance"
]

export const projects = [
  // Helpi
  {
    id: "helpi",
    title: "Helpi",
    client: "On-Demand Service Platform",
    description:
      "Designing trust, transparency, and accountability across a service marketplace by creating a seamless experience for both customers and service professionals.",
    year: "2025",
    image: "/src/data/projects/helpi/Hero.png",
    categories: ["Design","Branding"],
    tags: ["Mobile App","UX Research","Service Design","Workflow Design","Design System"],
    featured: true,
    caseStudy: {
      role: "UI/UX Designer",

      services: [
        "Product Design",
        "Service Design",
        "UX Strategy",
        "Workflow Design",
        "Design System"
      ],

      timeline: "Product Ecosystem · 2025",

      intro:
        "Helpi is a multi-sided service platform consisting of a Customer App, Helper App, and Management Portal. The project focused on simplifying service operations, reducing onboarding friction, preventing service disputes, and creating a scalable ecosystem capable of supporting multiple service categories under a single platform.",

      stats: [
        { label: "Platforms", value: "3" },
        { label: "User Types", value: "3" },
        { label: "Service Categories", value: "Unlimited" }
      ],

      sections: [
        {
          id: "overview",
          label: "Overview",
          phase: "01",
          heading: "Designing a complete service ecosystem",
          image: "/src/data/projects/helpi/01.png",
          body: [
            "Helpi is not a single application. It is an ecosystem composed of a Customer App, Helper App, and Management Portal that work together to facilitate service delivery from booking to completion.",
            "The challenge was designing experiences for multiple stakeholders while maintaining operational efficiency, transparency, and trust throughout the service lifecycle."
          ]
        },

        {
          id: "ecosystem",
          label: "Ecosystem Design",
          phase: "02",
          heading: "Connecting customers, helpers, and operations",
          image: "/src/data/projects/helpi/02.png",
          body: [
            "Every successful service requires coordination between customers requesting services, helpers delivering them, and management teams overseeing operations.",
            "The ecosystem was designed to create seamless communication and visibility between all three parties while ensuring each platform remains focused on its specific responsibilities."
          ],
          highlights: [
            "Customer App",
            "Helper App",
            "Management Portal",
            "Unified Service Lifecycle"
          ]
        },

        {
          id: "onboarding",
          label: "Simplifying Onboarding",
          phase: "03",
          heading: "Reducing friction before users even start",
          image: "/src/data/projects/helpi/03.png",
          body: [
            "Early onboarding concepts introduced too many steps before users could begin using the platform. Every additional screen increased the risk of abandonment.",
            "The onboarding experience was restructured to remove unnecessary friction, allowing users to reach core functionality faster while still collecting essential information."
          ],
          highlights: [
            "Reduced User Friction",
            "Faster Activation",
            "Simplified Flow",
            "Improved Accessibility"
          ]
        },

        {
          id: "marketplace",
          label: "Service Marketplace",
          phase: "04",
          heading: "Making service discovery effortless",
          image: "/src/data/projects/helpi/04.png",
          body: [
            "The marketplace experience was designed to help customers quickly discover, understand, and book services without feeling overwhelmed.",
            "Information hierarchy, category structures, and booking flows were carefully organized to reduce decision fatigue and support faster service selection."
          ]
        },

        {
          id: "helper-workflow",
          label: "Helper Workflow",
          phase: "05",
          heading: "Designing for professionals in the field",
          image: "/src/data/projects/helpi/05.png",
          body: [
            "Unlike customers, helpers interact with the platform while actively performing work. Their experience needed to prioritize speed, clarity, and task progression.",
            "The workflow was structured around job acceptance, navigation, arrival verification, service execution, and completion."
          ]
        },

        {
          id: "dispute-prevention",
          label: "Dispute Prevention",
          phase: "06",
          heading: "Solving problems before they happen",
          image: "/src/data/projects/helpi/06.png",
          body: [
            "One of the most critical challenges involved preventing disputes between customers and service providers. Questions such as whether a helper arrived, when a service started, and whether a task was completed needed clear answers.",
            "To address this, verification checkpoints were introduced throughout the service lifecycle, creating accountability and reducing ambiguity for all participants."
          ],
          highlights: [
            "OTP Verification",
            "Arrival Confirmation",
            "Completion Validation",
            "Shared Accountability"
          ]
        },

        {
          id: "management-platform",
          label: "Management Platform",
          phase: "07",
          heading: "Giving operations teams complete visibility",
          image: "/src/data/projects/helpi/07.png",
          body: [
            "Behind every completed service is an operational system responsible for assigning jobs, monitoring progress, and resolving issues.",
            "The management platform was designed to provide administrators with visibility into active services, helper performance, customer requests, and operational bottlenecks."
          ]
        },

        {
          id: "designing-for-scale",
          label: "Designing For Scale",
          phase: "08",
          heading: "Building beyond a single service category",
          image: "/src/data/projects/helpi/08.png",
          body: [
            "A key objective was ensuring the platform could expand beyond its initial offerings. Rather than designing around specific services, the system was structured to support an unlimited number of future categories.",
            "This scalable approach allows the platform to evolve without requiring fundamental changes to the user experience."
          ],
          highlights: [
            "Modular Architecture",
            "Scalable Categories",
            "Reusable Components",
            "Future-Ready Structure"
          ]
        },

        {
          id: "validation",
          label: "Validation",
          phase: "09",
          heading: "Testing decisions with real users",
          image: "/src/data/projects/helpi/09.png",
          body: [
            "Rather than relying solely on assumptions, key workflows were reviewed with real users to identify friction points and usability concerns.",
            "Feedback gathered from testing sessions directly influenced onboarding simplification, service booking flows, and dispute prevention mechanisms."
          ]
        },

        {
          id: "key-decisions",
          label: "Key Decisions",
          phase: "10",
          heading: "The decisions that shaped the experience",
          image: "/src/data/projects/helpi/10.png",
          body: [
            "Several strategic decisions had a significant impact on the final product. Simplifying onboarding improved accessibility, OTP verification strengthened trust, and completion validation reduced disputes.",
            "These decisions were not driven by aesthetics but by measurable operational and user experience improvements."
          ]
        },

        {
          id: "reflection",
          label: "Reflection",
          phase: "11",
          heading: "Designing systems, not just screens",
          // image: "/src/assets/case-studies/helpi/11.png",
          body: [
            "Helpi reinforced the importance of thinking beyond individual interfaces. Every decision affected customers, service providers, and operational teams simultaneously.",
            "The project highlighted how successful service platforms depend on carefully designed systems that balance usability, scalability, accountability, and operational efficiency."
          ],
        },
      ]
    },
  },
  // Axlr8
  {
    id: "axlr8",
    title: "AXLR8",
    client: "Motorsport Media Platform",
    description:
      "Building a unified motorsport ecosystem that brings race streaming, team updates, automotive culture, and fan engagement into one immersive experience.",
    year: "2025",
    image: "/src/data/projects/Axlr8/2.jpg",
    categories: [
      "Design",
      "Branding"
    ],
    tags: [
      "Mobile App",
      "Entertainment",
      "Sports Platform",
      "Visual Design",
      "Information Architecture"
    ],
    featured: true,
    caseStudy: {
      mode: "presentation",
      role: "UI/UX Designer",
      services: [
        "Product Design",
        "Branding",
        "Visual Design",
        "Brand Experience",
        "Information Architecture"
      ],
      timeline: "Concept · 2025",
      intro:
        "AXLR8 is a motorsport-focused digital platform designed for Formula 1 and MotoGP enthusiasts. The project explores how race streaming, news, team content, and automotive culture can be unified into a single destination that keeps fans engaged before, during, and after race weekends.",
      stats: [
        { label: "Core Experiences", value: "4+" },
        { label: "Fan Archetypes", value: "3" },
        { label: "Content Ecosystems", value: "10+" }
      ],
      sections: [
        {
        id: "project-introduction",
        label: "Introduction",
        image: "/src/data/projects/Axlr8/1.jpg"
      },
      {
        id: "hero-showcase",
        label: "Hero Showcase",
        image: "/src/data/projects/Axlr8/2.jpg"
      },
      {
        id: "project-overview",
        label: "About Project",
        image: "/src/data/projects/Axlr8/3.jpg"
      },
      {
        id: "app-icon-design",
        label: "App Icon",
        image: "/src/data/projects/Axlr8/4.jpg"
      },
      {
        id: "ux-ui-testing",
        label: "UX/UI Testing",
        image: "/src/data/projects/Axlr8/5.jpg"
      },
      {
        id: "persona-analysis",
        label: "Persona Analysis",
        image: "/src/data/projects/Axlr8/6.jpg"
      },
      {
        id: "onboarding-experience",
        label: "Onboarding",
        image: "/src/data/projects/Axlr8/7.jpg"
      },
      {
        id: "user-flow",
        label: "User Flow",
        image: "/src/data/projects/Axlr8/8.jpg"
      },
      {
        id: "authentication-flow",
        label: "Authentication",
        image: "/src/data/projects/Axlr8/9.jpg"
      },
      {
        id: "customer-journey-map",
        label: "Customer Journey Map",
        image: "/src/data/projects/Axlr8/10.jpg"
      },
      {
        id: "early-visual-exploration",
        label: "First Visualization",
        image: "/src/data/projects/Axlr8/11.jpg"
      },
      {
        id: "user-preferences",
        label: "Preferences",
        image: "/src/data/projects/Axlr8/12.jpg"
      },
      {
        id: "home-experience",
        label: "Main Page",
        image: "/src/data/projects/Axlr8/13.jpg"
      },
      {
        id: "content-discovery",
        label: "Search By Category",
        image: "/src/data/projects/Axlr8/14.jpg"
      },
      {
        id: "brand-identity",
        label: "Artwork & Branding",
        image: "/src/data/projects/Axlr8/15.jpg"
      },
      {
        id: "pitstop-experience",
        label: "Pitstop",
        image: "/src/data/projects/Axlr8/16.jpg"
      },
      {
        id: "reader-experience",
        label: "Reader",
        image: "/src/data/projects/Axlr8/17.jpg"
      },
      {
        id: "design-system",
        label: "Design System",
        image: "/src/data/projects/Axlr8/18.jpg"
      },
      {
        id: "app-graphics",
        label: "App Graphics",
        image: "/src/data/projects/Axlr8/19.jpg"
      },
      {
        id: "profile-experience",
        label: "Profile",
        image: "/src/data/projects/Axlr8/20.jpg"
      },
      {
        id: "logo-showcase",
        label: "Logo Showcase",
        image: "/src/data/projects/Axlr8/21.jpg"
      },
      {
        id: "screen-showcase",
        label: "Screen Showcase",
        type: "video",
        src: "/src/data/projects/Axlr8/showcase.mp4"
      },
      {
        id: "project-metrics",
        label: "Metrics & Reflection",
        image: "/src/data/projects/Axlr8/23.jpg"
      }
      ]
    },
  },
  // Ledger
  {
    id: "ledger",
    title: "Ledger",
    client: "Financial Management Platform",
    description:
      "A financial management platform built to help individuals and organizations manage complex financial ecosystems through structured entities, accounts, transactions, and role-based access control.",
    year: "2026",
    image: "/src/data/projects/ledger/ledgerhero.png",
    categories: [
      "Design",
      "Development",
      "Branding"
    ],
    tags: [
      "Mobile App",
      "Financial Management",
      "Multi-Entity System",
      "Information Architecture",
      "Access Control"
    ],
    featured: true,
    caseStudy: {
      role: ["UI/UX Designer,","\n", "Front-End Developer"],
      services: [
        "Product Design",
        "Information Architecture",
        "Financial Systems Design",
        "UX Research",
        "Mobile App Design"
      ],
      timeline: "Product Design · 2026",
      intro:
        "Ledger is a financial management platform designed for individuals, businesses, and organizations that require complete visibility across complex financial structures. Built around entities, accounts, transactions, allocations, and user permissions, the platform enables multiple stakeholders to manage financial operations collaboratively while maintaining transparency, security, and control.",
      stats: [
        { label: "Core Modules", value: "8+" },
        { label: "Access Levels", value: "Role-Based" },
        { label: "Financial Structures", value: "Scalable" }
      ],

      sections: [
        {
          id: "overview",
          label: "Overview",
          phase: "01",
          heading: "Bringing structure to financial complexity",
          // image: "/src/data/projects/ledger/01.png",
          body: [
            "Organizations often manage finances across multiple entities, accounts, currencies, and stakeholders. As these structures grow, maintaining visibility and control becomes increasingly difficult.",
            "Ledger was designed as a centralized financial management platform that organizes financial data into a scalable ecosystem, helping users manage complexity without sacrificing clarity."
          ]
        },

        {
          id: "problem-space",
          label: "Problem Space",
          phase: "02",
          heading: "Financial systems become difficult to manage as they scale",
          image: "/src/data/projects/ledger/02.png",
          body: [
            "Most financial tools focus on individual transactions or isolated accounts, making it difficult to manage larger organizational structures involving multiple owners, entities, and financial responsibilities.",
            "The challenge was creating a system capable of supporting both personal finance and complex organizational operations while maintaining a clear and intuitive experience."
          ],
          highlights: [
            "Fragmented Financial Information",
            "Multi-Owner Collaboration",
            "Limited Financial Visibility",
            "Growing Operational Complexity"
          ]
        },

        {
          id: "system-architecture",
          label: "System Architecture",
          phase: "03",
          heading: "Designing a hierarchy that scales",
          image: "/src/data/projects/ledger/03.png",
          body: [
            "The platform was structured around a clear financial hierarchy consisting of entities, accounts, transactions, categories, and allocations. This architecture creates a single source of truth across the organization.",
            "By organizing information into predictable layers, users can understand financial relationships more easily while maintaining consistency as operations grow."
          ],
          highlights: [
            "Entity-Based Structure",
            "Account Management",
            "Transaction Allocation",
            "Multi-Currency Support"
          ]
        },

        {
          id: "access-governance",
          label: "Access & Governance",
          phase: "04",
          heading: "Giving users the right level of control",
          image: "/src/data/projects/ledger/04.png",
          body: [
            "Financial information often involves multiple stakeholders with different responsibilities. Not every user should have access to every financial action.",
            "Ledger introduces role-based permissions and access controls that allow organizations to manage visibility, editing rights, and operational responsibilities securely."
          ],
          highlights: [
            "Role-Based Permissions",
            "User Management",
            "Controlled Financial Access",
            "Operational Transparency"
          ]
        },

        {
          id: "key-decisions",
          label: "Key Decisions",
          phase: "05",
          heading: "Reducing complexity through structure",
          image: "/src/data/projects/ledger/05.png",
          body: [
            "Several strategic decisions shaped the experience, including separating personal and business finance contexts, introducing entity-driven financial organization, and enabling transaction allocation through split management.",
            "These decisions improved clarity while ensuring the platform remained scalable for larger financial ecosystems."
          ],
          highlights: [
            "Personal & Business Separation",
            "Entity-Driven Management",
            "Split Transactions",
            "Allocation Controls"
          ]
        },

        {
          id: "operational-visibility",
          label: "Operational Visibility",
          phase: "06",
          heading: "Making financial information easier to navigate",
          image: "/src/data/projects/ledger/06.png",
          body: [
            "Financial systems generate large volumes of information that can quickly become overwhelming. Ledger prioritizes visibility through structured navigation, financial summaries, account relationships, and contextual information.",
            "The goal was helping users find answers quickly without navigating through unnecessary complexity."
          ]
        },

        {
          id: "future-opportunities",
          label: "Future Opportunities",
          phase: "07",
          heading: "From management to intelligence",
          image: "/src/data/projects/ledger/07.png",
          body: [
            "Future versions of Ledger could leverage AI to automate categorization, detect anomalies, forecast financial trends, and surface actionable insights.",
            "Rather than replacing financial decision-making, these systems would enhance visibility and reduce administrative overhead."
          ],
          highlights: [
            "Automated Categorization",
            "Transaction Intelligence",
            "Cash Flow Forecasting",
            "Anomaly Detection"
          ]
        },

        {
          id: "reflection",
          label: "Reflection",
          phase: "08",
          heading: "Designing systems, not screens",
          image: "/src/data/projects/ledger/08.png",
          body: [
            "Ledger reinforced the importance of designing around structure before interface. The project demonstrated how thoughtful information architecture can simplify complex financial operations and improve collaboration across multiple stakeholders.",
            "More than a finance application, Ledger became an exploration of how design can transform operational complexity into clarity, control, and confidence."
          ]
        }
      ]
    },
  },
  // Supertuffmenus
  {
    id: "supertuff-menues",
    title: "SuperTuff Menues",
    client: "SuperTuff Menues UK",
    description:
      "Transforming a highly specialized print manufacturing business into a global ecommerce experience that simplifies product discovery, customization, and international ordering.",
    year: "2024",
    image: "/src/data/projects/supertuffmenues/hero-stm.png",
    categories: [
      "Design","Branding", "Development", 
    ],
    tags: [
      "Shopify",
      "Ecommerce",
      "UX Research",
      "Global Commerce",
      "Information Architecture"
    ],
    featured: true,
    caseStudy: {
      role: "UI/UX Designer",
      services: [
        "Ecommerce Design",
        "UX Research",
        "Information Architecture",
        "Shopify Design",
        "Product Experience Design"
      ],
      timeline: "Client Project · 2024",
      liveUrl: "https://supertuffmenus.com/",
      intro:
        "SuperTuff Menues is a UK-based printing company specializing in durable, washable, and long-lasting menus for restaurants and hospitality businesses. The project focused on translating a highly technical manufacturing offering into a clear ecommerce experience that supports global customers throughout their purchasing journey.",
      stats: [
        { label: "Markets Served", value: "Global" },
        { label: "Product Types", value: "Multiple" },
        { label: "Currencies Supported", value: "Multi-Currency" }
      ],
      sections: [
        {
          id: "overview",
          label: "Overview",
          phase: "01",
          heading: "Bringing a specialized printing business online",
          body: [
            "SuperTuff Menues operates within a niche segment of the print industry, providing durable and washable menus designed for long-term use in hospitality environments.",
            "The challenge was creating an ecommerce experience that communicates the value of these premium products while making ordering simple for customers around the world."
          ]
        },
        {
          id: "problem-space",
          label: "Problem Space",
          phase: "02",
          heading: "Technical products are difficult to explain",
          body: [
            "Unlike traditional ecommerce products, SuperTuff Menues offers products whose value comes from manufacturing processes, material quality, durability, and long-term cost savings.",
            "Most customers are unfamiliar with printing technologies, making it difficult for them to understand why these products differ from standard printed menus."
          ],
          highlights: [
            "Technical product education",
            "Complex manufacturing terminology",
            "Global customer base",
            "Trust-building challenges"
          ]
        },
        {
          id: "research",
          label: "Research",
          phase: "03",
          heading: "Understanding the industry before designing",
          image: "/src/data/projects/supertuffmenues/03.png",
          body: [
            "Before designing the platform, extensive research was conducted to understand the printing industry, production techniques, material specifications, and the company's unique selling points.",
            "This research phase helped transform technical manufacturing knowledge into user-friendly content and product experiences."
          ]
        },
        {
          id: "user-understanding",
          label: "User Understanding",
          phase: "04",
          heading: "Designing for business owners, not printing experts",
          body: [
            "The primary users were restaurant owners, hospitality businesses, and purchasing decision-makers looking for reliable menu solutions.",
            "These users care about durability, cleanliness, long-term value, and ease of ordering rather than the technical details behind production."
          ]
        },
        {
          id: "product-vision",
          label: "Product Vision",
          phase: "05",
          heading: "Making specialized products easy to understand",
          image: "/src/data/projects/supertuffmenues/05.png",
          body: [
            "The vision was to bridge the gap between complex manufacturing processes and simple purchasing decisions.",
            "The ecommerce experience needed to educate users without overwhelming them, helping them understand product benefits while maintaining a smooth path to purchase."
          ]
        },
        {
          id: "information-architecture",
          label: "Information Architecture",
          phase: "06",
          heading: "Structuring products around customer decisions",
          body: [
            "Product information was organized around customer priorities such as durability, washability, use cases, and ordering requirements.",
            "This approach reduced the need for users to understand technical manufacturing terminology while still providing access to important details."
          ]
        },
        {
          id: "ecommerce-experience",
          label: "Ecommerce Experience",
          phase: "07",
          image: "/src/data/projects/supertuffmenues/07.png",
          heading: "Creating a frictionless purchasing journey",
          body: [
            "The shopping experience was designed to help users move seamlessly from product discovery to purchase.",
            "Clear product pages, sample ordering options, simplified navigation, and structured information hierarchy helped reduce purchase friction."
          ]
        },
        {
          id: "global-commerce",
          label: "Global Commerce",
          phase: "08",
          heading: "Designing for international customers",
          image: "/src/data/projects/supertuffmenues/08.png",
          body: [
            "Since the business serves customers worldwide, the platform needed to accommodate multiple regions and purchasing behaviors.",
            "Currency management, international ordering workflows, and globally accessible product information were integrated to support customers regardless of location."
          ],
          highlights: [
            "Multi-Currency Support",
            "Global Shipping",
            "International Ordering",
            "Localized Purchasing Experience"
          ]
        },
        {
          id: "key-decisions",
          label: "Key Decisions",
          phase: "09",
          heading: "Turning complexity into clarity",
          image: "/src/data/projects/supertuffmenues/09.png",
          body: [
            "Several design decisions focused on reducing cognitive load and simplifying product evaluation.",
            "These included emphasizing product benefits over manufacturing details, supporting sample requests, and prioritizing trust-building throughout the purchasing journey."
          ]
        },
        {
          id: "shopify-implementation",
          label: "Shopify Implementation",
          phase: "10",
          heading: "Balancing flexibility with scalability",
          body: [
            "The platform was built on Shopify to provide a reliable ecommerce foundation while supporting future business growth.",
            "The implementation focused on creating a scalable storefront capable of managing products, orders, currencies, and international customers efficiently."
          ]
        },
        {
          id: "business-impact",
          label: "Business Impact",
          phase: "11",
          heading: "Supporting product education and conversion",
          body: [
            "By simplifying technical information and improving product discoverability, the platform creates a clearer path between product understanding and purchase intent.",
            "The experience helps communicate the unique value proposition of SuperTuff Menues while supporting customers throughout their buying journey."
          ]
        },
        {
          id: "future-opportunities",
          label: "Future Opportunities",
          phase: "12",
          heading: "Expanding the digital commerce ecosystem",
          body: [
            "Future opportunities include product customization tools, interactive material comparisons, order management portals, and enhanced international shopping experiences.",
            "These additions would further strengthen the relationship between the company and its global customer base."
          ]
        },
        {
          id: "reflection",
          label: "Reflection",
          phase: "13",
          heading: "Designing for industries outside technology",
          body: [
            "SuperTuff Menues reinforced the importance of understanding a business before designing for it.",
            "The project demonstrated how research, domain knowledge, and thoughtful communication can transform complex products into experiences that customers can easily understand and trust."
          ]
        }
      ]
    },
  },
  // Central Power
  {
    id: "central-power",
    title: "Central Power",
    client: "Public Utility Service Platform",
    description:
      "Reimagining a state electricity board application by simplifying bill payments, service requests, and customer support into a more accessible digital experience.",
    year: "2024",
    image: "/src/data/projects/centralpower/Hero-CP.png",
    categories: [
      "Design"
    ],
    tags: [
      "Mobile App",
      "UX Redesign",
      "Government Services",
      "Information Architecture",
      "Customer Experience"
    ],
    featured: true,
    caseStudy: {
      role: "UI/UX Designer",
      services: [
        "UX Redesign",
        "Product Design",
        "Information Architecture",
        "UI Design"
      ],
      timeline: "Passion Project · 2024",
      intro:
        "Central Power is a redesign exploration of a state electricity board application. The project focuses on simplifying critical user journeys such as bill payments, service discovery, and complaint management by creating a more intuitive and user-centered experience.",
      stats: [
        { label: "Flows Redesigned", value: "3" },
        { label: "Focus Area", value: "Usability" },
        { label: "Project Type", value: "Redesign" }
      ],
      sections: [
        {
          id: "overview",
          label: "Overview",
          phase: "01",
          heading: "Redesigning a utility service people rely on every month",
          body: [
            "Central Power is an electricity board application used for bill payments, service requests, account management, and customer support. While the platform provides access to essential services, the experience often feels overwhelming due to information-heavy layouts and fragmented navigation.",
            "As a passion project, I focused on identifying high-impact usability issues and redesigning the journeys that users interact with most frequently."
          ]
        },

        {
          id: "problems",
          label: "Identifying Problems",
          phase: "02",
          heading: "Finding friction in everyday interactions",
          image : "/src/data/projects/centralpower/02.png",
          body: [
            "Rather than redesigning the entire application, I focused on understanding where users would likely experience friction during their most common tasks.",
            "Several opportunities emerged around bill payments, service discovery, and complaint management. These journeys contained unnecessary complexity, making simple tasks feel more difficult than they needed to be."
          ],
          highlights: [
            "Complex Navigation",
            "Low Service Discoverability",
            "Information Overload",
            "Fragmented User Journeys"
          ]
        },

        {
          id: "flows",
          label: "Rethinking Flows",
          phase: "03",
          heading: "Simplifying the journeys that matter most",
          image: "/src/data/projects/centralpower/03.png",
          body: [
            "The redesign focused on three key experiences: bill payments, service requests, and complaint tracking. Each flow was restructured to reduce cognitive load and help users complete tasks more efficiently.",
            "By prioritizing user intent and removing unnecessary steps, the redesigned journeys create a more direct path between action and outcome."
          ],
          highlights: [
            "Bill Payment Flow",
            "Service Discovery Flow",
            "Complaint Resolution Flow"
          ]
        },

        {
          id: "decisions",
          label: "Design Decisions",
          phase: "04",
          heading: "Designing around user intent",
          image: "/src/data/projects/centralpower/04.png",
          body: [
            "Several design decisions shaped the final experience. Bill payments were prioritized on the home screen to support the platform's most common task. Services were reorganized around user goals rather than internal categories, making discovery easier.",
            "Complaint tracking was redesigned to provide better visibility into request status, reducing uncertainty after submission and helping users understand what happens next."
          ],
          highlights: [
            "Prioritized Bill Payments",
            "Simplified Navigation",
            "Improved Service Discovery",
            "Transparent Complaint Tracking"
          ]
        },

        {
          id: "solution",
          label: "Redesigned Experience",
          phase: "05",
          heading: "A cleaner and more focused utility experience",
          body: [
            "The final redesign introduces a clearer visual hierarchy, simplified navigation structure, and more accessible service flows. Critical actions are surfaced earlier, allowing users to accomplish tasks faster and with greater confidence.",
            "The experience focuses on helping users complete essential actions rather than forcing them to navigate through unnecessary complexity."
          ]
        },

        {
          id: "reflection",
          label: "Reflection",
          phase: "06",
          heading: "Small improvements can create meaningful impact",
          image: "/src/data/projects/centralpower/06.png",
          body: [
            "This project reinforced the importance of designing around user goals rather than organizational structures. Utility applications are rarely used for exploration; users arrive with a specific objective and expect to complete it quickly.",
            "The redesign demonstrated how focusing on a handful of high-impact journeys can significantly improve the overall experience without requiring a complete platform overhaul."
          ]
        }
      ]
    },
  },
  // // Comming
  // {
  //   id: "motion",
  //   title: "Kinetic",
  //   client: "Motion Studio",
  //   description:
  //     "A bold, motion-first identity and site for a creative studio that lives and breathes animation.",
  //   year: "2023",
  //   image: "/src/data/projects/motion.png",
  //   categories: ["Development", "Branding"],
  //   tags: ["WebGL", "Motion", "Identity"],
  //   caseStudy: {
  //     role: "Creative Technologist",
  //     services: ["Brand Identity", "Motion", "WebGL"],
  //     timeline: "8 weeks · 2023",
  //     liveUrl: "https://example.com",
  //     intro:
  //       "Kinetic is a motion studio whose old site stood perfectly still. We built a bold, motion-first identity and website that lives and breathes the animation they're famous for.",
  //     stats: [
  //       { label: "Showreel plays", value: "+3.1x" },
  //       { label: "Inbound briefs", value: "+48%" },
  //       { label: "Avg. FPS", value: "60" },
  //     ],
  //     sections: [
  //       {
  //         id: "overview",
  //         label: "Overview",
  //         phase: "01",
  //         heading: "A site that moves like they do",
  //         body: [
  //           "For a motion studio, a static portfolio is a contradiction. Kinetic's old site undersold their craft.",
  //           "We made motion the medium and the message.",
  //         ],
  //       },
  //       {
  //         id: "challenge",
  //         label: "The Challenge",
  //         phase: "02",
  //         heading: "Bold motion, never gimmicky",
  //         body: [
  //           "Animation for its own sake reads as noise. Every movement had to feel intentional and serve the work.",
  //           "And it all had to run buttery-smooth on real devices, not just showreels.",
  //         ],
  //         highlights: [
  //           "Purposeful, choreographed motion",
  //           "Performance as a feature",
  //           "Identity built for movement",
  //         ],
  //       },
  //       {
  //         id: "approach",
  //         label: "Approach",
  //         phase: "03",
  //         heading: "Motion as identity",
  //         body: [
  //           "We designed the brand around how it moves — a kinetic logo and transitions that carry the studio's signature energy.",
  //           "Each project reveal was choreographed to spotlight the work, not upstage it.",
  //         ],
  //       },
  //       {
  //         id: "craft",
  //         label: "Craft & Build",
  //         phase: "04",
  //         heading: "WebGL at sixty frames",
  //         body: [
  //           "We built bespoke WebGL scenes tuned relentlessly for performance, holding a steady 60fps across devices.",
  //           "Graceful fallbacks ensure the experience stays striking even where GPU power is limited.",
  //         ],
  //         highlights: [
  //           "Custom WebGL pipeline",
  //           "60fps on mid-range mobile",
  //           "Reduced-motion friendly",
  //         ],
  //       },
  //       {
  //         id: "outcome",
  //         label: "Outcome",
  //         phase: "05",
  //         heading: "A reel that sells itself",
  //         body: [
  //           "Showreel plays tripled and inbound briefs rose 48% as the site finally matched the quality of the studio's craft.",
  //           "Kinetic now opens pitches by simply sharing their homepage.",
  //         ],
  //       },
  //     ],
  //   },
  // },
]