import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-accent">
              Depot Air Minum
            </h3>
            <p className="text-white/80 mb-4 leading-relaxed">
              Menyediakan air minum berkualitas tinggi dengan standar kebersihan terbaik 
              untuk kesehatan keluarga Anda sejak 2008.
            </p>
            <div className="flex items-center text-white/80">
              <Phone className="w-4 h-4 mr-2" />
              <span>+62 812-3456-7890</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Layanan Kami</h4>
            <ul className="space-y-2 text-white/80">
              <li>• Air Mineral Premium</li>
              <li>• Isi Ulang Cepat</li>
              <li>• Antar Jemput Gratis</li>
              <li>• Galon Bersih</li>
              <li>• Konsultasi Kualitas Air</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak</h4>
            <div className="space-y-3 text-white/80">
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <span className="text-sm">
                  Jl. Merdeka No. 123, Kelurahan Sejahtera, Kota Makmur 12345
                </span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span className="text-sm">info@depotairminum.com</span>
              </div>
            </div>
          </div>

          {/* Operating Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Jam Operasional</h4>
            <div className="flex items-start text-white/80">
              <Clock className="w-4 h-4 mr-2 mt-1" />
              <div className="text-sm">
                <p>Senin - Minggu</p>
                <p className="font-semibold text-accent">06:00 - 22:00 WIB</p>
                <p className="mt-2 text-xs">*Layanan antar jemput 24 jam</p>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-white/20 my-8" />
        
        <div className="text-center text-white/60 text-sm">
          <p>&copy; 2024 Depot Air Minum Isi Ulang. Semua hak dilindungi undang-undang.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;