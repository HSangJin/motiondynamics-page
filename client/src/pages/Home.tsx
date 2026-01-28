import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Activity, Cpu, Layers, ShieldCheck, Zap, MousePointer2 } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background z-10"></div>
          {/* Abstract 3D Cube/Tech Background would go here as image */}
          <img 
            src="/images/001.webp" 
            alt="Motion Dynamics Hero Background" 
            className="w-full h-full object-cover opacity-30 scale-105 animate-pulse-slow"
          />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-blob"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
        </div>

        <div className="container relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="flex flex-col gap-6"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-2">
              <span className="h-[1px] w-12 bg-primary"></span>
              <span className="text-primary font-display font-bold tracking-widest text-sm uppercase">Future Motion Technology</span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold leading-tight text-white">
              NEW THINKING <br/>
              MAKES <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">CREATIVE VALUES</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground max-w-lg border-l-2 border-primary/30 pl-6">
              인증받은 기술로 고객만족을 실현하는 모션 플랫폼 시스템 설계 및 제작 기업, (주)모션다이나믹스입니다.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 mt-4">
              <a href="/products" className="inline-block">
                <Button size="lg" className="bg-primary hover:bg-primary/80 text-white rounded-none border-l-4 border-white font-display tracking-wider">
                  EXPLORE PRODUCTS <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
              <a href="/contact" className="inline-block">
                <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/5 text-white rounded-none font-display tracking-wider">
                  CONTACT US
                </Button>
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 glass-panel p-2 rounded-xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img 
                src="/images/004.webp" 
                alt="6DOF Motion Platform" 
                className="rounded-lg shadow-2xl border border-white/10 w-full"
              />
              
              {/* Floating UI Elements */}
              <div className="absolute -left-12 top-1/4 glass-panel p-4 rounded-lg border-l-4 border-primary animate-float">
                <div className="flex items-center gap-3">
                  <Activity className="text-primary w-6 h-6" />
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">Precision</div>
                    <div className="text-white font-bold font-display text-xl">High-Fidelity</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -right-8 bottom-1/4 glass-panel p-4 rounded-lg border-r-4 border-secondary animate-float animation-delay-1500">
                <div className="flex items-center gap-3">
                  <Cpu className="text-secondary w-6 h-6" />
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">Control</div>
                    <div className="text-white font-bold font-display text-xl">Real-time</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase">Scroll Down</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent"></div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-24 relative bg-background/50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 md:order-1">
              <div className="tech-border p-2">
                <img src="/images/002.webp" alt="Company Overview" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-card border border-white/10 p-6 flex flex-col justify-center items-center text-center shadow-xl">
                <span className="text-4xl font-display font-bold text-primary mb-1">2018</span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Established</span>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-8 h-[2px] bg-secondary"></span>
                <span className="text-secondary font-display font-bold tracking-widest text-sm uppercase">About Us</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                INNOVATIVE MOTION <br/>
                <span className="text-muted-foreground">PLATFORM EXPERTS</span>
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                (주)모션다이나믹스는 다수의 국가연구과제를 성공적으로 수행 및 지속적인 연구개발(R&D)을 통해 품질향상에 최선을 다하고 있습니다. 6자유도 전기식 모션 플랫폼 시스템 설계 및 제작 기업으로서, 고정밀 위치제어, 실시간 자세유지, 고하중 대응을 모두 만족시키는 다족 플랫폼 기술을 보유하고 있습니다.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                믿음과 신뢰를 바탕으로 한 보다 더 나은 삶과 미래를 만들어 사업영역에서 최고의 기업으로 성장하겠습니다. 변화, 행동, 신뢰, 기술, 책임이라는 5가지 핵심가치를 바탕으로 고객 가치 창출에 집중하고 있습니다.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex flex-col gap-2">
                  <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center text-primary mb-2">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h4 className="text-white font-bold">ISO 9001:2015</h4>
                  <p className="text-xs text-muted-foreground">국제 품질경영시스템 인증 획득</p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="w-10 h-10 rounded bg-secondary/10 flex items-center justify-center text-secondary mb-2">
                    <Layers className="w-5 h-5" />
                  </div>
                  <h4 className="text-white font-bold">벤처기업 인증</h4>
                  <p className="text-xs text-muted-foreground">기술보증기금 기술평가 우수기업</p>
                </div>
              </div>
              
              <a href="/about" className="inline-block text-white hover:text-primary p-0 group">
                MORE ABOUT US <span className="w-8 h-[1px] bg-white group-hover:bg-primary ml-4 transition-colors inline-block"></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 bg-card relative overflow-hidden">
        {/* Decorative Background Text */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-[0.03]">
          <span className="text-[20vw] font-display font-bold text-white leading-none whitespace-nowrap absolute top-10 -left-20">MOTION</span>
        </div>

        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-8 h-[2px] bg-primary"></span>
              <span className="text-primary font-display font-bold tracking-widest text-sm uppercase">Our Products</span>
              <span className="w-8 h-[2px] bg-primary"></span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">6DOF MOTION PLATFORM</h2>
            <p className="text-muted-foreground">
              서보모터&드라이브를 적용한 전동식 액추에이터를 사용하여 6개 방향의 운동이 가능합니다.
              시뮬레이터, VR, 가상체험 등 다양한 사업군에서 활용됩니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <MousePointer2 className="w-8 h-8" />,
                title: "6자유도 구현",
                desc: "HEAVE, ROLL, PITCH, SURGE, SWAY, YAW 6가지 운동을 완벽하게 구현하여 실제와 같은 움직임을 제공합니다."
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "전동식 액추에이터",
                desc: "서보 전동 모터를 이용한 직선형 구동 액추에이터를 적용하여 정밀한 제어와 강력한 힘을 전달합니다."
              },
              {
                icon: <Activity className="w-8 h-8" />,
                title: "성능 검증 시스템",
                desc: "기반중량, 변위, 속도, 가속도 테스트 등 철저한 성능 검증 프로세스를 거쳐 제작됩니다."
              }
            ].map((item, idx) => (
              <div key={idx} className="group relative bg-background border border-white/5 p-8 hover:border-primary/50 transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full -mr-8 -mt-8 group-hover:scale-150 transition-transform duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-card border border-white/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed border-t border-white/5 pt-4">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <a href="/products" className="inline-block bg-transparent border border-primary text-primary hover:bg-primary hover:text-white min-w-[200px] font-display tracking-wider px-6 py-2">
              VIEW PRODUCT DETAILS
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-primary/10 z-0">
          <img src="/images/007.webp" alt="Background" className="w-full h-full object-cover opacity-10 mix-blend-overlay" />
        </div>
        <div className="container relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
            READY TO EXPERIENCE <br/>
            <span className="text-primary">THE FUTURE OF MOTION?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            모션다이나믹스의 혁신적인 기술력으로 귀사의 프로젝트를 성공으로 이끄세요.
            맞춤형 솔루션 상담이 가능합니다.
          </p>
          <a href="/contact" className="inline-block bg-white text-background hover:bg-gray-200 font-bold px-8 py-6 rounded-none text-lg">
            GET IN TOUCH
          </a>
        </div>
      </section>
    </Layout>
  );
}
