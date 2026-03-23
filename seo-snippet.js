// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.keyhrpartners.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.keyhrpartners.com/","title_tag":"Human Resources Consulting & HR Compliance | Key HR Partners","meta_description":"Human resources consulting for small businesses in Alabama. HR compliance services, talent acquisition support, performance management and training programs design."},{"page_url":"https://www.keyhrpartners.com/about","title_tag":"Human Resources Consulting & Employee Relations | Key HR Partners","meta_description":"Human resources consulting for small and emerging businesses. Employee relations assistance, HR policy & handbook support, performance management solutions and compliance."},{"page_url":"https://www.keyhrpartners.com/services-3","title_tag":"HR Policy & Handbook, Recruiting Services | Key HR Partners","meta_description":"Comprehensive HR services: HR policy & handbook design, recruiting services, training programs design, benefits enrollment assistance and compliance risk assessment."},{"page_url":"https://www.keyhrpartners.com/contact-2","title_tag":"HR Compliance & Recruiting Services Support | Key HR Partners","meta_description":"Contact Key HR Partners for HR compliance services, recruiting services, benefits enrollment assistance and employee relations support tailored to your business needs."}],"keywords":["Human Resources Consulting","HR Compliance Services","Talent Acquisition Support","Employee Relations Assistance","Performance Management Solutions","HR Policy & Handbook","Recruiting Services","Training Programs Design","Benefits Enrollment Assistance","Compliance Risk Assessment"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://www.keyhrpartners.com/#organization",
  "name": "Key HR Partners",
  "url": "https://www.keyhrpartners.com/",
  "description": "Key HR Partners is a human resources consulting firm dedicated to empowering small and emerging businesses with tailored HR solutions, including talent acquisition, compliance, employee relations, training, performance management, and benefits support.",
  "image": [
    "https://static.wixstatic.com/media/5b0730_be560e076fbb4ba18d3b13f73b31556a~mv2.jpg/v1/crop/x_55,y_223,w_1358,h_946/fill/w_398,h_277,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/5b0730_be560e076fbb4ba18d3b13f73b31556a~mv2.jpg",
    "https://static.wixstatic.com/media/5b0730_d54215fecea44f5180d989d04e8e8ee1%7Emv2.jpg/v1/fill/w_180%2Ch_180%2Clg_1%2Cusm_0.66_1.00_0.01/5b0730_d54215fecea44f5180d989d04e8e8ee1%7Emv2.jpg"
  ],
  "logo": "https://static.wixstatic.com/media/5b0730_d54215fecea44f5180d989d04e8e8ee1%7Emv2.jpg/v1/fill/w_180%2Ch_180%2Clg_1%2Cusm_0.66_1.00_0.01/5b0730_d54215fecea44f5180d989d04e8e8ee1%7Emv2.jpg",
  "email": "mailto:jan.keyhrpartners@gmail.com",
  "telephone": "+1-256-347-0563",
  "areaServed": "Alabama",
  "founder": {
    "@type": "Person",
    "name": "Jan Kinney",
    "description": "Seasoned HR professional with over 15 years of experience in HR and office management, SHRM Certified Professional, AIRS certified Professional Recruiter, with an MBA in Organizational Change and Development."
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "email": "jan.keyhrpartners@gmail.com",
    "telephone": "+1-256-347-0563",
    "availableLanguage": "en"
  },
  "sameAs": [],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "HR Consulting Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "HR Policy & Handbook Design",
          "description": "Review and update current policies to align with best practices, and develop an employee handbook customized for your company to provide clear direction for understanding and applying policies."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Employee Relations & Training",
          "description": "Consult and train managers and employees on topics such as hostile work environments, harassment, bullying, and discrimination."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Recruiting & Interviews",
          "description": "Assist with full life cycle recruiting including candidate search, prescreens, interviews, offer letters, background screenings, and onboarding services if desired."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Investigations & Unbiased Reviews",
          "description": "Conduct ad hoc investigations on behalf of business owners and provide external, unbiased reviews in support of HR teams and management."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Human Resource Compliance",
          "description": "Review policies, employment applications, hiring processes, supervisory practices, and operational procedures for compliance with EEOC, ADAAA, AAP, and federal/state requirements to help reduce and mitigate risks."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Performance Evaluations",
          "description": "Establish and manage employee performance evaluation processes, provide feedback and coaching for improving performance, and create relevant forms for documenting the review process."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Compensation Market Analysis",
          "description": "Perform compensation analysis for the relevant industry and regional marketplace to assist owners in staying competitive in wages and reducing turnover."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Benefits & Open Enrollment Assistance",
          "description": "Develop presentations and handouts for communicating benefits offerings and support employees with their benefit enrollment."
        }
      }
    ]
  },
  "urlTemplate": "https://www.keyhrpartners.com/{section}",
  "knowsAbout": [
    "human resources consulting",
    "HR compliance",
    "employee relations",
    "recruiting and interviewing",
    "performance management",
    "compensation analysis",
    "benefits and open enrollment",
    "HR policies and handbooks",
    "HR investigations",
    "training on harassment and discrimination"
  ]
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
