<template>
     <div class="container">
        <div class="banner">
            <img src ="@/assets/contacto.jpg" class="image">
            <div class="form">
                <h1>Solicitud de Contacto</h1>

            <form>
                <p>Nombre</p> 
                <input type="text" class="field">

                <p>Telefono</p>
                <input type="text" class="field">

                <p>Correo electronico</p>
                <input type="email" class="field">

                <p>Tipo de asesoria</p>
                <select name="transporte" class="field">
                    <option>Informacion de los Productos</option>
                    <option>Informacion de las Maquinas</option>
                </select>

                <p>Comentarios adicionales</p>
                <textarea class="field"></textarea>
                <br>
                <input type="submit" class="enviar">
            </form>    
            </div>
        </div>
    </div>
   
        
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
</style>
