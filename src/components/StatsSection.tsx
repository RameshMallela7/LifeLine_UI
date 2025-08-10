const StatsSection = () => {
  const stats = [
    { number: "10,000+", label: "Lives Saved" },
    { number: "25,000+", label: "Active Donors" },
    { number: "200+", label: "Partner Hospitals" },
  ];

  return (
    <section className="bg-card py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-6 bg-secondary rounded-xl">
              <div className="text-5xl font-bold text-primary mb-4">
                {stat.number}
              </div>
              <div className="text-xl font-semibold text-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;