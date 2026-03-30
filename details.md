# RVS CAS – UG ADMISSIONS 2026

## SINGLE‑PAGE MOBILE‑FIRST AD LANDING (FINAL MASTER DOCUMENT)

---

## 1. WHAT ARE WE BUILDING (SCOPE – VERY CLEAR)

We are building **ONE SINGLE‑PAGE, MOBILE‑FIRST LANDING PAGE** for **UNDERGRADUATE (UG) ADMISSIONS 2026**.

This landing page will be used for **paid ads traffic** (Meta / Google / YouTube / WhatsApp).

On this **single page**, a student or parent must be able to:

* Understand UG programs offered (not MBA‑specific)
* See course‑level details (fees, eligibility, duration, start date)
* Download a brochure
* Ask a question
* Request a callback
* Pay advance fees to **reserve a seat**, if applicable for that UG course

❌ No MBA‑specific language
❌ No multi‑page flow
❌ No form‑heavy admission journey

---

## 2. WHY WE ARE DOING IT THIS WAY

Current UG admission journeys fail because:

* They look like administrative portals, not decision pages
* They ask too many questions before trust is built
* They are not optimised for mobile or ads traffic

This new approach works because:

* UG students + parents need clarity before commitment
* Information is visible upfront
* Actions are optional, contextual, and user‑driven
* Payment never feels forced

---

## 3. DESIGN & VISUAL DIRECTION (REFERENCE: rvscas.ac.in)

The landing page must visually **align with the existing RVS CAS website**.

### Visual Guidelines (High‑level)

* Use **RVS CAS brand colours** as primary palette
* Light background, academic and trustworthy tone
* Clean typography (same or closest available to rvscas.ac.in)
* Buttons, cards, and sections should feel consistent with the main site

⚠️ Dev + Design note:
Exact colours, fonts, and spacing should be **lifted from rvscas.ac.in** so this page feels like a natural extension, not a separate campaign site.

---

## 4. OVERALL UX STRUCTURE (ABSOLUTE CLARITY)

✔️ SINGLE PAGE ONLY
✔️ MOBILE‑FIRST (PRIMARY DESIGN TARGET)
✔️ Vertical scroll
✔️ Sticky bottom action bar (mobile)
✔️ Slide‑up drawers for actions

Desktop is **responsive enhancement**, not the base.

We are using:

* Sections → for information
* Accordions → for long UG course details
* Drawers → for user actions

---

## 5. PAGE STRUCTURE – STEP BY STEP

---

### SECTION 1: HEADER

**Elements**

* RVS CAS logo (left)
* Language tabs (right)

**Language Tabs**
English | தமிழ் | മലയാളം

Rules:

* Switching language changes text only
* No page reload
* No loss of user input

---

### SECTION 2: HERO (UG / PG AD FOCUSED – GENERIC)

**Heading**

* EN: Admissions Open – 2026
* TA: 2026 சேர்க்கை திறந்துள்ளது
* ML: 2026 പ്രവേശനം തുറന്നു

**Subtext**

* EN: Explore programs across Nursing, Arts & Science, Pharmacy, Ayurveda, Physiotherapy and Management.
* TA: நர்சிங், கலை & அறிவியல், மருந்தியல், ஆயுர்வேதம், ஃபிசியோதெரபி மற்றும் மேலாண்மை பாடங்களை ஆராயுங்கள்.
* ML: നഴ്‌സിംഗ്, ആർട്സ് & സയൻസ്, ഫാർമസി, ആയുർവേദം, ഫിസിയോതെറാപ്പി, മാനേജ്മെന്റ് കോഴ്‌സുകൾ പരിശോധിക്കുക.

**Primary CTA**

* EN: View Programs
* TA: பாடங்களை காண்க
* ML: കോഴ്‌സുകൾ കാണുക

---

### SECTION 3: PROGRAM CATEGORY SELECTOR (KEY UX CHANGE)

This section replaces **multiple accordions per course**.

**UI Pattern**

* Horizontal tabs on desktop
* Swipeable tabs on mobile

**Program Categories (Tabs)**

* EN: College of Nursing

* TA: நர்சிங் கல்லூரி

* ML: കോളേജ് ഓഫ് നഴ്‌സിംഗ്

* EN: Arts & Science

* TA: கலை & அறிவியல்

* ML: ആർട്സ് & സയൻസ്

* EN: College of Pharmaceutical Sciences

* TA: மருந்தியல் கல்லூரி

* ML: ഫാർമസ്യൂട്ടിക്കൽ സയൻസസ് കോളേജ്

* EN: College of Physiotherapy

* TA: ஃபிசியோதெரபி கல்லூரி

* ML: കോളേജ് ഓഫ് ഫിസിയോതെറാപ്പി

