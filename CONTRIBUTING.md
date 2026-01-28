# 기여 가이드

(주)모션다이나믹스 웹사이트 프로젝트에 기여하는 방법을 설명합니다.

## 🤝 기여 방법

### 1. 저장소 포크

```bash
git clone https://github.com/YOUR_USERNAME/motiondynamics-website.git
cd motiondynamics-website
```

### 2. 브랜치 생성

```bash
git checkout -b feature/your-feature-name
```

### 3. 변경 사항 커밋

```bash
git add .
git commit -m "feat: 기능 설명"
```

### 4. 푸시 및 Pull Request

```bash
git push origin feature/your-feature-name
```

GitHub에서 Pull Request를 생성하세요.

## 📝 커밋 메시지 규칙

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Type
- `feat`: 새로운 기능
- `fix`: 버그 수정
- `docs`: 문서 수정
- `style`: 코드 스타일 변경 (포맷팅)
- `refactor`: 코드 리팩토링
- `perf`: 성능 개선
- `test`: 테스트 추가
- `chore`: 빌드 설정, 의존성 업데이트

### 예제
```
feat(simulator): 6DOF 모션 시뮬레이터 추가

- Three.js를 사용한 3D 렌더링
- 6가지 자유도 제어 슬라이더
- 자동 애니메이션 기능

Closes #123
```

## 🎨 코드 스타일

### TypeScript
- 타입 명시적 선언
- `any` 타입 사용 금지
- 인터페이스 사용

```typescript
// ✅ Good
interface Product {
  id: string;
  name: string;
  price: number;
}

const product: Product = {
  id: "1",
  name: "6-DOF Platform",
  price: 50000
};

// ❌ Bad
const product: any = {
  id: "1",
  name: "6-DOF Platform",
  price: 50000
};
```

### React Components
- 함수형 컴포넌트 사용
- 커스텀 훅 활용
- Props 인터페이스 정의

```typescript
// ✅ Good
interface ProductCardProps {
  title: string;
  description: string;
  image: string;
}

export function ProductCard({ title, description, image }: ProductCardProps) {
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

// ❌ Bad
export function ProductCard(props: any) {
  return (
    <div className="product-card">
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}
```

### CSS/Tailwind
- Utility-first 접근
- 일관된 색상 사용
- 반응형 디자인

```tsx
// ✅ Good
<div className="flex items-center justify-between gap-4 p-4 md:p-6 lg:p-8">
  <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-white">
    Title
  </h2>
</div>

// ❌ Bad
<div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px' }}>
  <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: 'white' }}>
    Title
  </h2>
</div>
```

## 🧪 테스트

```bash
# 타입 체크
pnpm check

# 빌드 테스트
pnpm build

# 개발 서버 실행
pnpm dev
```

## 📋 체크리스트

Pull Request 전에 다음을 확인하세요:

- [ ] 코드가 프로젝트 스타일 가이드를 따릅니다
- [ ] 타입스크립트 오류가 없습니다
- [ ] 빌드가 성공합니다
- [ ] 모바일에서 테스트했습니다
- [ ] 이미지 경로가 올바릅니다
- [ ] 새 의존성을 추가하지 않았습니다 (필요시 설명)
- [ ] 문서를 업데이트했습니다

## 🐛 버그 리포트

### 버그 리포트 템플릿

```markdown
## 버그 설명
명확하고 간결한 버그 설명

## 재현 방법
1. 단계 1
2. 단계 2
3. 단계 3

## 예상 동작
어떻게 작동해야 하는지

## 실제 동작
실제로 어떻게 작동하는지

## 스크린샷
해당하는 경우 스크린샷 첨부

## 환경
- OS: [예: Windows 10]
- 브라우저: [예: Chrome 120]
- Node 버전: [예: 18.0.0]

## 추가 정보
기타 관련 정보
```

## 💡 기능 요청

### 기능 요청 템플릿

```markdown
## 기능 설명
새로운 기능에 대한 명확한 설명

## 사용 사례
이 기능이 해결할 문제

## 제안된 솔루션
어떻게 구현할 수 있을지

## 대안
다른 가능한 솔루션

## 추가 정보
기타 관련 정보
```

## 📚 문서 기여

문서 개선도 환영합니다:

- README.md: 프로젝트 개요
- DEPLOYMENT.md: 배포 가이드
- CONTRIBUTING.md: 기여 가이드
- 코드 주석: 복잡한 로직 설명

## 🎓 학습 자료

프로젝트에 기여하기 전에 다음을 학습하세요:

- [React 공식 문서](https://react.dev)
- [TypeScript 핸드북](https://www.typescriptlang.org/docs/)
- [Tailwind CSS 문서](https://tailwindcss.com/docs)
- [Vite 문서](https://vitejs.dev)

## 🙏 감사의 말

모든 기여자에게 감사합니다! 여러분의 기여가 프로젝트를 더 좋게 만듭니다.

## 📞 질문

질문이 있으면 GitHub Issues에서 토론을 시작하세요.

---

**행복한 코딩! 🚀**
