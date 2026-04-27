سأبدأ الآن بالتنفيذ على دفعات واضحة (من الأكثر أهمية إلى الأقل)، وكل بند مبني فقط على ملفات المصدر التي زوّدتني بها.

## المرحلة 1 (حرجة) — Distribution & Partnerships
1) إضافة قسم **Why partner with Yansab?** بالنصوص المعتمدة من المصدر.
2) إضافة نموذج **Become a Partner / كن شريكاً** داخل صفحة الشراكات.
3) إضافة الحقول المطلوبة حرفيًا:
- Name / الاسم
- Company / الشركة
- Country / الدولة
- Business Type / نوع النشاط
- Phone / الهاتف
- Email / البريد الإلكتروني
- Message / الرسالة
4) ضبط العناوين والـ CTA لتطابق blueprint (EN/AR).

**ملفات مستهدفة:**
- `src/routes/partnerships.tsx`
- `src/components/site/page-sections.tsx`
- `src/components/site/content.ts`
- `src/styles.css`

## المرحلة 2 (حرجة) — Contact credibility
1) إزالة عرض placeholders العامة في صفحة التواصل.
2) استبدالها ببيانات التواصل الموجودة في ملفات الشركة (الهاتف/الإيميل/الموقع) وفق المتاح بالمصدر.
3) أي عنصر غير مؤكد من المصدر سيُكتب بصيغة: **Missing / Not found in source files**.

**ملفات مستهدفة:**
- `src/components/site/content.ts`
- `src/routes/contact.tsx`
- `src/components/site/site-layout.tsx`

## المرحلة 3 — Brand compliance (ألوان + طابع بصري)
1) تقليص نظام الألوان ليعتمد على ألوان البراند المعتمدة + الألوان المسموح بها من الـ blueprint.
2) إزالة/تخفيف المؤثرات البصرية غير المتوافقة مع الطابع المؤسسي (خصوصًا الـ gradients الثقيلة).
3) تثبيت Montserrat واستخدام أوزان متسقة مؤسسية.

**ملفات مستهدفة:**
- `src/styles.css`
- (عند الحاجة) route files التي فيها أقسام بخلفيات/تأثيرات غير متوافقة.

## المرحلة 4 — Footer & structure alignment
1) استكمال بنية الفوتر بما يتماشى مع blueprint:
- company intro
- quick links
- contact details
- language toggle
- copyright
- social icons
2) توحيد نصوص الميكروكوبي (EN/AR) مع blueprint.

**ملفات مستهدفة:**
- `src/components/site/site-layout.tsx`
- `src/components/site/content.ts`

## المرحلة 5 — Final verification
1) مراجعة صفحة-بصفحة (Home, About, Brands, Services, Partnerships, Contact).
2) إصدار تقرير مطابقة نهائي بنقاط:
- تم التنفيذ
- Missing / Not found in source files
- أي عناصر تحتاج قرار منك