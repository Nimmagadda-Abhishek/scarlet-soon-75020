import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import safarLogo from "@/assets/safar-logo.jpeg";

const Index = () => {
  const features = [
    {
      icon: "🚗",
      title: "Travel & Earn",
      description: "Turn your regular trips into income by delivering packages along your route"
    },
    {
      icon: "📦",
      title: "Send Anywhere",
      description: "Connect with trusted travelers going your package's way for faster, affordable delivery"
    },
    {
      icon: "🛡️",
      title: "Safe & Secure",
      description: "Verified travelers, secure payments, and full tracking for peace of mind"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 md:py-20">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center space-y-12 text-center">
          {/* Logo */}
          <div className="w-full max-w-2xl animate-in zoom-in duration-700">
            <img 
              src={safarLogo} 
              alt="Safar Couriers - Turn Your Journey Into Earnings" 
              className="w-full h-auto rounded-2xl shadow-[0_20px_60px_-15px_hsl(356_82%_51%/0.25)]"
            />
          </div>

          {/* Coming Soon Badge */}
          <div className="animate-in fade-in duration-700 delay-200">
            <div className="inline-block px-6 py-2 bg-primary/10 border border-primary/20 rounded-full">
              <span className="text-primary font-semibold text-sm tracking-wide uppercase">Coming Soon</span>
            </div>
          </div>

          {/* Main Headline */}
          <div className="space-y-6 animate-in slide-in-from-bottom duration-700 delay-300">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl mx-auto leading-tight">
              Peer-to-Peer Delivery
              <span className="block mt-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Made Simple
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
              Connect travelers with senders for smart, cost-effective package delivery. 
              Earn money on your journeys or send packages affordably with trusted travelers.
            </p>
          </div>

          {/* CTA Button */}
          <div className="animate-in slide-in-from-bottom duration-700 delay-500 pt-4">
            <Button 
              variant="hero" 
              size="xl"
              className="group"
            >
              Download the App Now
              <svg 
                className="w-5 h-5 transition-transform group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M13 7l5 5m0 0l-5 5m5-5H6" 
                />
              </svg>
            </Button>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-24 md:mt-32 animate-in fade-in duration-700 delay-700">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="p-8 text-center hover:shadow-[0_20px_60px_-15px_hsl(356_82%_51%/0.15)] transition-all duration-300 hover:-translate-y-1 border-border/50"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-24 md:mt-32 animate-in fade-in duration-700 delay-1000">
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-12 md:p-16 border border-primary/10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  1000+
                </div>
                <div className="text-muted-foreground font-medium">Early Sign-ups</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  50+
                </div>
                <div className="text-muted-foreground font-medium">Cities Ready</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  24/7
                </div>
                <div className="text-muted-foreground font-medium">Support Available</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-24 text-center animate-in fade-in duration-700 delay-1200">
          <p className="text-muted-foreground mb-4">
            Join thousands of early adopters revolutionizing package delivery
          </p>
          <p className="text-sm text-muted-foreground/70">
            Be notified when we launch in your area
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
