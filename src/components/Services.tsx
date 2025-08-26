import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Droplets, Shield, Clock, Truck } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Droplets,
      title: "Air Mineral Premium",
      description: "Air mineral berkualitas tinggi dengan proses penyaringan 7 tahap",
      features: ["pH Seimbang", "Mineral Alami", "Bebas Bakteri", "Rasa Segar"]
    },
    {
      icon: Shield,
      title: "Jaminan Kebersihan",
      description: "Standar kebersihan tinggi dengan sertifikasi BPOM dan Halal",
      features: ["Sertifikat BPOM", "Halal MUI", "ISO 9001", "Uji Lab Rutin"]
    },
    {
      icon: Clock,
      title: "Layanan Cepat",
      description: "Proses isi ulang cepat dengan waktu tunggu minimal",
      features: ["Isi Ulang 5 Menit", "Antrian Online", "Buka 24 Jam", "Tanpa Booking"]
    },
    {
      icon: Truck,
      title: "Antar Jemput",
      description: "Layanan antar jemput galon untuk kemudahan pelanggan",
      features: ["Gratis Antar", "Area Luas", "Jadwal Fleksibel", "Galon Bersih"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Layanan Kami
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Berbagai layanan terbaik untuk memenuhi kebutuhan air minum berkualitas Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-water transition-all duration-300 hover:-translate-y-2 bg-card border-border">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-water rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base mb-6 text-muted-foreground">
                  {service.description}
                </CardDescription>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center justify-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;