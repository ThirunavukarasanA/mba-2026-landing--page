/**
 * MBA program landing page content from MBA Landing Pages.md
 * Keys match route slugs: artificial-intelligence | digital-marketing | global-finance-corporate-analyst | human-resources | logistics-supply-chain-management
 */
export type ProgramSlug =
  | "artificial-intelligence"
  | "digital-marketing"
  | "global-finance-corporate-analyst"
  | "human-resources"
  | "logistics-supply-chain-management";

const SHARED_KEY_HIGHLIGHTS = [
  "2 Years — Full-Time MBA",
  "AICTE Approved",
  "Bharathiar University Affiliated",
  "Case-Driven Learning",
  "Concept-First Approach",
];

const SHARED_INSTITUTIONS = {
  name: "RVS College of Arts & Science (Autonomous)",
  affiliation: "Affiliated to Bharathiar University",
  approval: "NAAC Accredited and Approved by AICTE",
};

const SHARED_LIMITED_INTAKE = {
  title: "Limited Intake Only",
  subline: "Seats are limited to maintain quality.",
  steps: ["Application review", "Group Discussion (GD)", "Personal Interview"],
};

export interface MBAProgramContent {
  slug: ProgramSlug;
  title: string;
  hero: {
    headline: string;
    tagline: string;
    introLines?: string[];
    bullets: string[];
    image: string;
  };
  keyHighlights: string[];
  programOverview?: {
    title: string;
    intro?: string;
    sections: {
      title: string;
      paragraphs?: string[];
      points?: string[];
    }[];
  };
  howItWorks: {
    sectionTitle: string;
    steps: { title: string; points: string[] }[];
    /** Shown beside the accordion on large screens (optional per program) */
    sideImage?: string;
    sideImageAlt?: string;
  };
  institutions: {
    name: string;
    affiliation: string;
    approval: string;
    focusPoints: string[];
  };
  whyProgram: {
    title: string;
    typicalTitle: string;
    typicalPoints: string[];
    rvsTitle: string;
    rvsPoints: string[];
  };
  academicExperience: {
    title: string;
    points: string[];
  };
  curriculum: {
    title: string;
    core: { title: string; items: string[] };
    coreDetailed?: { title: string; points: string[] }[];
    specialization?: { title: string; items: string[] };
    tools?: { title: string; intro?: string; items: string[] };
    capstone?: {
      /** When set, shown as top heading instead of title (e.g. “Project Covered”); title/description move below project list */
      sectionHeading?: string;
      title: string;
      description: string;
      points?: string[];
      projects?: { title: string; description?: string; points?: string[] }[];
      projectsIntro?: string;
      /** Shown after listed projects, before outcomes (e.g. mandatory capstone note) */
      afterProjectsNote?: string;
      outcomesTitle?: string;
      outcomes?: string[];
    };
  };
  faculty?: {
    title: string;
    subtitle?: string;
    points: string[];
    note?: string;
  };
  career: {
    title: string;
    intro?: string;
    roles: string[];
    /** Defaults to “Roles” if omitted */
    rolesHeading?: string;
    support?: string[];
    recruiters?: { category: string; names: string[] }[];
  };
  whoShouldApply: {
    title: string;
    points: string[];
  };
  whatComesNext?: {
    title: string;
    subtitle?: string;
    /** If null, omit default “After completing” intro line */
    listIntro?: string | null;
    points: string[];
  };
  ourCommitment?: {
    title: string;
    subtitle: string;
    points: string[];
  };
  riskManagement?: {
    title: string;
    typicalPoints: string[];
    programHelps: string[];
  };
  /** e.g. fin.md “Make a Better Career Decision” + certification list */
  careerCertifications?: {
    title: string;
    subtitle: string;
    items: string[];
  };
  limitedIntake: {
    title: string;
    subline?: string;
    /** If null/undefined, omit “Selection process” label (use steps as generic bullets) */
    stepsLabel?: string | null;
    steps: string[];
  };
  takeTheFirstStep: {
    title: string;
  };
  footerCta: {
    title: string;
    guidancePoints: string[];
    ctaText: string;
  };
  curriculumStructure?: {
    title: string;
    para1?: string;
    para2?: string;
    para3?: string;
  };
  practicalExposure?: {
    title: string;
    para1?: string;
    para2?: string;
    para3?: string;
    points?: { text?: string; logos?: string[] }[];
    outro?: string;
  };
  admissions?: {
    title: string;
    requirements: string[];
  };
  whyChooseUs?: {
    title: string;
    para1: string[];
    para2: string[];
  };
  trust?: string[];
}

