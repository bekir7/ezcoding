<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="content">
    <h1>Hakkımda</h1>
    <h5>
      <p>Merhaba! Ben Ebubekir Yıldırım, Konya Teknik Üniversitesi'nden Bilgisayar Mühendisliği bölümünden mezun oldum. 
      Teknolojiye olan ilgim, yazılım geliştirmeye olan tutkumla birleşiyor. 
      Şu anda Flutter kullanarak mobil uygulamalar geliştiriyorum ve Vue.js ile modern web uygulamaları üzerinde çalışıyorum.
      Yazılım geliştirme sürecinde API entegrasyonu, kullanıcı arayüzü tasarımı ve veritabanı yönetimi gibi konularda deneyim kazandım.
      Bu alanlarda edindiğim tecrübelerimi, hem staj dönemimde hem de bitirme projemde başarıyla uyguladım.
      Ayrıca araştırmacı bir yönüm var. 
      Teknolojilerin evrimini takip etmek, yeni araçları ve yöntemleri keşfetmek benim için bir tutku. 
      Bu süreç, sürekli olarak yenilikçi çözümler üretmemi sağlıyor ve yazılım geliştirme alanındaki sorunlara yaratıcı yaklaşımlar geliştirmemi sağlıyor.
      Boş zamanlarımda spor yapmayı, kitap okumayı,oyun kodlamayı,yürüyüş yapmayı ve yeni teknolojileri keşfetmeyi seviyorum. 
      Sürekli öğrenmeyi ve kendimi geliştirmeyi hedefliyorum. Yazılım dünyasındaki yenilikleri takip etmek, benim için hem bir tutku hem de bir yaşam tarzı.
      Projelerimi GitHub üzerinden inceleyebilir veya LinkedIn'den benimle iletişime geçebilirsiniz.</p>
    </h5>
  </div>
  <br><br><br><br><br>
  <Footer/>
</template>

<script>
import Footer from '../components/footer.vue';

export default {
  components: {
    Footer
  }
}
</script>

<style scoped>
/* Sayfa geneli için margin ve padding sıfırlama */
* {
  margin: auto;
}


/* Bütün içeriği ortalamak için flexbox kullanıyoruz */
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
  padding: 60px;
  margin-right: 15%; /* İçeriği sağa sola biraz boşluk verelim */
}

h1 {
  margin-bottom: 20px;
  font-size: 2em; /* Başlık boyutunu büyütüyoruz */
}

h5 p {
  max-width: 800px; /* Paragrafların genişliğini sınırlıyoruz */
  line-height: 1.6; /* Satır aralığını artırıyoruz */
}
</style>
