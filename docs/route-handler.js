/**
 * Route Handler for Live Server SPA
 * 현재 경로를 유지하고 React Router에 전달합니다.
 */

(function() {
  // 현재 경로 저장
  const currentPath = window.location.pathname;
  
  // 루트가 아닌 경우 경로 정보 저장
  if (currentPath !== '/' && currentPath !== '/index.html') {
    // 세션 스토리지에 경로 저장
    sessionStorage.setItem('initialPath', currentPath);
    
    // 경로에서 .html 제거
    const cleanPath = currentPath.replace(/\.html$/, '');
    
    // 히스토리 API를 사용하여 경로 업데이트
    if (window.history && window.history.replaceState) {
      window.history.replaceState(null, '', cleanPath);
    }
  }
})();
