<template>
   <header>
        <img src="@/assets/SnackLogo.png" alt="" class="logo">
        <div class="buscar">
            <input type="text" placeholder="Buscar" required>
            <div class="but">
                <i class="fas fa-search icon"></i>
            </div>
        </div>
        <nav>
            <button v-on:click="Home">Nosotros</button>
            <button>Productos</button>
            <button v-on:click="Contacto">Contacto</button>
        </nav>
    </header>
    <!-- <footer>
        <img src="@/assets/SnackLogo.png" alt="" class="logo">
    </footer> -->
  <div>
    <router-view></router-view>
  </div>      
</template>

<script>
export default {
  name: "App",
  data: function() {

  },
  methods: {
    Home: function(){
      this.$router.push({ name: "Home" });
      }, 

    Contacto: function(){
        this.$router.push({ name: "Contacto" });
    },
    
  },
  created: function(){
    this.$router.push({ name: "Home" });
  }
};
</script>

<style>
    *{
    margin: 0;
    padding: 0;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

header{
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px 0px;
    border-bottom: 3px solid rgb(194, 123, 9);
    margin-bottom: 100px;
    background-color: #f2b327;
}

button{
    display: inline-block;
    position: relative;
    padding: 0px 10px;
    border: 0ch;
    background-color: #f2b327;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: bold;
    color: black;
    transition: all 0.5s;
    cursor: pointer;

}

button:hover{
    padding: 10px 25px;
    background-color: white;
    color: #f2b327;
    border-radius: 12px;
    
}

.logo{
    margin-left: 25px;
    width: 120px;
    height: 50px;
    cursor: pointer;
    position: static;
}

.buscar{
    position: absolute;
    padding: 5px;
    
    
}

.buscar input{
    width: 0px;
    height: 40px;
    padding: 0 20px;
    font-size: 18px;
    color: black;
    outline: none;
    border: 1px solid silver;
    border-radius: 30px;
    transition: all 0.6s;
    
}

.but{
    position: absolute;
    top: 0;
    right: 0;
    background: rgb(194, 123, 9);
    width: 55px;
    height: 55px;
    line-height: 55px; 
    text-align: center;
    color: black;
    font-size: 20px;
    border-radius: 50%;
    cursor: pointer;
    
}

.buscar:hover input{
    width: 240px;
    
}

.buscar input:focus{
    width: 240px;
}

.icon1{
    font-size: 45px;
    cursor: pointer;
    color: black;
}

.container{
    display: flex;
    flex-direction: row;
}

.image {
    padding: 0px;
    width: 600px;
    height: 600px;
    margin-top: -30px;
    margin-left: 250px; 
    float: left;
}

footer{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #f2b327;
}
</style>

