//* اعدادات التحكم باساسات الموقع
var web__propertys = {
    webTitle      : "adate.com | ar",
    webName       : "adate.com",
    webUrl        : "../"
}
//* اعدادات التحكم بنصوص الموقع
const web__scripts = {
    //& نصوص قسم المقدمة
    introH1       : "مـرحـبـا بـك فـي مـوقـع خـدمـاتـنـا!",
    introP        : "نحن نقدم خدمات التصميم الجرافيكي ففريقنا يتكون من دوي الخبرة العالية في مجال التصميم و الجرافيك كما ان خدمتنا تتميز بالسرعة و الإحترتفية",
    //& نصوص قسم الخدمات
    service1Title : "تصميم المواقع",
    service1Desc  : "تتعدّد أشكال هجرة الأدمغة؛ فهناك هجرة الأدمغة جغرافيّاً من بلدٍ إلى آخر أكثر احتضاناً لمهاراتهم وإمكانيّاتهم، وهناك هجرة الأدمغة التي تحدث من خلال انتقال جماعيّ للكفاءات من إحدى الشركات لافتقارهم الاستقرار الوظيفي ونقص الفرص المتاحة أمامهم في الشركة للترقّي والتقدّم المهني، إلى شركاتٍ أخرى توفّر لهم الامتيازات",
    service2Title : "تصميم الشعارات",
    service2Desc  : "تتعدّد أشكال هجرة الأدمغة؛ فهناك هجرة الأدمغة جغرافيّاً من بلدٍ إلى آخر أكثر احتضاناً لمهاراتهم وإمكانيّاتهم، وهناك هجرة الأدمغة التي تحدث من خلال انتقال جماعيّ للكفاءات من إحدى الشركات لافتقارهم الاستقرار الوظيفي ونقص الفرص المتاحة أمامهم في الشركة للترقّي والتقدّم المهني، إلى شركاتٍ أخرى توفّر لهم الامتيازات",
    service3Title : "لسوشل ميديا",
    service3Desc  : "تتعدّد أشكال هجرة الأدمغة؛ فهناك هجرة الأدمغة جغرافيّاً من بلدٍ إلى آخر أكثر احتضاناً لمهاراتهم وإمكانيّاتهم، وهناك هجرة الأدمغة التي تحدث من خلال انتقال جماعيّ للكفاءات من إحدى الشركات لافتقارهم الاستقرار الوظيفي ونقص الفرص المتاحة أمامهم في الشركة للترقّي والتقدّم المهني، إلى شركاتٍ أخرى توفّر لهم الامتيازات",
    service4Title : "تصميم البروفيلات",
    service4Desc  : "تتعدّد أشكال هجرة الأدمغة؛ فهناك هجرة الأدمغة جغرافيّاً من بلدٍ إلى آخر أكثر احتضاناً لمهاراتهم وإمكانيّاتهم، وهناك هجرة الأدمغة التي تحدث من خلال انتقال جماعيّ للكفاءات من إحدى الشركات لافتقارهم الاستقرار الوظيفي ونقص الفرص المتاحة أمامهم في الشركة للترقّي والتقدّم المهني، إلى شركاتٍ أخرى توفّر لهم الامتيازات",
    //& نصوص قسم عنا
    about1Title   : "مذا نكون",
    about1Desc    : "تتعدّد أشكال هجرة الأدمغة؛ فهناك هجرة الأدمغة جغرافيّاً من بلدٍ إلى آخر أكثر احتضاناً لمهاراتهم وإمكانيّاتهم، وهناك هجرة الأدمغة التي تحدث من خلال انتقال جماعيّ للكفاءات من إحدى الشركات لافتقارهم الاستقرار الوظيفي ونقص الفرص المتاحة أمامهم في الشركة للترقّي والتقدّم المهني، إلى شركاتٍ أخرى توفّر لهم الامتيازات",
    about2Title   : "فرشق العمل",
    about2Desc    : "تتعدّد أشكال هجرة الأدمغة؛ فهناك هجرة الأدمغة جغرافيّاً من بلدٍ إلى آخر أكثر احتضاناً لمهاراتهم وإمكانيّاتهم، وهناك هجرة الأدمغة التي تحدث من خلال انتقال جماعيّ للكفاءات من إحدى الشركات لافتقارهم الاستقرار الوظيفي ونقص الفرص المتاحة أمامهم في الشركة للترقّي والتقدّم المهني، إلى شركاتٍ أخرى توفّر لهم الامتيازات",
    about3Title   : "الخدمات",
    about3Desc    : "تتعدّد أشكال هجرة الأدمغة؛ فهناك هجرة الأدمغة جغرافيّاً من بلدٍ إلى آخر أكثر احتضاناً لمهاراتهم وإمكانيّاتهم، وهناك هجرة الأدمغة التي تحدث من خلال انتقال جماعيّ للكفاءات من إحدى الشركات لافتقارهم الاستقرار الوظيفي ونقص الفرص المتاحة أمامهم في الشركة للترقّي والتقدّم المهني، إلى شركاتٍ أخرى توفّر لهم الامتيازات",
    //& نصوص قسم التواصل
    contactH1     : "إختر الطريقة المناسبة لك للتواصل معنا",
    contactP      : "يمكنك التواصل معنا عن طريق البريد الإلكتروني او الإتصال بنا او إرسال رسالة نصية لنا ثم قم بإرسال طلبك لنا و نحن سنتكفل بالباقي",
    email         : "info@adate.com",
    phone         : "+212 456789225",
    //& نصوص القسم السفلي
    breaf         : "نحن فريق مختص في التصميم في مجالات متنوعة كتصميم الشعارات و المواقع الخ لذى فريقنا مهارات عالية و ذات جودة",
    link1         : "فـيـسـبوك",
    link2         : "انسـتـغـرام",
    link3         : "تـويـتـر",
    link4         : "تـيـك تـوك",
    contact1      : "example@gmail.com",
    contact2      : "+212 341669301",
    contact3      : "example@gmail.com",
    contact4      : "+212 341669301",
    copyright     : "copyRight : 2023"
}
//* اعدادات الروابط
const web__links = {
    //& روابط مواقع التواصل الإجتماعي في الجزء السفلي
    href1         : "https://www.facebook.com",
    href2         : "https://www.instagram.com",
    href3         : "https://www.twitter.com",
    href4         : "https://www.tiktok.com"
}