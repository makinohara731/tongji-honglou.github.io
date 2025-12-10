function loadGiscus(containerSelector, term, mapping = "specific") {
    const container = document.querySelector(containerSelector);
    if (!container) return;
    
    container.innerHTML = ''; // 清空旧评论
    
    const script = document.createElement('script');
    script.src = "https://giscus.app/client.js";
    script.setAttribute("data-repo", SITE_CONFIG.giscus.repo);
    script.setAttribute("data-repo-id", SITE_CONFIG.giscus.repoId);
    script.setAttribute("data-category", SITE_CONFIG.giscus.category);
    script.setAttribute("data-category-id", SITE_CONFIG.giscus.categoryId);
    script.setAttribute("data-mapping", mapping);
    script.setAttribute("data-term", term || document.title);
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "top");
    script.setAttribute("data-theme", "noborder_light");
    script.setAttribute("data-lang", "zh-CN");
    script.setAttribute("data-loading", "lazy");
    script.setAttribute("crossorigin", "anonymous");
    script.setAttribute("async", "");
    
    container.appendChild(script);
}