* EN: Ayurveda

* TA: ஆயுர்வேதம்

* ML: ആയുർവേദം

* EN: Management

* TA: மேலாண்மை

* ML: മാനേജ്മെന്റ്

---

### SECTION 4: PROGRAM LIST + DETAILS (SINGLE-GLANCE VIEW)

When a **category tab** is selected, show a **program table / card list**.

This is **NOT accordion-per-course**.

Each program row/card shows ALL key info at once:

**Fields shown per program**

* Program Name
* Degree Level (Diploma / UG / PG)
* Duration
* Eligibility (short)
* Fee (label + amount)
* Seat Availability (Open / Limited / Full)

---

#### Example – College of Nursing

* Diploma in Nursing | Diploma | 2 Years | 10+2 | ₹X | Open
* B.Sc Nursing | UG | 4 Years | PCB | ₹X | Limited
* M.Sc Nursing | PG | 2 Years | B.Sc Nursing | ₹X | Open

(All rows clickable)

---

### SECTION 5: PROGRAM DETAIL PANEL (INLINE EXPAND, NOT ACCORDION HELL)

When user taps a **program row**:

* Expand inline (or slide-up on mobile)
* Show full details in ONE VIEW

**Details shown together (no separate tabs):**

* What you will study
* Career opportunities
* Fee structure & refunds
* Admission process

Single scroll. No jumping between accordions.

---

### SECTION 6: STICKY ACTION BAR (CONTEXT AWARE)

Sticky bar updates based on **selected program**.

Buttons:

* Download Brochure (program-specific)
* Ask a Question
* Request Callback
* Reserve Seat ₹{amount} (only if available)

---

## 6. ACTION DRAWERS (SAME PAGE, SLIDE-UP)

(SAME PAGE, SLIDE‑UP)

---

### DRAWER A: DOWNLOAD BROCHURE

**Title**

* EN: Get the UG Program Brochure
* TA: UG பாட பிரோஷரை பெறுங்கள்
* ML: UG കോഴ്‌സ് ബ്രോഷർ നേടൂ

**Fields**

* Mobile Number (Required)
* Name (Optional)

**Submit CTA**

* EN: Download Now
* TA: இப்போது பதிவிறக்கவும்
* ML: ഇപ്പോൾ ഡൗൺലോഡ് ചെയ്യൂ

**Confirmation**

* EN: Brochure downloaded. Need help choosing a program?
* TA: பிரோஷர் பதிவிறக்கப்பட்டது. பாடம் தேர்வு செய்ய உதவி வேண்டுமா?
* ML: ബ്രോഷർ ഡൗൺലോഡ് ചെയ്തു. കോഴ്‌സ് തിരഞ്ഞെടുക്കാൻ സഹായം വേണോ?

---

### DRAWER B: ASK A QUESTION

**Title**

* EN: Ask a Question About UG Admissions
* TA: UG சேர்க்கை பற்றி கேள்வி கேளுங்கள்
* ML: UG പ്രവേശനത്തെ കുറിച്ച് ചോദിക്കൂ

**Fields**

* Name
* Mobile Number
* Question

**Submit CTA**

* EN: Submit Question
* TA: கேள்வியை சமர்ப்பிக்கவும்
* ML: ചോദ്യം സമർപ്പിക്കുക

---

### DRAWER C: REQUEST CALLBACK

**Title**

* EN: Speak to an Admission Counsellor
* TA: சேர்க்கை ஆலோசகருடன் பேசுங்கள்
* ML: അഡ്മിഷൻ കൗൺസിലറുമായി സംസാരിക്കുക

**Fields**

* Name
* Mobile Number
* Preferred Time (Optional)

**Submit CTA**

* EN: Request Callback
* TA: அழைப்பை கோருங்கள்
* ML: കോള്ബാക്ക് അഭ്യർത്ഥിക്കുക

---

### DRAWER D: RESERVE SEAT (COURSE‑DEPENDENT)

**Title**

* EN: Reserve Your Seat
* TA: உங்கள் இடத்தை உறுதி செய்யுங்கள்
* ML: നിങ്ങളുടെ സീറ്റ് ഉറപ്പാക്കൂ

**Summary (Read‑only)**

* UG Program Name
* Start Date
* Seat Blocking / Initial Fee

**Fields**

* Name
* Mobile Number
* Email

**CTA**

* EN: Pay ₹{amount} & Reserve Seat
* TA: ₹{amount} செலுத்தி இடத்தை உறுதி செய்யுங்கள்
* ML: ₹{amount} അടച്ച് സീറ്റ് ഉറപ്പാക്കൂ

**Helper Text**

