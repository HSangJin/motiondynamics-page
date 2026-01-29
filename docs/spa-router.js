/**
 * SPA Router for Live Server
 * 이 파일은 Live Server에서 SPA 라우팅을 지원하기 위해 필요합니다.
 * index.html에 자동으로 주입됩니다.
 */

(function() {
  // Live Server 감지
  const isLiveServer = window.location.hostname === '127.0.0.1' || 
                       window.location.hostname === 'localhost';
  
  if (!isLiveServer) return;

  // 현재 경로 저장
  const currentPath = window.location.pathname;
  
  // 루트 경로가 아니고 파일이 아닌 경우
  if (currentPath !== '/' && !currentPath.includes('.')) {
    // 세션 스토리지에 목표 경로 저장
    sessionStorage.setItem('spaTargetPath', currentPath);
    
    // index.html로 리다이렉트
    window.location.href = '/';
  }
})();
