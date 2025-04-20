window.onload = function () {
  const cfg = window.clutterConfig;
  
  if (!cfg || !cfg.siteId) return;

  const data = {
    visitor_user_agent: navigator.userAgent,
    site_id: cfg.siteId,
    referrer: document.referrer,
    page: window.location.pathname,
  };

  // todo: https://paper.theditor.xyz/api/event
  fetch("http://localhost:8080/api/event", {
    method: 'post',
    body: JSON.stringify(data)
  })
}