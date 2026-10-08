<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="page">
    <header class="page-head">
      <p class="eyebrow">GitHub</p>
      <h1>{{ $t('projects.title') }}</h1>
      <p class="lede">{{ $t('projects.lede') }}</p>
    </header>
    <div class="filters" role="group" :aria-label="$t('projects.filterLabel')">
      <button
        v-for="filter in filters"
        :key="filter.id"
        type="button"
        class="filter-btn"
        :aria-pressed="active === filter.id"
        @click="toggle(filter.id)"
      >
        {{ filter.label }}
      </button>
    </div>
    <p v-if="visibleProjects.length === 0" class="note">{{ $t('projects.empty') }}</p>
    <div class="grid">
      <a
        v-for="project in visibleProjects"
        :key="project.key"
        class="surface project-card"
        :href="project.href"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span class="card-kicker">{{ project.tag }}</span>
        <h2>{{ $t('projects.' + project.key + '.title') }}</h2>
        <p>{{ $t('projects.' + project.key + '.text') }}</p>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      active: null,
      filters: [
        { id: "flutter", label: "Flutter" },
        { id: "vue", label: "Vue.js" },
        { id: "dotnet", label: ".NET" }
      ],
      projects: [
        { key: "clinic", tag: ".NET · Vue.js", tags: ["dotnet", "vue"], href: "https://github.com/bekir7/Klinik-Randevu-Sistemi-.net-core-web-api-vue.js" },
        { key: "stock", tag: ".NET · Vue.js", tags: ["dotnet", "vue"], href: "https://github.com/bekir7/Stok-Takip-.net-core-web-api-vue.js" },
        { key: "cafe", tag: "Flutter", tags: ["flutter"], href: "https://github.com/bekir7/KafeMenu" },
        { key: "crypto", tag: "Flutter", tags: ["flutter"], href: "https://github.com/bekir7/Kripto-Trade" },
        { key: "food", tag: "Flutter", tags: ["flutter"], href: "https://github.com/bekir7/Food-App" },
        { key: "quiz", tag: "Flutter", tags: ["flutter"], href: "https://github.com/bekir7/Quiz-APP" },
        { key: "todo", tag: "Flutter", tags: ["flutter"], href: "https://github.com/bekir7/TodoApp" },
        { key: "weatherCollect", tag: "Flutter", tags: ["flutter"], href: "https://github.com/bekir7/Weather-App2" },
        { key: "weatherOpen", tag: "Flutter", tags: ["flutter"], href: "https://github.com/bekir7/Weather-App" },
        { key: "ktun", tag: "Flutter", tags: ["flutter"], href: "https://github.com/bekir7/KTUNGram" }
      ]
    };
  },
  computed: {
    visibleProjects() {
      if (!this.active) return this.projects;
      return this.projects.filter((project) => project.tags.includes(this.active));
    }
  },
  methods: {
    toggle(id) {
      this.active = this.active === id ? null : id;
    }
  }
};
</script>
