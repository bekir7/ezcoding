<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="page">
    <header class="page-head">
      <p class="eyebrow">Google Play</p>
      <h1>{{ $t('apps.title') }}</h1>
      <p class="lede">{{ $t('apps.lede') }}</p>
    </header>
    <div class="grid">
      <a class="surface app-card" href="https://play.google.com/store/apps/details?id=com.ezgames.remio" target="_blank" rel="noopener noreferrer">
        <img :src="require('@/assets/remiologo.png')" alt="REMIO" />
        <div>
          <h2>REMIO</h2>
        </div>
      </a>
      <a class="surface app-card" href="https://play.google.com/store/apps/details?id=com.ezgames.potatopanic" target="_blank" rel="noopener noreferrer">
        <img :src="require('@/assets/potato.png')" alt="Potato Panic" />
        <div>
          <h2>Potato Panic</h2>
        </div>
      </a>
      <a class="surface app-card" href="https://play.google.com/store/apps/details?id=com.EzGames" target="_blank" rel="noopener noreferrer">
        <img :src="require('@/assets/2k48foto.png')" alt="2048 Cube" />
        <div>
          <h2>2048 Cube</h2>
        </div>
      </a>
      <a class="surface app-card" href="https://play.google.com/store/apps/details?id=com.EzGames.WordWordWord" target="_blank" rel="noopener noreferrer">
        <img :src="require('@/assets/word.png')" alt="Word!Word!Word!" />
        <div>
          <h2>Word!Word!Word!</h2>
        </div>
      </a>
      <a class="surface app-card" href="https://play.google.com/store/apps/details?id=com.ezgames.qrapp" target="_blank" rel="noopener noreferrer">
        <img :src="require('@/assets/qrapp.png')" alt="Scan, Create & Share QR" />
        <div>
          <h2>Scan, Create &amp; Share QR</h2>
        </div>
      </a>
    </div>
    <p class="note">{{ $t('apps.more') }}</p>
  </section>
</template>

<script>
export default {};
</script>
