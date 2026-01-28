import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Cog, Gauge, Maximize, Award, Zap } from "lucide-react";

export default function Products() {
  const specifications = [
    {
      model: "6축 모션 플랫폼",
      heave: "±80mm",
      roll: "±25°",
      pitch: "±23°",
      yaw: "±25°",
      surge: "±80mm",
      sway: "±80mm",
      advantage: "전기 소비량 적음",
      disadvantage: "운동범위, 속도, 가반중량 제한",
      application: "일반 시뮬레이터, 교육용"
    },
    {
      model: "8축 모션 플랫폼",
      heave: "확대 범위",
      roll: "동일 값",
      pitch: "동일 값",
      yaw: "확대 범위",
      surge: "확대 범위",
      sway: "확대 범위",
      advantage: "오동작 방지, 큰 운동범위, 고속/고하중 대응",
      disadvantage: "높은 전기 소비량",
      application: "국방, 해양, 항공 시뮬레이터"
    }
  ];

  const performanceTests = [
    { name: "가반중량 테스트", desc: "웨이트 더미를 활용한 성능 검증" },
    { name: "변위 테스트", desc: "레이저 거리측정기 및 전자 각도기 사용" },
    { name: "속도 테스트", desc: "IMU센서를 통한 실시간 속도 측정" },
    { name: "가속도 테스트", desc: "IMU센서를 통한 가속도 측정" },
    { name: "정밀도 테스트", desc: "명령값과 측정값 비교 검증" }
  ];

  return (
    <Layout>
      {/* Page Header */}
      <div className="bg-card pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/004.webp')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="container relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-[2px] bg-primary"></span>
              <span className="text-primary font-display font-bold tracking-widest text-sm uppercase">Our Products</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">6-DOF MOTION PLATFORM</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              고정밀 위치제어, 실시간 자세유지, 고하중 대응을 모두 만족시키는 전기식 모션 플랫폼 시스템
            </p>
          </motion.div>
        </div>
      </div>

      <section className="py-24 bg-background">
        <div className="container">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12 bg-card border border-white/10">
              <TabsTrigger value="overview" className="text-xs md:text-sm">개요</TabsTrigger>
              <TabsTrigger value="specs" className="text-xs md:text-sm">사양</TabsTrigger>
              <TabsTrigger value="tech" className="text-xs md:text-sm">기술</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-12">
              {/* Motion Platform Image */}
              <div className="relative rounded-lg overflow-hidden mb-12 max-w-md mx-auto">
                <img src="/motion-platform.jpg" alt="6-DOF Motion Platform" className="w-full h-auto object-cover rounded-lg shadow-2xl" style={{width: '229px', height: '240px'}} />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    고정밀 위치제어, 실시간 자세유지, 고하중 대응을 모두 만족시키는 다축 플랫폼 기술입니다. 
                    서보모터와 드라이브를 적용한 전동식 액추에이터를 사용하여 6개 방향의 독립적인 운동을 구현합니다.
                  </p>
                  
                  <div className="bg-card border border-white/10 p-6 mb-8 rounded">
                    <h3 className="text-white font-bold mb-4">핵심 기술 특징</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Award className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">8축 확장 기술 보유 (국내 유일) - 6축 + 2축 추가 확장</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Award className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">국산 전기식 모션플랫폼 자체 설계/제조 가능</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Award className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">SW 제어, UI, 센서 융합 기술 일괄 대응</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {["HEAVE (상하)", "ROLL (좌우회전)", "PITCH (앞뒤기울기)", "SURGE (전후)", "SWAY (좌우)", "YAW (제자리회전)"].map((motion, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 bg-card border border-white/5 rounded">
                        <Maximize className="w-4 h-4 text-secondary" />
                        <span className="text-sm text-white font-medium">{motion}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* System Configuration */}
              <div className="bg-card border-y border-white/5 py-16 -mx-4 md:-mx-8 px-4 md:px-8">
                <div className="text-center mb-12">
                  <h3 className="text-2xl font-bold text-white mb-4">SYSTEM CONFIGURATION</h3>
                  <p className="text-muted-foreground">정밀한 부품들의 완벽한 조화로 최상의 성능을 구현합니다.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    { title: "01 상부", desc: "상부 구조물과 결합용 / 금속재질 (SS400, AL) : 1 세트" },
                    { title: "02 하부", desc: "설치되는 장소의 베이스에 고정되어 지지대 역할 / 금속재질 (SS400, AL) : 1 세트" },
                    { title: "03 회전부", desc: "상/하부 프레임 연결 및 직선, 회전운동시 구동력 전달 / 금속재질 (S45C) : 12 세트" },
                    { title: "04 블록", desc: "블스크류가 삽입되어있는 구조로 모션의 자세각을 구현 / AL&S45C : 6 세트" },
                    { title: "05 엔코더", desc: "엔코더를 통해 모션 회전수 데이터 추출 및 정밀제어 : 6 세트" },
                    { title: "제어 시스템", desc: "역기구학 알고리즘 기반 실시간 제어 UI, 센서 응합 기술" }
                  ].map((item, idx) => (
                    <Card key={idx} className="bg-background border-white/10 hover:border-primary/50 transition-colors">
                      <CardContent className="pt-6">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                          <Cog className="w-6 h-6" />
                        </div>
                        <h4 className="text-lg font-bold text-white mb-3">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Performance Verification */}
              <div>
                <div className="text-center mb-12">
                  <h3 className="text-2xl font-bold text-white mb-4">PERFORMANCE VERIFICATION</h3>
                  <p className="text-muted-foreground">철저한 테스트 과정을 통해 신뢰성을 보장합니다.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  {performanceTests.map((test, idx) => (
                    <div key={idx} className="relative group">
                      <div className="bg-card p-6 border border-white/5 h-full hover:bg-white/5 transition-colors rounded">
                        <span className="text-3xl font-display font-bold text-white/5 absolute top-4 right-4 group-hover:text-primary/20 transition-colors">{String(idx + 1).padStart(2, '0')}</span>
                        <div className="w-10 h-10 bg-secondary/10 rounded flex items-center justify-center text-secondary mb-4">
                          <Gauge className="w-5 h-5" />
                        </div>
                        <h4 className="text-white font-bold mb-2 text-sm">{test.name}</h4>
                        <p className="text-xs text-muted-foreground">{test.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Design Tools & Technology */}
              <div className="bg-card border border-white/10 p-8 rounded">
                <h3 className="text-2xl font-bold text-white mb-8">DESIGN & CONTROL TECHNOLOGY</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-bold text-primary mb-4">설계 도구</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-1" />
                        <div>
                          <span className="text-white font-medium">Solid Works (3D)</span>
                          <p className="text-sm text-muted-foreground">3D 모델링, 어셈블리, 2D 도면 생성</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-1" />
                        <div>
                          <span className="text-white font-medium">DraftSight (2D)</span>
                          <p className="text-sm text-muted-foreground">전문적인 2D 설계 및 도면화</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-secondary mb-4">제어 소프트웨어</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Zap className="w-4 h-4 text-secondary shrink-0 mt-1" />
                        <div>
                          <span className="text-white font-medium">역기구학 알고리즘</span>
                          <p className="text-sm text-muted-foreground">각도를 거리로 변환하는 정밀 계산으로 6자유도 독립적 운동 제어</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Zap className="w-4 h-4 text-secondary shrink-0 mt-1" />
                        <div>
                          <span className="text-white font-medium">실시간 제어 UI</span>
                          <p className="text-sm text-muted-foreground">관리자 설정, 상태 모니터링, 데이터 추출 등 6가지 주요 기능</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Zap className="w-4 h-4 text-secondary shrink-0 mt-1" />
                        <div>
                          <span className="text-white font-medium">센서 응합 기술</span>
                          <p className="text-sm text-muted-foreground">엔코더, IMU 센서 등을 통한 정밀한 피드백 및 제어</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Specifications Tab */}
            <TabsContent value="specs" className="space-y-12">
              {/* Motion Platform Image */}
              <div className="relative rounded-lg overflow-hidden mb-12 max-w-md mx-auto">
                <img src="/motion-platform.jpg" alt="6-DOF Motion Platform" className="w-full h-auto object-cover rounded-lg shadow-2xl" style={{width: '229px', height: '240px'}} />
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-4 px-4 text-white font-bold">모델</th>
                      <th className="text-center py-4 px-4 text-white font-bold">Heave</th>
                      <th className="text-center py-4 px-4 text-white font-bold">Roll</th>
                      <th className="text-center py-4 px-4 text-white font-bold">Pitch</th>
                      <th className="text-center py-4 px-4 text-white font-bold">Yaw</th>
                      <th className="text-center py-4 px-4 text-white font-bold">Surge</th>
                      <th className="text-center py-4 px-4 text-white font-bold">Sway</th>
                    </tr>
                  </thead>
                  <tbody>
                    {specifications.map((spec, idx) => (
                      <tr key={idx} className="border-b border-white/5 hover:bg-white/5">
                        <td className="py-4 px-4 text-white font-medium">{spec.model}</td>
                        <td className="text-center py-4 px-4 text-muted-foreground">{spec.heave}</td>
                        <td className="text-center py-4 px-4 text-muted-foreground">{spec.roll}</td>
                        <td className="text-center py-4 px-4 text-muted-foreground">{spec.pitch}</td>
                        <td className="text-center py-4 px-4 text-muted-foreground">{spec.yaw}</td>
                        <td className="text-center py-4 px-4 text-muted-foreground">{spec.surge}</td>
                        <td className="text-center py-4 px-4 text-muted-foreground">{spec.sway}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="bg-card border-white/10">
                  <CardContent className="pt-6">
                    <h4 className="text-lg font-bold text-white mb-4">장점</h4>
                    <ul className="space-y-2">
                      {specifications.map((spec, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary">•</span>
                          <span><strong>{spec.model}:</strong> {spec.advantage}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-card border-white/10">
                  <CardContent className="pt-6">
                    <h4 className="text-lg font-bold text-white mb-4">응용 분야</h4>
                    <ul className="space-y-2">
                      {specifications.map((spec, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-secondary">•</span>
                          <span><strong>{spec.model}:</strong> {spec.application}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Tech Tab */}
            <TabsContent value="tech" className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">기술 혁신</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <div>
                        <p className="text-white font-medium">15건의 특허 등록</p>
                        <p className="text-sm text-muted-foreground">국내 및 국제 특허 포함</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-secondary shrink-0 mt-1" />
                      <div>
                        <p className="text-white font-medium">9건의 프로그램 저작권</p>
                        <p className="text-sm text-muted-foreground">제어 소프트웨어 및 UI</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <div>
                        <p className="text-white font-medium">2건의 디자인 등록</p>
                        <p className="text-sm text-muted-foreground">제품 외형 및 구조</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">기술 자산</h3>
                  <div className="space-y-4">
                    <div className="bg-background border border-white/5 p-4 rounded">
                      <p className="text-white font-medium mb-2">8축 확장 기술</p>
                      <p className="text-sm text-muted-foreground">6자유도 + 2축 추가 확장으로 더 큰 운동범위와 고하중 대응 가능</p>
                    </div>
                    <div className="bg-background border border-white/5 p-4 rounded">
                      <p className="text-white font-medium mb-2">역기구학 알고리즘</p>
                      <p className="text-sm text-muted-foreground">각도 명령값을 거리값으로 변환하는 정밀 계산 기술</p>
                    </div>
                    <div className="bg-background border border-white/5 p-4 rounded">
                      <p className="text-white font-medium mb-2">센서 응합 기술</p>
                      <p className="text-sm text-muted-foreground">엔코더, IMU 센서 등을 통한 실시간 피드백 및 제어</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
}
