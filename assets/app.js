/* Zison Wong — portfolio
   Vanilla JS. Reads window.SITE from data.js. */

(function () {
  "use strict";

  var PROJECTS = window.SITE.projects;
  var CATEGORIES = window.SITE.categories;

  var ICONS = {
    eye: '<path d="M2.5 12S6 6 12 6s9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"/><circle cx="12" cy="12" r="2.6"/>',
    terminal: '<rect x="3" y="4" width="18" height="16" rx="1"/><path d="m7 9 3 3-3 3M13.5 15H17"/>',
    mouse: '<rect x="7" y="2.5" width="10" height="19" rx="5"/><path d="M12 2.5v6"/>',
    network: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/>',
    keyboard: '<rect x="2.5" y="6" width="19" height="12" rx="1.5"/><path d="M6 10h.01M9 10h.01M12 10h.01M15 10h.01M18 10h.01M7 14h10"/>',
    sliders: '<path d="M4 6h10M18 6h2M4 12h4M14 12h6M4 18h12M20 18h0"/><circle cx="16" cy="6" r="2"/><circle cx="10" cy="12" r="2"/><circle cx="18" cy="18" r="2"/>',
    shirt: '<path d="M8.5 4 4 6.8l2 4 2.2-1.1V20h7.6V9.7L18 10.8l2-4L15.5 4 13 5.5h-2L8.5 4Z"/>',
    search: '<circle cx="11" cy="11" r="6.3"/><path d="m15.8 15.8 4.7 4.7"/>',
    shield: '<path d="M12 3 4.5 6v5.6c0 4.6 7.5 8.4 7.5 8.4s7.5-3.8 7.5-8.4V6L12 3Z"/><path d="m9 12 2 2 4-4"/>',
    window: '<rect x="3" y="4" width="18" height="16" rx="1"/><path d="M3 8h18M6.2 6h.01M9 6h.01"/>',
    doc: '<path d="M6 3h8l4 4v14H6V3Z"/><path d="M14 3v4h4M9 12h6M9 16h6"/>',
    spark: '<path d="m12 3 2.1 5.9 5.9 2.1-5.9 2.1L12 19l-2.1-5.9L4 11l5.9-2.1L12 3Z"/>',
    database: '<ellipse cx="12" cy="5.5" rx="7.5" ry="2.8"/><path d="M4.5 5.5v6c0 1.5 3.4 2.8 7.5 2.8s7.5-1.3 7.5-2.8v-6M4.5 11.5v6c0 1.5 3.4 2.8 7.5 2.8s7.5-1.3 7.5-2.8v-6"/>',
    translate: '<path d="M3.5 5.5h9M8 5.5V3.5M5.5 5.5c0 4-2 7-3.5 8M6.5 9.5c1.1 2.1 3 4 5.5 5"/><path d="m13 20.5 4-10 4 10M14.5 17h5"/>',
    layers: '<path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 13 9 5 9-5"/><path d="m3 17 9 5 9-5"/>',
    code: '<path d="m8 8-5 4 5 4M16 8l5 4-5 4M13.5 4.5l-3 15"/>',
    palette: '<circle cx="12" cy="12" r="8.6"/><circle cx="8" cy="9" r=".9"/><circle cx="12" cy="7" r=".9"/><circle cx="16" cy="9" r=".9"/><path d="M12 21c-1.4 0-2-1-2-2 0-1.3 1-2 2-2h2.6a3.4 3.4 0 0 0 3.4-3.4"/>',
    tag: '<path d="M3 12V4h8l9 9-8 8-9-9Z"/><circle cx="7.5" cy="7.5" r="1.3"/>',
    barcode: '<path d="M4 5v14M7 5v14M10 5v9M13 5v14M16 5v9M19 5v14"/>',
    grid: '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>',
    box: '<path d="M3 7.5 12 3l9 4.5v9L12 21l-9-4.5v-9Z"/><path d="M3 7.5l9 4.5 9-4.5M12 12v9"/>',
    qr: '<rect x="4" y="4" width="6" height="6"/><rect x="14" y="4" width="6" height="6"/><rect x="4" y="14" width="6" height="6"/><path d="M14 14h2v2h-2zM18 18h2v2h-2zM14 20h2M20 14h-2"/>',
    book: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5v-16Z"/><path d="M4 21.5h16"/>',
    chip: '<rect x="7" y="7" width="10" height="10" rx="1"/><path d="M9.5 3v4M12 3v4M14.5 3v4M9.5 17v4M12 17v4M14.5 17v4M3 9.5h4M3 12h4M3 14.5h4M17 9.5h4M17 12h4M17 14.5h4"/>',
    wave: '<path d="M2 12h3l2.2-6.5L11 18l3-9 1.8 3H22"/>',
    phone: '<rect x="7" y="2.5" width="10" height="19" rx="1"/><path d="M10.5 18.5h3"/>',
    image: '<rect x="3" y="4" width="18" height="16" rx="1"/><circle cx="8.5" cy="9.5" r="1.4"/><path d="m21 15-5-5L5 20"/>',
    piano: '<rect x="3" y="5" width="18" height="14" rx="1"/><path d="M8 5v9M12 5v9M16 5v9M8 14v5M16 14v5"/>',
    mic: '<rect x="9" y="2.5" width="6" height="11" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21M8.5 21h7"/>',
    bike: '<circle cx="6" cy="17" r="3.8"/><circle cx="18" cy="17" r="3.8"/><path d="M6 17l4-9h5l3 9M10 8h5M13.5 8l-1-3h3"/>',
    chart: '<path d="M4 20V4M4 20h16"/><path d="m7.5 15 3.5-4.5 3 3 5-6.5"/>'
  };

  var STATUS = {
    active: "活跃",
    live: "已上线",
    wip: "开发中",
    paused: "暂停",
    failed: "未达成"
  };

  var AUTHORSHIP = {
    fork: "FORK",
    contribution: "参与",
    collaboration: "合作",
    derivative: "衍生",
    collection: "合集",
    original: "原创"
  };

  var AUTHORSHIP_FULL = {
    fork: "Fork / 参考（非原创）",
    contribution: "参与（原作另有其人）",
    collaboration: "合作",
    derivative: "衍生（应用层原创）",
    collection: "合集（部分来自社区）",
    original: "原创"
  };

  var DOT = {
    active: "var(--green)",
    live: "var(--blue)",
    wip: "var(--warn)",
    paused: "var(--muted)",
    failed: "var(--bad)"
  };

  var state = {
    cat: "all",
    q: "",
    view: "grid",
    page: "projects",
    modalId: null,
    modalList: [],
    lastFocus: null
  };

  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  var homeView = $("#home-view");
  var gallery = $("#gallery");
  var aboutPanel = $("#about-panel");
  var linksPanel = $("#links-panel");
  var searchInput = $("#search");
  var modal = $("#modal");
  var modalCard = $(".modal-card", modal);
  var modalHero = $("#modal-hero");
  var modalBody = $("#modal-body");
  var modalClose = $("#modal-close");
  var modalPrev = $("#modal-prev");
  var modalNext = $("#modal-next");

  /* ---------- helpers ---------- */

  function icon(name) {
    var path = ICONS[name] || ICONS.spark;
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" ' +
      'stroke-linecap="square" stroke-linejoin="miter" aria-hidden="true">' + path + "</svg>";
  }

  function projectById(id) {
    for (var i = 0; i < PROJECTS.length; i++) if (PROJECTS[i].id === id) return PROJECTS[i];
    return null;
  }

  function categoryById(id) {
    for (var i = 0; i < CATEGORIES.length; i++) if (CATEGORIES[i].id === id) return CATEGORIES[i];
    return CATEGORIES[0];
  }

  function countByCat(id) {
    if (id === "all") return PROJECTS.length;
    return PROJECTS.filter(function (p) { return p.cat === id; }).length;
  }

  function pad(n) { return (n < 10 ? "0" : "") + n; }

  function filteredProjects() {
    var q = state.q.toLowerCase();
    return PROJECTS.filter(function (p) {
      if (state.cat !== "all" && p.cat !== state.cat) return false;
      if (!q) return true;
      var hay = (p.name + " " + p.zh + " " + p.summary + " " + p.code + " " + p.tech.join(" ") + " " + p.cat + " " + (p.credit || "")).toLowerCase();
      return hay.indexOf(q) !== -1;
    });
  }

  /* ---------- render ---------- */

  function renderTicker() {
    var items = [
      "AI AGENTS", "TEXTILE TOOLS", "MUSIC FIRMWARE", "VOCALOID / 数摇 / SHOEGAZE / EMO",
      "REVERSE ENGINEERING", PROJECTS.length + " PROJECTS", "ORIGINAL / FORK 标明署名",
      "B站 · 河中子申", "GITHUB PAGES"
    ];
    var one = items.map(function (t) { return "<span>" + t + "</span><i>✕</i>"; }).join("");
    $("#ticker-track").innerHTML = one + one;
  }

  function renderCategories() {
    var html = CATEGORIES.map(function (c, i) {
      var active = state.page === "projects" && state.cat === c.id ? " active" : "";
      var href = c.id === "all" ? "#/" : "#/c/" + c.id;
      return '<a href="' + href + '" class="nav-link' + active + '" data-cat="' + c.id + '">' +
        '<span class="nav-no">' + pad(i) + "</span>" +
        '<span class="nav-name">' + c.label + "</span>" +
        '<span class="nav-count">' + countByCat(c.id) + "</span></a>";
    }).join("");
    $("#collections").innerHTML = html;
  }

  function authBadge(p) {
    if (!p.authorship || p.authorship === "original") return "";
    return '<span class="auth" data-a="' + p.authorship + '">' + (AUTHORSHIP[p.authorship] || p.authorship) + "</span>";
  }

  function creditLine(p) {
    if (!p.credit) return "";
    var text = p.creditUrl
      ? '<a href="' + p.creditUrl + '" target="_blank" rel="noopener">' + p.credit + " ↗</a>"
      : p.credit;
    return '<p class="card-credit">' + text + "</p>";
  }

  function renderGallery() {
    var list = filteredProjects();
    var total = PROJECTS.length;

    gallery.className = "gallery " + (state.view === "list" ? "list-view" : "grid-view");
    gallery.innerHTML = list.map(function (p, i) {
      var index = PROJECTS.indexOf(p) + 1;
      var featured = p.featured ? " is-featured" : "";
      return '<article class="card' + featured + '" role="button" tabindex="0" data-id="' + p.id +
        '" data-cat="' + p.cat + '" data-status="' + p.status + '" data-pattern="' + p.pattern +
        '" style="animation-delay:' + Math.min(i * 14, 180) + 'ms">' +
        '<div class="card-glyph">' +
          '<span class="card-code">' + p.code + "</span>" +
          '<span class="card-num">' + pad(index) + "</span>" +
          '<span class="card-icon">' + icon(p.icon) + "</span>" +
        "</div>" +
        '<div class="card-body">' +
          '<div class="card-kicker"><span class="card-cat">' + categoryById(p.cat).label + "</span>" +
            (p.featured ? '<span class="featured-tag">FEATURED</span>' : "") + authBadge(p) + "</div>" +
          '<h3 class="card-name">' + p.name + "</h3>" +
          '<p class="card-zh">' + p.zh + "</p>" +
          '<p class="card-summary">' + p.summary + "</p>" +
          '<div class="card-tags">' + p.tech.slice(0, 3).map(function (t) { return "<span>" + t + "</span>"; }).join("") + "</div>" +
          creditLine(p) +
        "</div>" +
        '<div class="card-foot">' +
          '<span class="card-status"><span class="dot"></span>' + (STATUS[p.status] || p.status) + "</span>" +
          '<span class="card-open">打开 ↗</span>' +
        "</div></article>";
    }).join("");

    $("#result-count").textContent = list.length + " / " + total;
    $("#empty").hidden = list.length !== 0;

    var title;
    if (state.q) title = "搜索 · " + state.q;
    else if (state.cat === "all") title = "全部项目";
    else title = categoryById(state.cat).zh;
    $("#gallery-title").textContent = title;
  }

  /* ---------- pages ---------- */

  function showPage(page) {
    var changed = state.page !== page;
    state.page = page;
    homeView.hidden = page !== "projects";
    aboutPanel.hidden = page !== "about";
    linksPanel.hidden = page !== "links";

    $$(".side-action").forEach(function (a) {
      var href = a.getAttribute("href");
      a.classList.toggle("is-current",
        (page === "about" && href === "#/about") ||
        (page === "links" && href === "#/links"));
    });

    renderCategories();

    document.title = page === "about" ? "About — Zison Wong"
      : page === "links" ? "Links — Zison Wong"
      : "Zison Wong — software, textile, sound";

    if (changed) window.scrollTo(0, 0);
  }

  /* ---------- modal ---------- */

  function renderModal(p) {
    var cat = categoryById(p.cat);
    var index = PROJECTS.indexOf(p) + 1;
    var list = state.modalList.length ? state.modalList : [p];
    var status = STATUS[p.status] || p.status;
    var dot = DOT[p.status] || "var(--muted)";
    var authorship = AUTHORSHIP_FULL[p.authorship || "original"] || "原创";

    modalHero.innerHTML =
      '<div class="modal-head-inner">' +
        '<div class="modal-index">' + pad(index) + "</div>" +
        "<div>" +
          '<p class="eyebrow">' + cat.label + " / " + p.code + "</p>" +
          '<h2 class="modal-title" id="modal-title">' + p.name + "</h2>" +
          '<p class="modal-zh">' + p.zh + "</p>" +
        "</div>" +
        '<div class="modal-glyph">' + icon(p.icon) + "</div>" +
      "</div>";

    var linksHtml = p.links.map(function (l) {
      return '<a class="modal-link" href="' + l.url + '" target="_blank" rel="noopener">' +
        "<span>" + l.label + '</span><span class="arrow">↗</span></a>';
    }).join("");

    var creditBox = p.credit
      ? '<div class="credit-box"><span>CREDIT / 署名</span><p>' + p.credit + "</p>" +
        (p.creditUrl ? '<a href="' + p.creditUrl + '" target="_blank" rel="noopener">原作链接 ↗</a>' : "") +
        "</div>"
      : "";

    var note = p.links.length ? "" :
      '<p class="private-note">' + (p.private
        ? "私有项目，暂无公开链接。需要了解细节可以到 GitHub 联系。"
        : "本地项目，暂无公开链接。") + "</p>";

    modalBody.innerHTML =
      '<div class="modal-main">' +
        '<p class="modal-summary">' + p.summary + "</p>" +
        p.body.map(function (t) { return "<p>" + t + "</p>"; }).join("") +
        '<h3 class="modal-section">HIGHLIGHTS / 要点</h3>' +
        '<ul class="modal-list">' + p.highlights.map(function (h) { return "<li>" + h + "</li>"; }).join("") + "</ul>" +
      "</div>" +
      '<aside class="modal-side">' +
        '<div class="fact"><span>STATUS</span><strong><span class="status-sq" style="background:' + dot + '"></span>' + status + "</strong></div>" +
        '<div class="fact"><span>AUTHORSHIP</span><strong>' + authorship + "</strong></div>" +
        '<div class="fact"><span>STACK</span><div class="tech-row">' +
          p.tech.map(function (t) { return '<span class="tech">' + t + "</span>"; }).join("") +
        "</div></div>" +
        creditBox +
        '<h3 class="modal-section">LINKS / 链接</h3>' +
        (linksHtml ? '<div class="modal-links">' + linksHtml + "</div>" : "") +
        note +
      "</aside>";

    modalPrev.hidden = list.length < 2;
    modalNext.hidden = list.length < 2;
  }

  function openModal(p) {
    var wasOpen = modal.classList.contains("is-open");
    if (!wasOpen) state.lastFocus = document.activeElement;

    state.modalId = p.id;
    if (!state.modalList.length || state.modalList.indexOf(p) === -1) {
      state.modalList = filteredProjects();
      if (state.modalList.indexOf(p) === -1) state.modalList = [p];
    }

    renderModal(p);
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    modalCard.scrollTop = 0;
    document.title = p.name + " — Zison Wong";

    if (!wasOpen) modalCard.focus({ preventScroll: true });
  }

  function closeModal(touchHistory) {
    if (!state.modalId) return;
    state.modalId = null;
    state.modalList = [];
    modal.classList.remove("is-open");
    if (document.activeElement && modal.contains(document.activeElement)) {
      document.activeElement.blur();
    }
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    document.title = state.page === "about" ? "About — Zison Wong"
      : state.page === "links" ? "Links — Zison Wong"
      : "Zison Wong — software, textile, sound";

    if (touchHistory) {
      history.replaceState(null, "", state.cat === "all" ? "#/" : "#/c/" + state.cat);
    }
    if (state.lastFocus && document.contains(state.lastFocus)) {
      state.lastFocus.focus({ preventScroll: true });
    }
  }

  function navigateModal(dir) {
    var list = state.modalList;
    if (list.length < 2) return;
    var current = projectById(state.modalId);
    var idx = list.indexOf(current);
    if (idx === -1) idx = 0;
    var next = list[(idx + dir + list.length) % list.length];
    history.replaceState(null, "", "#/p/" + next.id);
    state.modalList = list;
    openModal(next);
  }

  /* ---------- routing ---------- */

  var scheduled = false;
  function scheduleRoute() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(function () {
      scheduled = false;
      route();
    });
  }

  function route() {
    var raw = location.hash.replace(/^#\/?/, "");
    var parts = raw.split("/").filter(Boolean);

    if (parts[0] === "about") {
      closeModal(false);
      showPage("about");
      return;
    }
    if (parts[0] === "links") {
      closeModal(false);
      showPage("links");
      return;
    }

    if (parts[0] === "p" && parts[1]) {
      var p = projectById(parts[1]);
      showPage("projects");
      if (p) {
        state.modalList = filteredProjects();
        openModal(p);
      } else {
        closeModal(false);
      }
      return;
    }

    closeModal(false);
    showPage("projects");

    if (parts[0] === "c" && parts[1]) {
      state.cat = categoryById(parts[1]).id;
    } else {
      state.cat = "all";
    }
    state.q = "";
    searchInput.value = "";
    renderCategories();
    renderGallery();
  }

  /* ---------- theme ---------- */

  var themeToggle = $("#theme-toggle");
  var themeLabel = $("#theme-label");
  var themeMeta = document.querySelector('meta[name="theme-color"]');

  function applyTheme(theme, persist) {
    document.documentElement.dataset.theme = theme;
    themeLabel.textContent = theme === "dark" ? "LIGHT MODE" : "DARK MODE";
    if (themeMeta) themeMeta.setAttribute("content", theme === "dark" ? "#12110f" : "#f1ede2");
    if (persist) {
      try { localStorage.setItem("zw-theme", theme); } catch (e) {}
    }
  }

  applyTheme(document.documentElement.dataset.theme || "light", false);

  var themeParam = new URLSearchParams(location.search).get("theme");
  if (themeParam === "dark" || themeParam === "light") applyTheme(themeParam, false);

  themeToggle.addEventListener("click", function () {
    applyTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark", true);
  });

  /* ---------- events ---------- */

  function setView(view) {
    state.view = view;
    try { localStorage.setItem("zw-view", view); } catch (e) {}
    $$(".view-toggle button").forEach(function (b) {
      b.classList.toggle("is-on", b.getAttribute("data-view") === view);
    });
    renderGallery();
  }

  $$(".view-toggle button").forEach(function (b) {
    b.addEventListener("click", function () { setView(b.getAttribute("data-view")); });
  });

  searchInput.addEventListener("input", function () {
    state.q = searchInput.value.trim();
    renderGallery();
  });

  searchInput.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      searchInput.value = "";
      state.q = "";
      renderGallery();
      searchInput.blur();
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    if (e.key !== "/") return;
    if (state.page !== "projects" || modal.classList.contains("is-open")) return;
    if (document.activeElement.isContentEditable) return;
    if (/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName)) return;
    e.preventDefault();
    searchInput.focus();
  });

  gallery.addEventListener("click", function (e) {
    if (e.target.closest("a")) return;
    var card = e.target.closest(".card");
    if (!card) return;
    location.hash = "#/p/" + card.getAttribute("data-id");
  });

  gallery.addEventListener("keydown", function (e) {
    if (e.key !== "Enter" && e.key !== " ") return;
    var card = e.target.closest(".card");
    if (!card) return;
    e.preventDefault();
    location.hash = "#/p/" + card.getAttribute("data-id");
  });

  modalClose.addEventListener("click", function () { closeModal(true); });
  $$("[data-close]", modal).forEach(function (el) {
    el.addEventListener("click", function () { closeModal(true); });
  });
  modalPrev.addEventListener("click", function () { navigateModal(-1); });
  modalNext.addEventListener("click", function () { navigateModal(1); });

  document.addEventListener("keydown", function (e) {
    if (!modal.classList.contains("is-open")) return;

    if (e.key === "Escape") {
      e.preventDefault();
      closeModal(true);
      return;
    }
    if (e.key === "ArrowRight") {
      e.preventDefault();
      navigateModal(1);
      return;
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      navigateModal(-1);
      return;
    }
    if (e.key === "Tab") {
      var focusables = $$('button:not([hidden]), a[href], [tabindex]:not([tabindex="-1"])', modal)
        .filter(function (el) { return el.offsetParent !== null; });
      if (!focusables.length) return;
      var first = focusables[0];
      var last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });

  window.addEventListener("hashchange", scheduleRoute);
  window.addEventListener("popstate", scheduleRoute);

  /* ---------- boot ---------- */

  try {
    var savedView = localStorage.getItem("zw-view");
    if (savedView === "list" || savedView === "grid") state.view = savedView;
  } catch (e) {}

  var viewParam = new URLSearchParams(location.search).get("view");
  if (viewParam === "list" || viewParam === "grid") state.view = viewParam;

  $$(".view-toggle button").forEach(function (b) {
    b.classList.toggle("is-on", b.getAttribute("data-view") === state.view);
  });

  renderTicker();
  renderCategories();
  $("#stat-count").textContent = String(PROJECTS.length);

  route();
})();
