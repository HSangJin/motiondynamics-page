import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-background text-foreground relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/images/001.webp')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
      
      <div className="relative z-10 flex flex-col items-center text-center p-4">
        <div className="w-24 h-24 bg-card border border-primary/50 flex items-center justify-center rounded-full mb-8 shadow-[0_0_30px_rgba(230,57,70,0.3)]">
          <AlertTriangle className="w-12 h-12 text-primary animate-pulse" />
        </div>
        
        <h1 className="text-8xl font-display font-bold text-white mb-2">404</h1>
        <div className="h-[2px] w-24 bg-primary mb-6"></div>
        <h2 className="text-2xl font-bold text-white mb-4">PAGE NOT FOUND</h2>
        <p className="text-muted-foreground max-w-md mb-8">
          요청하신 페이지를 찾을 수 없습니다. <br/>
          입력하신 주소가 정확한지 다시 한번 확인해 주시기 바랍니다.
        </p>
        
        <Link href="/">
          <Button size="lg" className="bg-primary hover:bg-primary/80 text-white font-display tracking-wider rounded-none">
            RETURN TO HOME
          </Button>
        </Link>
      </div>
    </div>
  );
}
