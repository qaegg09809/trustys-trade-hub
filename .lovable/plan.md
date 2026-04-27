## الهدف
رفع الموقع كاملًا (كل زر + كل قسم) إلى مستوى بصري وتنفيذي Premium جدًا، مع التزام صارم بألوان وهوية Yansab، ومعالجة المشاكل التي أشرت لها في الصور (التباين، الفراغات غير المقصودة، أزرار تبدو غير مفعّلة، وبعض البلوكات ذات طابع template).

## ما سيتم تنفيذه

### 1) بناء نظام تصميم موحّد للبراند (Design System pass)
**ملفات:**
- `src/styles.css`
- `src/components/ui/button.tsx`
- `src/components/ui/card.tsx`
- `src/components/ui/input.tsx`

**العمل:**
- توحيد درجات الألوان المؤسسية (Primary/Secondary/Accent) مع تحسين micro-contrast دون الخروج عن الـBrand Guideline.
- إعادة ضبط الظلال، الحدود، والـglass surfaces بحيث تعطي إحساس bespoke corporate بدل قالب جاهز.
- ترقية نظام الأزرار (Primary / Secondary / Outline / Ghost) مع حالات واضحة: default / hover / active / focus / disabled.
- إصلاح مظهر الأزرار التي تبدو “مطفيّة” أو منخفضة التباين (مثل زر Explore في الـHero).
- توحيد نصف القطر، الارتفاعات، ووزن الخط عبر جميع controls.

---

### 2) إصلاح الهيدر والتنقل والـCTA logic
**ملف:** `src/components/site/site-layout.tsx`

**العمل:**
- إزالة أي فراغ/عنصر يوحي بوجود خانة ناقصة في شريط التنقل (المشكلة المعلّم عليها قرب Contact).
- إعادة ضبط محاذاة nav + language switcher + CTA لتكون دقيقة على Desktop/Tablet.
- توحيد سلوك Active link بصريًا (واضح لكن غير مبالغ).
- رفع جودة mobile sheet والتنقل الداخلي مع نفس الهوية المؤسسية.

---

### 3) إعادة صقل الصفحة الرئيسية قسمًا قسمًا (Full homepage premium pass)
**ملف:** `src/routes/index.tsx`

**العمل:**
- **Hero:** تحسين هرمية النص، وضوح CTA الأساسي/الثانوي، وتوازن المحتوى فوق الفيديو.
- **Trust strip:** تحسين التوزيع والإيقاع البصري.
- **What we do cards:** رفع جودة الكروت (spacing, typography cadence, image treatment).
- **Operating Model:** معالجة التباين والقرائية داخل الصندوق المركزي (المشكلة المعلّم عليها)، وتحويله إلى مشهد مؤسسي واضح غير باهت.
- **Why Yansab:** ترقية الكروت من شكل بسيط جدًا إلى Premium cards مع تباين أفضل وترتيب بصري أقوى.
- **Partnership + Final CTA:** توحيد الحضور البصري مع بقية الصفحة حتى يظهر الموقع كقطعة واحدة متماسكة.

---

### 4) ترقية الأقسام الداخلية بنفس المستوى (No weak pages)
**ملفات:**
- `src/routes/about.tsx`
- `src/routes/services.tsx`
- `src/routes/brands.tsx`
- `src/routes/partnerships.tsx`
- `src/routes/governance.tsx`
- `src/routes/capabilities.tsx`
- `src/routes/contact.tsx`
- `src/components/site/page-sections.tsx`

**العمل:**
- توحيد لغة العناوين والبطاقات وكتل المحتوى بين كل الصفحات.
- رفع جودة عناصر lists/timelines/forms لتبقى بنفس مستوى الهوم.
- جعل كل صفحة لها شخصية واضحة لكن ضمن نفس DNA البصري للبراند.

---

### 5) ضبط ثنائي اللغة EN/AR باحتراف تنفيذي
**ملفات متعددة (خصوصًا `site-layout.tsx`, `index.tsx`, `page-sections.tsx`)**

**العمل:**
- تحسين line-height وspacing للنص العربي داخل الكروت والأزرار.
- ضمان تماثل الإحساس البصري بين RTL وLTR (ليس فقط عكس اتجاه).
- منع التزاحم أو كسر الأسطر غير المتزن على الشاشات الصغيرة.

---

### 6) QA صارم قبل التسليم
**التحقق الإجباري:**
- مراجعة بصرية كاملة على: `1440` + `Tablet` + `Mobile`.
- اختبار كل زر في المشروع (hover/active/focus/disabled إن وجدت).
- فحص كل section للتأكد من:
  - التزام البراند
  - جودة Premium
  - عدم وجود عناصر باهتة أو template-like
- التأكد من سلامة TypeScript/TanStack build بعد التعديلات.

## النتيجة المتوقعة بعد التنفيذ
- موقع متماسك بصريًا بالكامل، كل زر وكل قسم بمستوى احترافي عالي جدًا.
- هوية Yansab واضحة وجذابة في كل نقطة تفاعل.
- معالجة المشاكل التي أشرت لها في الصور بشكل مباشر (التباين، الفراغات، وضعف إبراز بعض الأزرار/الأقسام).
- جودة عرض جاهزة لعرض مؤسسي قوي جدًا.