export const mbaPrograms: Record<ProgramSlug, MBAProgramContent> = {
  "global-finance-corporate-analyst": {
    slug: "global-finance-corporate-analyst",
    title: "MBA in Global Finance & Corporate Analyst",
    hero: {
      headline: "MBA in Global Finance & Corporate Analyst",
      tagline: "Learn How Finance Actually Works Inside Businesses",
      image: "/finanace.jpg",
      introLines: [
        "Most students learn finance as formulas. The real world doesn't work that way. Companies report profits — and still destroy value. High returns look impressive — and still mislead. The real question is: Can you understand what's actually happening behind the numbers?",
      ],
      bullets: [
        "Think beyond financial statements",
        "Understand how businesses create (or destroy) value",
        "Make capital allocation decisions with clarity",
      ],
    },
    keyHighlights: [
      "Duration: 2 Years (4 Semesters)",
      "Mode: Full-Time",
      "Affiliation: Bharathiar University",
      "Credits: 60–120 (as per university norms)",
      "Internship: Mandatory Industry Exposure",
      "Capstone: Real-time Finance Project",
      "Re-Accredited with A+ Grade by NAAC",
      "40+ years legacy institution",
      "Strong alumni network with graduates working in leading global companies",
    ],
    howItWorks: {
      sectionTitle: "Learn Finance the Way It Works in the Real World",
      sideImage: "/finanace.jpg",
      sideImageAlt: "MBA Global Finance and corporate finance learning at RVS",
      steps: [
        {
          title: "01 — Understand the Business First",
          points: [
            "How different businesses operate",
            "What drives revenue, cost, and risk",
            "Why business models matter",
          ],
        },
        {
          title: "02 — Decode Financial Statements",
          points: [
            "Income vs cash flow",
            "Balance sheet limitations",
            "What accounting hides",
          ],
        },
        {
          title: "03 — Think in Terms of Capital",
          points: [
            "Return on Capital (ROIC)",
            "Capital allocation decisions",
            "Profit vs value creation",
          ],
        },
        {
          title: "04 — Apply Through Real Scenarios",
          points: [
            "Case discussions",
            "Business simulations",
            "Financial decision exercises",
          ],
        },
        {
          title: "05 — Build the FP&A Mindset (Global Finance Skillset)",
          points: [
            "Understand how finance operates at the intersection of the entire organization, not in isolation",
            "Learn how companies plan, budget, forecast, and evaluate performance",
            "Develop core FP&A capabilities: financial modelling, forecasting techniques, data analysis & reporting, and financial storytelling",
            "Work like modern finance teams: build dashboards & management reports, support strategic decisions, and partner with business teams",
            "Finance is evolving from accounting to strategic decision support, and this program trains you for that shift",
          ],
        },
      ],
    },
    institutions: {
      ...SHARED_INSTITUTIONS,
      focusPoints: [
        "Industry-Relevant Finance Skills",
        "Financial Planning & Analysis (FP&A)",
        "Career-Oriented Learning",
        "Analytical & Strategic Thinking",
        "Industry Exposure & Internships",
        "Communication & Financial Storytelling",
      ],
    },
    whyProgram: {
      title: "Not All Finance Degrees Teach You How to Think",
      typicalTitle: "Typical Finance Programs",
      typicalPoints: [
        "Focus on formulas and ratios",
        "Treat accounting numbers as absolute truth",
        "Limited exposure to real-world decision-making",
      ],
      rvsTitle: "RVS MBA – Global Finance and Corporate Analyst",
      rvsPoints: [
        "Focus on financial judgment, not just calculation",
        "Understand the limitations behind numbers",
        "Learn how real business decisions are made",
        "Financial Statement Mastery",
        "FP&A & Forecasting Skills",
        "Corporate Finance Expertise",
        "Capital Markets Exposure",
        "Real-World Decision Making",
        "Business-Focused Finance Learning",
        "Core philosophy: Finance is about decision-making, not just numbers.",
      ],
    },
    academicExperience: {
      title: "How You Will Be Trained",
      points: [
        "Case-based learning with real companies",
        "Concept-first approach, not formula memorization",
        "Simulation-based financial decision exercises",
        "Continuous real-world application of concepts",
        "Hands-on financial modelling & analysis",
        "Industry-oriented case studies, projects and business scenarios",
        "Case studies reflecting how top companies plan, forecast, and make decisions",
        "Exposure to tools used in modern finance teams: Excel modelling, data visualization, and AI tools (ChatGPT, Copilot)",
        "Build dashboards, present financial insights, and influence business decisions",
      ],
    },
    faculty: {
      title: "Who Will Train You?",
      points: [
        "Global-level faculty (LBS, IIM, SDA Bocconi)",
        "Industry experts – CFA, stock brokers, corporate professionals",
        "Learn from real practitioners, not just textbooks",
      ],
    },
    curriculum: {
      title: "What You Will Study",
      core: { title: "Core Finance Curriculum (RVS Structure)", items: [] },
      coreDetailed: [
        {
          title: "1. Financial Accounting – I",
          points: [
            "Accounting fundamentals",
            "Financial statements",
            "Introduction to corporate reporting",
          ],
        },
        {
          title: "2. Financial Accounting – II",
          points: [
            "IFRS / Ind AS",
            "Financial Reporting & Analysis (FRA)",
            "Consolidation & corporate accounts",
          ],
        },
        {
          title: "3. Financial Management",
          points: ["Time value of money", "Capital budgeting", "Risk & return"],
        },
        {
          title: "4. Accounting and Financial Analysis",
          points: [
            "Ratio analysis",
            "Cash flow analysis",
            "Business performance evaluation",
          ],
        },
        {
          title: "5. Financial Planning & Analysis – I",
          points: [
            "Budgeting & planning cycle",
            "Variance analysis",
            "Forecasting basics",
          ],
        },
        {
          title: "6. Financial Planning & Analysis – II (Advanced FP&A)",
          points: [
            "Financial modelling (DCF, ROI, IRR)",
            "Scenario planning",
            "Business partnering skills",
            "Financial storytelling",
          ],
        },
        {
          title: "7. Capital Markets",
          points: [
            "Equity, debt, derivatives",
            "Investment analysis",
            "Market regulations",
          ],
        },
        {
          title: "8. Planning & Performance Systems",
          points: [
            "Long-range planning",
            "Annual budgeting",
            "Performance dashboards",
            "Management reporting",
          ],
        },
        {
          title: "9. Data-Driven Finance",
          points: ["Financial data analysis", "Visualization & dashboards"],
        },
        {
          title: "10. Finance Business Partnering",
          points: ["Cross-functional collaboration", "Decision support"],
        },
        {
          title: "11. AI in Finance",
          points: ["Automating workflows", "AI-assisted analysis"],
        },
      ],
    },
    career: {
      title: "Where This Program Can Take You",
      rolesHeading: "Career Opportunities",
      roles: [
        "Financial Analyst",
        "FP&A Analyst",
        "Investment Analyst",
        "Credit Risk Analyst",
        "Corporate Finance Executive",
        "Equity Research Analyst",
      ],
      recruiters: [
        { category: "Big4 Firms", names: ["Deloitte", "PwC", "EY", "KPMG"] },
        {
          category: "Corporate Finance Departments",
          names: ["Tata Consultancy Services", "Infosys"],
        },
        {
          category: "Financial Services Companies",
          names: [
            "ICICI Bank",
            "Bajaj Finserv",
            "Kotak Mahindra Bank",
            "SBI Life Insurance",
          ],
        },
        { category: "FinTech Firms", names: ["Zerodha", "Groww"] },
        {
          category: "Asset Management Companies",
          names: [
            "BlackRock",
            "Vanguard",
            "Fidelity Investments",
            "SBI Mutual Fund",
            "HDFC Asset Management Company",
            "ICICI Prudential Asset Management",
            "Nippon India Mutual Fund",
          ],
        },
        {
          category: "Wealth Management Companies",
          names: [
            "UBS",
            "Morgan Stanley Wealth Management",
            "JP Morgan Wealth Management",
            "Kotak Wealth Management",
            "ICICI Wealth Management",
            "360 ONE Wealth",
          ],
        },
      ],
      support: [
        "Resume building",
        "Interview preparation",
        "Case-based training",
        "Industry exposure",
      ],
    },
    whoShouldApply: {
      title: "Is This Right for You?",
      points: [
        "Future Finance Professional",
        "Analytical & Business Mindset",
        "Interested in Markets & Investments",
        "Career-Focused & Industry-Ready",
      ],
    },
    whatComesNext: {
      title: "Your Career Path",
      subtitle: "Structured. Practical. Outcome-Focused",
      listIntro: null,
      points: [
        "Learn. Apply. Succeed.",
        "Think Finance. Act Strategically.",
        "Beyond Theory. Into Real Finance",
        "From Concepts to Corporate Decisions",
        "Where Finance Meets Real-World Impact",
      ],
    },
    careerCertifications: {
      title: "Make a Better Career Decision",
      subtitle: "Certification Programmes",
      items: [
        "Financial Modelling",
        "TAX & Accounts",
        "Mergers & Acquisitions",
        "Valuation",
        "NISM",
        "SWAYAM",
        "COURSERA",
      ],
    },
    limitedIntake: SHARED_LIMITED_INTAKE,
    takeTheFirstStep: { title: "Start Your Journey in Global Finance" },
    footerCta: {
      title: "Still exploring?",
      guidancePoints: [
        "Global finance & corporate analyst career paths",
        "Program fit",
        "Admission process",
      ],
      ctaText: "Request a Call Back",
    },
  },

  "artificial-intelligence": {
    slug: "artificial-intelligence",
    title: "MBA in Artificial Intelligence",
    hero: {
      headline: "MBA in Artificial Intelligence",
      tagline:
        "Most people learn tools. AI leaders learn how to connect data, technology, and business insight to solve real-world problems.",
      introLines: [
        "AI looks powerful in demos.",
        "In the real world, it is incomplete, biased, and often difficult to apply.",
        "The real question is:",
        "Can you use AI to make reliable, context-aware business decisions?",
      ],
      bullets: [
        "Practical AI problem-solving",
        "Analytical and computational thinking",
        "Decision-making using AI systems",
      ],
      image: "/ba.jpg",
    },
    keyHighlights: [
      "2 Years — Full-Time MBA",
      "AICTE Approved",
      "Bharathiar University Affiliated",
      "Industry-aligned, in-demand AI & Generative AI curriculum",
      "World-class faculty trained by global institutions",
      "Hackathon-based assessments",
      "Demonstrations and guided exercises for every concept",
      "Portfolio of AI & Generative AI projects",
      "Prime internship and placement opportunities",
    ],
    howItWorks: {
      sectionTitle: "From Data → To Intelligence → To Decision",
      sideImage: "/ba.jpg",
      sideImageAlt: "Artificial Intelligence MBA learning workflow at RVS",
      steps: [
        {
          title: "01 — Understand the Problem",
          points: [
            "Define real-world business problems",
            "Identify where AI can create value",
            "Avoid solving irrelevant or poorly framed problems",
          ],
        },
        {
          title: "02 — Work with Real Data",
          points: [
            "Collect data from multiple sources (web scraping, APIs)",
            "Combine datasets into structured formats",
            "Clean data by removing duplicates, renaming columns, correcting data types",
            "Ensure consistency and reliability of datasets",
            "Identify bias, gaps, and limitations in data",
          ],
        },
        {
          title: "03 — Build AI Systems",
          points: [
            "Apply Machine Learning and Deep Learning concepts",
            "Work with embeddings and transformers",
            "Build and use Large Language Models (LLMs)",
            "Apply prompt engineering techniques",
            "Develop Retrieval-Augmented Generation (RAG) systems",
            "Fine-tune models and build agentic workflows",
          ],
        },
        {
          title: "04 — Apply AI in Business Contexts",
          points: [
            "Use AI across domains like finance, healthcare, and retail",
            "Interpret outputs in real-world decision scenarios",
            "Build safe, unbiased, and responsible AI systems",
          ],
        },
        {
          title: "05 — Convert Insight into Action",
          points: [
            "Build dashboards and visualizations",
            "Communicate insights clearly",
            "Translate AI outputs into business decisions",
          ],
        },
      ],
    },
    institutions: {
      ...SHARED_INSTITUTIONS,
      focusPoints: [
        "Analytical rigor",
        "Industry relevance",
        "Practical application",
      ],
    },
    whyProgram: {
      title: "Not All AI Programs Create Problem-Solvers",
      typicalTitle: "Typical AI Programs",
      typicalPoints: [
        "Tool-heavy learning",
        "Focus on coding without real-world application",
        "Limited business integration",
      ],
      rvsTitle: "RVS Artificial Intelligence MBA",
      rvsPoints: [
        "Problem-first, tools-second approach",
        "Strong integration of data, technology, and business",
        "Focus on decision-making using AI",
      ],
    },
    academicExperience: {
      title: "How You Will Be Trained",
      points: [
        "Every concept is paired with faculty-demonstrated problem solving",
        "Guided hands-on practice to build confidence step-by-step",
        "Case-based learning using real-world AI applications",
        "Continuous project-based learning",
        "Hackathon-driven assessments",
      ],
    },
    curriculum: {
      title: "What You Will Study",
      core: {
        title: "Core Areas",
        items: [],
      },
      coreDetailed: [
        {
          title: "Programming with Python",
          points: [
            "Core components: data, variables, expressions, statements",
            "Control flow: functions, conditionals, loops, recursion, classes",
            "Data structures: lists, sets, dictionaries, objects",
            "Libraries: Pandas, NumPy",
          ],
        },
        {
          title: "Structured Query Language (SQL)",
          points: [
            "Data structures: schema, tables, columns",
            "Syntax: select, insert, update, delete, where, aggregate functions",
            "Relationships: joins, subqueries",
            "Intermediate SQL: transactions, ACID properties, indexing, user privileges",
          ],
        },
        {
          title: "Data Visualization using Tableau",
          points: [
            "Tableau fundamentals and setup",
            "Configuring and preparing datasets",
            "Chart visualizations",
            "Sorting, grouping, calculations",
            "Maps and dashboards",
          ],
        },
        {
          title: "Data Engineering for the Social World",
          points: [
            "Understanding data types and file formats",
            "Summarizing and visualizing data",
            "Reshaping data for analysis",
            "Collecting data from the web",
            "Web scraping techniques",
            "Using Generative AI for debugging code",
            "Working with JSON and APIs",
            "Web crawlers and browser automation",
            "Databases and dashboards",
            "Managing end-to-end data pipelines",
          ],
        },
        {
          title: "Generative AI Foundations",
          points: [
            "Generative AI landscape",
            "Machine Learning fundamentals",
            "Deep Learning fundamentals",
            "Embeddings and transformers",
          ],
        },
        {
          title: "Generative AI for Business Applications",
          points: [
            "Business applications using LLMs",
            "Transformers for text generation",
            "Prompt engineering",
            "Retrieval-Augmented Generation (RAG)",
            "Fine-tuning large language models",
            "Agentic AI workflows",
            "Responsible AI systems",
            "LLM security considerations",
          ],
        },
      ],
      tools: {
        title: "Industry Standard Tools",
        intro:
          "Students will work with industry-relevant tools and technologies to ensure practical readiness:",
        items: [
          "Python (Pandas, Numpy, Scikit-Learn, Seaborn, Matplotlib, Scipy, Plotnine, altair)",
          "SQL",
          "Tableau",
          "Webscraping Libraries (Selenium, Scrapy, Beautiful Soup)",
          "Generative AI Tools (Transformers, Hugging Face, Langchain, FAISS)",
          "GitHub",
        ],
      },
      capstone: {
        sectionHeading: "Project Covered",
        title: "Capstone Experience",
        description: "Real AI Projects Across Industries",
        projectsIntro: "Work on real-world projects such as:",
        projects: [
          {
            title: "Social Media Analytics Project",
            description:
              "Analyze social media datasets to identify bias, partisanship, and message intent.",
          },
          {
            title: "Retail Data Project — Web Scraping, Data Cleaning & EDA",
            points: [
              "Scrape data from multiple sources",
              "Combine multiple datasets into a single structured DataFrame",
              "Clean data by removing duplicates, renaming columns, and correcting data types",
              "Handle duplicate products to ensure unique representation",
              "Perform comparative and trend analysis",
              "Clearly document all data decisions and transformations",
            ],
          },
          {
            title: "Stock Market Sentiment Analysis (Finance)",
            description:
              "Develop AI-driven systems to analyze financial news and sentiment, enabling better investment decision-making.",
          },
          {
            title: "AI-Powered Medical Assistant (Healthcare)",
            description:
              "Use embeddings, vector databases, and Retrieval-Augmented Generation (RAG) to build context-aware medical response systems.",
          },
          {
            title: "FoodHub AI Chatbot (Retail)",
            points: [
              "Build an AI chatbot for food delivery support",
              "Automate responses using AI systems",
              "Integrate human-in-the-loop mechanisms",
              "Prevent harmful or biased outputs",
              "Improve customer satisfaction through reliable responses",
            ],
          },
        ],
        afterProjectsNote:
          "In addition to the listed projects, all students will complete the Capstone project using the concepts learnt.",
        outcomesTitle: "You will:",
        outcomes: [
          "Apply AI to real-world business problems",
          "Build a strong portfolio of projects",
          "Develop end-to-end problem-solving capability",
        ],
      },
    },
    faculty: {
      title: "Learn from Globally Trained Experts",
      subtitle:
        "The program is delivered by faculty certified by leading global institutions, including:",
      points: [
        "Harvard Business School",
        "Massachusetts Institute of Technology (MIT)",
        "London School of Economics (LSE)",
        "Kellogg School of Management",
        "IMD Business School (Switzerland)",
        "Carnegie Mellon University",
      ],
      note: "This ensures exposure to global best practices in AI, analytics, and business decision-making.",
    },
    career: {
      title: "Where This Program Can Take You",
      roles: [
        "AI Analyst",
        "Generative AI Developer",
        "Data Analyst",
        "Data Engineer",
        "Python Developer / Software Developer",
        "AI Product Specialist",
      ],
      support: [
        "Resume refinement",
        "Case-based interview preparation",
        "Project-to-portfolio guidance",
        "Industry exposure",
        "Internship and placement support",
      ],
    },
    whoShouldApply: {
      title: "Is This Right for You?",
      points: [
        "You want to build a career in AI and data",
        "You are interested in solving real-world problems",
        "You want to go beyond theory into application",
        "You are willing to think, experiment, and build",
      ],
    },
    whatComesNext: {
      title: "Your Career Path",
      points: [
        "Enter AI, analytics, and technology-driven roles",
        "Build strong technical + business capability",
        "Move into high-impact decision-making positions",
      ],
    },
    ourCommitment: {
      title: "Structured. Practical. Outcome-Focused.",
      subtitle: "We support you with:",
      points: [
        "Academic delivery",
        "Hands-on project experience",
        "Career preparation",
        "Industry exposure",
        "Continuous guidance",
      ],
    },
    riskManagement: {
      title: "A Smarter Way to Build an AI Career",
      typicalPoints: [
        "Learning tools without real application",
        "Weak project portfolio",
        "Limited career growth",
      ],
      programHelps: [
        "Build strong conceptual foundations",
        "Develop real-world AI capability",
        "Create a portfolio of practical projects",
        "Reduce long-term career risk",
      ],
    },
    limitedIntake: SHARED_LIMITED_INTAKE,
    takeTheFirstStep: {
      title: "Start Your Journey in Artificial Intelligence",
    },
    footerCta: {
      title: "Still exploring?",
      guidancePoints: ["AI career paths", "Program fit", "Admission process"],
      ctaText: "Request a Call Back",
    },
  },

  "digital-marketing": {
    slug: "digital-marketing",
    title: "MBA in Digital Marketing",
    hero: {
      headline: "MBA in Digital Marketing",
      tagline: "Learn Digital. Apply It. Build a Career.",
      introLines: [
        "The MBA in Digital Marketing at RVS CAS is designed to help you understand how modern businesses grow in a digital-first world.",
        "It combines core business education with practical exposure to digital tools, platforms, and strategies used by companies today.",
      ],
      bullets: [
        "Business foundation + digital specialization",
        "Hands-on application through simulation and projects",
        "Career-focused digital marketing training",
      ],
      image: "/dm.jpg",
    },
    keyHighlights: [
      "2 Years — Full-Time MBA",
      "AICTE Approved",
      "Bharathiar University Affiliated",
      "Simulation-based learning",
      "Case Driven Learning",
      "Internship for real-world exposure",
      "Capstone Project",
      "Exposure to real digital marketing tools and strategies",
      "Core Placement support",
    ],
    programOverview: {
      title: "MBA in Digital Marketing",
      intro:
        "The program is structured to ensure both knowledge and application. Here’s what you can expect. Each element is designed to build practical capability, not just academic understanding.",
      sections: [
        {
          title: "About the Program",
          paragraphs: [
            "This program focuses on building a strong foundation in management while introducing you to the fast-evolving field of digital marketing.",
            "You will learn how businesses use digital platforms to reach customers, build brands, and drive growth. The curriculum is structured to balance theoretical understanding with simulation and practical application, ensuring that you are prepared for real-world roles.",
          ],
        },
        {
          title: "Learn Through Stukent Simulations",
          paragraphs: [
            "One of the standout features of this program is the use of Stukent, a globally used digital marketing simulation platform.",
            "Instead of only studying concepts, you will work in a simulated digital environment where you:",
            "This allows you to understand how strategies perform — without waiting for a real job to learn it.",
            "You don’t just learn marketing. You practice it in a controlled, real-world-like setting.",
          ],
          points: [
            "Run campaigns",
            "Make budget decisions",
            "Optimize performance",
            "Compete in real-time scenarios",
          ],
        },
        {
          title: "What You Will Learn",
          paragraphs: [
            "The program covers key areas of digital marketing along with essential business knowledge. You will be introduced to:",
            "Alongside this, you will also develop an understanding of analytics and performance measurement, helping you evaluate how marketing efforts translate into results.",
          ],
          points: [
            "Introduction to Digital Marketing",
            "Search Engine Optimization (SEO)",
            "Search Engine Marketing (SEM)",
            "Social Media Marketing",
            "Content and Brand Strategy",
          ],
        },
        {
          title: "Curriculum Structure",
          paragraphs: [
            "The MBA is structured over two years to ensure both depth and application.",
            "In the first year, you will build a strong base in core management subjects such as marketing, finance, and economics. This foundation helps you understand how businesses function as a whole.",
            "In the second year, the focus shifts towards specialization in digital marketing, along with advanced topics, project work, and industry exposure.",
          ],
        },
        {
          title: "Practical Exposure & Internship",
          paragraphs: [
            "The program includes hands-on learning through projects and a structured internship, helping you understand how digital strategies are applied in real business environments.",
            "You will gain exposure to tools such as Stukent Digital Marketing Simulations, along with industry platforms like:",
            "This ensures you build practical skills using tools that companies actually use.",
          ],
          points: [
            "Google Ads, Google Analytics, Google Search Console",
            "Meta Ads Manager, LinkedIn Campaign Manager",
            "Mailchimp, HubSpot CRM",
            "SEMrush, Ahrefs",
            "Hootsuite, Canva, WordPress, Hotjar",
          ],
        },
        {
          title: "Why Choose RVS CAS",
          paragraphs: [
            "RVS CAS offers a structured MBA program focused on industry relevance and career readiness.",
            "The curriculum is designed to align with current business needs, ensuring that students gain both knowledge and applicable skills.",
          ],
        },
        {
          title: "Start Your Journey",
          paragraphs: [
            "Digital marketing continues to play a key role in how businesses operate and grow.",
            "This program provides you with the opportunity to build the knowledge and skills required to enter this field.",
          ],
          points: ["Apply Now", "Download Brochure", "Contact Admissions"],
        },
      ],
    },
    howItWorks: {
      sectionTitle: "From Learning → To Simulation → To Industry Application",
      sideImage: "/dm.jpg",
      sideImageAlt:
        "Digital Marketing MBA practical simulation learning at RVS",
      steps: [
        {
          title: "01 — Build Core Business Foundation",
          points: [
            "Understand management fundamentals",
            "Learn how businesses function across domains",
            "Prepare for marketing specialization",
          ],
        },
        {
          title: "02 — Learn Digital Marketing Concepts",
          points: [
            "SEO, SEM, social media, and content strategy",
            "Digital channel fundamentals",
            "Brand and demand generation basics",
          ],
        },
        {
          title: "03 — Practice with Stukent Simulations",
          points: [
            "Run campaigns in simulated environments",
            "Make budget and optimization decisions",
            "Compete in real-time scenarios",
          ],
        },
        {
          title: "04 — Apply Through Projects and Internship",
          points: [
            "Work on capstone-style practical tasks",
            "Gain structured internship exposure",
            "Bridge classroom learning with industry application",
          ],
        },
      ],
    },
    institutions: {
      ...SHARED_INSTITUTIONS,
      focusPoints: [
        "Business and management foundation",
        "Industry-relevant digital specialization",
        "Practical application through simulation and internship",
      ],
    },
    whyProgram: {
      title: "Why Choose RVS CAS",
      typicalTitle: "Typical Marketing Programs",
      typicalPoints: [
        "Limited practical simulation exposure",
        "Theory-heavy delivery with low platform familiarity",
        "Weak industry-readiness outcomes",
      ],
      rvsTitle: "RVS MBA in Digital Marketing",
      rvsPoints: [
        "Structured curriculum aligned with current business needs",
        "Hands-on simulation and internship exposure",
        "Career readiness with practical platform skills",
      ],
    },
    academicExperience: {
      title: "Learn Through Practice",
      points: [
        "Student-based campaign simulations",
        "Hands-on project work",
        "Analytics and performance thinking",
        "Structured internship for real-world exposure",
      ],
    },
    curriculum: {
      title: "What You Will Study",
      core: {
        title: "Core Areas",
        items: [
          "Introduction to Digital Marketing",
          "Search Engine Optimization (SEO)",
          "Search Engine Marketing (SEM)",
          "Social Media Marketing",
          "Content and Brand Strategy",
        ],
      },
      tools: {
        title: "Practical Tools & Platforms",
        intro:
          "You will gain exposure to industry platforms used by companies:",
        items: [
          "Stukent Digital Marketing Simulations",
          "Google Ads, Google Analytics, Google Search Console",
          "Meta Ads Manager, LinkedIn Campaign Manager",
          "Mailchimp, HubSpot CRM",
          "SEMrush, Ahrefs",
          "Hootsuite, Canva, WordPress, Hotjar",
        ],
      },
      capstone: {
        title: "Capstone Experience",
        description: "Practical exposure through projects and internship",
        points: [
          "Apply digital strategies in real business-like environments",
          "Work with campaign and performance scenarios",
          "Translate learning into portfolio-ready practical capability",
        ],
      },
    },
    career: {
      title: "Career Opportunities",
      roles: [
        "Digital Marketing Executive",
        "SEO / SEM Specialist",
        "Social Media Manager",
        "Marketing Analyst",
      ],
      support: [
        "These roles provide a starting point for building a long-term career in marketing, with opportunities to grow into strategic and managerial positions.",
      ],
    },
    whoShouldApply: {
      title: "Who Can Apply",
      points: [
        "Have completed an undergraduate degree",
        "Are interested in marketing and digital platforms",
        "Want to build a career in the digital domain",
      ],
    },
    whatComesNext: {
      title: "Start Your Journey",
      points: [
        "Digital marketing continues to play a key role in how businesses operate and grow",
        "This program provides you with the opportunity to build the knowledge and skills required to enter this field",
      ],
    },
    ourCommitment: {
      title: "Structured. Practical. Outcome-Focused.",
      subtitle: "We support you with:",
      points: [
        "Industry relevance",
        "Career readiness",
        "Knowledge + practical skills",
        "Continuous academic and application support",
      ],
    },
    riskManagement: {
      title: "Build a Career with Practical Readiness",
      typicalPoints: [
        "Learning without application",
        "Limited tool familiarity",
        "Low confidence in real campaign execution",
      ],
      programHelps: [
        "Develop real platform-level familiarity",
        "Build performance and analytics thinking",
        "Gain internship-backed real-world exposure",
      ],
    },
    limitedIntake: SHARED_LIMITED_INTAKE,
    takeTheFirstStep: { title: "Start Your Journey in Digital Marketing" },
    footerCta: {
      title: "Still exploring?",
      guidancePoints: [
        "Program fit",
        "Admission process",
        "Career direction in digital marketing",
      ],
      ctaText: "Contact Admissions",
    },
  },

  "human-resources": {
    slug: "human-resources",
    title: "MBA in Human Resources",
    hero: {
      headline: "MBA in Human Resources",
      tagline: "Most people manage employees. HR leaders build organizations.",
      introLines: [
        "HR is often seen as:",
        "Recruitment",
        "Payroll",
        "Compliance",
        "But real HR is not administrative.",
        "It is about:",
        "Designing performance systems",
        "Aligning incentives with business goals",
        "Building culture that drives outcomes",
        "Managing talent as a strategic asset",
        "The real question is:",
        "Can you build an organization that performs — not just manage one?",
      ],
      bullets: [
        "Think like a strategic HR leader",
        "Understand people, performance, and systems",
        "Influence business outcomes through talent",
      ],
      image: "/hr.jpg",
    },
    keyHighlights: [
      "Duration: 2 Years (4 Semesters)",
      "Mode: Full-Time",
      "Affiliation: (Autonomous) Bharathiar University",
      "Case Driven Learning",
      "Internship: Mandatory Industry Exposure",
      "Capstone Project",
    ],
    howItWorks: {
      sectionTitle: "From People Management → To Organizational Strategy",
      sideImage: "/hr.jpg",
      sideImageAlt:
        "Human Resources MBA strategic people management learning at RVS",
      steps: [
        {
          title: "01 — Understand Human Behavior",
          points: [
            "Organizational behavior",
            "Motivation and performance drivers",
            "How individuals operate within systems",
          ],
        },
        {
          title: "02 — Build Performance Systems",
          points: [
            "Performance management frameworks",
            "Goal setting and evaluation",
            "Aligning incentives with outcomes",
          ],
        },
        {
          title: "03 — Manage Talent Strategically",
          points: [
            "Talent acquisition and workforce planning",
            "Learning and development systems",
            "Retention and capability building",
          ],
        },
        {
          title: "04 — Lead Organizations Through Change",
          points: [
            "Organizational design",
            "Conflict management",
            "Change management and leadership",
          ],
        },
      ],
    },
    institutions: {
      ...SHARED_INSTITUTIONS,
      focusPoints: [
        "Strategic HR thinking",
        "Organizational effectiveness",
        "Real-world application",
      ],
    },
    whyProgram: {
      title: "Not All HR Programs Create Business Leaders",
      typicalTitle: "Typical HR Programs",
      typicalPoints: [
        "Focus on processes and compliance",
        "Limited exposure to business impact",
        "Administrative orientation",
      ],
      rvsTitle: "RVS Human Resources",
      rvsPoints: [
        "Focus on performance and systems",
        "Strong link between HR and business outcomes",
        "Strategic and leadership-oriented approach",
      ],
    },
    academicExperience: {
      title: "How You Will Be Trained",
      points: [
        "Case-based learning using real organizations",
        "Organizational simulations and role-based exercises",
        "Policy design and strategy workshops",
        "Continuous application of concepts",
      ],
    },
    curriculum: {
      title: "What You Will Study",
      core: {
        title: "Core Areas",
        items: [
          "Management and Organizational Behaviour",
          "Human Resource Management",
          "Economics For Decision Making",
          "Leadership & Strategy",
        ],
      },
      specialization: {
        title: "HR Specialization",
        items: [
          "Talent Acquisition & Workforce Planning",
          "Business Leadership",
          "Employee Relationship Management",
          "Organisation Development",
          "HR Analytics",
        ],
      },
      capstone: {
        title: "Capstone Experience",
        description: "Apply HR concepts in real scenarios:",
        points: [
          "Organizational case studies",
          "Talent strategy design",
          "Policy drafting and implementation",
          "Performance system evaluation",
        ],
      },
    },
    career: {
      title: "Where This Program Can Take You",
      roles: [
        "HR Executive",
        "Talent Acquisition Specialist",
        "HR Business Partner",
        "Compensation Analyst",
        "Learning & Development Manager",
        "Organizational Development Executive",
      ],
      support: [
        "Interview preparation",
        "Corporate grooming",
        "Case-based assessment practice",
        "Industry exposure",
      ],
    },
    whoShouldApply: {
      title: "Is This Right for You?",
      points: [
        "You are interested in people, systems, and performance",
        "You want to move into leadership roles",
        "You want to influence culture and outcomes",
        "You see HR as strategic, not administrative",
      ],
    },
    whatComesNext: {
      title: "Your Career Path",
      points: [
        "Work in HR, talent, or organizational roles",
        "Build expertise in people and performance systems",
        "Move into strategic HR leadership positions",
      ],
    },
    ourCommitment: {
      title: "Structured. Practical. Outcome-Focused.",
      subtitle: "We support you with:",
      points: [
        "Academic learning",
        "Career preparation",
        "Industry exposure",
        "Continuous guidance",
      ],
    },
    riskManagement: {
      title: "Build a Strong HR Career Foundation",
      typicalPoints: [
        "Limited administrative roles",
        "Slow career growth",
        "Lack of business impact",
      ],
      programHelps: [
        "Build strong HR fundamentals",
        "Understand organizational impact",
        "Develop long-term leadership capability",
      ],
    },
    limitedIntake: SHARED_LIMITED_INTAKE,
    takeTheFirstStep: { title: "Start Your Journey in Human Resources" },
    footerCta: {
      title: "Still exploring?",
      guidancePoints: [
        "Career paths in HR",
        "Program fit",
        "Admission process",
      ],
      ctaText: "Request a Call Back",
    },
  },

  "logistics-supply-chain-management": {
    slug: "logistics-supply-chain-management",
    title: "MBA in Logistics and Supply chain Management",
    hero: {
      headline: "MBA in Logistics and Supply chain Management",
      tagline: "Most people see operations. Leaders see systems.",
      introLines: [
        "Build capability in operations, analytics, and strategic supply chain decision-making.",
        "Learn through case-driven practice, simulation, and industry-aligned exposure.",
      ],
      bullets: [
        "System-level & strategic thinking",
        "Operations linked to business outcomes",
        "Decision-oriented learning",
      ],
      image: "/scm.jpg",
    },
    keyHighlights: [
      "2 Years — Full-Time MBA",
      "AICTE Approved",
      "Bharathiar University Affiliated",
      "Case-Driven Learning",
      "Concept-First Approach",
      "Globally Certified Lean Six Sigma Black Belt Faculty",
      "Faculty Exposure to SAP, Frepple & ERPNext",
      "Strong Industry MoUs for practical learning & exposure",
    ],
    programOverview: {
      title: "Industry Exposure",
      sections: [
        {
          title: "Learn Beyond the Classroom",
          paragraphs: ["Students will gain real-time exposure to"],
          points: [
            "Manufacturing facilities",
            "Warehouses & distribution centers",
            "Container Freight Stations (CFS)",
            "Inland Container Depots (ICD)",
            "Port and logistics infrastructure",
          ],
        },
      ],
    },
    howItWorks: {
      sectionTitle: "From Operations → To System-Level & Strategic Thinking",
      sideImage: "/scm.jpg",
      sideImageAlt: "Logistics and supply chain MBA operations learning at RVS",
      steps: [
        {
          title: "01 — Understand Business Operations",
          points: [
            "How products move across systems",
            "Role of supply chains in business performance",
            "Cost, service, and efficiency drivers",
          ],
        },
        {
          title: "02 — Design Efficient & Scalable Systems",
          points: [
            "Distribution network design",
            "Inventory planning and optimization",
            "Procurement and vendor strategies",
          ],
        },
        {
          title: "03 — Manage Cost, Risk & Business Trade-offs",
          points: [
            "Cost vs service level decisions",
            "Working capital optimization",
            "Risk and disruption management",
          ],
        },
        {
          title: "04 — Apply Through Real Scenarios",
          points: [
            "Case studies and simulations",
            "Network design exercises",
            "Cost optimization projects",
            "Exposure to real-time industry environments",
          ],
        },
      ],
    },
    institutions: {
      ...SHARED_INSTITUTIONS,
      focusPoints: [
        "Operational excellence",
        "Analytical & strategic decision-making",
        "Real-world application",
        "Industry-relevant tools like SAP, Frepple & ERPNext",
        "Strong industry collaboration through MoUs",
      ],
    },
    whyProgram: {
      title: "Not All Programs Build Decision-Makers",
      typicalTitle: "Typical Logistics Programs",
      typicalPoints: [
        "Focus mainly on execution and processes",
        "Limited connection to business outcomes",
        "Operational, not strategic",
      ],
      rvsTitle: "RVS Logistics & Supply Chain",
      rvsPoints: [
        "Focus on system-level & strategic thinking",
        "Strong connection to financial and business outcomes",
        "Decision-oriented learning approach",
        "Balanced focus on operations, analytics, and strategy",
        "Learning guided by Lean Six Sigma Black Belt expertise",
      ],
    },
    academicExperience: {
      title: "How You Will Be Trained",
      points: [
        "Case-based learning using real business scenarios",
        "Simulation-driven exercises",
        "Concept-first, application-focused teaching",
        "Continuous project-based learning",
        "Hands-on exposure to SAP, Frepple & ERPNext systems",
        "Industry interaction through MoUs and expert sessions",
        "LinkedIn mastery sessions for personal branding and career planning",
      ],
    },
    curriculum: {
      title: "What You Will Study",
      core: {
        title: "Core Areas",
        items: [
          "Managerial Economics",
          "Financial Management",
          "Business Statistics & SPSS",
          "Lean six sigma for process optimisation",
          "Strategic Management",
        ],
      },
      specialization: {
        title: "Supply Chain Specialization",
        items: [
          "Logistics & Distribution Management",
          "Inventory & Warehouse Management",
          "Procurement & Materials Management",
          "Supply Chain models and Analytics",
          "International Trade & Documentation",
          "Risk & Disruption Management",
        ],
      },
      capstone: {
        title: "Capstone Experience",
        description: "Apply concepts through real-world scenarios:",
        points: [
          "Supply chain case studies",
          "Network design projects",
          "Cost optimization exercises",
          "Operational strategy simulations",
          "Tool-based projects using ERP and planning systems",
        ],
      },
    },
    career: {
      title: "Where This Program Can Take You",
      roles: [
        "Supply Chain Executive",
        "Logistics Manager",
        "Procurement Analyst",
        "Inventory Planner",
        "Operations Manager",
        "Distribution Manager",
      ],
      support: [
        "Interview preparation",
        "Case simulation training",
        "Industry exposure",
        "LinkedIn mastery for career growth & networking",
        "Professional development guidance",
        "Skill development aligned with ERP and analytics tools",
      ],
    },
    whoShouldApply: {
      title: "Is This Right for You?",
      points: [
        "You enjoy solving business and system-level problems",
        "You think in processes, data, and outcomes",
        "You are analytical and detail-oriented",
        "You want a career in manufacturing, retail, e-commerce, or global trade",
        "You are interested in working with industry tools like SAP & planning systems",
      ],
    },
    whatComesNext: {
      title: "Your Career Path",
      points: [
        "Work in operations, analytics, or supply chain roles",
        "Build expertise in efficiency, cost, and system optimization",
        "Move into strategic and operational leadership roles",
        "Transition into data-driven and tool-based decision roles",
      ],
    },
    ourCommitment: {
      title: "Structured. Practical. Outcome-Focused.",
      subtitle: "We support you with:",
      points: [
        "Academic learning",
        "Career preparation",
        "Industry exposure through MoUs and site visits",
        "Continuous guidance",
        "Faculty mentorship with industry certifications and tool expertise",
      ],
    },
    riskManagement: {
      title: "Build a Strong Career Foundation",
      typicalPoints: [
        "Execution-only roles",
        "Limited career growth",
        "Lack of strategic exposure",
      ],
      programHelps: [
        "Build strong operational and analytical fundamentals",
        "Understand cost, strategy, and business impact",
        "Develop long-term career capability",
        "Gain exposure to globally relevant tools and methodologies",
      ],
    },
    limitedIntake: SHARED_LIMITED_INTAKE,
    takeTheFirstStep: {
      title: "Start Your Journey in Supply Chain Management",
    },
    footerCta: {
      title: "Still exploring?",
      guidancePoints: [
        "Career paths in supply chain and operations",
        "Program fit",
        "Admission process",
      ],
      ctaText: "Request a Call Back",
    },
  },
};

export const programSlugs: ProgramSlug[] = [
  "artificial-intelligence",
  "digital-marketing",
  "global-finance-corporate-analyst",
  "human-resources",
  "logistics-supply-chain-management",
];
