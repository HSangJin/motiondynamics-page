import { useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const updateFavicon = () => {
      const img = new Image();
      img.src = '/md-logo.png';
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const size = 64;
        canvas.width = size;
        canvas.height = size;

        const scale = Math.min(size / img.width, size / img.height);
        const w = img.width * scale;
        const h = img.height * scale;
        const x = (size - w) / 2;
        const y = (size - h) / 2;

        ctx.drawImage(img, x, y, w, h);
        
        const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
        const dataUrl = canvas.toDataURL();
        
        if (!link) {
          const newLink = document.createElement('link');
          newLink.rel = 'icon';
          document.head.appendChild(newLink);
          newLink.href = dataUrl;
        } else {
          link.href = dataUrl;
        }
      };
    };
    
    updateFavicon();
  }, []);

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "PRODUCTS", path: "/products" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-body selection:bg-primary selection:text-white">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20" 
           style={{ 
             backgroundImage: 'linear-gradient(rgba(100, 255, 218, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(100, 255, 218, 0.05) 1px, transparent 1px)', 
             backgroundSize: '50px 50px' 
           }}>
      </div>

      {/* Header */}
      <header 
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300 border-b border-white/5",
          scrolled ? "bg-background/80 backdrop-blur-md py-4" : "bg-transparent py-6"
        )}
      >
        <div className="container flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 group">
              <img src="/md-logo.png" alt="MotionDynamics" className="w-12 h-10 object-contain group-hover:scale-110 transition-transform duration-300" style={{width: '40px', height: '36px'}} />
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl tracking-wider text-white">MOTION<span className="text-primary">DYNAMICS</span></span>
                <span className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase hidden sm:block">Future Motion Technology</span>
              </div>
              </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.path} href={item.path} className={cn(
                "font-display font-medium tracking-widest text-sm hover:text-primary transition-colors relative py-2",
                location === item.path ? "text-primary" : "text-muted-foreground"
              )}>
                {item.name}
                {location === item.path && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary shadow-[0_0_10px_rgba(230,57,70,0.8)]" />
                )}
              </a>
            ))}

          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center gap-8 animate-in fade-in duration-200">
          {navItems.map((item) => (
            <a key={item.path} href={item.path} 
              className={cn(
                "font-display font-bold text-3xl tracking-widest hover:text-primary transition-colors",
                location === item.path ? "text-primary" : "text-white"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}

      {/* Main Content */}
      <main className="flex-grow pt-20 relative z-10">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-white/5 pt-16 pb-8 relative z-10">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <img src="/md-logo.png" alt="MotionDynamics" className="w-12 h-10 object-contain" style={{width: '40px', height: '36px'}} />
                <span className="font-display font-bold text-xl tracking-wider text-white">MOTION<span className="text-primary">DYNAMICS</span></span>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
                인증받은 기술로 고객만족을 실현하는 모션 플랫폼 시스템 설계 및 제작 기업.<br/>
                새로운 생각이 창조적인 가치를 만듭니다.
              </p>
              <div className="flex gap-4">
                {/* Social Icons Placeholder */}
              </div>
            </div>
            
            <div>
              <h4 className="font-display font-bold text-white mb-6 tracking-widest">NAVIGATION</h4>
              <ul className="space-y-3">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <a href={item.path} className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                      <ChevronRight className="w-3 h-3 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-display font-bold text-white mb-6 tracking-widest">CONTACT</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex flex-col gap-1">
                  <span className="text-white font-medium">Head Office</span>
                  <span>전북 익산시 삼기면 오룡리 미륵사지로 795-7</span>
                </li>
                <li className="flex flex-col gap-1">
                  <span className="text-white font-medium">R&D Center</span>
                  <span>전북 군산시 산단남북로 189번길, 가람연구관 409호</span>
                </li>
                <li>TEL: 070-4870-3955</li>
                <li>FAX: 070-8270-3955</li>
                <li>E-mail: motion@motiondynamics.co.kr</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} MotionDynamics Co., Ltd. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
      
      <style>{`
        .hexagon-clip {
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }
      `}</style>
    </div>
  );
}
