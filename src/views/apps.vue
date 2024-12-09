<!-- eslint-disable vue/multi-word-component-names -->
<template>
    
    <div class="contact-section2">
       
        <div class="container d-flex justify-content-center">
        <div class="col-sm-5">
           
        </div>
    </div>
   
    <h2>Uygulamalarım</h2>
    <br>
    <div class="container d-flex justify-content-between">
    <div class="row">
    
    <div class="col mr-4">
        <div class="card bg-info h-100">
             <a href="https://play.google.com/store/apps/details?id=com.EzGames" target="_blank">
            <div class="card-body text-center">
                <img :src="require('@/assets/cube.png')" class="card-img-top" alt="Card image cap" />
                <br><br>
                <p><strong>2048 Cube</strong></p>
            </div>
            </a>
        </div>
    </div>

    
    <div class="col ml-3">
        <div class="card bg-info h-100">
            <a href="https://play.google.com/store/apps/details?id=com.EZGames.ChaoticColors" target="_blank">
            <div class="card-body text-center">
                <img :src="require('@/assets/chaoticcolors.png')" class="card-img-top" alt="Card image cap" />
                <br><br>
                <p><strong>Chaotic Colors</strong></p>
            </div>
            </a>
        </div>
    </div>

    
    <div class="col ml-3">
        <div class="card bg-info h-100">
            <a href="https://play.google.com/store/apps/details?id=com.EzGames.WordWordWord" target="_blank">
            <div class="card-body text-center">
                <img :src="require('@/assets/word.png')" class="card-img-top" alt="Card image cap" />
                <br><br>
                <p><strong>Word!Word!Word!</strong></p>
            </div>
            </a>
        </div>
    </div>

    
    <div class="col ml-3">
        <div class="card bg-info h-100">
            <a href="https://play.google.com/store/apps/details?id=com.EZGames.HyperBall3D" target="_blank">
            <div class="card-body text-center">
                <img :src="require('@/assets/hyper.png')" class="card-img-top" alt="Card image cap" />
                <br><br>
                <p><strong>Hyper Ball 3D</strong></p>
            </div>
            </a>
        </div>
    </div>
    <div class="col ml-3">
        <div class="card bg-info h-100">
            <a href="https://play.google.com/store/apps/details?id=com.ezgames.qrapp" target="_blank">
            <div class="card-body text-center">
                <img :src="require('@/assets/qrapp.png')" class="card-img-top" alt="Card image cap" />
                <br><br>
                <p><strong>Scan, Create & Share QR</strong></p>
            </div>
            </a>
        </div>
    </div>
    <h4>Devamı Gelecek....</h4>
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
 .card a:hover{
  color: white;
}
  .card {
    width: 200px; /* Tüm kartlara eşit genislik */
}

  </style>
  