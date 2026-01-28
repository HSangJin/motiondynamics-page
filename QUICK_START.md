# 🚀 빠른 시작 가이드

(주)모션다이나믹스 웹사이트를 5분 안에 시작하세요!

## 📦 설치

### 1단계: 저장소 클론

```bash
git clone https://github.com/YOUR_USERNAME/motiondynamics-website.git
cd motiondynamics-website
```

### 2단계: 의존성 설치

```bash
# pnpm이 없으면 먼저 설치
npm install -g pnpm

# 의존성 설치
pnpm install
```

### 3단계: 개발 서버 실행

```bash
pnpm dev
```

브라우저에서 `http://localhost:5173`으로 접속하면 완료! 🎉

## 📝 주요 명령어

```bash
# 개발 서버 실행 (HMR 포함)
pnpm dev

# 프로덕션 빌드
pnpm build

# 빌드 결과 미리보기
pnpm preview

# 타입 체크
pnpm check

# 코드 포맷팅
pnpm format
```

## 📁 프로젝트 구조 이해하기

```
client/
├── src/
│   ├── pages/          ← 페이지 컴포넌트 (Home, About, Products 등)
│   ├── components/     ← 재사용 가능한 컴포넌트
│   ├── App.tsx         ← 라우터 설정
│   ├── index.css       ← 전역 스타일 및 테마
│   └── main.tsx        ← 진입점
└── public/
    └── images/         ← 이미지 자산
```

## 🎨 콘텐츠 수정하기

### 홈페이지 텍스트 변경

`client/src/pages/Home.tsx`를 열고 텍스트를 수정하세요:

```tsx
<h1 className="text-5xl font-bold">
  NEW THINKING  {/* ← 여기를 수정 */}
  MAKES CREATIVE VALUES
</h1>
```

### 색상 변경

`client/src/index.css`에서 CSS 변수를 수정하세요:

```css
:root {
  --primary: #e63946;        /* 주 색상 */
  --secondary: #64ffda;      /* 보조 색상 */
  --background: #0a192f;     /* 배경색 */
}
```

### 이미지 추가

1. 이미지를 `client/public/images/`에 저장
2. 컴포넌트에서 사용:

```tsx
<img src="/images/your-image.webp" alt="Description" />
```

## 🌐 배포하기

### GitHub Pages 배포 (무료)

```bash
# 1. GitHub 저장소 생성
# https://github.com/new

# 2. 로컬 저장소 설정
git remote add origin https://github.com/YOUR_USERNAME/motiondynamics-website.git
git branch -M main
git push -u origin main

# 3. GitHub 저장소 설정
# Settings → Pages → Source: GitHub Actions
# (자동 배포 설정됨)
```

### Vercel 배포 (권장)

```bash
# 1. Vercel CLI 설치
npm i -g vercel

# 2. 배포
vercel --prod
```

### Netlify 배포

```bash
# 1. Netlify CLI 설치
npm i -g netlify-cli

# 2. 배포
netlify deploy --prod
```

## 🔍 자주 묻는 질문

### Q: 포트 5173 대신 다른 포트에서 실행하려면?

```bash
pnpm dev -- --port 3000
```

### Q: 프로덕션 빌드 결과를 로컬에서 테스트하려면?

```bash
pnpm build
pnpm preview
```

### Q: 새 페이지를 추가하려면?

1. `client/src/pages/NewPage.tsx` 생성
2. `client/src/App.tsx`에 라우트 추가:

```tsx
import NewPage from "@/pages/NewPage";

<Route path="/newpage" component={NewPage} />
```

3. `client/src/components/Layout.tsx`에 네비게이션 추가

### Q: 3D 시뮬레이터를 수정하려면?

`client/src/components/MotionSimulator.tsx`를 수정하세요.

### Q: 빌드 오류가 발생하면?

```bash
# 캐시 제거
pnpm store prune

# 의존성 재설치
rm -rf node_modules pnpm-lock.yaml
pnpm install

# 다시 빌드
pnpm build
```

## 📚 더 알아보기

- [README.md](./README.md) - 전체 문서
- [DEPLOYMENT.md](./DEPLOYMENT.md) - 배포 가이드
- [CONTRIBUTING.md](./CONTRIBUTING.md) - 기여 가이드

## 💡 팁

- 개발 중에는 `pnpm dev`로 실시간 리로드 활용
- 타입스크립트 오류는 `pnpm check`로 확인
- 코드는 `pnpm format`으로 자동 포맷팅
- 브라우저 DevTools에서 React 개발자 도구 사용

## 🆘 도움이 필요하신가요?

- [GitHub Issues](https://github.com/YOUR_USERNAME/motiondynamics-website/issues)에서 질문하세요
- [React 공식 문서](https://react.dev)
- [Tailwind CSS 공식 문서](https://tailwindcss.com)

---

**행복한 개발! 🚀**

마지막 업데이트: 2026년 1월 28일
