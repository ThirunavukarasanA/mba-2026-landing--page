import { Language } from '../types';

export const translations = {
    en: {
        // Global
        lang_name: "English",
        // Entry
        entry_heading: "Admissions 2026 – Explore Courses",
        entry_subtext: "View course details, fees and eligibility before taking the next step.",
        select_course_label: "Select a Course",
        view_course_btn: "View Course Details",
        get_started_heading: "Admissions 2026 – Get Started",
        get_started_subtext: "Choose how you would like to proceed. You can change this later.",

        // Course Details
        course_details_heading: "Course Details",
        download_brochure: "Download Brochure",
        talk_counsellor: "Talk to Admission Counsellor",
        block_seat: "Block My Seat",

        // Enquiry Form
        enq_heading: "Get Guidance from Our Counsellor",
        enq_name_label: "Student Name",
        enq_mobile_label: "Mobile Number",
        enq_time_label: "Preferred Contact Time (Optional)",
        enq_submit_btn: "Request Callback",
        enq_success: "Thank you! Our admissions counsellor will contact you shortly.",

        // Seat Blocking - General
        sb_continue: "Continue",
        sb_proceed_payment: "Proceed to Payment",

        // SB-01
        sb01_heading: "Confirm Your Course Details",

        // SB-02
        sb02_heading: "Student Details",
        sb02_name: "Student Name",
        sb02_mobile: "Mobile Number",
        sb02_email: "Email ID",
        sb02_gender: "Gender",
        sb02_gender_options: { male: "Male", female: "Female", other: "Other" },
        sb02_parent_section: "Parent / Guardian Details (Optional)",
        sb02_parent_name: "Name",
        sb02_parent_mobile: "Mobile Number",

        // SB-03
        sb03_heading: "Pay to Block Your Seat",
        sb03_helper: "This amount will be adjusted in your final admission fees.",
        sb03_declaration: "I confirm that the information provided is correct.",
        sb03_pay_btn: "Pay ₹10,000 & Block Seat",
        sb03_talk_btn: "Talk to Counsellor Before Paying",

        // SB-04
        sb04_success: "Your seat has been successfully blocked!",
        sb04_download_ack: "Download Acknowledgement",
        sb04_contact_counsellor: "Contact Assigned Counsellor",
        sb04_complete_later: "Complete Remaining Details Later",

        // Labels
        duration: "Duration",
        eligibility: "Eligibility Criteria",
        startDate: "Start Date",
        semesterFees: "Semester Fees",
        seatBlockingFee: "Seat Blocking Fee",
    },
    ta: {
        lang_name: "தமிழ்",
        entry_heading: "2026 சேர்க்கை – பாடங்களை அறியுங்கள்",
        entry_subtext: "அடுத்த கட்டத்திற்கு முன் பாட விவரங்கள், கட்டணம் மற்றும் தகுதியை பார்க்கவும்.",
        select_course_label: "பாடத்தை தேர்வு செய்யவும்",
        view_course_btn: "பாட விவரங்களை காண்க",
        get_started_heading: "2026 சேர்க்கை – தொடங்குங்கள்",
        get_started_subtext: "நீங்கள் எவ்வாறு தொடர விரும்புகிறீர்கள் என்பதை தேர்வு செய்யுங்கள். பின்னர் மாற்றலாம்.",

        course_details_heading: "பாட விவரங்கள்",
        download_brochure: "பிரோஷரை பதிவிறக்கவும்",
        talk_counsellor: "சேர்க்கை ஆலோசகரிடம் பேசுங்கள்",
        block_seat: "என் இடத்தை உறுதி செய்யுங்கள்",

        enq_heading: "எங்கள் ஆலோசகரிடமிருந்து வழிகாட்டல் பெறுங்கள்",
        enq_name_label: "மாணவர் பெயர்",
        enq_mobile_label: "கைபேசி எண்",
        enq_time_label: "விருப்பமான நேரம் (விருப்பம்)",
        enq_submit_btn: "அழைப்பை கோருங்கள்",
        enq_success: "நன்றி! எங்கள் சேர்க்கை ஆலோசகர் விரைவில் தொடர்பு கொள்வார்.",

        sb_continue: "தொடரவும்",
        sb_proceed_payment: "கட்டணத்திற்கு செல்லவும்",
        sb01_heading: "உங்கள் பாட விவரங்களை உறுதிப்படுத்தவும்",

        sb02_heading: "மாணவர் விவரங்கள்",
        sb02_name: "மாணவர் பெயர்",
        sb02_mobile: "கைபேசி எண்",
        sb02_email: "மின்னஞ்சல்",
        sb02_gender: "பாலினம்",
        sb02_gender_options: { male: "ஆண்", female: "பெண்", other: "பிற" },
        sb02_parent_section: "பெற்றோர் / பாதுகாவலர் விவரங்கள்",
        sb02_parent_name: "பெயர்",
        sb02_parent_mobile: "கைபேசி எண்",

        sb03_heading: "உங்கள் இடத்தை உறுதி செய்ய கட்டணம் செலுத்துங்கள்",
        sb03_helper: "இந்த தொகை இறுதி சேர்க்கை கட்டணத்தில் கழிக்கப்படும்.",
        sb03_declaration: "வழங்கிய தகவல்கள் சரியானவை என உறுதிப்படுத்துகிறேன்.",
        sb03_pay_btn: "₹10,000 செலுத்தி இடத்தை உறுதி செய்யுங்கள்",
        sb03_talk_btn: "கட்டணத்திற்கு முன் ஆலோசகரிடம் பேசுங்கள்",

        sb04_success: "உங்கள் இடம் வெற்றிகரமாக உறுதி செய்யப்பட்டுள்ளது!",
        sb04_download_ack: "ஒப்புகையை பதிவிறக்கவும்", // Approximated based on context, sticking to EN structure
        sb04_contact_counsellor: "நியமிக்கப்பட்ட ஆலோசகரை தொடர்பு கொள்ளவும்",
        sb04_complete_later: "மீதமுள்ள விவரங்களை பின்னர் பூர்த்தி செய்யவும்",

        duration: "கால அளவு",
        eligibility: "தகுதி வரம்பு",
        startDate: "தொடக்க தேதி",
        semesterFees: "செமஸ்டர் கட்டணம்",
        seatBlockingFee: "இட ஒதுக்கீடு கட்டணம்",
    },
    ml: {
        lang_name: "മലയാളം",
        entry_heading: "പ്രവേശനം 2026 – കോഴ്‌സുകൾ അറിയുക",
        entry_subtext: "അടുത്ത ഘട്ടത്തിലേക്ക് പോകുന്നതിന് മുമ്പ് കോഴ്‌സ് വിവരങ്ങൾ, ഫീസ്, യോഗ്യത പരിശോധിക്കുക.",
        select_course_label: "കോഴ്‌സ് തിരഞ്ഞെടുക്കുക",
        view_course_btn: "കോഴ്‌സ് വിവരങ്ങൾ കാണുക",
        get_started_heading: "പ്രവേശനം 2026 – ആരംഭിക്കൂ",
        get_started_subtext: "നിങ്ങൾ എങ്ങനെ മുന്നോട്ട് പോകണമെന്ന് തിരഞ്ഞെടുക്കൂ. പിന്നീട് മാറ്റാം.",

        course_details_heading: "കോഴ്‌സ് വിവരങ്ങൾ",
        download_brochure: "ബ്രോഷർ ഡൗൺലോഡ് ചെയ്യൂ",
        talk_counsellor: "അഡ്മിഷൻ കൗൺസിലറുമായി സംസാരിക്കുക",
        block_seat: "എന്റെ സീറ്റ് ബുക്ക് ചെയ്യൂ",

        enq_heading: "ഞങ്ങളുടെ കൗൺസിലറിൽ നിന്ന് മാർഗ്ഗനിർദേശം നേടൂ",
        enq_name_label: "വിദ്യാർത്ഥിയുടെ പേര്",
        enq_mobile_label: "മൊബൈൽ നമ്പർ",
        enq_time_label: "ഇഷ്ടപ്പെട്ട സമയം (ഐച്ഛികം)",
        enq_submit_btn: "കോള്ബാക്ക് അഭ്യർത്ഥിക്കുക",
        enq_success: "നന്ദി! ഞങ്ങളുടെ അഡ്മിഷൻ കൗൺസിലർ ഉടൻ ബന്ധപ്പെടും.",

        sb_continue: "തുടരുക",
        sb_proceed_payment: "പേയ്മെന്റിലേക്ക് പോവുക",
        sb01_heading: "നിങ്ങളുടെ കോഴ്‌സ് വിവരങ്ങൾ സ്ഥിരീകരിക്കുക",

        sb02_heading: "വിദ്യാർത്ഥി വിവരങ്ങൾ",
        sb02_name: "വിദ്യാർത്ഥിയുടെ പേര്",
        sb02_mobile: "മൊബൈൽ നമ്പർ",
        sb02_email: "ഇമെയിൽ",
        sb02_gender: "ലിംഗഭേദം",
        sb02_gender_options: { male: "പുരുഷൻ", female: "സ്ത്രീ", other: "മറ്റ്" },
        sb02_parent_section: "രക്ഷിതാവിന്റെ വിവരങ്ങൾ (ഐച്ഛികം)",
        sb02_parent_name: "പേര്",
        sb02_parent_mobile: "മൊബൈൽ നമ്പർ",

        sb03_heading: "സീറ്റ് ഉറപ്പാക്കാൻ പണമടയ്ക്കൂ",
        sb03_helper: "ഈ തുക അന്തിമ അഡ്മിഷൻ ഫീസിൽ ക്രമീകരിക്കും.",
        sb03_declaration: "നൽകിയ വിവരങ്ങൾ ശരിയാണെന്ന് ഞാൻ സ്ഥിരീകരിക്കുന്നു.",
        sb03_pay_btn: "₹10,000 അടച്ച് സീറ്റ് ബുക്ക് ചെയ്യൂ",
        sb03_talk_btn: "പേയ്മെന്റിന് മുമ്പ് കൗൺസിലറുമായി സംസാരിക്കുക",

        sb04_success: "നിങ്ങളുടെ സീറ്റ് വിജയകരമായി ബുക്ക് ചെയ്തു!",
        sb04_download_ack: "രസീത് ഡൗൺലോഡ് ചെയ്യൂ",
        sb04_contact_counsellor: "കൗൺസിലറെ ബന്ധപ്പെടുക",
        sb04_complete_later: "വിശദാംശങ്ങൾ പിന്നീട് നൽകാം",

        duration: "കാലയളവ്",
        eligibility: "യോഗ്യത",
        startDate: "തുടങ്ങുന്ന ദിവസം",
        semesterFees: "സെമസ്റ്റർ ഫീസ്",
        seatBlockingFee: "സീറ്റ് ബുക്കിംഗ് ഫീസ്",
    }
};

export const courses: { id: string, name: string }[] = [
    { id: 'mba', name: 'Master of Business Administration (MBA)' },
    { id: 'mca', name: 'Master of Computer Applications (MCA)' },
    { id: 'bsc-cs', name: 'B.Sc Computer Science' },
]; // Placeholder courses
