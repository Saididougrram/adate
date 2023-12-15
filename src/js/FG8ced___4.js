//! system navBar
//& كود التحكم بالشريط الجانبي
//& تقوم اوامر هدا الكود على اظهار و اخفاء الشريط الجانبي


const $__navBar = document.getElementById('navBar');//& استدعاء الشءيط الجانبي و تخزينه في المتغير $__navBar
const $__backNav = document.getElementById('backNav');//& استدعاء الشاشة الخلفية لشريط الجانبي و تخزينه في المتغير $__backNav
//& الشاشة الخلفية هي اطار يطهر خلف الشريط الجانبي و هة اطار شفاف و ضيفته هي فصل محتوى الصفحة عن الإطار الجانبي حيث عند الضغط في مكان ما خارج الشريط الجانبي يتم اخفائه


//& اوامر اضهار الشريط الجانبي من جهة اليمين
//& الدالة openNav() مرفقة مع عنصر الصورة (html 44)
function openNav(){
    $__navBar.style.marginRight = "0px";
    $__backNav.style.display = "block";
}
//& اوامر اخفاء الشريط الجانبي من جهة اليمين
//& الدالة closeNav() مرفقة بالشاشة الخلفية لشريط الجانبي (html 49) و عنصر الصورة (html 57)
function closeNav(){
    $__navBar.style.marginRight = "-222px";
    $__backNav.style.display = "none";
}


//! system like button
//& كود التحكم يزر الإعجاب
//& تقوم اكواد هذا الكود على اضافة اعجاب للموقع او سحب الأعجاب حيث عند و ضع اعجاب يتم تخزيك true في ذاكرة التخزين المحلية و عكد سحب الإعجاب يتم تخزين false


var $__like = localStorage.getItem("bu5f__3bQ"); //& تخزين قيمة المفتاح bu5f__3bQ السؤول عن تخزين بينات زر الإعجاب في التغير $__like
const $__hedLike = document.getElementById('hedLike');//& استدعاء زر الإعجاب المتواجد في القسم العلوي و تخزينه في المتغير $__hedLike
const $__navLike = document.getElementById('navLike');//& استدعاء زر الإعجاب المتواجد في الشريط الجانبي و تخزينه في المتغير $__navLike


//& كلاس يحمل اوامر تعديل خصائص زر الإعجاب حسب القيمة true او false
class Like__onload{
    constructor() {
        if ($__like == null) {
            //& هذا كان المغتاح bu5f__3bQ يحمل قيمة فارغو او غير موجود سيتم انشاء المفتاح بإسم bu5f__3bQ يحمل قيمة false
            //& سيتم ترك خصائص زر الإعجاب إفتراضية
            localStorage.setItem("bu5f__3bQ" , "false");
            $__like = "false";
        }else if ($__like == "true")  {
            //& اذا كان المفتاح bu5f__3bQ يحمل قيمة true سيتم تغيير لون الخلفية الى الون الأساسي
            $__hedLike.style.backgroundColor = "var(--color)";
            $__navLike.style.backgroundColor = "var(--color)";
        }else if ($__like == "false") {
            //& اذا كانت قيمة المفتاح bu5f__3bQ false سيتم تغيير لون الخلفية الى الون الاسود
            $__hedLike.style.backgroundColor = "#000000";
            $__navLike.style.backgroundColor = "#000000";
        }else {
            //& اذا كانت قيمة المفتاح bu5f__3bQ غير true او false سيتم تخزين قيمة false
            //& سيتم ترك خصائص زر الإعجاب إفتراضية
            localStorage.setItem("bu5f__3bQ" , "false");
            $__like = "false";
        }
    }
}

//&  استدعاء الكلاس Like__onload عند تحميل الصفحة
onload = new Like__onload();


//& الدالة like() مرفقة يزر الإعجاب المتواجد في القسم العلوي (html 26) و الزر المتواجد في الشريط الجانبي (html 76)
//& يتم تنفيد اوامر هذه الدالة عند الضغط على زر الإعجاب
function like(){
    if ($__like == "false") {
        //& اذا كانت قيمة المفتاح bu5f__3bQ false سيتم تغييرها الى true و تغيير خلفية الزر الى الون الأساسي
        localStorage.setItem("bu5f__3bQ" , "true");
        $__hedLike.style.backgroundColor = "var(--color)";
        $__navLike.style.backgroundColor = "var(--color)";
        $__like = localStorage.getItem("bu5f__3bQ");//& يتم تخزين قيمة المفتاح bu5f__3bQ في المتغير $__like في حين ضغط على الزر مرة أخرى قبل اعادة تحميل الصفحة
        // console.log("like = " + $__like);
    }else if ($__like == "true") {
        //& اذا كانت قيمة المفتاح bu5f__3bQ true سيتم تغييرها الى false و تغيير خلفية الزر الى الوم الإفتراضي الأسود
        localStorage.setItem("bu5f__3bQ" , "false");
        $__hedLike.style.backgroundColor = "#000000";
        $__navLike.style.backgroundColor = "#000000";
        $__like = localStorage.getItem("bu5f__3bQ");
        // console.log("like = " + $__like);
    }else {
        //& اذا كانت قيمة المفتاح bu5f__3bQ غير true او false سيتم تخزين قيمة false تم جعل لون خلفية الزر الى الون الأسود
        localStorage.setItem("bu5f__3bQ" , "false");
        $__hedLike.style.backgroundColor = "#000000";
        $__navLike.style.backgroundColor = "#000000";
        $__like = localStorage.getItem("bu5f__3bQ");
        // console.log("like = " + $__like);
    }
}


