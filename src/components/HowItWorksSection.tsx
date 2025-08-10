const HowItWorksSection = () => {
  const steps = [
    {
      number: "1",
      title: "Register Your Profile",
      description: "Complete your profile with basic information and upload required documents. Our verification takes less than 24 hours."
    },
    {
      number: "2",
      title: "Get Matched",
      description: "Our AI matching system will notify you when someone nearby needs your blood type, showing distance and urgency."
    },
    {
      number: "3",
      title: "Donate & Track",
      description: "Visit the designated medical center, donate, and track your donations and health impact through your dashboard."
    }
  ];

  return (
    <section id="how-it-works" className="py-16 bg-card">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-card-foreground mb-16">
          Simple Steps to Save Lives
        </h2>
        <div className="relative">
          <div className="border-l-4 border-primary absolute h-full left-1/2 transform -translate-x-1/2 md:left-8 md:translate-x-0"></div>
          <div className="space-y-12 relative">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} mb-6 md:mb-0 ${index % 2 !== 0 ? 'order-2 md:order-1' : 'order-2 md:order-1'}`}>
                  <h3 className="text-2xl font-bold text-card-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
                <div className={`md:w-1/2 flex justify-center ${index % 2 !== 0 ? 'order-1 md:order-2' : 'order-1 md:order-2'}`}>
                  <div className="bg-secondary p-6 rounded-full w-20 h-20 flex items-center justify-center">
                    <span className="text-primary text-3xl font-bold">
                      {step.number}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;