<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav class="navbar navbar-expand-lg navbar-light site-nav">
    <div class="container nav-shell">
      <router-link to="/" class="brand">
        <img src="../assets/logo.png" alt="" class="brand-mark" />
        <span>Ez Coding</span>
      </router-link>

      <div class="nav-actions">
        <div class="lang-switch" role="group" :aria-label="$t('nav.language')">
          <button
            v-for="lang in languages"
            :key="lang.code"
            type="button"
            class="flag-btn"
            :aria-label="lang.label"
            :aria-pressed="currentLocale === lang.code"
            @click="setLocale(lang.code)"
            v-html="lang.flag"
          ></button>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#site-menu"
          aria-controls="site-menu"
          aria-expanded="false"
          :aria-label="$t('nav.menu')"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>

      <div class="collapse navbar-collapse" id="site-menu">
        <ul class="navbar-nav ms-lg-auto align-items-lg-center">
          <li class="nav-item">
            <router-link to="/" class="nav-link" active-class="" exact-active-class="is-active">{{ $t('nav.home') }}</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/projects" class="nav-link" active-class="is-active">{{ $t('nav.projects') }}</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/apps" class="nav-link" active-class="is-active">{{ $t('nav.games') }}</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link" active-class="is-active">{{ $t('nav.contact') }}</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/privacy" class="nav-link" active-class="is-active">{{ $t('nav.privacy') }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { Collapse } from "bootstrap";

const flagTr = '<svg viewBox="0 0 30 20" aria-hidden="true"><rect width="30" height="20" fill="#E30A17"/><circle cx="12" cy="10" r="5" fill="#fff"/><circle cx="13.3" cy="10" r="4" fill="#E30A17"/><polygon fill="#fff" points="17.2,10 18.7,10.5 17.8,9.1 19,8 17.4,8 17.2,6.5 17,8 15.4,8 16.6,9.1 15.7,10.5"/></svg>';
const flagGb = '<svg viewBox="0 0 60 30" aria-hidden="true"><rect width="60" height="30" fill="#012169"/><path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="8"/><path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" stroke-width="4"/><path d="M30,0 V30 M0,15 H60" stroke="#fff" stroke-width="12"/><path d="M30,0 V30 M0,15 H60" stroke="#C8102E" stroke-width="7"/></svg>';
const flagDe = '<svg viewBox="0 0 5 3" aria-hidden="true"><rect width="5" height="1" fill="#000"/><rect y="1" width="5" height="1" fill="#DD0000"/><rect y="2" width="5" height="1" fill="#FFCE00"/></svg>';

export default {
  data() {
    return {
      languages: [
        { code: "tr", label: "Türkçe", flag: flagTr },
        { code: "en", label: "English", flag: flagGb },
        { code: "de", label: "Deutsch", flag: flagDe }
      ]
    };
  },
  computed: {
    currentLocale() {
      return this.$i18n.locale;
    }
  },
  methods: {
    setLocale(code) {
      this.$i18n.locale = code;
      localStorage.setItem("locale", code);
      document.documentElement.lang = code;
    }
  },
  watch: {
    $route() {
      const menu = document.getElementById("site-menu");
      if (!menu || !menu.classList.contains("show")) return;
      Collapse.getOrCreateInstance(menu, { toggle: false }).hide();
    }
  }
};
</script>

<style>
.site-nav {
  position: sticky;
  top: 0;
  z-index: 40;
  padding: 12px 0;
  background: rgba(255, 255, 255, 0.82);
  border-bottom: 1px solid rgba(16, 24, 40, 0.06);
  backdrop-filter: blur(16px);
}

.nav-shell {
  max-width: 1120px;
  justify-content: flex-start;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: #101828;
  font-size: 1.15rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  text-decoration: none;
}

.brand:hover {
  color: #101828;
}

.brand-mark {
  width: 42px;
  height: 42px;
  object-fit: contain;
  border-radius: 12px;
  background: #f4f6fb;
}

.site-nav .nav-link {
  margin: 2px 4px;
  padding: 8px 14px !important;
  border-radius: 999px;
  color: #3d475c !important;
  font-size: 0.95rem;
  font-weight: 600;
}

.site-nav .nav-link:hover,
.site-nav .nav-link.is-active {
  color: #0f766e !important;
  background: #e7f6f3;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: auto;
}

.lang-switch {
  display: flex;
  gap: 6px;
}

.flag-btn {
  width: 34px;
  height: 24px;
  padding: 0;
  overflow: hidden;
  line-height: 0;
  cursor: pointer;
  background: #fff;
  border: 2px solid #e6ebf3;
  border-radius: 6px;
}

.flag-btn[aria-pressed="true"] {
  border-color: #0f766e;
}

.flag-btn svg {
  display: block;
  width: 100%;
  height: 100%;
}

.site-nav .navbar-toggler {
  border: 1px solid #e6ebf3;
  border-radius: 12px;
}

@media (min-width: 992px) {
  .nav-actions {
    order: 3;
    margin-left: 8px;
  }

  .site-nav .navbar-collapse {
    display: flex;
    flex: 1;
    order: 2;
  }
}

@media (max-width: 991px) {
  .site-nav .navbar-collapse {
    flex-basis: 100%;
    margin-top: 12px;
    padding: 8px;
    background: #fff;
    border: 1px solid #e6ebf3;
    border-radius: 16px;
  }
}
</style>
