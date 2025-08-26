import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Zap, Heart } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, number: "10,000+", label: "Pelanggan Puas" },
    { icon: Zap, number: "15+", label: "Tahun Pengalaman" },
    { icon: Award, number: "5", label: "Sertifikat Resmi" },
    { icon: Heart, number: "100%", label: "Kepuasan Terjamin" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Tentang Kami
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Kami adalah depot air minum isi ulang terpercaya yang telah melayani masyarakat 
              selama lebih dari 15 tahun. Dengan komitmen tinggi terhadap kualitas dan kebersihan, 
              kami menggunakan teknologi penyaringan terdepan untuk menghadirkan air minum yang 
              sehat dan berkualitas.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Setiap tetes air yang kami produksi melalui proses penyaringan bertahap yang ketat, 
              mulai dari penyaringan pasir, karbon aktif, hingga teknologi reverse osmosis dan 
              sterilisasi UV. Kepercayaan pelanggan adalah prioritas utama kami.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-primary rounded-full mr-4"></div>
                <span className="text-foreground font-medium">Teknologi penyaringan 7 tahap</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-primary rounded-full mr-4"></div>
                <span className="text-foreground font-medium">Uji laboratorium berkala</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-primary rounded-full mr-4"></div>
                <span className="text-foreground font-medium">Sertifikat BPOM dan Halal MUI</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-primary rounded-full mr-4"></div>
                <span className="text-foreground font-medium">Layanan pelanggan 24/7</span>
              </div>
            </div>
          </div>

          {/* Right Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-card transition-all duration-300 bg-gradient-water border-0">
                <CardContent className="p-0">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-foreground font-medium">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;