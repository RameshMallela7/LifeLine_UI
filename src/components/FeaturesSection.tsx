import { Bell, Shield, Heart } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Bell,
      title: "Instant Notifications",
      description: "Get immediate alerts when your blood type is needed nearby, complete with location details and urgency level."
    },
    {
      icon: Shield,
      title: "Secure Platform",
      description: "Your personal data is encrypted and protected. We comply with all healthcare data security regulations."
    },
    {
      icon: Heart,
      title: "Donor Rewards",
      description: "Earn points for each donation redeemable for health checkups, pharmacy discounts, and more."
    }
  ];

  return (
    <section id="features" className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-foreground mb-16">
          Why Choose LifeLine?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-card p-8 rounded-xl shadow-md card-hover">
                <div className="text-primary text-4xl mb-6">
                  <Icon className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-card-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;