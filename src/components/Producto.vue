<template>
  <div class="imagen-inicio">
    <img src="@/assets/frutos2.jpg" />
  </div>
  <nav class="menu-navegacion">
    <h2>Productos</h2>
    <h3>Ordenado por</h3>
    <a href="#nombre">Nombre</a>
    <a href="#precio-mayor-a-menor">Precio mayor a menor</a>
    <a href="#precio-menor-a-mayor">Precio menor a mayor</a>
    <a href="#mas-recientes">Mas recientes</a>
  </nav>

  <section class="gallery">
    <div class="contenedor">
      <!-- <div class="contenedor-productos"> -->
        <div class="checklist-productos">
          <div class="producto">
            <img src="@/assets/almendras.jpg" alt="" class="img-productos" />
            <h1 class="costo-producto">$9000</h1>
            <p>Almendras</p>
            <button class="but1">Ver Producto</button>
          </div>
        </div>
        <div class="checklist-productos">
          <div class="producto">
            <img src="@/assets/anacardos.jpg" alt="" class="img-productos" />
            <h1 class="costo-producto">$7000</h1>
            <p>Anacardos</p>
            <button class="but1">Ver Producto</button>
          </div>
        </div>
        <div class="checklist-productos">
          <div class="producto">
            <img src="@/assets/avellanas.jpg" alt="" class="img-productos" />
            <h1 class="costo-producto">$10600</h1>
            <p>Avellanas</p>
            <button class="but1">Ver Producto</button>
          </div>
        </div>
        <div class="checklist-productos">
          <div class="producto">
            <img src="@/assets/cacahuates.jpg" alt="" class="img-productos" />
            <h1 class="costo-producto">$8000</h1>
            <p>Cacahuates</p>
            <button class="but1">Ver Producto</button>
          </div>
        </div>
        <div class="checklist-productos">
          <div class="producto">
            <img src="@/assets/castañas.jpg" alt="" class="img-productos" />
            <h1 class="costo-producto">$10000</h1>
            <p>Castañas</p>
            <button class="but1">Ver Producto</button>
          </div>
        </div>
        <div class="checklist-productos">
          <div class="producto">
            <img src="@/assets/nueces.jpg" alt="" class="img-productos" />
            <h1 class="costo-producto">$8700</h1>
            <p>Nueces</p>
            <button class="but1">Ver Producto</button>
          </div>
        </div>
        <div class="checklist-productos">
          <div class="producto">
            <img src="@/assets/piñones.jpg" alt="" class="img-productos" />
            <h1 class="costo-producto">$9900</h1>
            <p>Piñones</p>
            <button class="but1">Ver Producto</button>
          </div>
        </div>
        <div class="checklist-productos">
          <div class="producto">
            <img src="@/assets/pistachos.jpg" alt="" class="img-productos" />
            <h1 class="costo-producto">$8400</h1>
            <p>Pistachos</p>
            <button class="but1">Ver Producto</button>
          </div>
        </div>
        <div class="checklist-productos">
          <div class="producto">
            <img src="@/assets/upasas.jpg" alt="" class="img-productos" />
            <h1 class="costo-producto">$10600</h1>
            <p>Uvas Pasas</p>
            <button class="but1">Ver Producto</button>
          </div>
        </div>
      <!-- </div> -->
    </div>
  </section>
  <section class="image-light">
    <img src="@/assets/close.svg" alt="" class="close" />
    <img src="@/assets/frutos2.jpg" alt="" class="agregar-imagen" />
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "Producto",
  data() {
    return {};
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}

.imagen-inicio {
  width: 1340px;
  height: 300px;
  position: relative;
  top: 0px;
  margin-left: auto;
  margin-right: auto;
}
.imagen-inicio img {
  width: 1340px;
  height: 300px;
}
.menu-navegacion {
  position: relative;
  top: 170px;
  left: -100px;
  width: 15vw;
  height: 200px;
  background: transparent;
  background-blend-mode: multiply;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  transition: transform 0.3s ease-in-out;
  transform: translate(110%);
  box-shadow: 0 0 6px rgb(194, 123, 9);
}

.header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0px;
  border-bottom: 3px solid rgb(194, 123, 9);
  margin-bottom: 100px;
  background-color: #f2b327;
}

.header-1 {
  text-align: center;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.contenedor {
  position: relative;
  top: -50px;
  height :auto;
  width :900px;
  left: 30%;
  right: auto;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  /* border: solid red; */
}
.producto {
  position: relative;
  margin: 30px auto;
  margin-top: 20px;
  width: 300px;
  height: 320px;
  background: transparent;
  text-align: start;
  line-height: 20px;
  color: black;
  border-radius: 3%;
  border: rgb(97, 70, 26) 5px solid;
}
/* rgb(194, 123, 9) */
.but1 {
  position: absolute;
  width: 130px;
  height: 30px;
  color: black;
  background-color: #f2b327;
  border-radius: 3%;
  border: none;
  cursor: pointer;
  text-align: center;
  left: 85px;
  bottom: 10px;
}
.but1:hover{
  background-color: #e6a720;
}

.costo-producto {
  margin-top: 10px;
  margin-left: 10px;
  color: black;
  justify-content: start;
  align-items: center;
}
.producto p{
  margin-top: 10px;
  margin-left: 10px;
  /* margin: 10px 10px; */
}

.checklist-productos {
  width: 45%;
  /* background-color: transparent; */
}

.contenedor-productos {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.img-productos {
  object-fit: cover;
  width: 100%;
  display: block;
  margin-bottom: 15px;
  /* cursor: pointer; */
}

.image-light {
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(100%);
  transition: transform 0.2s ease-in-out;
}

.close {
  position: absolute;
  top: 15px;
  right: 15px;
  width: 40px;
  cursor: pointer;
}

.agregar-imagen {
  object-fit: cover;
  width: 60%;
  border-radius: 10px;
  transform: scale(0);
  transition: transform 0.3s 0.2s;
}

.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #f2b327;
  padding-bottom: -5px;
}
</style>
