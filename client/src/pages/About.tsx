import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Zap, Target, Users, TrendingUp, Shield } from "lucide-react";

export default function About() {
  const milestones = [
    { 
      year: "2018", 
      events: [
        "법인 및 사업자 등록",
        "기업부설연구소 설립",
        "소프트웨어 사업자 등록",
        "벤처기업 인증",
        "ISO9001:2015 인증",
        "프런티어벤처기업 선정 (전북 1호)"
      ] 
    },
    { 
      year: "2020", 
      events: [
        "전주공장 임대계약 체결",
        "익산 제3산업단지 부지 1,100평 계약",
        "익산 제3산업단지 신축부지 계약",
        "본점 이전 완료"
      ] 
    },
    { 
      year: "2021", 
      events: [
        "국내 최초 8축 6자유도 운동구현장치 개발",
        "선박해양플랜트연구소 기술 이전"
      ] 
    },
    { 
      year: "2022", 
      events: [
        "중소벤처기업부장관 표창 수여 (최용환 대표)",
        "중소벤처기업부장관 표창 수여 (강기섭 부대표)",
        "이노비즈 인증 (A등급)",
        "나라장터 제조물품 등록"
      ] 
    },
    { 
      year: "2023", 
      events: [
        "전라북도 지시표창 수여 (강기섭 부대표)",
        "전북 구암중소기업 선정",
        "전북 SW강소기업 선정"
      ] 
    },
    { 
      year: "2024", 
      events: [
        "전라북도 지시표창 수여 (강도곤 팀장)",
        "전북 국방벤처센터 협약기업 선정",
        "미소중소 수립장지 선정",
        "사) 전북인공지능협회 창립회원 가입"
      ] 
    },
    { 
      year: "2025", 
      events: [
        "자본금 증자 (2.5억 → 3.5억)"
      ] 
    }
  ];

  const coreValues = [
    { icon: Zap, title: "변화 (Innovation)", desc: "끊임없는 기술 혁신으로 미래를 선도합니다" },
    { icon: Target, title: "행동 (Action)", desc: "신속한 실행으로 결과를 만들어냅니다" },
    { icon: Shield, title: "신뢰 (Partnership)", desc: "고객과의 신뢰 관계를 최우선으로 합니다" },
    { icon: Zap, title: "기술 (Technic)", desc: "첨단 기술로 차별화된 가치를 제공합니다" },
    { icon: Award, title: "책임 (Responsibility)", desc: "사회적 책임을 다하는 기업입니다" }
  ];

  const achievements = [
    { count: "15건", label: "특허 등록", icon: Award },
    { count: "13건", label: "특허 출원", icon: TrendingUp },
    { count: "9건", label: "프로그램 저작권", icon: Zap },
    { count: "2건", label: "디자인 등록", icon: Shield }
  ];

  return (
    <Layout>
      {/* Page Header */}
      <div className="bg-card pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/001.webp')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="container relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-[2px] bg-primary"></span>
              <span className="text-primary font-display font-bold tracking-widest text-sm uppercase">About Us</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">COMPANY PROFILE</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              첨단 기술 기반의 모션 플랫폼 및 스마트 시스템 개발 전문 기업입니다.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="py-24 bg-background">
        <div className="container">
          {/* Company Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                혁신적인 기술력으로<br/>미래를 만들어갑니다
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                (주)모션다이나믹스는 차별화된 기술력과 노하우를 바탕으로 혁신적인 제품과 서비스를 제공하며, 미래 성장을 위한 핵심 역량을 구축하고 있습니다.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                6자유도 전기식 모션 플랫폼 시스템부터 스마트 시스템까지, 다양한 산업 분야에서 고객의 요구사항을 충족시키는 맞춤형 솔루션을 제공합니다. 다수의 국가연구과제를 성공적으로 수행하고 지속적인 연구개발(R&D)을 통해 품질향상에 최선을 다하고 있습니다.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((item, idx) => (
                  <div key={idx} className="bg-card border border-white/10 p-4 rounded">
                    <div className="text-2xl font-display font-bold text-primary mb-1">{item.count}</div>
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="tech-border p-4 bg-card/50">
                <img src="/images/001.webp" alt="Company Overview" className="w-full h-auto rounded shadow-2xl" />
              </div>
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            <Card className="bg-card border-white/10">
              <CardContent className="pt-8">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">VISION</h3>
                <p className="text-muted-foreground">
                  믿음과 신뢰를 바탕으로 한 보다 더 나은 삶과 미래를 만들어 사업영역에서 최고의 기업으로 성장
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-white/10">
              <CardContent className="pt-8">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mb-4">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">CORE VALUE</h3>
                <p className="text-muted-foreground">
                  변화, 행동, 신뢰, 기술, 책임을 바탕으로 고객 가치 창출에 집중
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-white/10">
              <CardContent className="pt-8">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">STRATEGY</h3>
                <p className="text-muted-foreground">
                  핵심역량 강화, 사업다각화, 창조적 기업문화 구축
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Core Values */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">핵심가치</h2>
              <p className="text-muted-foreground">모션다이나믹스의 5가지 핵심 가치</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {coreValues.map((value, idx) => {
                const Icon = value.icon;
                return (
                  <Card key={idx} className="bg-card border-white/10 hover:border-primary/50 transition-colors">
                    <CardContent className="pt-6">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="text-white font-bold mb-2">{value.title}</h4>
                      <p className="text-xs text-muted-foreground">{value.desc}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Company Timeline */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">회사 연혁</h2>
              <p className="text-muted-foreground">모션다이나믹스의 성장 과정</p>
            </div>
            <div className="space-y-8">
              {milestones.map((milestone, idx) => (
                <div key={idx} className="flex gap-8 items-start">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-primary/10 border-2 border-primary rounded-full flex items-center justify-center text-primary font-bold">
                      {milestone.year.slice(-2)}
                    </div>
                    {idx < milestones.length - 1 && (
                      <div className="w-1 h-24 bg-gradient-to-b from-primary/50 to-transparent mt-2"></div>
                    )}
                  </div>
                  <div className="flex-1 pt-2">
                    <h4 className="text-xl font-bold text-white mb-3">{milestone.year}</h4>
                    <ul className="space-y-2">
                      {milestone.events.map((event, eventIdx) => (
                        <li key={eventIdx} className="flex items-center gap-2 text-muted-foreground">
                          <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                          {event}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Organization */}
          <div className="bg-card border border-white/10 p-8 md:p-12 rounded">
            <h2 className="text-2xl font-bold text-white mb-8">조직 현황</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-display font-bold text-primary mb-2">11명</div>
                <p className="text-muted-foreground">총 인원</p>
              </div>
              <div>
                <div className="text-4xl font-display font-bold text-secondary mb-2">2명</div>
                <p className="text-muted-foreground">청년 재직자</p>
              </div>
              <div>
                <div className="text-4xl font-display font-bold text-primary mb-2">5개</div>
                <p className="text-muted-foreground">산학협력 대학</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-white/10">
              <h4 className="text-white font-bold mb-4">산학협력 기관</h4>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {["군산대학교", "우석대학교", "전주대학교", "부경대학교", "중앙대학교"].map((uni, idx) => (
                  <div key={idx} className="bg-background border border-white/5 p-3 rounded text-center text-sm text-muted-foreground hover:border-primary/50 transition-colors">
                    {uni}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
