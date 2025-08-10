import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="gradient-blood text-white py-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Your Blood Can Save Lives
          </h1>
          <p className="text-xl mb-8 text-white/90">
            Join our network of donors and be the difference between life and death for someone in need.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg"
              className="bg-white text-primary font-bold hover:bg-gray-100 transition-colors px-8 py-3 rounded-full"
            >
              Register Now
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-white text-white font-bold hover:bg-white hover:text-primary transition-colors px-8 py-3 rounded-full"
            >
              Learn More
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img 
            src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&h=600&q=80" 
            alt="Diverse group of happy blood donors with medical staff in a bright, clean hospital donation center" 
            className="rounded-lg shadow-2xl max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;