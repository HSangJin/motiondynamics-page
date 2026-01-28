# Motion Dynamics - 기업 홈페이지

(주)모션다이나믹스의 공식 기업 홈페이지입니다. 6자유도 모션 플랫폼 시스템 전문 기업의 기술력과 혁신성을 소개합니다.

## 🚀 주요 기능

- **홈페이지**: 기업 소개, 핵심 기술, 5가지 핵심가치 강조
- **회사 소개**: 상세 연혁(2018-2025), 비전, 조직 현황
- **제품 페이지**: 6축/8축 모션 플랫폼 사양, 성능 검증, 고객 사례
- **3D 시뮬레이터**: 6-DOF 모션 플랫폼 인터랙티브 데모
- **문의 페이지**: 연락처 정보 및 문의 폼

## 🎨 디자인 철학

**Industrial Futurism** 컨셉으로 설계되었습니다:
- Deep Navy (#0a192f) 배경
- Neon Cyan (#64ffda) & MD Red (#e63946) 액센트
- 기술적이고 정밀한 엔지니어링 이미지 강조
- 비대칭 그리드와 역동적인 섹션 분할

## 📋 기술 스택

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS 4 + shadcn/ui
- **Animation**: Framer Motion
- **3D**: Three.js (시뮬레이터)
- **Build Tool**: Vite
- **Package Manager**: pnpm

## 🛠️ 설치 및 실행

### 필수 요구사항
- Node.js 18+
- pnpm 10+

### 설치

```bash
# 저장소 클론
git clone https://github.com/YOUR_USERNAME/motiondynamics-website.git
cd motiondynamics-website

# 의존성 설치
pnpm install
```

### 개발 서버 실행

```bash
pnpm dev
```

브라우저에서 `http://localhost:5173`으로 접속합니다.

### 프로덕션 빌드

```bash
pnpm build
```

## 📁 프로젝트 구조

```
motiondynamics-website/
├── client/
│   ├── src/
│   │   ├── pages/           # 페이지 컴포넌트
│   │   │   ├── Home.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Products.tsx
│   │   │   ├── Simulator.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── NotFound.tsx
│   │   ├── components/      # 재사용 가능한 컴포넌트
│   │   │   ├── Layout.tsx
│   │   │   ├── MotionSimulator.tsx
│   │   │   └── ui/          # shadcn/ui 컴포넌트
│   │   ├── contexts/        # React Context
│   │   ├── hooks/           # 커스텀 훅
│   │   ├── lib/             # 유틸리티 함수
│   │   ├── App.tsx          # 라우터 설정
│   │   ├── main.tsx         # 진입점
│   │   └── index.css        # 전역 스타일 및 테마
│   ├── public/
│   │   └── images/          # 이미지 자산
│   └── index.html           # HTML 템플릿
├── package.json
├── vite.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

## 🎯 페이지 설명

### 홈페이지 (/)
- 기업의 슬로건: "NEW THINKING MAKES CREATIVE VALUES"
- 핵심 기술 소개
- 제품 개요
- 문의 CTA

### 회사 소개 (/about)
- 기업 연혁 (2018-2025)
- 핵심가치 5가지
- 인증 및 수상 정보
- 비전 및 전략

### 제품 (/products)
- 6축/8축 모션 플랫폼 사양 비교
- 구성 요소 상세 정보
- 성능 검증 프로세스
- 제어 소프트웨어 기술
- 고객 사례

### 3D 시뮬레이터 (/simulator)
- 6-DOF 모션 플랫폼 인터랙티브 데모
- 6가지 자유도 제어 (X, Y, Z, Roll, Pitch, Yaw)
- 자동 애니메이션 및 수동 제어

### 문의 (/contact)
- 회사 연락처 정보
- 문의 폼
- 위치 정보

## 🌐 배포

### Vercel 배포 (권장)

```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
vercel
```

### GitHub Pages 배포

```bash
# 빌드
pnpm build

# gh-pages 패키지 설치
pnpm add -D gh-pages

# package.json에 다음 추가:
# "homepage": "https://YOUR_USERNAME.github.io/motiondynamics-website",
# "scripts": { "deploy": "pnpm build && gh-pages -d dist" }

# 배포
pnpm deploy
```

### 기타 호스팅 (Netlify, Railway 등)

각 플랫폼의 공식 문서를 참고하여 배포하세요.

## 📝 커스터마이징

### 색상 변경

`client/src/index.css`의 CSS 변수를 수정하세요:

```css
:root {
  --primary: #e63946;        /* MD Red */
  --secondary: #64ffda;      /* Neon Cyan */
  --background: #0a192f;     /* Deep Navy */
  /* ... 기타 색상 */
}
```

### 폰트 변경

`client/index.html`의 Google Fonts 링크를 수정하세요:

```html
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT:wght@400;600;700&display=swap" rel="stylesheet" />
```

### 콘텐츠 수정

각 페이지의 텍스트와 이미지는 해당 컴포넌트에서 직접 수정할 수 있습니다.

## 🔧 개발 가이드

### 새 페이지 추가

1. `client/src/pages/`에 새 파일 생성 (예: `NewPage.tsx`)
2. `client/src/App.tsx`에 라우트 추가
3. `client/src/components/Layout.tsx`에 네비게이션 항목 추가

### 새 컴포넌트 추가

1. `client/src/components/`에 새 파일 생성
2. 필요한 경우 shadcn/ui 컴포넌트 활용
3. Tailwind CSS로 스타일링

### 이미지 추가

1. 이미지를 `client/public/images/`에 저장
2. 컴포넌트에서 `/images/filename.webp`로 참조

## 📱 반응형 디자인

모든 페이지는 모바일, 태블릿, 데스크톱에서 최적화되어 있습니다.

## ♿ 접근성

- 시맨틱 HTML 사용
- ARIA 레이블 포함
- 키보드 네비게이션 지원
- 충분한 색상 대비

## 📊 성능

- Lighthouse 최적화
- 이미지 최적화 (WebP 형식)
- 코드 스플리팅
- 지연 로딩

## 🐛 버그 리포트

이슈를 발견하면 GitHub Issues에 보고해주세요.

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 있습니다.

## 📞 연락처

- **회사명**: (주)모션다이나믹스
- **이메일**: motion@motiondynamics.co.kr
- **전화**: 070-4870-3955
- **팩스**: 070-8270-3955
- **본사**: 전북 익산시 삼기면 오룡리 미륵사지로 795-7
- **R&D센터**: 전북 군산시 산단남북로 189번길, 가람연구관 409호

## 🙏 감사의 말

이 프로젝트는 다음 오픈소스 프로젝트를 사용합니다:
- [React](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [Framer Motion](https://www.framer.com/motion)
- [Vite](https://vitejs.dev)

---

**마지막 업데이트**: 2026년 1월 28일