* EN: Amount will be adjusted in final admission fees.
* TA: இந்த தொகை இறுதி சேர்க்கை கட்டணத்தில் கழிக்கப்படும்.
* ML: ഈ തുക അന്തിമ അഡ്മിഷൻ ഫീസിൽ ക്രമീകരിക്കും.

---

## 7. PAYMENT SUCCESS (INLINE)

**Message**

* EN: Your seat has been successfully reserved.
* TA: உங்கள் இடம் வெற்றிகரமாக உறுதி செய்யப்பட்டுள்ளது.
* ML: നിങ്ങളുടെ സീറ്റ് വിജയകരമായി റിസർവ് ചെയ്തു.

**Next Actions**

* Download Receipt
* Talk to Assigned Counsellor
* Complete Admission Later

---

## 8. NON‑NEGOTIABLE RULES

* Mobile‑first design & build
* Single page only
* No MBA‑specific copy anywhere
* No stepper or multi‑page forms
* No asking address, DOB, parent details
* All fees & availability are backend‑driven
* Language switching must not reset state

---

## END OF FINAL MASTER DOCUMENT


Yes. Below is a **clean, UX-ready TABLE**, written in **ALL 3 LANGUAGES**, that you can **directly paste into Google Docs / Excel / Notion** and also hand to the dev team.

This table is **exactly what should appear after user selects
“College of Arts & Science”**.

No “School of”. No confusion.

---

# 📘 **College of Arts & Science – Programs Table**

---

## 🟦 ENGLISH

| Specialisation                      | Programs Offered                                                                                                                                                                                                                                      |
| ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Computer Science & Applications     | B.Sc Artificial Intelligence & Machine Learning<br>B.Sc Data Science<br>B.Sc Computer Science<br>B.Sc Information Technology<br>BCA<br>M.Sc Computer Science<br>MCA                                                                                   |
| Electronics                         | B.Sc Electronics & Communication<br>B.Sc Internet of Things<br>M.Sc Applied Electronics                                                                                                                                                               |
| Commerce                            | B.Com<br>B.Com (Computer Applications)<br>B.Com (Information Technology)<br>B.Com (Accounting & Finance)<br>B.Com (Professional Accounting)<br>B.Com (Business Analytics)<br>M.Com<br>M.Com (International Business)<br>M.Com (Computer Applications) |
| Management                          | BBA (Business Administration)<br>BBA (Computer Application)<br>BBA (Logistics)<br>MBA                                                                                                                                                                 |
| Biochemistry                        | B.Sc Biochemistry<br>M.Sc Biochemistry                                                                                                                                                                                                                |
| Biotechnology                       | B.Sc Biotechnology<br>M.Sc Biotechnology                                                                                                                                                                                                              |
| Microbiology                        | B.Sc Microbiology<br>M.Sc Microbiology                                                                                                                                                                                                                |
| Mathematics                         | B.Sc Mathematics<br>M.Sc Mathematics                                                                                                                                                                                                                  |
| Psychology                          | B.Sc Psychology                                                                                                                                                                                                                                       |
| Food & Nutrition                    | B.Sc Nutrition & Dietetics<br>M.Sc Foods & Nutrition                                                                                                                                                                                                  |
| English                             | B.A English Literature<br>M.A English Literature                                                                                                                                                                                                      |
| Catering Science & Hotel Management | B.Sc Catering Science & Hotel Management                                                                                                                                                                                                              |
| Social Work                         | MSW (Master of Social Work)                                                                                                                                                                                                                           |
| Languages                           | Tamil<br>Hindi<br>Malayalam<br>French                                                                                                                                                                                                                 |

---

## 🟦 TAMIL (தமிழ்)

