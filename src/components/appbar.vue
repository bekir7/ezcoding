<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav class="navbar navbar-expand-lg navbar-dark custom-navbar">
    <div class="container-fluid">
      <!-- Mobile Toggle Button -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Ana Sayfa</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/projects" class="nav-link">Projeler</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/apps" class="nav-link">Ez Games</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link">İletişim</router-link>
          </li>
        </ul>

        <!-- Ortalanmış Logo ve Marka -->
        <div class="center-content">
          <img src="../assets/logo.png" alt="Logo" class="logo" />
          <router-link to="/" class="navbar-brand">Ez Coding</router-link>
        </div>

        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link to="/privacy" class="nav-link">Privacy Policy & Term of Use</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
/* Özel Navbar Stilleri */
.custom-navbar {
  background: linear-gradient(45deg, #0066cc, #00cc99);
  padding: 20px 0; /* Yükseklik yerine padding ile genişletme */
}


.center-content {
  display: flex;
  flex-direction: column; /* Alt alta hizalama */
  align-items: center; /* Yatay merkezleme */
  justify-content: center; /* Dikey merkezleme */
}

.logo {
  width: auto; 
  height: 70px;
  /* Logo ile yazı arasında boşluk */
}

.navbar-brand {
  font-weight: bold;
  font-size: 24px;
  color: #ffffff !important;
}

.nav-link {
  color: #f8f9fa !important;
}

.nav-link:hover {
  color: #ffd700 !important; /* Altın rengi */
}

.nav-item {
  font-size: 20px;
}
</style>
