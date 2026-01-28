# 배포 가이드

(주)모션다이나믹스 웹사이트를 다양한 플랫폼에 배포하는 방법을 설명합니다.

## 📋 사전 준비

1. **GitHub 저장소 생성**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Motion Dynamics website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/motiondynamics-website.git
   git push -u origin main
   ```

2. **Node.js 및 pnpm 설치**
   - Node.js 18 이상
   - pnpm 10 이상

## 🚀 배포 옵션

### 1. Vercel (권장)

**장점**: 자동 배포, 무료 SSL, CDN, 빠른 성능

```bash
# Vercel CLI 설치
npm i -g vercel

# 로그인
vercel login

# 배포
vercel

# 프로덕션 배포
vercel --prod
```

**Vercel 대시보드에서 설정:**
- Project Settings → Build & Development Settings
- Build Command: `pnpm build`
- Output Directory: `dist`
- Install Command: `pnpm install`

### 2. Netlify

**장점**: 간단한 설정, 무료 SSL, 자동 배포

```bash
# Netlify CLI 설치
npm i -g netlify-cli

# 로그인
netlify login

# 배포
netlify deploy --prod
```

**또는 GitHub 연동:**
1. Netlify 대시보드에서 "New site from Git" 클릭
2. GitHub 저장소 선택
3. Build settings:
   - Build command: `pnpm build`
   - Publish directory: `dist`

### 3. GitHub Pages

**장점**: 무료, GitHub 통합

```bash
# 1. package.json 수정
{
  "homepage": "https://YOUR_USERNAME.github.io/motiondynamics-website",
  "scripts": {
    "deploy": "pnpm build && gh-pages -d dist"
  }
}

# 2. gh-pages 설치
pnpm add -D gh-pages

# 3. 배포
pnpm deploy

# 4. GitHub 저장소 설정
# Settings → Pages → Source: gh-pages branch
```

### 4. Railway

**장점**: 간단한 배포, 자동 스케일링

1. [Railway.app](https://railway.app) 가입
2. GitHub 저장소 연동
3. 프로젝트 생성
4. 자동 배포 시작

### 5. Render

**장점**: 무료 호스팅, 자동 배포

1. [Render.com](https://render.com) 가입
2. "New +" → "Static Site"
3. GitHub 저장소 선택
4. Build command: `pnpm build`
5. Publish directory: `dist`

### 6. AWS Amplify

**장점**: AWS 통합, 확장성

```bash
# Amplify CLI 설치
npm i -g @aws-amplify/cli

# 초기화
amplify init

# 배포
amplify publish
```

### 7. Docker + 클라우드 호스팅

**Dockerfile 생성:**

```dockerfile
# Build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install
COPY . .
RUN pnpm build

# Runtime stage
FROM node:18-alpine
WORKDIR /app
RUN npm install -g pnpm
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --prod
COPY --from=builder /app/dist ./dist
COPY server ./server
EXPOSE 3000
CMD ["pnpm", "start"]
```

**배포:**
```bash
# Docker 이미지 빌드
docker build -t motiondynamics-website .

# 로컬 테스트
docker run -p 3000:3000 motiondynamics-website

# 클라우드 레지스트리에 푸시 (예: Docker Hub)
docker tag motiondynamics-website YOUR_USERNAME/motiondynamics-website
docker push YOUR_USERNAME/motiondynamics-website
```

## 🔧 환경 변수 설정

배포 플랫폼에서 다음 환경 변수를 설정하세요 (필요시):

```
VITE_APP_TITLE=Motion Dynamics
VITE_APP_LOGO=https://your-domain.com/logo.png
```

## 📊 배포 후 확인사항

- [ ] 홈페이지 로드 확인
- [ ] 모든 페이지 네비게이션 테스트
- [ ] 3D 시뮬레이터 작동 확인
- [ ] 문의 폼 제출 테스트
- [ ] 모바일 반응형 확인
- [ ] 이미지 로드 확인
- [ ] 성능 측정 (Lighthouse)
- [ ] SEO 메타 태그 확인

## 🔐 보안 설정

### HTTPS 활성화
모든 배포 플랫폼에서 자동으로 HTTPS를 제공합니다.

### 도메인 연결

**커스텀 도메인 설정:**

1. **DNS 설정** (도메인 제공자)
   - Vercel: CNAME 또는 A 레코드 추가
   - Netlify: CNAME 레코드 추가
   - GitHub Pages: CNAME 파일 생성

2. **플랫폼 설정**
   - Vercel/Netlify 대시보드에서 도메인 추가
   - SSL 인증서 자동 발급

## 📈 모니터링 및 분석

### Google Analytics 추가

`client/index.html`에 추가:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### 성능 모니터링

- Vercel Analytics
- Netlify Analytics
- Google PageSpeed Insights

## 🔄 CI/CD 파이프라인

### GitHub Actions 예제

`.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: pnpm/action-setup@v2
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'pnpm'
      - run: pnpm install
      - run: pnpm build
      - uses: vercel/action@master
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          production: true
```

## 🆘 문제 해결

### 빌드 실패
```bash
# 의존성 재설치
rm -rf node_modules pnpm-lock.yaml
pnpm install

# 캐시 제거
pnpm store prune

# 빌드 재시도
pnpm build
```

### 배포 후 404 에러
- 라우터 설정 확인
- `dist` 폴더 생성 확인
- 빌드 출력 디렉토리 확인

### 이미지 로드 안 됨
- 이미지 경로 확인 (`/images/...`)
- 이미지 파일 존재 확인
- 캐시 초기화

## 📞 지원

배포 관련 문제는 각 플랫폼의 공식 문서를 참고하세요:
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)
- [GitHub Pages Docs](https://pages.github.com)
- [Railway Docs](https://docs.railway.app)

---

**마지막 업데이트**: 2026년 1월 28일
