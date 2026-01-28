# EmailJS 설정 가이드

Contact 페이지의 문의 폼이 실제로 이메일을 발송하도록 설정하는 방법입니다.

## 1단계: EmailJS 가입 및 계정 생성

1. [EmailJS 공식 사이트](https://www.emailjs.com/)에 방문합니다.
2. **Sign Up** 버튼을 클릭하여 무료 계정을 생성합니다.
3. 이메일 인증을 완료합니다.

## 2단계: 이메일 서비스 연결

1. 대시보드에서 **Email Services** 탭으로 이동합니다.
2. **Add New Service** 버튼을 클릭합니다.
3. 사용할 이메일 서비스를 선택합니다:
   - **Gmail** (추천): Gmail 계정 선택
   - **Outlook**, **Yahoo** 등도 가능합니다.
4. 이메일 계정 연결을 승인합니다.
5. **Service ID** 복사 (예: `service_abc123def456`)

## 3단계: 이메일 템플릿 생성

1. 대시보드에서 **Email Templates** 탭으로 이동합니다.
2. **Create New Template** 버튼을 클릭합니다.
3. 다음과 같이 템플릿을 설정합니다:

**템플릿 이름:** `motion_dynamics_contact_form`

**이메일 제목:**
```
[모션다이나믹스] 새로운 문의가 접수되었습니다 - {{from_name}}
```

**이메일 본문:**
```
안녕하세요,

새로운 문의가 접수되었습니다.

---
**발신자 정보**
- 이름: {{from_name}}
- 이메일: {{from_email}}
- 연락처: {{from_phone}}
- 회사명: {{from_company}}

**문의 내용**
{{message}}

---

이 이메일은 모션다이나믹스 웹사이트의 문의 폼을 통해 자동으로 발송되었습니다.
```

4. **Save** 버튼을 클릭합니다.
5. **Template ID** 복사 (예: `template_abc123def456`)

## 4단계: Public Key 확인

1. 대시보드에서 **Account** 또는 **API** 탭으로 이동합니다.
2. **Public Key** 복사 (예: `abc123def456ghi789`)

## 5단계: 코드에 설정값 입력

`client/src/pages/Contact.tsx` 파일을 열고 다음을 수정합니다:

```typescript
// 36번 줄
emailjs.init("YOUR_PUBLIC_KEY"); 
// 위를 아래로 변경:
emailjs.init("abc123def456ghi789"); // 실제 Public Key 입력

// 55-56번 줄
const result = await emailjs.send(
  "YOUR_SERVICE_ID",      // 실제 Service ID 입력
  "YOUR_TEMPLATE_ID",     // 실제 Template ID 입력
```

예시:
```typescript
emailjs.init("abc123def456ghi789");

const result = await emailjs.send(
  "service_abc123def456",
  "template_abc123def456",
  {
    // ... 나머지 코드
  }
);
```

## 6단계: 테스트

1. 웹사이트의 Contact 페이지로 이동합니다.
2. 폼을 작성하고 **SEND MESSAGE** 버튼을 클릭합니다.
3. 설정한 이메일 주소로 이메일이 도착하는지 확인합니다.

## 무료 플랜 한계

- **월 200개 이메일** 발송 가능
- 초과 시 유료 플랜으로 업그레이드 필요

## 문제 해결

**이메일이 안 올 때:**
1. 브라우저 콘솔에서 에러 메시지 확인
2. Service ID, Template ID, Public Key가 정확한지 확인
3. EmailJS 대시보드에서 서비스 상태 확인
4. 스팸 폴더 확인

**더 많은 도움:**
- [EmailJS 공식 문서](https://www.emailjs.com/docs/)
- [EmailJS 튜토리얼](https://www.emailjs.com/docs/tutorial/create-service/)