//! system change lungauges
//& كود تغيير الغة
//& تقوم اوامر هذا الكود على تغيير لغة الموقع من خلال الكنترول المتواجد في القسم العلوي حيث اذا كنت في صفحة الغة العربية سينقلك الى صفحة الغة الإتجليزية و يتم تخزين القيم في ذاكرة التخزين المحلية لرجوع اليها


const langauge = localStorage.getItem("KJ9ub__D_R8H6");//& KJ9ub__D_R8H6 هو اسم المفتلح الذي يحمل قيمة اللغة المحفوظة
const arrow = document.getElementById('arrow');//& استدعاء سهم المزيد و تخزينه في المتغيير arrow (html 34)
const langMore = document.getElementById('langMore');//& استدعاء مربع الغات الأخرى و تخزينه في المتغير langMore (html 38)
const backMore = document.getElementById('backMore');//& لستدعاء الشاشة الخلفية لمربع الغات الأخرى و تخزينه في المتغير backMore


//& الدالة morelang() مرفقة بمربع تغيير الغة المتواجد في القسم العلوي (html 29)
function moreLang(){
    //& يتم اضافة خاصية الدوران 180 درجة الى سهم المزيد و يتم اضافة display : flex الى مربع الغات الأخرى ثم اظهار الشاشة الخلفية لمربع الغات الأخرى
    arrow.style.transform = "rotateZ(180deg)";
    langMore.style.display = "flex";
    backMore.style.display = "block";
}
//& الدالة lesslang() مرفقة بالشاشة الخلفية لمربع الغات الأخرى المتواجد في القسم العلوي (html 37)
function lessLang(){
    //& اعادة الخصائص الى قيمها الإفتراضية
    arrow.style.transform = "rotateZ(0deg)";
    langMore.style.display = "none";
    backMore.style.display = "none";
}


//& الدالة changelang() مرفقة بمربع الغات الأخرى الذي يتواجد في القسم العلوي (html 38)
function changeLang(){
    if (langauge == null)  {
        //& اذا كان المفتاح KJ9ub__D_R8H6 يحمل قيمة فارغة او غير موجود سيتم تخزين داخله القيمة en ثم سينتقل الى الصفحة المترجمة بالغة الإنجليزية
        localStorage.setItem("KJ9ub__D_R8H6" , "en");
        location.replace(urlIndex + "en/index.html");
    }else if (langauge == "en") {
        //& اذا كان المفتاح KJ9ub__D_R8H6 يحمل القيمة en سيتم تغيير قيمته الى ar ثم ينتقل الى الصفحة المترجمة الى الغة العربية
        localStorage.setItem("KJ9ub__D_R8H6" , "ar");
        location.replace(urlIndex + "ar/index.html");
    }else if (langauge == "ar") {
        //& اذا كان المفتاح KJ9ub__D_R8H6 يحمل قيمة ar سيتم تعيير قيمته الى en ثم ينتقل الى الصفحة المترجمة الى الغة الإنجليزية
        localStorage.setItem("KJ9ub__D_R8H6" , "en");
        location.replace(urlIndex + "en/index.html");
    }else {
        //& اذا كانت قيمة المفتاح KJ9ub__D_R8H6 غير en او ar سيتم تخزين قيمة en ثم ينتقل الى الصفحة المترجمة الى الغة الإنجليزية
        localStorage.setItem("KJ9ub__D_R8H6" , "en");
        location.replace(urlIndex + "en/index.html");
    }
}


//! system change langauge nav
//& كود تغيير الغة من ازرار الشريط الجانبي
//& تقوم اوامر هذا الكود على تغيير لغة الموقع من خلال الكنترول المتواجد في الشريط الجانبي حيث اذا كنت في صفحة الغة العربية سينقلك الى صفحة الغة الإتجليزية و يتم تخزين القيم في ذاكرة التخزين المحلية لرجوع اليها


const arrowNav = document.getElementById('arrowNav');//& استدعاء سهم المزيد المتواجد في الشريط الجانبي و تخزينه في المتغببر arrowNav
const langMoreNav = document.getElementById('langMoreNav');//& استدعاء مربع الغات الأخرى المتواجد في الشريط الجانبي و تخزينه في المتغيير langMoreNav
const backMoreNav = document.getElementById('backMoreNav');//& استدعاء الشاشة الخلفية لمربع الغات الأخرى المتواجد في الشرشط الجانبي و تخزينه في المتغير backMoreNav


//& الدالة morelangNav() مرفقة بمربع تغيير الغة المتواجد في الشرشط الجانبي (html 62)
function moreLangNav(){
    //& يتم اضافة خاصية الدوران 180 درجة الى سهم المزيد المتواجد في الشريط الجانبي و يتم اضافة display : flex الى مربع الغات الأخرى المتواجد في الشريط الجانبي ثم اظهار الشاشة الخلفية لمربع الغات الأخرى
    arrowNav.style.transform = "rotateZ(180deg)";
    langMoreNav.style.display = "flex";
    backMoreNav.style.display = "block";
}
//& الدالة lesslangNav() مرفقة بالشاشة الخلفية لمربع الغات الأخرى (html 70)
function lessLangNav(){
    //& اعادة الخصائص الى قيمها الإفتراضية
    arrowNav.style.transform = "rotateZ(0deg)";
    langMoreNav.style.display = "none";
    backMoreNav.style.display = "none";
}

//& الدالة changelangNav() مرفقه بمربع الغات الأخري المتواجد في الشريط الجانبي (html 71)
function changeLangNav(){
    //& استدعاء الدالة السابقة changelang()
    changeLang();
}