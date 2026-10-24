var C = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // lib/content.ts
  var content_exports = {};
  __export(content_exports, {
    ADVISED: () => ADVISED,
    AREAS: () => AREAS,
    CLIENTS: () => CLIENTS,
    FORMED: () => FORMED,
    MEMBERSHIPS: () => MEMBERSHIPS,
    NAV: () => NAV,
    PHOTOS: () => PHOTOS,
    ROLES: () => ROLES,
    SITE: () => SITE,
    TIMELINE: () => TIMELINE,
    t: () => t
  });
  var t = (b, l) => b[l];
  var SITE = {
    name: { ar: "المؤسسة القانونية الدولية I.L.F", en: "I.L.F International Legal Firm" },
    founder: { ar: "د. هشام عبدالله الحناوي", en: "Dr. Hesham Abdullah El-Henawy" },
    phone: "01220778988",
    wa: "201220778988",
    email: "hhenawy2@yahoo.com",
    address: { ar: "مؤسسة قانونية دولية في جمهورية مصر العربية", en: "An international law firm in the Arab Republic of Egypt" }
  };
  var NAV = [["", { ar: "الرئيسية", en: "Home" }], ["about", { ar: "عن المؤسسة", en: "About" }], ["practice-areas", { ar: "الخدمات القانونية", en: "Practice areas" }], ["team", { ar: "المؤسس", en: "Founder" }], ["experience", { ar: "الخبرات", en: "Experience" }], ["clients", { ar: "العملاء", en: "Clients" }], ["ai-assistant", { ar: "المساعد الذكي", en: "AI assistant" }], ["contact", { ar: "تواصل", en: "Contact" }]];
  var PHOTOS = [
    { src: "img/founder-1.jpg", cap: { ar: "د. هشام الحناوي", en: "Dr. Hesham El-Henawy" } },
    { src: "img/founder-2.jpg", cap: { ar: "د. هشام الحناوي", en: "Dr. Hesham El-Henawy" } },
    { src: "img/founder-3.jpg", cap: { ar: "د. هشام الحناوي", en: "Dr. Hesham El-Henawy" } },
    { src: "img/founder-4.jpg", cap: { ar: "د. هشام الحناوي", en: "Dr. Hesham El-Henawy" } },
    { src: "img/founder-5.jpg", cap: { ar: "د. هشام الحناوي", en: "Dr. Hesham El-Henawy" } }
  ];
  var AREAS = [
    { id: "corp", t: { ar: "تأسيس الشركات", en: "Company formation" }, s: { ar: "من التأسيس إلى التحويل والتصفية والاندماج.", en: "From incorporation to conversion, liquidation and mergers." }, d: [{ ar: "تأسيس وتعديل وتحويل الشركات بكافة أنواعها", en: "Incorporating, amending and converting companies of all types" }, { ar: "التقييم والدمج والاستحواذ", en: "Valuation, mergers and acquisitions" }, { ar: "إجراءات البورصة والرقابة المالية وطرح الأسهم للاكتتاب العام", en: "Stock exchange and FRA procedures, public offerings" }] },
    { id: "contracts", t: { ar: "العقود المحلية والدولية", en: "Local & international contracts" }, s: { ar: "صياغة ومتابعة تنفيذ العقود بكافة أنواعها.", en: "Drafting and following through contracts of every kind." }, d: [{ ar: "عقود BOO وBOT وBOOT وعقود الفيديك", en: "BOO, BOT, BOOT and FIDIC contracts" }, { ar: "عقود نقل التكنولوجيا", en: "Technology transfer contracts" }, { ar: "صياغة اللوائح والتعليمات والقرارات", en: "Drafting regulations, instructions and resolutions" }] },
    { id: "arb", t: { ar: "التحكيم", en: "Arbitration" }, s: { ar: "التحكيم الدولي والإقليمي بأنواعه.", en: "International and regional arbitration of all kinds." }, d: [{ ar: "قضايا التحكيم الدولي والمدني والتجاري", en: "International, civil and commercial arbitration cases" }, { ar: "التحكيم الهندسي", en: "Engineering arbitration" }] },
    { id: "inv", t: { ar: "الاستثمار", en: "Investment" }, s: { ar: "منازعات الاستثمار والتفاوض والوساطة.", en: "Investment disputes, negotiation and mediation." }, d: [{ ar: "تمثيل المستثمرين أمام الهيئة العامة للاستثمار واللجنة الوزارية لفض منازعات الاستثمار", en: "Representing investors before GAFI and the ministerial committee for investment disputes" }] },
    { id: "opp", t: { ar: "فرص استثمارية", en: "Investment opportunities" }, s: { ar: "فرص تنازل عن شركات ومصانع ومبانٍ يعرضها المكتب على المستثمرين.", en: "Opportunities to take over companies, factories and buildings, presented by the firm to investors." }, d: [{ ar: "عرض فرص التنازل عن الشركات والمصانع والمباني والأصول المتاحة على المستثمرين", en: "Presenting available opportunities to take over companies, factories, buildings and other assets" }, { ar: "الفحص القانوني للأصل: الملكية والالتزامات والتراخيص قبل التعاقد", en: "Legal due diligence on the asset: title, liabilities and licences before contracting" }, { ar: "صياغة عقود التنازل وإتمام إجراءات نقل الملكية", en: "Drafting assignment contracts and completing the transfer of ownership" }] },
    { id: "bank", t: { ar: "الأعمال البنكية", en: "Banking" }, s: { ar: "الضمانات والاعتمادات المستندية.", en: "Guarantees and documentary credits." }, d: [{ ar: "خطابات الضمان", en: "Letters of guarantee" }, { ar: "الاعتمادات المستندية", en: "Documentary credits" }] },
    { id: "lit", t: { ar: "التقاضي وتنفيذ الأحكام", en: "Litigation & enforcement" }, s: { ar: "كافة درجات التقاضي، مدنيًا وتجاريًا وعماليًا.", en: "All court levels: civil, commercial and labour." }, d: [{ ar: "القضايا المدنية والاقتصادية والتجارية والعمالية", en: "Civil, economic, commercial and labour cases" }, { ar: "تنفيذ الأحكام القضائية", en: "Enforcement of judgments" }] },
    { id: "tech", t: { ar: "الملكية الفكرية", en: "Intellectual property" }, s: { ar: "التحول الرقمي والأمن السيبراني والعلامات التجارية.", en: "Digital transformation, cybersecurity and trademarks." }, d: [{ ar: "التحول الرقمي والذكاء الاصطناعي والأمن السيبراني", en: "Digital transformation, AI and cybersecurity" }, { ar: "تسجيل العلامات التجارية والوكالات التجارية", en: "Trademark and commercial agency registration" }] },
    { id: "pro", t: { ar: "صدقة جارية لغير القادرين", en: "Ongoing charity (Sadaqah Jariyah) for those unable to pay" }, s: { ar: "مساعدة قانونية دون أتعاب لمن وقع عليه ظلم ولا يقدر ماديًا.", en: "Free legal help for those who have been wronged and cannot afford it." }, d: [{ ar: "دون أي أتعاب لمن وقع عليه ظلم ولا يملك القدرة المادية", en: "No fees for those who have been wronged and cannot afford a lawyer" }, { ar: "دراسة الحالة وتحديد الإجراء القانوني المناسب والتمثيل فيه", en: "Reviewing the case, choosing the right legal step and representing you in it" }] }
  ];
  var TIMELINE = [
    { t: { ar: "محامٍ بالمكتب المصري للاستشارات وأعمال المحاماة وتأسيس الشركات", en: "Lawyer at the Egyptian Office for Consultancy, Legal Practice and Company Formation" } },
    { t: { ar: "تأسيس المؤسسة القانونية الدولية I.L.F", en: "I.L.F International Legal Firm founded" } },
    { t: { ar: "مستشار قانوني ومحامٍ لشركات وعملاء في قطاعات متنوعة", en: "Legal adviser and lawyer to companies and clients across diverse sectors" } },
    { t: { ar: "محامٍ ووسيط في منازعات الاستثمار أمام الهيئة العامة للاستثمار واللجنة الوزارية", en: "Counsel and mediator in investment disputes before GAFI and the ministerial committee" } },
    { t: { ar: "حاصل على دكتوراه في القانون", en: "Holds a Ph.D. in Law" } }
  ];
  var MEMBERSHIPS = [{ ar: "نقابة المحامين: محامٍ بالنقض والإدارية العليا والدستورية العليا", en: "Bar Association: advocate before the Courts of Cassation, Supreme Administrative and Supreme Constitutional Courts" }, { ar: "محكّم بمركز القاهرة الإقليمي للتحكيم التجاري الدولي", en: "Arbitrator, Cairo Regional Centre for International Commercial Arbitration" }, { ar: "عضو الغرفة المصرية للتجارة الدولية والتحكيم", en: "Member, Egyptian Chamber for International Trade and Arbitration" }, { ar: "عضو اتحاد المحامين العرب", en: "Member, Arab Lawyers Union" }, { ar: "عضو الجمعية المصرية للقانون الدولي", en: "Member, Egyptian Society of International Law" }, { ar: "عضو الجمعية المصرية للاقتصاد", en: "Member, Egyptian Economic Society" }];
  var ROLES = [{ ar: "المستشار القانوني لاتحاد مستثمري مصر", en: "Legal adviser, Egyptian Investors Union" }, { ar: "المستشار القانوني السابق لاتحاد شاغلي مركز مارينا العلمين السياحي", en: "Former legal adviser, Marina El Alamein Tourist Centre Occupants Union" }];
  var FORMED = [
    { n: ["Berida Energia (فرع الشركة الإيطالية)"] },
    { n: ["المجموعة الدولية للخدمات القانونية (بالشراكة مع P.F.E.)"] },
    { n: ["Khalilof للبرمجة ونظم المعلومات", "ELAlameia for Consulting, Information Systems and Services"] },
    { n: ["Rainbow للاستيراد والتصدير", "Rafhia للتجارة والتوزيع"] },
    { n: ["Internaut للملاحة البحرية", "مجموعة أبل للإعلان والدعاية", "Geam للأجهزة الكهربائية المنزلية الصغيرة", "تحويل الشركة المصرية لخدمات الاتصالات إلى شركة مساهمة"] },
    { n: ["إيكو طاقة للطاقة المتجددة", "مجموعة دلمار للاستثمار الصناعي والزراعي", "الشركة المصرية السعودية للاستثمار العقاري", "مجموعة أي سي تي لخدمات الأمن السيبراني"] },
    { n: ["بلدين جي مصر للاستثمار الزراعي", "Sustaincubator للطاقة المتجددة والري الحديث"] }
  ];
  var ADVISED = ["معمل الفيل الطائر (Yaoota)", "مجموعة دلمار", "Idea for Life للتنمية المستدامة", "جازفيل لتعبئة الغاز", "غاز السويس", "فرست جاز"];
  var CLIENTS = [
    { id: "efia", logo: "img/efia.jpg", n: { ar: "الاتحاد المصري لجمعيات ومؤسسات المستثمرين (EFIA)", en: "Egyptian Federation of Investors Associations (EFIA)" }, ind: { ar: "اتحاد مستثمرين، عضو المجلس الأعلى للاستثمار", en: "Investors federation, member of the Supreme Council for Investment" }, rel: { ar: "عميل للمؤسسة", en: "Firm client" } },
    { id: "idwt", logo: "img/idwt.jpg", n: { ar: "IDWT Group", en: "IDWT Group" }, ind: { ar: "تقنيات المياه", en: "Water technology" }, rel: { ar: "عميل للمؤسسة", en: "Firm client" } },
    { id: "env", logo: "img/envirocare.jpg", n: { ar: "إنفيرو كير للخدمات والاستشارات البيئية", en: "Enviro Care for Environmental Services & Consulting" }, ind: { ar: "الخدمات والاستشارات البيئية", en: "Environmental services and consulting" }, rel: { ar: "عميل للمؤسسة", en: "Firm client" } },
    { id: "sadat", logo: "img/sadat-group.jpg", n: { ar: "Sadat Group", en: "Sadat Group" }, ind: { ar: "", en: "" }, rel: { ar: "عميل للمؤسسة", en: "Firm client" } },
    { id: "party", logo: "img/party.jpg", n: { ar: "حزب السادات الديمقراطي", en: "Al-Sadat Democratic Party" }, ind: { ar: "حزب سياسي", en: "Political party" }, rel: { ar: "عضوية المؤسس", en: "Founder's membership" } }
  ];
  return __toCommonJS(content_exports);
})();
