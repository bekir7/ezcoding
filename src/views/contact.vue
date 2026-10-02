<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="page">
    <header class="page-head">
      <p class="eyebrow">{{ $t('contact.eyebrow') }}</p>
      <h1>{{ $t('contact.title') }}</h1>
      <p class="lede">{{ $t('contact.lede') }}</p>
    </header>
    <div class="grid">
      <a class="surface info-card" href="mailto:ebu915@gmail.com">
        <span class="card-kicker">{{ $t('contact.email') }}</span>
        <strong>ebu915@gmail.com</strong>
      </a>
      <a class="surface info-card" href="tel:+905347057949">
        <span class="card-kicker">{{ $t('contact.phone') }}</span>
        <strong>+90 534 705 79 49</strong>
      </a>
      <a class="surface info-card" href="https://github.com/bekir7" target="_blank" rel="noopener noreferrer">
        <span class="card-kicker">GitHub</span>
        <strong>github.com/bekir7</strong>
      </a>
      <a class="surface info-card" href="https://www.linkedin.com/in/ebubekir-yıldırım-8475b9102/" target="_blank" rel="noopener noreferrer">
        <span class="card-kicker">LinkedIn</span>
        <strong>Ebubekir Yıldırım</strong>
      </a>
      <a class="surface info-card" href="https://play.google.com/store/apps/developer?id=Ez+Game" target="_blank" rel="noopener noreferrer">
        <span class="card-kicker">Google Play</span>
        <strong>Ez Game</strong>
      </a>
    </div>
  </section>
</template>

<script>
export default {};
</script>
