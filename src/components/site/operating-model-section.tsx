import { useRef, useState } from "react";
import {
  Activity,
  BadgeCheck,
  BarChart3,
  CheckCheck,
  Gauge,
  Network,
  TrendingUp,
} from "lucide-react";

type OperatingModelSectionProps = {
  isArabic: boolean;
  title: string;
  body: string;
};

type OperatingItem = {
  title: string;
  description: string;
  tags: [string, string, string];
  kpis: [
    { label: string; value: string },
    { label: string; value: string },
    { label: string; value: string },
  ];
  insight: string;
  visualMode: "demand" | "profit" | "supply" | "compliance" | "growth";
};

const operatingIcons = [Gauge, BarChart3, Network, CheckCheck, TrendingUp] as const;

function getOperatingItems(isArabic: boolean): OperatingItem[] {
  if (isArabic) {
    return [
      {
        title: "حجم الطلب",
        description: "قياس حجم الطلب الفعلي واتجاهه قبل الالتزام التشغيلي.",
        tags: ["إشارة الطلب", "تقلب السوق", "جاهزية التوريد"],
        kpis: [
          { label: "كثافة الطلب", value: "84%" },
          { label: "ثبات الاتجاه", value: "+12%" },
          { label: "جاهزية التنفيذ", value: "عالية" },
        ],
        insight:
          "يساعد هذا العامل على تأكيد قوة الطلب بما يكفي لتبرير تخصيص الموارد التشغيلية وجهود التوريد وخطة التنفيذ.",
        visualMode: "demand",
      },
      {
        title: "الربحية وهامش العائد",
        description: "تحليل هيكل الهامش والربحية لضمان الجدوى التجارية.",
        tags: ["قوة الهامش", "العائد المتوقع", "حساسية التكلفة"],
        kpis: [
          { label: "متوسط الهامش", value: "31%" },
          { label: "صافي العائد", value: "+18%" },
          { label: "تحكم التكاليف", value: "مستقر" },
        ],
        insight:
          "يضمن هذا العامل أن الفرص ليست نشطة فقط، بل مجدية ماليًا بعد احتساب التكلفة والهامش والجهد التشغيلي.",
        visualMode: "profit",
      },
      {
        title: "موثوقية التوريد",
        description: "التحقق من استقرار الموردين واتساق التسليم قبل التنفيذ.",
        tags: ["استقرار المورد", "التحكم بزمن التوريد", "الاعتمادية التشغيلية"],
        kpis: [
          { label: "موثوقية المورد", value: "92%" },
          { label: "التسليم في الوقت", value: "95%" },
          { label: "مخاطر الانقطاع", value: "منخفض" },
        ],
        insight:
          "يخفض هذا العامل مخاطر التنفيذ عبر التأكد من قدرة شركاء التوريد على الحفاظ على الاتساق والالتزام بالتوقيت.",
        visualMode: "supply",
      },
      {
        title: "متطلبات الامتثال والتوثيق",
        description: "مراجعة جاهزية الامتثال والوثائق لضمان عمليات منضبطة.",
        tags: ["اكتمال الوثائق", "المواءمة التنظيمية", "أثر التدقيق"],
        kpis: [
          { label: "اكتمال الوثائق", value: "98%" },
          { label: "فحوص الامتثال", value: "مُجتاز" },
          { label: "جاهزية التدقيق", value: "مؤكدة" },
        ],
        insight:
          "يحمي هذا العامل العمليات من التأخيرات التنظيمية وثغرات التوثيق والاحتكاك الإجرائي غير الضروري.",
        visualMode: "compliance",
      },
      {
        title: "قابلية التكرار والنمو طويل الأمد",
        description: "تقييم القابلية للتكرار وإمكانية التوسع على المدى الطويل.",
        tags: ["جاهزية التوسع", "استمرارية الطلب", "فرص النمو"],
        kpis: [
          { label: "جاهزية التوسع", value: "A+" },
          { label: "استمرارية الطلب", value: "قوية" },
          { label: "مؤشر النمو", value: "+24%" },
        ],
        insight:
          "يحدد هذا العامل ما إذا كانت الفرصة قادرة على التحول من صفقة لمرة واحدة إلى قناة أعمال قابلة للتوسع والاستدامة.",
        visualMode: "growth",
      },
    ];
  }

  return [
    {
      title: "Demand volume",
      description: "Measure real demand volume and trend before operational commitment.",
      tags: ["Demand signal", "Market volatility", "Supply readiness"],
      kpis: [
        { label: "Demand density", value: "84%" },
        { label: "Trend stability", value: "+12%" },
        { label: "Execution readiness", value: "High" },
      ],
      insight:
        "This factor helps confirm whether demand is strong enough to justify operational allocation, sourcing effort, and execution planning.",
      visualMode: "demand",
    },
    {
      title: "Profitability and margin potential",
      description: "Assess margin structure and profitability to ensure commercial viability.",
      tags: ["Margin strength", "Expected return", "Cost sensitivity"],
      kpis: [
        { label: "Average margin", value: "31%" },
        { label: "Net return", value: "+18%" },
        { label: "Cost control", value: "Stable" },
      ],
      insight:
        "This factor ensures that commercial opportunities are not only active, but financially viable after cost, margin, and operational effort are considered.",
      visualMode: "profit",
    },
    {
      title: "Supply reliability",
      description: "Validate supplier stability and delivery consistency before execution.",
      tags: ["Supplier stability", "Lead-time control", "Operational reliability"],
      kpis: [
        { label: "Supplier reliability", value: "92%" },
        { label: "On-time delivery", value: "95%" },
        { label: "Disruption risk", value: "Low" },
      ],
      insight:
        "This factor reduces execution risk by confirming whether supply partners can maintain consistency, timing, and predictable delivery performance.",
      visualMode: "supply",
    },
    {
      title: "Compliance and documentation requirements",
      description: "Review compliance and documentation readiness for controlled operations.",
      tags: ["Document completeness", "Regulatory alignment", "Audit trace"],
      kpis: [
        { label: "Doc completeness", value: "98%" },
        { label: "Compliance checks", value: "Passed" },
        { label: "Audit readiness", value: "Verified" },
      ],
      insight:
        "This factor protects operations from regulatory delays, documentation gaps, and avoidable process friction.",
      visualMode: "compliance",
    },
    {
      title: "Long-term repeatability and growth potential",
      description: "Evaluate repeatability and long-term scalability potential.",
      tags: ["Scale readiness", "Demand continuity", "Growth upside"],
      kpis: [
        { label: "Scale readiness", value: "A+" },
        { label: "Demand continuity", value: "Strong" },
        { label: "Growth index", value: "+24%" },
      ],
      insight:
        "This factor identifies whether the opportunity can grow beyond a one-time transaction into a repeatable, scalable, long-term business channel.",
      visualMode: "growth",
    },
  ];
}

