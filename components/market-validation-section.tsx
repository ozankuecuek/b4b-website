import { CheckCircle, Building2, Globe, Shield, Zap, TrendingUp } from "lucide-react";

export default function MarketValidationSection() {
  return (
    <section className="relative bg-muted/30 py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full mb-6 inline-block tracking-wider uppercase">
              Market Validation
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 max-w-4xl mx-auto leading-tight">
            <span className="text-primary">Market-proven</span> approach
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real-world success stories and emerging regulatory frameworks demonstrate the market need and viability of our identity-first approach.
          </p>
        </div>

        <div className="space-y-16">
          <DocCheckValidation />
          <EuropeanBusinessWalletValidation />
        </div>
      </div>
    </section>
  );
}

function DocCheckValidation() {
  const similarities = [
    {
      title: "Identity Verification as Core Service",
      description: "DocCheck verifies healthcare professionals, we verify businesses",
      icon: Shield,
    },
    {
      title: "Unified Login Functionality", 
      description: "DoCheck works like social logins just as we intend to do",
      icon: CheckCircle,
    },
    {
      title: "Value-Added Services",
      description: "DocCheck attracts healthcare professionals through useful features",
      icon: Zap,
    },
    {
      title: "Network Effect Potential",
      description: "Growth becomes a sure-fire success after reaching a critical mass",
      icon: TrendingUp,
    },
  ];

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-3xl" />
      <div 
        className="relative bg-background/80 backdrop-blur-sm border border-border/50 rounded-3xl p-8 lg:p-12"
        style={{
          backgroundImage: 'url(/alina-grubnyak-ZiQkhI7417A-unsplash.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* White overlay for readability */}
        <div className="absolute inset-0 bg-white/85 rounded-3xl" />
        <div className="relative grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Building2 className="w-4 h-4" />
              Success Story
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Following <span className="text-primary">DocCheck&apos;s</span> example
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              DocCheck built a €100M+ business by becoming the trusted identity provider for healthcare professionals in Europe. Their success validates our approach of specialized identity verification for B2B commerce.
            </p>
            <div className="bg-muted/50 rounded-xl p-6">
              <h4 className="font-semibold text-foreground mb-3">Key Insight</h4>
              <p className="text-muted-foreground italic">
                &quot;Think of b4b as the DocCheck for general B2B e-commerce, but adding financial trust and payment terms to unlock even greater value.&quot;
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            {similarities.map((item, idx) => (
              <div key={idx} className="flex gap-4 p-4 rounded-xl bg-background/60 border border-border/30 hover:border-primary/20 transition-colors">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function EuropeanBusinessWalletValidation() {
  const benefits = [
    "b4b will pioneer adopting and shaping the European Business Wallet by elaborating and utilizing the same protocols",
    "We make it applicable for B2B e-commerce by adding credit checks and issuing risk-free credit lines", 
    "We will position ourselves as the premier commercial partner for B2B suppliers and buyers alike to adopt the new technology",
    "Once-in-a-generation opportunity for our business model to ride the wave of the European Business Wallet rollout"
  ];

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 rounded-3xl" />
      <div 
        className="relative bg-background/80 backdrop-blur-sm border border-border/50 rounded-3xl p-8 lg:p-12"
        style={{
          backgroundImage: 'url(/green-prophet-WUHtXGyJa_Q-unsplash.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Primary color overlay for readability */}
        <div className="absolute inset-0 bg-primary/90 rounded-3xl" />
        <div className="relative grid lg:grid-cols-2 gap-12 items-center">
          <div className="lg:order-2">
            <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Globe className="w-4 h-4" />
              Regulatory Framework
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              <span className="text-accent">European Business Wallet</span> as strategic catalyst
            </h3>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              The impending EU-wide digital identity for legal entities represents the most significant strategic opportunity on the horizon. It proves the market need for more streamlined identity management in B2B.
            </p>
            <div className="space-y-4">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl blur-xl" />
              <div className="relative bg-white/5 border border-white/20 rounded-2xl p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">EU Digital Identity Framework</h4>
                  <p className="text-sm text-white/80">Standardizing business verification across Europe</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-white/70">Market Preparation</span>
                    <span className="text-white font-semibold">2024-2025</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-white/70">Framework Launch</span>
                    <span className="text-white font-semibold">2026-2027</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-white/70">Full Adoption</span>
                    <span className="text-white font-semibold">2028+</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-white/20">
                  <p className="text-xs text-white/70 text-center italic">
                    Perfect timing to establish b4b as the leading value-added layer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 