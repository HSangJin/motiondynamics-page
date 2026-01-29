// 순수 JavaScript SPA 라우터
class SPARouter {
  constructor() {
    this.routes = {};
    this.currentPath = '/';
    this.init();
  }

  init() {
    // 초기 경로 설정
    this.currentPath = this.getCleanPath();
    
    // 뒤로가기/앞으로가기 이벤트
    window.addEventListener('popstate', () => this.navigate(this.getCleanPath(), false));
    
    // 링크 클릭 이벤트 위임
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href^="/"]');
      if (link) {
        e.preventDefault();
        const path = link.getAttribute('href');
        this.navigate(path);
      }
    });
    
    // 초기 페이지 로드
    this.loadPage(this.currentPath);
  }

  // 경로 정리
  getCleanPath() {
    let path = window.location.pathname;
    
    // 폴더명 제거
    path = path.replace(/\/motiondynamics-liveserver/, '');
    
    // .html 제거
    path = path.replace(/\.html$/, '');
    
    // 마지막 슬래시 제거
    path = path.replace(/\/$/, '') || '/';
    
    return path;
  }

  // 경로 등록
  register(path, component) {
    this.routes[path] = component;
  }

  // 페이지 네비게이션
  navigate(path, pushState = true) {
    if (pushState) {
      // URL 변경
      window.history.pushState({ path }, '', path);
    }
    
    this.currentPath = path;
    this.loadPage(path);
  }

  // 페이지 로드
  loadPage(path) {
    const component = this.routes[path];
    
    if (!component) {
      this.load404();
      return;
    }
    
    const content = document.getElementById('app-content');
    if (content) {
      content.innerHTML = component;
      
      // 페이지 로드 후 스크립트 실행
      this.executeScripts(content);
      
      // 스크롤 상단으로
      window.scrollTo(0, 0);
    }
  }

  // 404 페이지
  load404() {
    const content = document.getElementById('app-content');
    if (content) {
      content.innerHTML = `
        <div style="text-align: center; padding: 50px;">
          <h1>404 - Page Not Found</h1>
          <p>요청한 페이지를 찾을 수 없습니다.</p>
          <a href="/" style="color: #0066cc; text-decoration: underline;">홈으로 돌아가기</a>
        </div>
      `;
    }
  }

  // 동적 스크립트 실행
  executeScripts(element) {
    const scripts = element.querySelectorAll('script');
    scripts.forEach(script => {
      const newScript = document.createElement('script');
      newScript.textContent = script.textContent;
      element.appendChild(newScript);
    });
  }
}

// 전역 라우터 인스턴스
const router = new SPARouter();
