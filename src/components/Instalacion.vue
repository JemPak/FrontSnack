<template>
  <div class="header-flex">
    <div class="image">
      <img src="@/assets/men.jpg" alt="imagen" class="img" />
    </div>
    <form class="forms">
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
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="email" />
          <input type="text" />
          <input type="text" class="prod" />
        </div>
      </section>
      <button>SUBMIT</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Contacto",
  data() {
    return {};
  },
};
</script>

<style>

.header-flex {
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: center center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 90%;
  /* border: 4px solid red; */
}
.image {
  position: relative;
  top: 20px;
  left: -150px;
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
  left: -80px;
  /* border: 1px solid aqua; */
  width: 800px;
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
  left: 2 0px;
  right: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  /* border: 1px solid aqua; */
}
.lado-izq {
  display: flex;
  flex-direction: column;
  /* border: 1px solid aqua; */
  margin-right: 20px;
}
.lado-der {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* border: 1px solid aqua; */
}
.etiquetas h4 {
  text-align: left;
}
.lado-der input {
  width: 400px;
  border: 2px solid #f2b327;
  background: transparent;
  padding-top: 5px;
  padding-right: 5px;
  padding-bottom: 5px;
  color: black;
  font-size: 15px;
}
.section2 {
  /* border: 1px solid aqua; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.forms button{
  position: relative;
  left: 270px;
  bottom: -10px;
  width: 100px;
  height: 55px;
  background-color: #f2b327;
  border: 2px solid rgb(194, 123, 9);
}
.prod {
  position: relative;
  padding-bottom: 30px;
  margin-bottom: -20px;
}
</style>
