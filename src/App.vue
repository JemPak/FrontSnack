<template>
   <header>
        <img src="@/assets/SnackLogo.png" alt="" class="logo">
        <div class="buscar">
            <input type="text" placeholder="Buscar" required>
            <div class="but">
                <i class="fas fa-search icon"></i>
            </div>
        </div>
        <nav class="nav">
            <button v-on:click="Home" class="boton">Nosotros</button>
            <button v-on:click="Producto" class="boton" >Productos</button>
            <button v-on:click="Contacto" class="boton">Contacto</button>
            <button v-on:click="ir_Instalacion" class="boton">Solicitud</button>
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
    ir_Instalacion: function(){
        this.$router.push({ name: "Instalacion" });

    },
    Producto: function(){
        this.$router.push({ name: "Producto" });
    },
    
  },
  created: function(){
    this.$router.push({ name: "Home" });
  }
};
</script>

<style>

body{
    margin: 0;
    padding: 0;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
header{
    position: static;
    width: 100%;
    height: 4.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border-bottom: 3px solid rgb(194, 123, 9);
    background-color: #f2b327;
}
nav{
    position: relative;
    width: 430px;
    height: 50px;
    left: 240px;;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    /* border: solid red; */
}
.boton{
    position: relative;
    top: 8px;
    padding: 0px 10px;
    width: 120px;
    border: 0ch;
    background-color: transparent;
    font-size: 13px;
    text-transform: uppercase;
    font-weight: bold;
    color: black;
    transition: all 0.5s;
    cursor: pointer;
    /* border: solid red; */

}

.boton:hover{
    padding: 10px 15px;
    background-color: white;
    color: #f2b327;
    border-radius: 12px;
   
}

.logo{
    position: relative;
    margin-left: -240px;
    width: 120px;
    height: 50px;
    cursor: pointer;
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

footer{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #f2b327;
}
</style>