| சிறப்பு துறை                 | வழங்கப்படும் பாடங்கள்                                                                                                                                                                                                      |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| கணினி அறிவியல் & பயன்பாடுகள் | B.Sc செயற்கை நுண்ணறிவு & மெஷின் லேர்னிங்<br>B.Sc தரவு அறிவியல்<br>B.Sc கணினி அறிவியல்<br>B.Sc தகவல் தொழில்நுட்பம்<br>BCA<br>M.Sc கணினி அறிவியல்<br>MCA                                                                     |
| எலக்ட்ரானிக்ஸ்               | B.Sc எலக்ட்ரானிக்ஸ் & தொடர்பியல்<br>B.Sc Internet of Things<br>M.Sc பயன்பாட்டு எலக்ட்ரானிக்ஸ்                                                                                                                              |
| வாணிகம்                      | B.Com<br>B.Com (கணினி பயன்பாடுகள்)<br>B.Com (தகவல் தொழில்நுட்பம்)<br>B.Com (கணக்கியல் & நிதி)<br>B.Com (தொழில்முறை கணக்கியல்)<br>B.Com (வணிக பகுப்பாய்வு)<br>M.Com<br>M.Com (சர்வதேச வாணிகம்)<br>M.Com (கணினி பயன்பாடுகள்) |
| மேலாண்மை                     | BBA (வணிக மேலாண்மை)<br>BBA (கணினி பயன்பாடு)<br>BBA (லாஜிஸ்டிக்ஸ்)<br>MBA                                                                                                                                                   |
| உயிர்வேதியியல்               | B.Sc உயிர்வேதியியல்<br>M.Sc உயிர்வேதியியல்                                                                                                                                                                                 |
| உயிர்தொழில்நுட்பம்           | B.Sc உயிர்தொழில்நுட்பம்<br>M.Sc உயிர்தொழில்நுட்பம்                                                                                                                                                                         |
| நுண்ணுயிரியல்                | B.Sc நுண்ணுயிரியல்<br>M.Sc நுண்ணுயிரியல்                                                                                                                                                                                   |
| கணிதம்                       | B.Sc கணிதம்<br>M.Sc கணிதம்                                                                                                                                                                                                 |
| உளவியல்                      | B.Sc உளவியல்                                                                                                                                                                                                               |
| உணவு & ஊட்டச்சத்து           | B.Sc ஊட்டச்சத்து & டயட்டெடிக்ஸ்<br>M.Sc உணவு & ஊட்டச்சத்து                                                                                                                                                                 |
| ஆங்கிலம்                     | B.A ஆங்கில இலக்கியம்<br>M.A ஆங்கில இலக்கியம்                                                                                                                                                                               |
| ஹோட்டல் மேலாண்மை             | B.Sc கேட்டரிங் சயின்ஸ் & ஹோட்டல் மேலாண்மை                                                                                                                                                                                  |
| சமூகப் பணியியல்              | MSW (சமூகப் பணியில் முதுநிலை)                                                                                                                                                                                              |
| மொழிகள்                      | தமிழ்<br>இந்தி<br>மலையாளம்<br>பிரெஞ்சு                                                                                                                                                                                     |

---

## 🟦 MALAYALAM (മലയാളം)

| പ്രത്യേകവിഭാഗം                         | ലഭ്യമായ കോഴ്‌സുകൾ                                                                                                                                                                                                                                     |
| -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| കമ്പ്യൂട്ടർ സയൻസ് & ആപ്ലിക്കേഷൻസ്      | B.Sc Artificial Intelligence & Machine Learning<br>B.Sc Data Science<br>B.Sc Computer Science<br>B.Sc Information Technology<br>BCA<br>M.Sc Computer Science<br>MCA                                                                                   |
| ഇലക്ട്രോണിക്സ്                         | B.Sc Electronics & Communication<br>B.Sc Internet of Things<br>M.Sc Applied Electronics                                                                                                                                                               |
| കൊമേഴ്സ്                               | B.Com<br>B.Com (Computer Applications)<br>B.Com (Information Technology)<br>B.Com (Accounting & Finance)<br>B.Com (Professional Accounting)<br>B.Com (Business Analytics)<br>M.Com<br>M.Com (International Business)<br>M.Com (Computer Applications) |
| മാനേജ്മെന്റ്                           | BBA (Business Administration)<br>BBA (Computer Application)<br>BBA (Logistics)<br>MBA                                                                                                                                                                 |
| ബയോകെമിസ്ട്രി                          | B.Sc Biochemistry<br>M.Sc Biochemistry                                                                                                                                                                                                                |
| ബയോടെക്നോളജി                           | B.Sc Biotechnology<br>M.Sc Biotechnology                                                                                                                                                                                                              |
| മൈക്രോബയോളജി                           | B.Sc Microbiology<br>M.Sc Microbiology                                                                                                                                                                                                                |
| ഗണിതം                                  | B.Sc Mathematics<br>M.Sc Mathematics                                                                                                                                                                                                                  |
| സൈക്കോളജി                              | B.Sc Psychology                                                                                                                                                                                                                                       |
| ഫുഡ് & ന്യൂട്രിഷൻ                      | B.Sc Nutrition & Dietetics<br>M.Sc Foods & Nutrition                                                                                                                                                                                                  |
| ഇംഗ്ലീഷ്                               | B.A English Literature<br>M.A English Literature                                                                                                                                                                                                      |
| കാറ്ററിംഗ് സയൻസ് & ഹോട്ടൽ മാനേജ്മെന്റ് | B.Sc Catering Science & Hotel Management                                                                                                                                                                                                              |
| സോഷ്യൽ വർക്ക്                          | MSW (Master of Social Work)                                                                                                                                                                                                                           |
| ഭാഷകൾ                                  | തമിഴ്<br>ഹിന്ദി<br>മലയാളം<br>ഫ്രഞ്ച്                                                                                                                                                                                 