<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="page">
    <p class="eyebrow">{{ $t('home.eyebrow') }}</p>
    <h1>Ebubekir Yıldırım</h1>
    <p class="lede">{{ $t('home.lede') }}</p>
    <ul class="chips">
      <li v-for="chip in $tm('home.chips')" :key="chip">{{ chip }}</li>
    </ul>
    <div class="actions">
      <router-link to="/projects" class="action action-primary">{{ $t('home.projects') }}</router-link>
      <router-link to="/contact" class="action action-ghost">{{ $t('home.contact') }}</router-link>
    </div>
    <ol class="timeline">
      <li v-for="item in $tm('home.timeline')" :key="item.title + item.date">
        <div>
          <h2>{{ item.title }}</h2>
          <p class="timeline-place">{{ item.place }}</p>
          <p>{{ item.text }}</p>
        </div>
        <time>{{ item.date }}</time>
      </li>
    </ol>
    <div class="surface about">
      <p>{{ $t('home.p1') }}</p>
      <p>{{ $t('home.p2') }}</p>
      <p>{{ $t('home.p3') }}</p>
    </div>
  </section>
</template>

<script>
export default {};
</script>
