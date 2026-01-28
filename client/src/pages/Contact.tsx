import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Printer, Download } from "lucide-react";
import { MapView } from "@/components/Map";

export default function Contact() {
  return (
    <Layout>
      {/* Page Header */}
      <div className="bg-card pt-32 pb-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-secondary/10 to-transparent"></div>
        <div className="container relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-[2px] bg-secondary"></span>
              <span className="text-secondary font-display font-bold tracking-widest text-sm uppercase">Get In Touch</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">CONTACT US</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              모션다이나믹스는 언제나 고객 여러분의 문의를 환영합니다.<br/>
              궁금하신 점이 있으시면 언제든지 연락주세요.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="py-24 bg-background">
        <div className="container">
          <div>
            {/* Contact Info & Map */}
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-primary pl-6">OFFICE INFO</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-card border border-white/10 flex items-center justify-center text-primary shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">본사 (Head Office)</h4>
                      <p className="text-muted-foreground text-sm">전북 익산시 삼기면 오룡리 미륵사지로 795-7</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-card border border-white/10 flex items-center justify-center text-primary shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">기업부설연구소 (R&D Center)</h4>
                      <p className="text-muted-foreground text-sm">전북 군산시 산단남북로 189번길, 가람연구관 409호</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-white/5">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-card border border-white/10 flex items-center justify-center text-secondary shrink-0">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold mb-1">TEL</h4>
                        <p className="text-muted-foreground text-sm">070-4870-3955</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-card border border-white/10 flex items-center justify-center text-secondary shrink-0">
                        <Printer className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold mb-1">FAX</h4>
                        <p className="text-muted-foreground text-sm">070-8270-3955</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 sm:col-span-2">
                      <div className="w-10 h-10 bg-card border border-white/10 flex items-center justify-center text-secondary shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold mb-1">E-MAIL</h4>
                        <p className="text-muted-foreground text-sm">motion@motiondynamics.co.kr</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-white/5">
                    <h4 className="text-white font-bold mb-4">카탈로그 다운로드</h4>
                    <a href="/카탈로그-(주)모션다이나믹스.pdf" download className="inline-flex items-center gap-2 px-6 py-3 bg-secondary hover:bg-secondary/80 text-white font-bold rounded transition-colors">
                      <Download className="w-4 h-4" />
                      카탈로그 다운로드
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="h-[400px] bg-card border border-white/10 relative overflow-hidden rounded-lg">
                 <MapView 
                  className="w-full h-full"
                  onMapReady={(map) => {
                    const center = { lat: 36.0194, lng: 127.0258 }; // 익산시 삼기면 대략적인 좌표
                    map.setCenter(center);
                    map.setZoom(14);
                    
                    new google.maps.Marker({
                      position: center,
                      map: map,
                      title: "(주)모션다이나믹스"
                    });
                  }}
                 />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
