import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Alamat",
      details: "Jl. Merdeka No. 123, Kelurahan Sejahtera, Kota Makmur 12345"
    },
    {
      icon: Phone,
      title: "Telepon & WhatsApp",
      details: "+62 812-3456-7890"
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      details: "Senin - Minggu: 06:00 - 22:00 WIB"
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@depotairminum.com"
    }
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Hubungi Kami
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Siap melayani kebutuhan air minum berkualitas Anda. Hubungi kami untuk informasi lebih lanjut
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Informasi Kontak
            </h3>
            
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-6 hover:shadow-card transition-all duration-300">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-water rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-1">
                        {info.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {info.details}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="p-6 bg-gradient-hero text-white border-0">
              <CardContent className="p-0">
                <h4 className="text-xl font-bold mb-3">Layanan Antar Jemput</h4>
                <p className="mb-4">Gratis antar jemput untuk pembelian minimal 5 galon dalam radius 10 km</p>
                <Button className="bg-white text-primary hover:bg-white/90 font-semibold">
                  Pesan Antar Jemput
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-8">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="text-2xl font-bold text-foreground">
                Kirim Pesan
              </CardTitle>
              <CardDescription className="text-base">
                Isi form di bawah untuk mengirim pesan atau pertanyaan kepada kami
              </CardDescription>
            </CardHeader>
            
            <CardContent className="p-0">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Nama Lengkap
                    </label>
                    <Input placeholder="Masukkan nama lengkap" className="border-border" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Nomor Telepon
                    </label>
                    <Input placeholder="Masukkan nomor telepon" className="border-border" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email
                  </label>
                  <Input type="email" placeholder="Masukkan alamat email" className="border-border" />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Pesan
                  </label>
                  <Textarea 
                    placeholder="Tulis pesan atau pertanyaan Anda..." 
                    rows={5}
                    className="border-border"
                  />
                </div>
                
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3">
                  Kirim Pesan
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;