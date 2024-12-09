<!-- eslint-disable vue/multi-word-component-names -->
<template>
    
    <div class="contact-section2">
       
        <div class="container d-flex justify-content-center">
        <div class="col-sm-5">
           
        </div>
    </div>
   
    <h2>İletişim Bilgileri</h2>
    <br>
    <div class="container d-flex justify-content-between">
    <div class="row">
    <!-- E-Posta Kartı -->
    <div class="col mr-4">
        <div class="card  h-100">
            <div class="card-body text-center">
                <p><strong>E-Posta Adresim</strong></p>
                <p>ebu915@gmail.com</p>
            </div>
        </div>
    </div>

    <!-- Telefon Kartı -->
    <div class="col ml-3">
        <div class="card  h-100">
            <div class="card-body text-center">
                <p><strong>Telefon Numaram</strong></p>
                <p>+90 534 705 79 49</p>
            </div>
        </div>
    </div>

    <!-- GitHub Kartı -->
    <div class="col ml-3">
        <div class="card  h-100">
            <div class="card-body text-center">
                <p><strong>Github</strong></p>
                <a href="https://github.com/bekir7" target="_blank">Github</a>
            </div>
        </div>
    </div>

    <!-- LinkedIn Kartı -->
    <div class="col ml-3">
        <div class="card  h-100">
            <div class="card-body text-center">
                <p><strong>LinkedIn</strong></p>
                <a href="https://www.linkedin.com/in/ebubekir-yıldırım-8475b9102/" target="_blank">LinkedIn</a>
            </div>
        </div>
    </div>

    <!-- Google Play Store Kartı -->
    <div class="col ml-3">
        <div class="card  h-100">
            <div class="card-body text-center">
                <p><strong>Google Play Store</strong></p>
                <a href="https://play.google.com/store/apps/developer?id=Ez+Game" target="_blank">Google Play Store</a>
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
    width: 200px; /* Tüm kartlara eşit genislik */
    background-color: #0066cc;
    color: white;
    
}
.card a{
    
    color: black;
    
}
.card a:hover{
    
    color: white;
    
}

  </style>
  