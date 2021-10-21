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
            <button>Nosotros</button>
            <button>Productos</button>
            <button>Contacto</button>
        </nav>
    </header>
    <!-- <footer>
        <img src="@/assets/SnackLogo.png" alt="" class="logo">
    </footer> -->
        
</template>

<script>
import axios from 'axios';

export default {
  name: "Contacto",
  data(){
      return{

      }
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
    padding: 0px 30px;
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
    margin-right: 800px;
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

.form{
    padding: 0px;
    width: 800px;
    float: left;
    margin-left: 80px;
    margin-top: -32px;
}

h1{
    text-transform: uppercase;
    margin-bottom: 90px;
}

.enviar{
    margin-top: 43px;
    font-size: 15px;
    height: 40px;
    width: 100px;
    border: none;
    color: black;
    background-color: #f2b327;
    cursor: pointer;
    border-radius: 5px;
    transition: all 0.2s;
    box-shadow: 0 1px 1px rgba(0,0,0,0.3);
}

.enviar:hover{
    background-color: #e6a720;
}

input, textarea{
    outline: none;
    border: 0px;
}

.field{
    margin-bottom: 15px;
    width: 600px;
    border: solid 1px #ccc;
    padding: 10px;
}

.field:focus{
    border-color: #f2b327;
}

p{
    text-transform: uppercase;
    margin-bottom: 2px;
    
}

footer{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #f2b327;
}
</style>
