<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <footer>
      <p>{{ new Date().getFullYear() }} - <strong>Ebubekir Yıldırım</strong></p>
      <div class="social-icons">
        <a v-bind:href="linkedin" class="icon-link" v-html="icon('linkedin')"></a>
        <a v-bind:href="instagram" class="icon-link" v-html="icon('instagram')"></a>
        <a v-bind:href="github" class="icon-link" v-html="icon('github')"></a>
      </div>
    </footer>
  </div>
</template>

<script>
import feather from 'feather-icons';

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
/* Global reset to make sure no margin/padding is added to body and html */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Make sure the body and html take full height and width of the screen */
html, body {
  height: 100%;
  width: 100%;
}

/* Footer styling */
footer {
  background: linear-gradient(45deg, #0066cc, #00cc99);
  color: #ffffff;
  text-align: center;
  width: 100%;
  position: absolute;  /* Absolute position at the bottom of the page */
  bottom: 0;
  left: 0;
  padding: 20px 0;
}

/* Social icons styling */
.social-icons {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon-link {
  color: #ffffff;
  margin: 0 5px;
  font-size: 24px;
}

.icon-link:hover {
  color: white;
}
</style>
