<template>
     <div class="container">
        <div class="banner">
            <img src ="@/assets/contacto.jpg" class="foto">
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
    position: absolute;
    top: 110%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    /* border: solid 2px red; */
}

.foto{
    position: relative;
    left: 20px;
    padding: 0px;
    width: 400px;
    height: 400px;
    /* border: solid 2px red; */
}

.form{
    font-size: 10px;
    padding: 0px;
    width: 500px;
    float: left;
    margin-left: 80px;
    margin-top: -32px;
    /* border: solid 2px red; */
}

.form h1{
    font-size: 20px;
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
    width: 400px;
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
