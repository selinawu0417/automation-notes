(function(){
  // highlight active nav link based on pathname
  const path = location.pathname.replace(/\/+$/, "");
  document.querySelectorAll("[data-nav]").forEach(a=>{
    const href = a.getAttribute("href") || "";
    const resolved = new URL(href, location.origin).pathname.replace(/\/+$/, "");
    if(resolved === path) a.classList.add("active");
  });

  // simple client-side filter for pages that include data-filter-list
  const input = document.querySelector("[data-filter-input]");
  const list = document.querySelector("[data-filter-list]");
  const count = document.querySelector("[data-filter-count]");
  if(input && list){
    const items = Array.from(list.querySelectorAll("[data-filter-item]"));
    const update = ()=>{
      const q = input.value.trim().toLowerCase();
      let shown = 0;
      items.forEach(el=>{
        const hay = (el.getAttribute("data-filter-text") || el.innerText).toLowerCase();
        const ok = !q || hay.includes(q);
        el.style.display = ok ? "" : "none";
        if(ok) shown++;
      });
      if(count) count.textContent = `${shown} result(s)`;
    };
    input.addEventListener("input", update);
    input.addEventListener("keydown", (e)=>{
      if(e.key === "Escape"){ input.value=""; update(); }
    });
    update();
  }
})();
