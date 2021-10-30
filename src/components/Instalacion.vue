<template>
  <div class="header-flex">
    <div class="image">
      <img src="@/assets/men.jpg" alt="imagen" class="img" />
    </div>
    <form v-on:submit.prevent="postCliente" class="forms">
      <h2>SOLICITUD DE INSTALACION</h2>
      <section class="section1 etiquetas">
        <div class="lado-izq">
          <h4>NOMBRE</h4>
          <h4>NIT</h4>
          <h4>DIRECCION</h4>
          <h4>CIUDAD</h4>
          <h4>EMAIL</h4>
          <h4>TELEFONO</h4>
          <h4>PRODUCTOS</h4>
        </div>
        <div class="lado-der">
          <input v-model="data.nombre" type="text" />
          <input v-model="data.nit" type="text" />
          <input v-model="data.direc" type="text" />
          <input v-model="data.ciudad" type="text" />
          <input v-model="data.email" type="email" />
          <input v-model="data.tel" type="text" />
          <input v-model="productos" type="text" class="prod" />
        </div>
      </section>
      <button type="submit">SUBMIT</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Instalacion",
  data() {
    return {
      // 'id_cliente','nombre','nit','direc','ciudad','email','tel'
      productos: "",
      data: {
        nombre: "",
        nit: "",
        direc: "",
        ciudad: "",
        email: "",
        tel: "",
        // productos: ""
      }
    }
  },
  methods: {
    postCliente: async function(){
      let endpoint = "https://snack-time-back.herokuapp.com/cliente/"
      let params = { headers: {} };
      try{
        let result = await axios.post(endpoint, this.data, params);
        alert("Solicitud de Instalación Exitosa !!");
        // console.log(result);
        this.cleanForm();
      }catch (error){
        if (error.response.status == 400)
          alert("Por favor rellene todos los datos completos");
        else alert("Error inesperado, intente de nuevo más tarde");
        // console.log(error.response);
      }
    },
    cleanForm: function(){
      this.data.nombre = "";
      this.data.nit = "";
      this.data.direc = "";
      this.data.ciudad = "";
      this.data.email = "";
      this.data.tel = "";
      this.productos = "";
    }
  },
  created: function(){
  
  }
};
</script>

<style>

.header-flex {
  position: absolute;
  top: 56%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: center center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 90%;
  /* border: 4px solid red;  */
}
.image {
  position: relative;
  top: 20px;
  left: 100px;
  width: 400px;
  height: 500px;
  /* border: 3px solid red; */
}
.img {
  width: 400px;
  height: 500px;
}
.forms {
  position: relative;
  top: 30px;
  left: -40px;
  /* border: 1px solid aqua; */
  width: 600px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: left;
}
.forms h2 {
  position: relative;
  top: -15px;
  left: 40px;
}
.section1 {
  position: relative;
  top: -20px;
  left: 20px;
  right: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  /* border: 1px solid aqua; */
}
.lado-izq {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 20px;
  height: 420px;
  color: black;
  /* border: 1px solid aqua; */
  margin-right: 20px;
}
.lado-der {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  margin-top: 25px;
  height: 400px;
  top: -5px;
  /* border: 1px solid aqua; */
}
.etiquetas h4 {
  text-align: left;
}
.lado-der input {
  width: 400px;
  border: 2px solid #ccc;
  background: white;
  padding-top: 5px;
  padding-right: 5px;
  padding-bottom: 5px;
  color: black;
  font-size: 15px;
}
.lado-der input:focus{
  border: 2px solid #f2b327;
}
.section2 {
  /* border: 1px solid aqua; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.forms button{
  position: relative;
  left: 300px;
  bottom: 10px;
  width: 100px;
  height: 35px;
  border: none;
  color: black;
  background-color: #f2b327;
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.2s;
  box-shadow: 0 1px 1px rgba(0,0,0,0.3);
}
.forms button:hover{
  background-color: #e6a720;
}
.prod {
  position: relative;
  padding-bottom: 30px;
  margin-bottom: -20px;
}
</style>
