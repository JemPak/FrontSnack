<template>
     <div class="container">
        <div class="banner">
            <img src ="@/assets/contacto.jpg" class="foto">
            <div class="form">
                <h1>Solicitud de Contacto</h1>
            <form v-on:submit.prevent="postContacto">
                <p>Nombre</p> 
                <input v-model="data.nombre" type="text" class="field"> 

                <p>Correo electronico</p>
                <input v-model="data.email" type="email" class="field"> 

                <p>Telefono</p>
                <input v-model="data.tel" type="text" class="field">

                <p>Comentarios adicionales</p>
                <textarea v-model="data.comentario" class="field"></textarea>
                <br>

                <p>Tipo de asesoria</p>
                <select v-model="data.asesoria" name="transporte" class="field">
                    <option>Informacion</option>
                    <option>Instalacion</option>
                    <option>Quejas y reclamos</option>
                </select>

                <button type="submit" class="enviar"> Enviar </button>

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
        data:{
        "nombre": "",
        "email": "",
        "tel": null,
        "comentario": "",
        "asesoria": null
    }

      }
  },
  methods: {
    postContacto: async function(){
        let endpoint = "https://snack-time-back.herokuapp.com/contacto/"
        let params = { headers: {} };
        try{
            let result = await axios.post(endpoint, this.data, params);
            alert("Solicitud creada correctamente");
            this.cleanForm();
            console.log(result);
        }catch (error){
            if (error.response.status == 400)
            alert("Error inesperado, intente de nuevo más tarde o verifique los datos");
            console.log(error.response);
        }
    },
    cleanForm: function(){
        this.data.nombre = "";
        this.data.email = "";
        this.data.tel = "";
        this.data.comentario = "";
    }
  },

  created: function(){

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
    top: 65%;
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
.form form{
    position: relative;
    top: -75px;
    /* border: solid red; */
}

.form h1{
    font-size: 20px;
    text-transform: uppercase;
    margin-bottom: 90px;
}

.enviar{
    margin-top: 10px;
    margin-left: 160px;
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