export function OperatingModelSection({ isArabic, title, body }: OperatingModelSectionProps) {
  const items = getOperatingItems(isArabic);
  const [activeIndex, setActiveIndex] = useState(0);
  const wheelLock = useRef(0);
  const touchStartX = useRef(0);

  const activeItem = items[activeIndex] ?? items[0];
  const ActiveIcon = operatingIcons[activeIndex] ?? Activity;

  const handleStepMovement = (direction: "next" | "prev") => {
    setActiveIndex((prev) => {
      if (direction === "next") {
        return (prev + 1) % items.length;
      }

      return (prev - 1 + items.length) % items.length;
    });
  };

  return (
    <section className="operating-system-shell border-b border-border/70 py-16 md:py-20" aria-label={title}>
      <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="operating-system-stage mx-auto max-w-[1120px]">
          <header className="operating-system-header">
            <h2 className="operating-system-title">{title}</h2>
            <span className="operating-system-title-line" aria-hidden="true" />
            <p className="operating-system-body">{body}</p>
          </header>

          <div
            className="operating-system-grid"
            onWheel={(event) => {
              const now = Date.now();
              if (now - wheelLock.current < 260 || Math.abs(event.deltaY) < 18) {
                return;
              }

              wheelLock.current = now;
              handleStepMovement(event.deltaY > 0 ? "next" : "prev");
            }}
          >
            <ol className="operating-system-nav" role="tablist" aria-label={isArabic ? "معايير التقييم" : "Evaluation criteria"}>
              {items.map((item, index) => {
                const isActive = index === activeIndex;
                return (
                  <li key={item.title} className="operating-system-nav-item">
                    <button
                      id={`op-nav-${index}`}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-controls="operating-system-panel"
                      tabIndex={isActive ? 0 : -1}
                      className={`operating-system-nav-button ${isActive ? "is-active" : ""}`}
                      onClick={() => setActiveIndex(index)}
                      onKeyDown={(event) => {
                        if (event.key === "ArrowDown" || event.key === "ArrowRight") {
                          event.preventDefault();
                          handleStepMovement("next");
                        }
                        if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
                          event.preventDefault();
                          handleStepMovement("prev");
                        }
                        if (event.key === "Home") {
                          event.preventDefault();
                          setActiveIndex(0);
                        }
                        if (event.key === "End") {
                          event.preventDefault();
                          setActiveIndex(items.length - 1);
                        }
                      }}
                    >
                      <span className="operating-system-nav-index">{String(index + 1).padStart(2, "0")}</span>
                      <span className="operating-system-nav-title">{item.title}</span>
                    </button>
                  </li>
                );
              })}
            </ol>

            <article
              id="operating-system-panel"
              role="tabpanel"
              aria-labelledby={`op-nav-${activeIndex}`}
              className="operating-system-panel"
              onTouchStart={(event) => {
                touchStartX.current = event.touches[0]?.clientX ?? 0;
              }}
              onTouchEnd={(event) => {
                const deltaX = (event.changedTouches[0]?.clientX ?? 0) - touchStartX.current;
                if (Math.abs(deltaX) < 42) {
                  return;
                }
                handleStepMovement(deltaX < 0 ? "next" : "prev");
              }}
            >
              <div className="operating-system-panel-head">
                <span className="operating-system-icon-wrap" aria-hidden="true">
                  <ActiveIcon className="h-5 w-5" />
                </span>
                <div>
                  <span className="operating-system-number">{String(activeIndex + 1).padStart(2, "0")}</span>
                  <h3 className="operating-system-panel-title">{activeItem.title}</h3>
                </div>
              </div>

              <p className="operating-system-description">{activeItem.description}</p>

              <div className="operating-system-tags" aria-label={isArabic ? "المرتكزات الاستراتيجية" : "Strategic tags"}>
                {activeItem.tags.map((tag) => (
                  <span key={tag} className="operating-system-tag">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="operating-system-kpis" aria-label={isArabic ? "مؤشرات الأداء" : "KPI cards"}>
                {activeItem.kpis.map((kpi) => (
                  <div key={kpi.label} className="operating-system-kpi-card">
                    <span className="operating-system-kpi-label">{kpi.label}</span>
                    <span className="operating-system-kpi-value">{kpi.value}</span>
                  </div>
                ))}
              </div>

              <div className="operating-system-visual" aria-label={isArabic ? "لوحة تحليل تشغيلية" : "Operational visual module"}>
                <div className={`ops-scene scene-${activeItem.visualMode}`}>
                  <div className="ops-axis" />

                  {activeItem.visualMode === "demand" && (
                    <>
                      <div className="ops-line" />
                      <span className="ops-dot dot-a" />
                      <span className="ops-dot dot-b" />
                      <span className="ops-dot dot-c" />
                      <span className="ops-label label-a">Volatility: Controlled</span>
                      <span className="ops-label label-b">Readiness: High</span>
                    </>
                  )}

                  {activeItem.visualMode === "profit" && (
                    <>
                      <div className="ops-bars">
                        <span className="ops-bar bar-a" />
                        <span className="ops-bar bar-b" />
                        <span className="ops-bar bar-c" />
                        <span className="ops-bar bar-d" />
                      </div>
                      <span className="ops-label label-a">Cost sensitivity: Stable</span>
                      <span className="ops-label label-b">Net return: +18%</span>
                    </>
                  )}

                  {activeItem.visualMode === "supply" && (
                    <>
                      <span className="ops-node node-a" />
                      <span className="ops-node node-b" />
                      <span className="ops-node node-c" />
                      <span className="ops-node node-d" />
                      <span className="ops-link link-a" />
                      <span className="ops-link link-b" />
                      <span className="ops-link link-c" />
                      <span className="ops-label label-a">On-time delivery: 95%</span>
                      <span className="ops-label label-b">Risk: Low</span>
                    </>
                  )}

                  {activeItem.visualMode === "compliance" && (
                    <>
                      <div className="ops-doc-stack">
                        <span className="ops-doc" />
                        <span className="ops-doc" />
                        <span className="ops-doc" />
                      </div>
                      <div className="ops-trace" />
                      <span className="ops-label label-a">Completeness: 98%</span>
                      <span className="ops-label label-b">Audit: Verified</span>
                    </>
                  )}

                  {activeItem.visualMode === "growth" && (
                    <>
                      <div className="ops-line growth-line" />
                      <span className="ops-dot dot-a" />
                      <span className="ops-dot dot-b" />
                      <span className="ops-dot dot-c" />
                      <span className="ops-label label-a">Repeatability: Strong</span>
                      <span className="ops-label label-b">Upside: +24%</span>
                    </>
                  )}
                </div>

                <div className="operating-system-legend" aria-hidden="true">
                  <span>{isArabic ? "إشارة تشغيلية" : "Operational signal"}</span>
                  <span>{isArabic ? "جاهزية تنفيذ" : "Execution readiness"}</span>
                </div>
              </div>

              <aside className="operating-system-insight" aria-label={isArabic ? "سبب الأهمية" : "Why this matters"}>
                <BadgeCheck className="h-4 w-4" aria-hidden="true" />
                <p>{activeItem.insight}</p>
              </aside>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}