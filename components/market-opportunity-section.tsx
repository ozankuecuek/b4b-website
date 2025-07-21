import {
  DollarSign,
  BarChart2,
  PieChart,
  ShoppingCart,
  ShieldCheck,
  AlertTriangle,
  Lock,
} from "lucide-react";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { ReactNode } from "react";

export default function MarketOpportunitySection() {
  const metrics = [
    {
      name: "1.444 Billion €",
      description:
        "Total Addressable Market (TAM) in Germany 2023 — All e-commerce transactions (via online shop, marketplace, and EDI) for both manufacturers and wholesalers.",
      icon: DollarSign,
      background: (
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/xandro-vandewalle-SM-tBpQ_OWA-unsplash.jpg)'
            }}
          />
          <div className="absolute inset-0 bg-white/70 hover:bg-white/90 transition-all duration-500 ease-in-out" />
        </div>
      ),
      className: "md:col-span-1 md:row-span-2",
    },
    {
      name: "476 Billion €",
      description:
        "Serviceable Obtainable Market (SOM) in Germany 2023 — Only sales made through online shops and marketplaces (excluding EDI) by manufacturers and wholesalers. For comparison: B2C e-commerce was sized 85 Billion € in Germany in 2023.",
      icon: BarChart2,
      background: (
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/arun-k-XHRaxIB8IiY-unsplash.jpg)'
            }}
          />
          <div className="absolute inset-0 bg-primary/70 hover:bg-primary/90 transition-all duration-500 ease-in-out" />
        </div>
      ),
      className: "md:col-span-2 [&_.text-neutral-700]:!text-white [&_.text-neutral-600]:!text-white/90 [&_.text-neutral-300]:!text-white [&_.text-neutral-200]:!text-white/90 [&_a]:!text-gray-300 [&_button]:!text-gray-300",
    },
    {
      name: "75%",
      description:
        "Propietary Manufacturer or Wholesaler Onlineshop share of SOM in Germany 2023 vs Marketplace 25%.",
      icon: PieChart,
      background: (
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/thisisengineering-ovWUKV1btXk-unsplash.jpg)'
            }}
          />
          <div className="absolute inset-0 bg-secondary/70 hover:bg-secondary/90 transition-all duration-500 ease-in-out" />
        </div>
      ),
      className: "md:col-span-1",
    },
    {
      name: "56%",
      description: "Share of public B2B onlineshops in Germany 2023.",
      icon: ShoppingCart,
      background: (
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/thisisengineering-X7cls0azgKg-unsplash.jpg)'
            }}
          />
          <div className="absolute inset-0 bg-white/70 hover:bg-white/90 transition-all duration-500 ease-in-out" />
        </div>
      ),
      className: "md:col-span-1",
    },
    {
      name: "72%",
      description:
        "... of surveyed B2B suppliers totally agree to the statement: The issue of a reliable identity and secure customer data in B2B has not yet been sustainably resolved on the Internet.",
      icon: Lock,
      background: (
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/sigmund-obBafVj9pSM-unsplash.jpg)'
            }}
          />
          <div className="absolute inset-0 bg-chart-3/70 hover:bg-chart-3/90 transition-all duration-500 ease-in-out" />
        </div>
      ),
      className: "md:col-span-2",
    },
    {
      name: "91%",
      description:
        "... of surveyed B2B suppliers totally agree to the statement: The identity verification of new customers is a highly relevant topic that our company should focus more on.",
      icon: ShieldCheck,
      background: (
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/joel-danielson-dw4StX7U5Yw-unsplash.jpg)'
            }}
          />
          <div className="absolute inset-0 bg-secondary/70 hover:bg-secondary/90 transition-all duration-500 ease-in-out" />
        </div>
      ),
      className: "md:col-span-1 md:row-span-2",
    },
    {
      name: "93%",
      description:
        "... of surveyed B2B suppliers answered with 'yes' to the statement: Have you noticed an increase in fraud attempts in e-commerce compared to traditional business?",
      icon: AlertTriangle,
      background: (
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/sigmund-R-jYl5zpSHk-unsplash.jpg)'
            }}
          />
          <div className="absolute inset-0 bg-white/70 hover:bg-white/90 transition-all duration-500 ease-in-out" />
        </div>
      ),
      className: "md:col-span-2",
    },
  ];

  return (
    <section className="relative bg-background py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full mb-6 inline-block tracking-wider uppercase">
              Market Opportunity
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 max-w-4xl mx-auto leading-tight">
            A <span className="text-primary">massive market</span> waiting
            <br className="hidden sm:block" /> to be unlocked
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The scale of B2B e-commerce in Germany highlights the significant
            opportunity for streamlined, trusted transactions.
          </p>
        </div>

        {/* Metrics grid */}
        <BentoGrid className="max-w-7xl mx-auto">
          {metrics.map(({ name, description, icon: Icon, background, className }, idx) => (
            <BentoCard
              key={idx}
              name={name}
              className={className}
              background={background as ReactNode}
              Icon={Icon}
              description={description}
              href="https://drive.google.com/file/d/1pWJCamMpokOnJ1pgmwtWo7w76X9zMmJJ/view"
              cta={idx >= 4 ? "ECC Köln - B2BEST Barometer Q2 2025" : "ECC Köln - B2B Marktmonitor 2024"}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
} 