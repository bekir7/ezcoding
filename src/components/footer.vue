<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <footer class="site-footer">
    <div class="footer-inner">
      <div>
        <strong>Ebubekir Yıldırım</strong>
        <p>{{ new Date().getFullYear() }} · Ez Coding</p>
      </div>
      <div class="social-icons">
        <a :href="linkedin" class="icon-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" v-html="icon('linkedin')"></a>
        <a :href="instagram" class="icon-link" target="_blank" rel="noopener noreferrer" aria-label="Instagram" v-html="icon('instagram')"></a>
        <a :href="github" class="icon-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub" v-html="icon('github')"></a>
      </div>
    </div>
  </footer>
</template>

<script>
import feather from "feather-icons";

export default {
  data() {
    return {
      linkedin: "https://www.linkedin.com/in/ebubekir-y%C4%B1ld%C4%B1r%C4%B1m-8475b9102/",
      instagram: "https://www.instagram.com/bekiiryldrm/",
      github: "https://github.com/bekir7"
    };
  },
  methods: {
    icon(name) {
      return feather.icons[name].toSvg();
    }
  }
};
</script>

<style scoped>
.site-footer {
  margin-top: auto;
  color: #e8edf5;
  background: #101828;
}

.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: min(1120px, calc(100% - 40px));
  margin: 0 auto;
  padding: 28px 0;
}

.site-footer p {
  margin: 4px 0 0;
  color: #98a2b3;
}

.social-icons {
  display: flex;
  gap: 10px;
}

.icon-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: #fff;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 12px;
}

.icon-link:hover {
  color: #fff;
  background: rgba(255, 255, 255, 0.16);
}

.icon-link :deep(svg) {
  width: 18px;
  height: 18px;
}

@media (max-width: 640px) {
  .footer-inner {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
