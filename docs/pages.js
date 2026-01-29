// 순수 HTML/CSS/JS로 구현한 페이지들
const pages = {
  home: `
    <div class="min-h-screen bg-background text-foreground">
      <!-- Navigation -->
      <nav class="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b border-border z-50">
        <div class="container mx-auto px-4 py-4 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <img src="./md-logo.png" alt="Logo" class="h-8 w-auto">
            <span class="font-bold text-lg">모션다이나믹스</span>
          </div>
          <div class="flex gap-6">
            <a href="/" class="text-foreground hover:text-primary transition">HOME</a>
            <a href="/about" class="text-foreground hover:text-primary transition">ABOUT</a>
            <a href="/products" class="text-foreground hover:text-primary transition">PRODUCTS</a>
            <a href="/contact" class="text-foreground hover:text-primary transition">CONTACT</a>
          </div>
        </div>
      </nav>

      <!-- Hero Section -->
      <section class="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div class="absolute inset-0 z-0">
          <img src="./images/001.webp" alt="Hero" class="w-full h-full object-cover opacity-30">
          <div class="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background z-10"></div>
        </div>

        <div class="container relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="flex flex-col gap-6">
            <div class="flex items-center gap-2">
              <span class="h-[1px] w-12 bg-primary"></span>
              <span class="text-primary font-bold tracking-widest text-sm uppercase">Future Motion Technology</span>
            </div>
            <h1 class="text-5xl lg:text-6xl font-bold leading-tight">
              정밀한 <span class="text-primary">모션 제어</span>의 미래
            </h1>
            <p class="text-lg text-foreground/80 max-w-lg">
              6축/8축 모션 플랫폼으로 정밀한 움직임을 구현합니다. 
              반도체, 의료, 항공우주 산업의 신뢰할 수 있는 파트너입니다.
            </p>
            <div class="flex gap-4">
              <a href="/products" class="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition">
                제품 보기 →
              </a>
              <a href="/contact" class="border border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary/10 transition">
                문의하기
              </a>
            </div>
          </div>
          <div class="hidden lg:block">
            <img src="./images/004.webp" alt="Motion Platform" class="w-full rounded-lg">
          </div>
        </div>
      </section>

      <!-- Features Section -->
      <section class="py-20 bg-card">
        <div class="container mx-auto px-4">
          <h2 class="text-4xl font-bold text-center mb-12">핵심 기술</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="p-6 bg-background rounded-lg border border-border">
              <h3 class="text-xl font-bold mb-3">정밀 제어</h3>
              <p class="text-foreground/70">마이크로 단위의 정밀한 움직임 제어로 최고의 성능을 제공합니다.</p>
            </div>
            <div class="p-6 bg-background rounded-lg border border-border">
              <h3 class="text-xl font-bold mb-3">고속 응답</h3>
              <p class="text-foreground/70">실시간 피드백을 통한 빠른 응답 속도로 효율성을 극대화합니다.</p>
            </div>
            <div class="p-6 bg-background rounded-lg border border-border">
              <h3 class="text-xl font-bold mb-3">안정성</h3>
              <p class="text-foreground/70">엄격한 품질 검증을 거친 신뢰할 수 있는 제품입니다.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="bg-background border-t border-border py-8">
        <div class="container mx-auto px-4 text-center text-foreground/60">
          <p>&copy; 2025 모션다이나믹스. All rights reserved.</p>
        </div>
      </footer>
    </div>
  `,

  about: `
    <div class="min-h-screen bg-background text-foreground">
      <!-- Navigation -->
      <nav class="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b border-border z-50">
        <div class="container mx-auto px-4 py-4 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <img src="./md-logo.png" alt="Logo" class="h-8 w-auto">
            <span class="font-bold text-lg">모션다이나믹스</span>
          </div>
          <div class="flex gap-6">
            <a href="/" class="text-foreground hover:text-primary transition">HOME</a>
            <a href="/about" class="text-primary font-bold">ABOUT</a>
            <a href="/products" class="text-foreground hover:text-primary transition">PRODUCTS</a>
            <a href="/contact" class="text-foreground hover:text-primary transition">CONTACT</a>
          </div>
        </div>
      </nav>

      <!-- Content -->
      <section class="pt-32 pb-20">
        <div class="container mx-auto px-4">
          <h1 class="text-5xl font-bold mb-8">회사 소개</h1>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 class="text-2xl font-bold mb-4">모션다이나믹스에 대해</h2>
              <p class="text-foreground/80 mb-4">
                모션다이나믹스는 정밀 모션 제어 기술 분야의 선도 기업입니다.
              </p>
              <p class="text-foreground/80 mb-4">
                2018년 설립 이후, 반도체, 의료, 항공우주 산업에 고성능 모션 플랫폼을 공급해왔습니다.
              </p>
              <p class="text-foreground/80">
                우리는 기술 혁신과 고객 만족을 최우선으로 하는 기업입니다.
              </p>
            </div>
            <div>
              <img src="./images/007.webp" alt="Company" class="w-full rounded-lg">
            </div>
          </div>

          <div class="bg-card p-8 rounded-lg border border-border">
            <h2 class="text-2xl font-bold mb-6">주요 성과</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 class="text-3xl font-bold text-primary mb-2">15+</h3>
                <p class="text-foreground/70">특허 보유</p>
              </div>
              <div>
                <h3 class="text-3xl font-bold text-primary mb-2">50+</h3>
                <p class="text-foreground/70">고객사</p>
              </div>
              <div>
                <h3 class="text-3xl font-bold text-primary mb-2">100%</h3>
                <p class="text-foreground/70">품질 검증</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="bg-background border-t border-border py-8">
        <div class="container mx-auto px-4 text-center text-foreground/60">
          <p>&copy; 2025 모션다이나믹스. All rights reserved.</p>
        </div>
      </footer>
    </div>
  `,

  products: `
    <div class="min-h-screen bg-background text-foreground">
      <!-- Navigation -->
      <nav class="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b border-border z-50">
        <div class="container mx-auto px-4 py-4 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <img src="./md-logo.png" alt="Logo" class="h-8 w-auto">
            <span class="font-bold text-lg">모션다이나믹스</span>
          </div>
          <div class="flex gap-6">
            <a href="/" class="text-foreground hover:text-primary transition">HOME</a>
            <a href="/about" class="text-foreground hover:text-primary transition">ABOUT</a>
            <a href="/products" class="text-primary font-bold">PRODUCTS</a>
            <a href="/contact" class="text-foreground hover:text-primary transition">CONTACT</a>
          </div>
        </div>
      </nav>

      <!-- Content -->
      <section class="pt-32 pb-20">
        <div class="container mx-auto px-4">
          <h1 class="text-5xl font-bold mb-8">제품</h1>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 class="text-2xl font-bold mb-4">6축 모션 플랫폼</h2>
              <ul class="space-y-3 text-foreground/80">
                <li>✓ 정밀도: ±0.01mm</li>
                <li>✓ 최대 속도: 500mm/s</li>
                <li>✓ 반복 정확도: ±0.005mm</li>
                <li>✓ 작동 온도: -10°C ~ 50°C</li>
              </ul>
            </div>
            <div>
              <img src="./motion-platform.jpg" alt="6-Axis Platform" class="w-full rounded-lg">
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <img src="./images/002.webp" alt="8-Axis Platform" class="w-full rounded-lg">
            </div>
            <div>
              <h2 class="text-2xl font-bold mb-4">8축 모션 플랫폼</h2>
              <ul class="space-y-3 text-foreground/80">
                <li>✓ 정밀도: ±0.005mm</li>
                <li>✓ 최대 속도: 600mm/s</li>
                <li>✓ 반복 정확도: ±0.003mm</li>
                <li>✓ 작동 온도: -20°C ~ 60°C</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="bg-background border-t border-border py-8">
        <div class="container mx-auto px-4 text-center text-foreground/60">
          <p>&copy; 2025 모션다이나믹스. All rights reserved.</p>
        </div>
      </footer>
    </div>
  `,

  contact: `
    <div class="min-h-screen bg-background text-foreground">
      <!-- Navigation -->
      <nav class="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b border-border z-50">
        <div class="container mx-auto px-4 py-4 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <img src="./md-logo.png" alt="Logo" class="h-8 w-auto">
            <span class="font-bold text-lg">모션다이나믹스</span>
          </div>
          <div class="flex gap-6">
            <a href="/" class="text-foreground hover:text-primary transition">HOME</a>
            <a href="/about" class="text-foreground hover:text-primary transition">ABOUT</a>
            <a href="/products" class="text-foreground hover:text-primary transition">PRODUCTS</a>
            <a href="/contact" class="text-primary font-bold">CONTACT</a>
          </div>
        </div>
      </nav>

      <!-- Content -->
      <section class="pt-32 pb-20">
        <div class="container mx-auto px-4">
          <h1 class="text-5xl font-bold mb-8">문의</h1>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 class="text-2xl font-bold mb-6">연락처</h2>
              <div class="space-y-4">
                <div>
                  <h3 class="font-bold mb-1">본사</h3>
                  <p class="text-foreground/70">서울시 강남구 테헤란로 123</p>
                </div>
                <div>
                  <h3 class="font-bold mb-1">R&D센터</h3>
                  <p class="text-foreground/70">경기도 성남시 분당구 정자동 456</p>
                </div>
                <div>
                  <h3 class="font-bold mb-1">전화</h3>
                  <p class="text-foreground/70">070-4870-3955</p>
                </div>
                <div>
                  <h3 class="font-bold mb-1">팩스</h3>
                  <p class="text-foreground/70">070-8270-3955</p>
                </div>
                <div>
                  <h3 class="font-bold mb-1">이메일</h3>
                  <p class="text-foreground/70">sjhan@motiondynamics.co.kr</p>
                </div>
              </div>
              <a href="./카탈로그-(주)모션다이나믹스.pdf" download class="mt-6 inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition">
                카탈로그 다운로드
              </a>
            </div>
            <div>
              <img src="./images/010.webp" alt="Contact" class="w-full rounded-lg">
            </div>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="bg-background border-t border-border py-8">
        <div class="container mx-auto px-4 text-center text-foreground/60">
          <p>&copy; 2025 모션다이나믹스. All rights reserved.</p>
        </div>
      </footer>
    </div>
  `
};
