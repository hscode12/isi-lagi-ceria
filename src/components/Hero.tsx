import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-water-depot.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Depot Air Minum
          <span className="block text-accent">Isi Ulang Terpercaya</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
          Menyediakan air minum berkualitas tinggi dengan standar kebersihan terbaik
          untuk kesehatan keluarga Anda
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 text-lg">
            Pesan Sekarang
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 text-lg">
            Lihat Layanan
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;