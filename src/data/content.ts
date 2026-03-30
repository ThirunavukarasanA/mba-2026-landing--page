export type College =
  | "arts_science"
  | "nursing"
  | "pharmacy"
  | "physiotherapy"
  | "ayurveda";

export type ProgramCategory = string; // Now represents a Stream

export interface Program {
  id: string;
  name: { en: string; ta: string; ml: string }; // Localized Name
  degree: string;
  duration: { en: string; ta: string; ml: string };
  eligibility: { en: string; ta: string; ml: string };
  fee: number;
  availability: "Open" | "Limited" | "Full";
  details: {
    learn: { en: string; ta: string; ml: string };
    career: { en: string; ta: string; ml: string };
    feeStructure: { en: string; ta: string; ml: string };
    admission: { en: string; ta: string; ml: string };
  };
}

export interface Stream {
  id: string;
  label: { en: string; ta: string; ml: string };
  programs: Program[];
}

export const content = {
  header: {
    languageTabs: [
      { code: "en", label: "English" },
      { code: "ta", label: "தமிழ்" },
      { code: "ml", label: "മലയാളം" },
    ],
  },
  hero: {
    heading: {
      en: "Admissions Open – 2026",
      ta: "2026 சேர்க்கை திறந்துள்ளது",
      ml: "2026 പ്രവേശനം തുറന്നു",
    },
    subtext: {
      en: "Explore programs across Nursing, Arts & Science, Pharmacy, Ayurveda, Physiotherapy and Management.",
      ta: "நர்சிங், கலை & அறிவியல், மருந்தியல், ஆயுர்வேதம், ஃபிசியோதெரபி மற்றும் மேலாண்மை பாடங்களை ஆராயுங்கள்.",
      ml: "നഴ്‌സിംഗ്, ആർട്സ് & സയൻസ്, ഫാർമസി, ആയുർവേദം, ഫിസിയോതെറാപ്പി, മാനേജ്മെന്റ് കോഴ്‌സുകൾ പരിശോധിക്കുക.",
    },
    primaryCta: {
      en: "View Programs",
      ta: "பாடங்களை காண்க",
      ml: "കോഴ്‌സുകൾ കാണുക",
    },
  },
  colleges: [
    {
      id: "arts_science",
      label: {
        en: "RVS College of Arts & Science",
        ta: "RVS கலை & அறிவியல் கல்லூரி",
        ml: "ആർട്സ് & സയൻസ് കോളേജ്",
      },
    },
    {
      id: "nursing",
      label: {
        en: "RVS College of Nursing",
        ta: "நர்சிங் கல்லூரி",
        ml: "കോളേജ് ഓഫ് നഴ്‌സിംഗ്",
      },
    },
    {
      id: "pharmacy",
      label: {
        en: "RVS College of Pharmaceutical Sciences",
        ta: "மருந்தியல் கல்லூரி",
        ml: "ഫാർമസ്യൂട്ടിക്കൽ സയൻസസ് കോളേജ്",
      },
    },
    {
      id: "physiotherapy",
      label: {
        en: "RVS College of Physiotherapy",
        ta: "ஃபிசியோதெரபி கல்லூரி",
        ml: "കോളേജ് ഓഫ് ഫിസിയോതെറാപ്പി",
      },
    },
    {
      id: "ayurveda",
      label: { en: "RVS Ayurveda College", ta: "ஆயுர்வேதம்", ml: "ആയുർവേദം" },
    },
  ] as { id: string; label: { en: string; ta: string; ml: string } }[],

  // Programs organized by College -> Stream (Array of Streams)
  programs: {
    arts_science: [
      {
        id: "computer_applications",
        label: {
          en: "Computer Science & Applications",
          ta: "கணினி அறிவியல் & பயன்பாடுகள்",
          ml: "കമ്പ്യൂട്ടർ സയൻസ് & ആപ്ലിക്കേഷൻസ്",
        },
        programs: [
          {
            id: "bsc-ai-ml",
            name: {
              en: "B.Sc Artificial Intelligence & Machine Learning",
              ta: "B.Sc செயற்கை நுண்ணறிவு & மெஷின் லேர்னிங்",
              ml: "B.Sc Artificial Intelligence & Machine Learning",
            },
            degree: "UG",
            duration: { en: "3 Years", ta: "3 ஆண்டுகள்", ml: "3 വർഷം" },
            eligibility: {
              en: "10+2 (Maths/Stat)",
              ta: "12-ஆம் வகுப்பு",
              ml: "പ്ലസ് ടു",
            },
            fee: 45000,
            availability: "Limited",
            details: {
              learn: { en: "", ta: "", ml: "" },
              career: { en: "", ta: "", ml: "" },
              feeStructure: { en: "", ta: "", ml: "" },
              admission: { en: "", ta: "", ml: "" },
            },
          },
          {
            id: "bsc-data-science",
            name: {
              en: "B.Sc Data Science",
              ta: "B.Sc தரவு அறிவியல்",
              ml: "B.Sc Data Science",
            },
            degree: "UG",
            duration: { en: "3 Years", ta: "3 ஆண்டுகள்", ml: "3 വർഷം" },
            eligibility: {
              en: "10+2 (Maths/Stat)",
              ta: "12-ஆம் வகுப்பு",
              ml: "പ്ലസ് ടു",
            },
            fee: 40000,
            availability: "Open",
            details: {
              learn: { en: "", ta: "", ml: "" },
              career: { en: "", ta: "", ml: "" },
              feeStructure: { en: "", ta: "", ml: "" },
              admission: { en: "", ta: "", ml: "" },
            },
          },
          {
            id: "bsc-cs",
            name: {
              en: "B.Sc Computer Science",
              ta: "B.Sc கணினி அறிவியல்",
              ml: "B.Sc Computer Science",
            },
            degree: "UG",
            duration: { en: "3 Years", ta: "3 ஆண்டுகள்", ml: "3 വർഷം" },
            eligibility: {
              en: "10+2 (Maths/CS)",
              ta: "12-ஆம் வகுப்பு",
              ml: "പ്ലസ് ടു",
            },
            fee: 35000,
            availability: "Open",
            details: {
              learn: { en: "", ta: "", ml: "" },
              career: { en: "", ta: "", ml: "" },
              feeStructure: { en: "", ta: "", ml: "" },
              admission: { en: "", ta: "", ml: "" },
            },
          },
          {
            id: "bsc-it",
            name: {
              en: "B.Sc Information Technology",
              ta: "B.Sc தகவல் தொழில்நுட்பம்",
              ml: "B.Sc Information Technology",
            },
            degree: "UG",
            duration: { en: "3 Years", ta: "3 ஆண்டுகள்", ml: "3 വർഷം" },
            eligibility: { en: "10+2", ta: "12-ஆம் வகுப்பு", ml: "പ്ലസ് ടു" },
            fee: 35000,
            availability: "Open",
            details: {
              learn: { en: "", ta: "", ml: "" },
              career: { en: "", ta: "", ml: "" },
              feeStructure: { en: "", ta: "", ml: "" },
              admission: { en: "", ta: "", ml: "" },
            },
          },
          {
            id: "bca",
            name: { en: "BCA", ta: "BCA", ml: "BCA" },
            degree: "UG",
            duration: { en: "3 Years", ta: "3 ஆண்டுகள்", ml: "3 വർഷം" },
            eligibility: { en: "10+2", ta: "12-ஆம் வகுப்பு", ml: "പ്ലസ് ടു" },
            fee: 35000,
            availability: "Open",
            details: {
              learn: { en: "", ta: "", ml: "" },
              career: { en: "", ta: "", ml: "" },
              feeStructure: { en: "", ta: "", ml: "" },
              admission: { en: "", ta: "", ml: "" },
            },
          },
          {
            id: "msc-cs",
            name: {
              en: "M.Sc Computer Science",
              ta: "M.Sc கணினி அறிவியல்",
              ml: "M.Sc Computer Science",
            },
            degree: "PG",
            duration: { en: "2 Years", ta: "2 ஆண்டுகள்", ml: "2 വർഷം" },
            eligibility: {
              en: "B.Sc CS/IT",
              ta: "B.Sc CS/IT",
              ml: "B.Sc CS/IT",
            },
            fee: 55000,
            availability: "Open",
            details: {
              learn: { en: "", ta: "", ml: "" },
              career: { en: "", ta: "", ml: "" },
              feeStructure: { en: "", ta: "", ml: "" },
              admission: { en: "", ta: "", ml: "" },
            },
          },
          {
            id: "mca",
            name: { en: "MCA", ta: "MCA", ml: "MCA" },
            degree: "PG",
            duration: { en: "2 Years", ta: "2 ஆண்டுகள்", ml: "2 വർഷം" },
            eligibility: {
              en: "Any Degree with Maths",
              ta: "ஏதேனும் பட்டம்",
              ml: "ഏതെങ്കിലും ബിരുദം",
            },
            fee: 65000,
            availability: "Open",
            details: {
              learn: { en: "", ta: "", ml: "" },
              career: { en: "", ta: "", ml: "" },
              feeStructure: { en: "", ta: "", ml: "" },
              admission: { en: "", ta: "", ml: "" },
            },
          },
        ],
      },
      {
        id: "electronics",
        label: {
          en: "Electronics",
          ta: "எலெக்ட்ரானிக்ஸ்",
          ml: "ഇലക്ട്രോണിക്സ്",
        }, // User used 'எலெக்ட்ரானிக்ஸ்' in table
        programs: [
          {
            id: "bsc-ec",
            name: {
              en: "B.Sc Electronics & Communication",
              ta: "B.Sc எலக்ட்ரானிக்ஸ் & தொடர்பியல்",
              ml: "B.Sc Electronics & Communication",
            },
            degree: "UG",
            duration: { en: "3 Years", ta: "3 ஆண்டுகள்", ml: "3 വർഷം" },
            eligibility: {
              en: "10+2 (Science)",
              ta: "12-ஆம் வகுப்பு",
              ml: "പ്ലസ് ടു",
            },
            fee: 35000,
            availability: "Open",
            details: {
              learn: { en: "", ta: "", ml: "" },
              career: { en: "", ta: "", ml: "" },
              feeStructure: { en: "", ta: "", ml: "" },
              admission: { en: "", ta: "", ml: "" },
            },
          },
          {
            id: "bsc-iot",
            name: {
              en: "B.Sc Internet of Things",
              ta: "B.Sc Internet of Things",
              ml: "B.Sc Internet of Things",
            },
            degree: "UG",
            duration: { en: "3 Years", ta: "3 ஆண்டுகள்", ml: "3 വർഷം" },
            eligibility: {
              en: "10+2 (Science)",
              ta: "12-ஆம் வகுப்பு",
              ml: "പ്ലസ് ടു",
            },
            fee: 38000,
            availability: "Open",
            details: {
              learn: { en: "", ta: "", ml: "" },
              career: { en: "", ta: "", ml: "" },
              feeStructure: { en: "", ta: "", ml: "" },
              admission: { en: "", ta: "", ml: "" },
            },
          },
          {
            id: "msc-ae",
            name: {
              en: "M.Sc Applied Electronics",
              ta: "M.Sc பயன்பாட்டு எலக்ட்ரானிக்ஸ்",
              ml: "M.Sc Applied Electronics",
            },
            degree: "PG",
            duration: { en: "2 Years", ta: "2 ஆண்டுகள்", ml: "2 വർഷം" },
            eligibility: {
              en: "B.Sc Electronics",
              ta: "B.Sc Electronics",
              ml: "B.Sc Electronics",
            },
            fee: 45000,
            availability: "Open",
            details: {
              learn: { en: "", ta: "", ml: "" },
              career: { en: "", ta: "", ml: "" },
              feeStructure: { en: "", ta: "", ml: "" },
              admission: { en: "", ta: "", ml: "" },
            },
          },
        ],
      },
      {
        id: "commerce",
        label: { en: "Commerce", ta: "வாணிகம்", ml: "കൊമേഴ്സ്" }, // User used 'வாணிகம்'
        programs: [
          {
            id: "bcom",
            name: { en: "B.Com", ta: "B.Com", ml: "B.Com" },
            degree: "UG",
            duration: { en: "3 Years", ta: "3 ஆண்டுகள்", ml: "3 വർഷം" },
            eligibility: {
              en: "10+2 (Commerce)",
              ta: "12-ஆம் வகுப்பு",
              ml: "പ്ലസ് ടു",
            },
            fee: 32000,
            availability: "Full",
            details: {
              learn: { en: "", ta: "", ml: "" },
              career: { en: "", ta: "", ml: "" },
              feeStructure: { en: "", ta: "", ml: "" },
              admission: { en: "", ta: "", ml: "" },
            },
          },
          {
            id: "bcom-ca",
            name: {
              en: "B.Com (Computer Applications)",
              ta: "B.Com (கணினி பயன்பாடுகள்)",
              ml: "B.Com (Computer Applications)",
            },
            degree: "UG",
            duration: { en: "3 Years", ta: "3 ஆண்டுகள்", ml: "3 വർഷം" },
            eligibility: {
              en: "10+2 (Commerce)",
              ta: "12-ஆம் வகுப்பு",
              ml: "പ്ലസ് ടു",
            },
            fee: 33000,
            availability: "Open",
            details: {
              learn: { en: "", ta: "", ml: "" },
              career: { en: "", ta: "", ml: "" },
              feeStructure: { en: "", ta: "", ml: "" },
              admission: { en: "", ta: "", ml: "" },
            },
          },
          {
            id: "bcom-it",
            name: {
              en: "B.Com (Information Technology)",
              ta: "B.Com (தகவல் தொழில்நுட்பம்)",
              ml: "B.Com (Information Technology)",
            },
            degree: "UG",
            duration: { en: "3 Years", ta: "3 ஆண்டுகள்", ml: "3 വർഷം" },
            eligibility: { en: "10+2", ta: "12-ஆம் வகுப்பு", ml: "പ്ലസ് ടു" },
            fee: 33000,
            availability: "Open",
            details: {
              learn: { en: "", ta: "", ml: "" },
              career: { en: "", ta: "", ml: "" },
              feeStructure: { en: "", ta: "", ml: "" },
              admission: { en: "", ta: "", ml: "" },
            },
          },
          {
            id: "bcom-af",
            name: {
              en: "B.Com (Accounting & Finance)",
              ta: "B.Com (கணக்கியல் & நிதி)",
              ml: "B.Com (Accounting & Finance)",
            },
            degree: "UG",
            duration: { en: "3 Years", ta: "3 ஆண்டுகள்", ml: "3 വർഷം" },
            eligibility: { en: "10+2", ta: "12-ஆம் வகுப்பு", ml: "പ്ലസ് ടു" },
            fee: 32000,
            availability: "Open",
            details: {
              learn: { en: "", ta: "", ml: "" },
              career: { en: "", ta: "", ml: "" },
              feeStructure: { en: "", ta: "", ml: "" },
              admission: { en: "", ta: "", ml: "" },
            },
          },
          {
            id: "bcom-pa",
            name: {
              en: "B.Com (Professional Accounting)",
              ta: "B.Com (தொழில்முறை கணக்கியல்)",
              ml: "B.Com (Professional Accounting)",
            },
            degree: "UG",
            duration: { en: "3 Years", ta: "3 ஆண்டுகள்", ml: "3 വർഷം" },
            eligibility: { en: "10+2", ta: "12-ஆம் வகுப்பு", ml: "പ്ലസ് ടു" },
            fee: 35000,
            availability: "Open",
            details: {
              learn: { en: "", ta: "", ml: "" },
              career: { en: "", ta: "", ml: "" },
              feeStructure: { en: "", ta: "", ml: "" },
              admission: { en: "", ta: "", ml: "" },
            },
          },
          {
            id: "bcom-ba",
            name: {
              en: "B.Com (Business Analytics)",
              ta: "B.Com (வணிக பகுப்பாய்வு)",
              ml: "B.Com (Business Analytics)",
            },
            degree: "UG",
            duration: { en: "3 Years", ta: "3 ஆண்டுகள்", ml: "3 വർഷം" },
            eligibility: { en: "10+2", ta: "12-ஆம் வகுப்பு", ml: "പ്ലസ് ടു" },
            fee: 36000,
            availability: "Open",
            details: {
              learn: { en: "", ta: "", ml: "" },
              career: { en: "", ta: "", ml: "" },
              feeStructure: { en: "", ta: "", ml: "" },
              admission: { en: "", ta: "", ml: "" },
            },
          },
          {
            id: "mcom",
            name: { en: "M.Com", ta: "M.Com", ml: "M.Com" },
            degree: "PG",
            duration: { en: "2 Years", ta: "2 ஆண்டுகள்", ml: "2 വർഷം" },
            eligibility: { en: "B.Com", ta: "B.Com", ml: "B.Com" },
            fee: 40000,
            availability: "Open",
            details: {
              learn: { en: "", ta: "", ml: "" },
              career: { en: "", ta: "", ml: "" },
              feeStructure: { en: "", ta: "", ml: "" },
              admission: { en: "", ta: "", ml: "" },
            },
          },
          {
            id: "mcom-ib",
            name: {
              en: "M.Com (International Business)",
              ta: "M.Com (சர்வதேச வாணிகம்)",
              ml: "M.Com (International Business)",
            },
            degree: "PG",
            duration: { en: "2 Years", ta: "2 ஆண்டுகள்", ml: "2 വർഷം" },
            eligibility: {
              en: "Any UG Degree",
              ta: "ஏதேனும் பட்டம்",
              ml: "ഏതെങ്കിലും ബിരുദം",
            },
            fee: 45000,
            availability: "Open",
            details: {
              learn: { en: "", ta: "", ml: "" },
              career: { en: "", ta: "", ml: "" },
              feeStructure: { en: "", ta: "", ml: "" },
              admission: { en: "", ta: "", ml: "" },
            },
          },
          {
            id: "mcom-ca",
            name: {
              en: "M.Com (Computer Applications)",
              ta: "M.Com (கணினி பயன்பாடுகள்)",
              ml: "M.Com (Computer Applications)",
            },
            degree: "PG",
            duration: { en: "2 Years", ta: "2 ஆண்டுகள்", ml: "2 വർഷം" },
            eligibility: { en: "B.Com CA", ta: "B.Com CA", ml: "B.Com CA" },
            fee: 42000,
            availability: "Open",
            details: {
              learn: { en: "", ta: "", ml: "" },
              career: { en: "", ta: "", ml: "" },
              feeStructure: { en: "", ta: "", ml: "" },
              admission: { en: "", ta: "", ml: "" },
            },
          },
        ],
      },
      {
        id: "management",
        label: { en: "Management", ta: "மேலாண்மை", ml: "മാനേജ്മെന്റ്" },
        programs: [
          {
            id: "bba",
            name: {
              en: "BBA (Business Administration)",
              ta: "BBA (வணிக மேலாண்மை)",
              ml: "BBA (Business Administration)",
            },
            degree: "UG",
            duration: { en: "3 Years", ta: "3 ஆண்டுகள்", ml: "3 വർഷം" },
            eligibility: { en: "10+2", ta: "12-ஆம் வகுப்பு", ml: "പ്ലസ് ടു" },
            fee: 38000,
            availability: "Open",
            details: {
              learn: { en: "", ta: "", ml: "" },
              career: { en: "", ta: "", ml: "" },
              feeStructure: { en: "", ta: "", ml: "" },
              admission: { en: "", ta: "", ml: "" },
            },
          },
          {
            id: "bba-ca",
            name: {
              en: "BBA (Computer Applications)",
              ta: "BBA (கணினி பயன்பாடு)",
              ml: "BBA (Computer Application)",
            },
            degree: "UG",
            duration: { en: "3 Years", ta: "3 ஆண்டுகள்", ml: "3 വർഷം" },
            eligibility: { en: "10+2", ta: "12-ஆம் வகுப்பு", ml: "പ്ലസ് ടു" },
            fee: 39000,
            availability: "Open",
            details: {
              learn: { en: "", ta: "", ml: "" },
              career: { en: "", ta: "", ml: "" },
              feeStructure: { en: "", ta: "", ml: "" },
              admission: { en: "", ta: "", ml: "" },
            },
          },
          {
            id: "bba-logistics",
            name: {
              en: "BBA (Logistics)",
              ta: "BBA (லாஜிஸ்டிக்ஸ்)",
              ml: "BBA (Logistics)",
            },
            degree: "UG",
            duration: { en: "3 Years", ta: "3 ஆண்டுகள்", ml: "3 വർഷം" },
            eligibility: { en: "10+2", ta: "12-ஆம் வகுப்பு", ml: "പ്ലസ് ടു" },
            fee: 40000,
            availability: "Open",
            details: {
              learn: { en: "", ta: "", ml: "" },
              career: { en: "", ta: "", ml: "" },
              feeStructure: { en: "", ta: "", ml: "" },
              admission: { en: "", ta: "", ml: "" },
            },
          },
          {
            id: "mba",
            name: { en: "MBA", ta: "MBA", ml: "MBA" },
            degree: "PG",
            duration: { en: "2 Years", ta: "2 ஆண்டுகள்", ml: "2 വർഷം" },
            eligibility: {
              en: "Any UG Degree",
              ta: "ஏதேனும் பட்டம்",
              ml: "ഏതെങ്കിലും ബിരുദം",
            },
            fee: 150000,
            availability: "Open",
            details: {
              learn: { en: "", ta: "", ml: "" },
              career: { en: "", ta: "", ml: "" },
              feeStructure: { en: "", ta: "", ml: "" },
              admission: { en: "", ta: "", ml: "" },
            },
          },
        ],
      },
      {
        id: "biochemistry",
        label: {
          en: "Biochemistry",
          ta: "உயிர்வேதியியல்",
          ml: "ബയോകെമിസ്ട്രി",
        },
        programs: [
          {
            id: "bsc-bio",
            name: {
              en: "B.Sc Biochemistry",
              ta: "B.Sc உயிர்வேதியியல்",
              ml: "B.Sc Biochemistry",
            },
            degree: "UG",
            duration: { en: "3 Years", ta: "3 ஆண்டுகள்", ml: "3 വർഷം" },
            eligibility: {
              en: "10+2 (Bio)",
              ta: "12-ஆம் வகுப்பு",
              ml: "പ്ലസ് ടു (ബയോ)",
            },
            fee: 35000,
            availability: "Open",
            details: {
              learn: { en: "", ta: "", ml: "" },
              career: { en: "", ta: "", ml: "" },
              feeStructure: { en: "", ta: "", ml: "" },
              admission: { en: "", ta: "", ml: "" },
            },
          },
          {
            id: "msc-bio",
            name: {
              en: "M.Sc Biochemistry",
              ta: "M.Sc உயிர்வேதியியல்",
              ml: "M.Sc Biochemistry",
            },
            degree: "PG",
            duration: { en: "2 Years", ta: "2 ஆண்டுகள்", ml: "2 വർഷം" },
            eligibility: { en: "B.Sc Bio", ta: "B.Sc Bio", ml: "B.Sc Bio" },
            fee: 40000,
            availability: "Open",
            details: {
              learn: { en: "", ta: "", ml: "" },
              career: { en: "", ta: "", ml: "" },
              feeStructure: { en: "", ta: "", ml: "" },
              admission: { en: "", ta: "", ml: "" },
            },
          },
        ],
      },
      {
        id: "biotechnology",
        label: {
          en: "Biotechnology",
          ta: "உயிர்தொழில்நுட்பம்",
          ml: "ബയോടെക്നോളജി",
        },
        programs: [
          {
            id: "bsc-biotech",
            name: {
              en: "B.Sc Biotechnology",
              ta: "B.Sc உயிர்தொழில்நுட்பம்",
              ml: "B.Sc Biotechnology",
            },
            degree: "UG",
            duration: { en: "3 Years", ta: "3 ஆண்டுகள்", ml: "3 വർഷം" },
            eligibility: {
              en: "10+2 (Bio)",
              ta: "12-ஆம் வகுப்பு",
              ml: "പ്ലസ് ടു (ബയോ)",
            },
            fee: 38000,
            availability: "Open",
            details: {
              learn: { en: "", ta: "", ml: "" },
              career: { en: "", ta: "", ml: "" },
              feeStructure: { en: "", ta: "", ml: "" },
              admission: { en: "", ta: "", ml: "" },
            },
          },
          {
            id: "msc-biotech",
            name: {
              en: "M.Sc Biotechnology",
              ta: "M.Sc உயிர்தொழில்நுட்பம்",
              ml: "M.Sc Biotechnology",
            },
            degree: "PG",
            duration: { en: "2 Years", ta: "2 ஆண்டுகள்", ml: "2 വർഷം" },
            eligibility: {
              en: "B.Sc Biotech",
              ta: "B.Sc Biotech",
              ml: "B.Sc Biotech",
            },
            fee: 45000,
            availability: "Open",
            details: {
              learn: { en: "", ta: "", ml: "" },
              career: { en: "", ta: "", ml: "" },
              feeStructure: { en: "", ta: "", ml: "" },
              admission: { en: "", ta: "", ml: "" },
            },
          },
        ],
      },
      {
        id: "microbiology",
        label: { en: "Microbiology", ta: "நுண்ணுயிரியல்", ml: "മൈക്രോബയോളജി" },
        programs: [
          {
            id: "bsc-micro",
            name: {
              en: "B.Sc Microbiology",
              ta: "B.Sc நுண்ணுயிரியல்",
              ml: "B.Sc Microbiology",
            },
            degree: "UG",
            duration: { en: "3 Years", ta: "3 ஆண்டுகள்", ml: "3 വർഷം" },
            eligibility: {
              en: "10+2 (Bio)",
              ta: "12-ஆம் வகுப்பு",
              ml: "പ്ലസ് ടു (ബയോ)",
            },
            fee: 35000,
            availability: "Open",
            details: {
              learn: { en: "", ta: "", ml: "" },
              career: { en: "", ta: "", ml: "" },
              feeStructure: { en: "", ta: "", ml: "" },
              admission: { en: "", ta: "", ml: "" },
            },
          },
          {
            id: "msc-micro",
            name: {
              en: "M.Sc Microbiology",
              ta: "M.Sc நுண்ணுயிரியல்",
              ml: "M.Sc Microbiology",
            },
            degree: "PG",
            duration: { en: "2 Years", ta: "2 ஆண்டுகள்", ml: "2 വർഷം" },
            eligibility: {
              en: "B.Sc Micro",
              ta: "B.Sc Micro",
              ml: "B.Sc Micro",
            },
            fee: 40000,
            availability: "Open",
            details: {
              learn: { en: "", ta: "", ml: "" },
              career: { en: "", ta: "", ml: "" },
              feeStructure: { en: "", ta: "", ml: "" },
              admission: { en: "", ta: "", ml: "" },
            },
          },
        ],
      },
      {
        id: "mathematics",
        label: { en: "Mathematics", ta: "கணிதம்", ml: "ഗണിതം" }, // Malayalam used 'ഗണിതം'
        programs: [
          {
            id: "bsc-maths",
            name: {
              en: "B.Sc Mathematics",
              ta: "B.Sc கணிதம்",
              ml: "B.Sc Mathematics",
            },
            degree: "UG",
            duration: { en: "3 Years", ta: "3 ஆண்டுகள்", ml: "3 വർഷം" },
            eligibility: {
              en: "10+2 (Maths)",
              ta: "12-ஆம் வகுப்பு",
              ml: "പ്ലസ് ടു (മാത്സ്)",
            },
            fee: 30000,
            availability: "Open",
            details: {
              learn: { en: "", ta: "", ml: "" },
              career: { en: "", ta: "", ml: "" },
              feeStructure: { en: "", ta: "", ml: "" },
              admission: { en: "", ta: "", ml: "" },
            },
          },
          {
            id: "msc-maths",
            name: {
              en: "M.Sc Mathematics",
              ta: "M.Sc கணிதம்",
              ml: "M.Sc Mathematics",
            },
            degree: "PG",
            duration: { en: "2 Years", ta: "2 ஆண்டுகள்", ml: "2 വർഷം" },
            eligibility: {
              en: "B.Sc Maths",
              ta: "B.Sc Maths",
              ml: "B.Sc Maths",
            },
            fee: 35000,
            availability: "Open",
            details: {
              learn: { en: "", ta: "", ml: "" },
              career: { en: "", ta: "", ml: "" },
              feeStructure: { en: "", ta: "", ml: "" },
              admission: { en: "", ta: "", ml: "" },
            },
          },
        ],
      },
      {
        id: "psychology",
        label: { en: "Psychology", ta: "உளவியல்", ml: "സൈക്കോളജി" },
        programs: [
          {
            id: "bsc-psych",
            name: {
              en: "B.Sc Psychology",
              ta: "B.Sc உளவியல்",
              ml: "B.Sc Psychology",
            },
            degree: "UG",
            duration: { en: "3 Years", ta: "3 ஆண்டுகள்", ml: "3 വർഷം" },
            eligibility: { en: "10+2", ta: "12-ஆம் வகுப்பு", ml: "പ്ലസ് ടു" },
            fee: 35000,
            availability: "Open",
            details: {
              learn: { en: "", ta: "", ml: "" },
              career: { en: "", ta: "", ml: "" },
              feeStructure: { en: "", ta: "", ml: "" },
              admission: { en: "", ta: "", ml: "" },
            },
          },
        ],
      },
      {
        id: "foods",
        label: {
          en: "Food & Nutrition",
          ta: "உணவு & ஊட்டச்சத்து",
          ml: "ഫുഡ് & ന്യൂട്രിഷൻ",
        },
        programs: [
          {
            id: "bsc-nutrition",
            name: {
              en: "B.Sc Nutrition & Dietetics",
              ta: "B.Sc ஊட்டச்சத்து & டயட்டெடிக்ஸ்",
              ml: "B.Sc Nutrition & Dietetics",
            },
            degree: "UG",
            duration: { en: "3 Years", ta: "3 ஆண்டுகள்", ml: "3 വർഷം" },
            eligibility: {
              en: "10+2 (Science)",
              ta: "12-ஆம் வகுப்பு",
              ml: "പ്ലസ് ടു",
            },
            fee: 36000,
            availability: "Open",
            details: {
              learn: { en: "", ta: "", ml: "" },
              career: { en: "", ta: "", ml: "" },
              feeStructure: { en: "", ta: "", ml: "" },
              admission: { en: "", ta: "", ml: "" },
            },
          },
          {
            id: "msc-nutrition",
            name: {
              en: "M.Sc Foods & Nutrition",
              ta: "M.Sc உணவு & ஊட்டச்சத்து",
              ml: "M.Sc Foods & Nutrition",
            },
            degree: "PG",
            duration: { en: "2 Years", ta: "2 ஆண்டுகள்", ml: "2 വർഷം" },
            eligibility: {
              en: "B.Sc Nutrition",
              ta: "B.Sc Nutrition",
              ml: "B.Sc Nutrition",
            },
            fee: 42000,
            availability: "Open",
            details: {
              learn: { en: "", ta: "", ml: "" },
              career: { en: "", ta: "", ml: "" },
              feeStructure: { en: "", ta: "", ml: "" },
              admission: { en: "", ta: "", ml: "" },
            },
          },
        ],
      },
      {
        id: "english",
        label: { en: "English", ta: "ஆங்கிலம்", ml: "ഇംഗ്ലീഷ്" },
        programs: [
          {
            id: "ba-english",
            name: {
              en: "B.A English Literature",
              ta: "B.A ஆங்கில இலக்கியம்",
              ml: "B.A English Literature",
            },
            degree: "UG",
            duration: { en: "3 Years", ta: "3 ஆண்டுகள்", ml: "3 വർഷം" },
            eligibility: { en: "10+2", ta: "12-ஆம் வகுப்பு", ml: "പ്ലസ് ടു" },
            fee: 30000,
            availability: "Open",
            details: {
              learn: { en: "", ta: "", ml: "" },
              career: { en: "", ta: "", ml: "" },
              feeStructure: { en: "", ta: "", ml: "" },
              admission: { en: "", ta: "", ml: "" },
            },
          },
          {
            id: "ma-english",
            name: {
              en: "M.A English Literature",
              ta: "M.A ஆங்கில இலக்கியம்",
              ml: "M.A English Literature",
            },
            degree: "PG",
            duration: { en: "2 Years", ta: "2 ஆண்டுகள்", ml: "2 വർഷം" },
            eligibility: {
              en: "B.A English",
              ta: "B.A English",
              ml: "B.A English",
            },
            fee: 35000,
            availability: "Open",
            details: {
              learn: { en: "", ta: "", ml: "" },
              career: { en: "", ta: "", ml: "" },
              feeStructure: { en: "", ta: "", ml: "" },
              admission: { en: "", ta: "", ml: "" },
            },
          },
        ],
      },
      {
        id: "catering",
        label: {
          en: "Catering Science & Hotel Management",
          ta: "ஹோட்டல் மேலாண்மை",
          ml: "കാറ്ററിംഗ് സയൻസ് & ഹോട്ടൽ മാനേജ്മെന്റ്",
        }, // User used 'ஹோட்டல் மேலாண்மை' for stream in Tamil
        programs: [
          {
            id: "bsc-cshm",
            name: {
              en: "B.Sc Catering Science & Hotel Management",
              ta: "B.Sc கேட்டரிங் சயின்ஸ் & ஹோட்டல் மேலாண்மை",
              ml: "B.Sc Catering Science & Hotel Management",
            },
            degree: "UG",
            duration: { en: "3 Years", ta: "3 ஆண்டுகள்", ml: "3 വർഷം" },
            eligibility: { en: "10+2", ta: "12-ஆம் வகுப்பு", ml: "പ്ലസ് ടു" },
            fee: 45000,
            availability: "Open",
            details: {
              learn: { en: "", ta: "", ml: "" },
              career: { en: "", ta: "", ml: "" },
              feeStructure: { en: "", ta: "", ml: "" },
              admission: { en: "", ta: "", ml: "" },
            },
          },
        ],
      },
      {
        id: "social_work",
        label: {
          en: "Social Work",
          ta: "சமூகப் பணியியல்",
          ml: "സോഷ്യൽ വർക്ക്",
        }, // User used 'சமூகப் பணியியல்'
        programs: [
          {
            id: "msw",
            name: {
              en: "MSW (Master of Social Work)",
              ta: "MSW (சமூகப் பணியில் முதுநிலை)",
              ml: "MSW (Master of Social Work)",
            },
            degree: "PG",
            duration: { en: "2 Years", ta: "2 ஆண்டுகள்", ml: "2 വർഷം" },
            eligibility: {
              en: "Any Degree",
              ta: "ஏதேனும் பட்டம்",
              ml: "ഏതെങ്കിലും ബിരുദം",
            },
            fee: 40000,
            availability: "Open",
            details: {
              learn: { en: "", ta: "", ml: "" },
              career: { en: "", ta: "", ml: "" },
              feeStructure: { en: "", ta: "", ml: "" },
              admission: { en: "", ta: "", ml: "" },
            },
          },
        ],
      },
    ],
    nursing: [
      {
        id: "nursing_stream",
        label: {
          en: "Nursing Programs",
          ta: "நர்சிங் பாடங்கள்",
          ml: "നഴ്‌സിംഗ് കോഴ്‌സുകൾ",
        },
        programs: [
          {
            id: "dip-nursing",
            name: {
              en: "Diploma in Nursing",
              ta: "Diploma in Nursing",
              ml: "Diploma in Nursing",
            },
            degree: "Diploma",
            duration: { en: "3 Years", ta: "3 ஆண்டுகள்", ml: "3 വർഷം" },
            eligibility: {
              en: "10+2 (Any Stream)",
              ta: "12 ஆம் வகுப்பு",
              ml: "പ്ലസ് ടു",
            },
            fee: 45000,
            availability: "Open",
            details: {
              learn: {
                en: "Patient care, anatomy, first aid.",
                ta: "நோயாளி பராமரிப்பு, உடற்கூறியல்.",
                ml: "രോഗി പരിചരണം, അനാട്ടമി.",
              },
              career: {
                en: "Staff Nurse, Home Nurse.",
                ta: "செவிலியர்.",
                ml: "തൊഴിൽ നഴ്സ്.",
              },
              feeStructure: {
                en: "₹45,000 per year.",
                ta: "ஆண்டுக்கு ₹45,000.",
                ml: "പ്രതിവർഷം ₹45,000.",
              },
              admission: {
                en: "Direct admission based on marks.",
                ta: "மதிப்பெண் அடிப்படையில் நேரடி சேர்க்கை.",
                ml: "മാർക്ക് അടിസ്ഥാനത്തിൽ നേരിട്ടുള്ള പ്രവേശനം.",
              },
            },
          },
          {
            id: "bsc-nursing",
            name: {
              en: "B.Sc Nursing",
              ta: "B.Sc Nursing",
              ml: "B.Sc Nursing",
            },
            degree: "UG",
            duration: { en: "4 Years", ta: "4 ஆண்டுகள்", ml: "4 വർഷം" },
            eligibility: {
              en: "10+2 (PCB)",
              ta: "12 ஆம் வகுப்பு (PCB)",
              ml: "പ്ലസ് ടു (PCB)",
            },
            fee: 80000,
            availability: "Limited",
            details: {
              learn: {
                en: "Advanced nursing, critical care.",
                ta: "மேம்பட்ட செவிலியர் பயிற்சி.",
                ml: "നൂതന നഴ്സിംഗ്.",
              },
              career: {
                en: "Hospital Nurse, Nursing Officer.",
                ta: "மருத்துவமனை செவிலியர்.",
                ml: "ഹോസ്പിറ്റൽ നഴ്സ്.",
              },
              feeStructure: {
                en: "₹80,000 per year.",
                ta: "ஆண்டுக்கு ₹80,000.",
                ml: "പ്രതിവർഷം ₹80,000.",
              },
              admission: {
                en: "Merit based + Interview.",
                ta: "மதிப்பெண் + நேர்காணல்.",
                ml: "മെറിറ്റ് + അഭിമുഖം.",
              },
            },
          },
        ],
      },
    ],
    pharmacy: [
      {
        id: "pharm",
        label: { en: "Pharmacy", ta: "மருந்தியல்", ml: "ഫാർമസി" },
        programs: [],
      },
    ],
    physiotherapy: [
      {
        id: "physio",
        label: {
          en: "Physiotherapy",
          ta: "ஃபிசியோதெரபி",
          ml: "ഫിസിയോതെറാപ്പി",
        },
        programs: [],
      },
    ],
    ayurveda: [
      {
        id: "ayur",
        label: { en: "Ayurveda", ta: "ஆயுர்வேதம்", ml: "ആയുർവേദം" },
        programs: [],
      },
    ],
  } as Record<string, Stream[]>,
  stickyBar: {
    brochure: { en: "Brochure", ta: "பிரோஷர்", ml: "ബ്രോഷർ" },
    question: { en: "Ask", ta: "கேள்வி", ml: "ചോദ്യം" },
    callback: { en: "Callback", ta: "அழைப்பு", ml: "കോള്ബാക്ക്" },
    reserve: { en: "Reserve", ta: "உறுதி", ml: "റിസർവ്" },
    viewPrograms: { en: "View Programs", ta: "பாடங்கள்", ml: "കോഴ്‌സുകൾ" },
  },
  drawers: {
    brochure: {
      title: {
        en: "Get the Program Brochure",
        ta: "பாட பிரோஷரை பெறுங்கள்",
        ml: "കോഴ്‌സ് ബ്രോഷർ നേടൂ",
      },
      fields: {
        name: {
          label: {
            en: "Name",
            ta: "பெயர் (விருப்பத் தேர்வு)",
            ml: "പേര് (ഓപ്ഷണൽ)",
          },
          placeholder: { en: "", ta: "", ml: "" },
        },
        mobile: {
          label: { en: "Mobile Number", ta: "கைபேசி எண்", ml: "മൊബൈൽ നമ്പർ" },
          placeholder: { en: "", ta: "", ml: "" },
        },
        email: {
          label: { en: "Email", ta: "மின்னஞ்சல்", ml: "ഇമെയിൽ" },
          placeholder: { en: "", ta: "", ml: "" },
        },
        whatsapp: {
          label: {
            en: "WhatsApp Number (Optional)",
            ta: "WhatsApp எண்",
            ml: "വാട്ട്‌സ്ആപ്പ് നമ്പർ",
          },
          placeholder: { en: "", ta: "", ml: "" },
        },
      },
      submit: {
        en: "Download Now",
        ta: "இப்போது பதிவிறக்கவும்",
        ml: "ഇപ്പോൾ ഡൗൺലോഡ് ചെയ്യൂ",
      },
      success: {
        en: "Brochure downloaded. Need help choosing a program?",
        ta: "பிரோஷர் பதிவிறக்கப்பட்டது. பாடம் தேர்வு செய்ய உதவி வேண்டுமா?",
        ml: "ബ്രോഷർ ഡൗൺലോഡ് ചെയ്തു. കോഴ്‌സ് തിരഞ്ഞെടുക്കാൻ സഹായം വേണോ?",
      },
    },
    question: {
      title: {
        en: "Ask a Question",
        ta: "கேள்வி கேளுங்கள்",
        ml: "ചോദിക്കൂ",
      },
      fields: {
        name: { label: { en: "Name", ta: "பெயர்", ml: "പേര്" } },
        mobile: {
          label: { en: "Mobile Number", ta: "கைபேசி எண்", ml: "മൊബൈൽ നമ്പർ" },
        },
        email: { label: { en: "Email", ta: "மின்னஞ்சல்", ml: "ഇമെയിൽ" } },
        whatsapp: {
          label: {
            en: "WhatsApp Number (Optional)",
            ta: "WhatsApp எண்",
            ml: "വാട്ട്‌സ്ആപ്പ് നമ്പർ",
          },
        },
        question: { label: { en: "Question", ta: "கேள்வி", ml: "ചോദ്യം" } },
      },
      submit: {
        en: "Submit Question",
        ta: "கேள்வியை சமர்ப்பிக்கவும்",
        ml: "ചോദ്യം സമർപ്പിക്കുക",
      },
      success: {
        en: "We will reply via call or WhatsApp.",
        ta: "அழைப்பு அல்லது WhatsApp மூலம் பதிலளிப்போம்.",
        ml: "കോളിലൂടെയോ WhatsApp-ലൂടെയോ മറുപടി നൽകും.",
      },
    },
    callback: {
      title: {
        en: "Speak to an Admission Counsellor",
        ta: "சேர்க்கை ஆலோசகருடன் பேசுங்கள்",
        ml: "അഡ്മിഷൻ കൗൺസിലറുമായി സംസാരിക്കുക",
      },
      fields: {
        name: { label: { en: "Name", ta: "பெயர்", ml: "പേര്" } },
        mobile: {
          label: { en: "Mobile Number", ta: "கைபேசி எண்", ml: "മൊബൈൽ നമ്പർ" },
        },
        email: { label: { en: "Email", ta: "மின்னஞ்சல்", ml: "ഇമെയിൽ" } },
        whatsapp: {
          label: {
            en: "WhatsApp Number (Optional)",
            ta: "WhatsApp எண்",
            ml: "വാട്ട്‌സ്ആപ്പ് നമ്പർ",
          },
        },
        time: {
          label: {
            en: "Preferred Time",
            ta: "விருப்பமான நேரம்",
            ml: "അനുയോജ്യമായ സമയം",
          },
        },
      },
      submit: {
        en: "Request Callback",
        ta: "அழைப்பை கோருங்கள்",
        ml: "കോള്ബാക്ക് അഭ്യർത്ഥിക്കുക",
      },
      success: {
        en: "Counsellor will call within 24 hours.",
        ta: "ஆலோசகர் 24 மணி நேரத்தில் தொடர்பு கொள்வார்.",
        ml: "കൗൺസിലർ 24 മണിക്കൂറിനുള്ളിൽ വിളിക്കും.",
      },
    },
    reserve: {
      title: {
        en: "Reserve Your Seat",
        ta: "உங்கள் இடத்தை உறுதி செய்யுங்கள்",
        ml: "നിങ്ങളുടെ സീറ്റ് ഉറപ്പാക്കൂ",
      },
      summary: {
        program: { en: "Program", ta: "பாடம்", ml: "കോഴ്സ്" },
        fee: {
          en: "Blocking Fee",
          ta: "முன்பதிவு கட்டணம்",
          ml: "ബുക്കിംഗ് ഫീസ്",
        },
      },
      fields: {
        name: { label: { en: "Name", ta: "பெயர்", ml: "പേര്" } },
        mobile: {
          label: { en: "Mobile Number", ta: "கைபேசி எண்", ml: "മൊബൈൽ നമ്പർ" },
        },
        email: { label: { en: "Email", ta: "மின்னஞ்சல்", ml: "ഇമെയിൽ" } },
        whatsapp: {
          label: {
            en: "WhatsApp Number (Optional)",
            ta: "WhatsApp எண்",
            ml: "വാട്ട്‌സ്ആപ്പ് നമ്പർ",
          },
        },
      },
      submit: {
        en: "Pay ${amount} & Reserve Seat",
        ta: "${amount} செலுத்தி இடத்தை உறுதி செய்யுங்கள்",
        ml: "${amount} അടച്ച് സീറ്റ് ഉറപ്പാക്കൂ",
      },
      helper: {
        en: "Amount will be adjusted in final admission fees.",
        ta: "இந்த தொகை இறுதி சேர்க்கை கட்டணத்தில் கழிக்கப்படும்.",
        ml: "ഈ തുക അന്തിമ അഡ്മിഷൻ ഫീസിൽ ക്രമീകരിക്കും.",
      },
      success: {
        message: {
          en: "Your seat has been successfully reserved.",
          ta: "உங்கள் இடம் வெற்றிகரமாக உறுதி செய்யப்பட்டுள்ளது.",
          ml: "നിങ്ങളുടെ സീറ്റ് വിജയകരമായി റിസർവ് ചെയ്തു.",
        },
      },
    },
  },
};
