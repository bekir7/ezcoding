<!-- eslint-disable vue/multi-word-component-names -->
<template>
   
    <div class="contact-section2">
       
        <div class="container d-flex justify-content-center">
        <div class="col-sm-5">
           
        </div>
    </div>
    
    <h2>Projelerim</h2>
    <br>
    <div class="container d-flex justify-content-between">
    <div class="row">
    
    <div class="col mb-4">
        <div class="card  h-100">
            
            <div class="card-body text-center">
                
                
               <a href="https://github.com/bekir7/Food-App"> <p><strong>Food App</strong></p></a>
                <p>Flutter ile yapılmış bir yemek uygulamasıdır.API'den çekilen verilerle kullanıcıların ellerindeki malzemeye göre yemek öneriyor.</p>
            </div>
            
        </div>
    </div>

    
    <div class="col mb-4">
         <div class="card  h-100">
            
            <div class="card-body text-center">
                
                
               <a href="https://github.com/bekir7/Quiz-APP"> <p><strong>Quiz App</strong></p></a>
                <p>Flutter ile yapılmış bir quiz uygulamasıdır.KPSS çıkmış sınav sorularının olduğu quiz uygulaması.</p>
            </div>
            
        </div>
    </div>

    
    <div class="col mb-4">
         <div class="card  h-100">
            
            <div class="card-body text-center">
                
                
               <a href="https://github.com/bekir7/TodoApp"> <p><strong>TODO App</strong></p></a>
                <p>Flutter ile yapılmış bir Todo uygulamasıdır.İsar database kullanılan notlar uygulaması.</p>
            </div>
            
        </div>
    </div>

    
    <div class="col mb-4">
        <div class="card  h-100">
            
            <div class="card-body text-center">
                
                
               <a href="https://github.com/bekir7/Weather-App2"> <p><strong>Weather App</strong></p></a>
                <p>Flutter ve Collect API ile oluşturulmuş hava durumu uygulaması.</p>
            </div>
            
        </div>
    </div>

    <div class="col mb-4">
        <div class="card  h-100">
            
            <div class="card-body text-center">
                
                
               <a href="https://github.com/bekir7/Weather-App"> <p><strong>Weather App</strong></p></a>
                <p>Flutter ve Open Weather API ile oluşturulmuş hava durumu uygulaması.</p>
            </div>
            
        </div>
    </div>

    <div class="col mb-4">
        <div class="card  h-100">
            
            <div class="card-body text-center">
                
                
               <a href="https://github.com/bekir7/KTUNGram"> <p><strong>KTUNGram</strong></p></a>
                <p>Konya Teknik Üniversitesinde dönem projesi için oluşturulmuş chat uygulaması.Flutter ve firebase kullanıldı.</p>
            </div>
            
        </div>
    </div>

    <div class="col mb-4">
        <div class="card  h-100">
            
            <div class="card-body text-center">
                
                
               <a href="https://github.com/bekir7/QrPro"> <p><strong>Qr App</strong></p></a>
                <p>Flutter ile yapılmış bir qr uygulamasıdır.Uygulamada QR kod oluşturup taratılabilir.Uygulama aynı zamanda Google Play Store'da yayınlanmıştır.</p>
            </div>
            
        </div>
    </div>

     <div class="col mb-4">
        <div class="card  h-100">
            
            <div class="card-body text-center">
                
                
               <a href="https://github.com/bekir7/hatirlatici"> <p><strong>Reminder App</strong></p></a>
                <p>Flutter ile yapılmış bir hatırlatıcı uygulamasıdır.</p>
            </div>
            
        </div>
    </div>
</div>
</div>
    </div>
<br>
<br> 

  </template>
  <script>



  export default {
    data() {
      return {
         
         
      }
    },
    methods: {
   
  },
  components: {
    
  }
  }
  </script>
  
  <style scoped>

  .contact-section2 {
    position: relative;
    text-align: center; /* Metni ortala */
    margin-left: -16%;
    margin-top: 20px;
    font-weight: 500;
  }
 .card {
    width: 200px; /* Tüm kartlara eşit genişlik */
    background-color: aquamarine; /* Kart arka plan rengi */
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Hafif bir gölge ekleme */
}
.card a:hover{
  color: white;
}

/* Her kartın altında boşluk bırak */
.col {
  margin-bottom: 20px; /* Alt boşluk eklenir */
}

/* Satırlar arasında boşluk */
.row {
  gap: 20px; /* Daha modern ve düzenli bir görünüm */
}

  </style>