<template>
     
    <div class="imagen-inicio">
       <img src="@/assets/frutos2.jpg">
    </div>    
    
    
    <body>

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
                      <div class="contenedor-productos">
                      <div class = "checklist-productos">
                      <div class="producto">
                          <img src="@/assets/almendras.jpg" alt="" class="img-productos">
                          <h1 class="costo-producto">$9000</h1>
                          <p>Almendras</p>
                          <button id="but1">
                           <h3>Ver Producto</h3>
                          </button>
                          </div>
                      </div>
                      <div class = "checklist-productos">
                      <div class="producto">
                           <img src="@/assets/anacardos.jpg" alt="" class="img-productos">
                          <h1 class="costo-producto">$7000</h1>
                          <p>Anacardos</p>
                          <button id="but1">
                           <h3>Ver Producto</h3>
                          </button>
                          </div>
                      </div>
                      <div class = "checklist-productos">
                      <div class="producto">
                           <img src="@/assets/avellanas.jpg" alt="" class="img-productos">
                          <h1 class="costo-producto">$10600</h1>
                          <p>Avellanas</p>
                          <button id="but1">
                           <h3>Ver Producto</h3>
                          </button>
                          </div>
                      </div>
                      <div class = "checklist-productos">
                      <div class="producto">
                           <img src="@/assets/cacahuates.jpg" alt="" class="img-productos">
                          <h1 class="costo-producto">$8000</h1>
                          <p>Cacahuates</p>
                          <button id="but1">
                           <h3>Ver Producto</h3>
                          </button>
                          </div>
                      </div>
                      <div class = "checklist-productos">
                      <div class="producto">
                           <img src="@/assets/castañas.jpg" alt="" class="img-productos"> 
                          <h1 class="costo-producto">$10000</h1>
                          <p>Castañas</p>
                          <button id="but1">
                           <h3>Ver Producto</h3>
                          </button>
                          </div>
                      </div>
                      <div class = "checklist-productos">
                      <div class="producto">
                           <img src="@/assets/nueces.jpg" alt="" class="img-productos">
                          <h1 class="costo-producto">$8700</h1>
                          <p>Nueces</p>
                          <button id="but1">
                           <h3>Ver Producto</h3>
                          </button>
                          </div>
                      </div>
                      <div class = "checklist-productos">
                      <div class="producto">
                           <img src="@/assets/piñones.jpg" alt="" class="img-productos">
                          <h1 class="costo-producto">$9900</h1>
                          <p>Piñones</p>
                          <button id="but1">
                           <h3>Ver Producto</h3>
                          </button>
                          </div>
                      </div>
                      <div class = "checklist-productos">
                      <div class="producto">
                           <img src="@/assets/pistachos.jpg" alt="" class="img-productos">
                          <h1 class="costo-producto">$8400</h1>
                          <p>Pistachos</p>
                          <button id="but1">
                           <h3>Ver Producto</h3>
                          </button>
                          </div>
                      </div>
                      <div class = "checklist-productos">
                      <div class="producto">
                           <img src="@/assets/upasas.jpg" alt="" class="img-productos">
                          <h1 class="costo-producto">$10600</h1>
                          <p>Uvas Pasas</p>
                          <button id="but1">
                           <h3>Ver Producto</h3>
                          </button>
                          </div>                          
                      </div>               
                      </div>                     
                  </div>
               </section>

      <section class="image-light">
              <img src="@/assets/close.svg" alt="" class="close">
              <img src="@/assets/frutos2.jpg" alt="" class="agregar-imagen">
          </section>
  
    </body>                                             
          
     


    

        
</template>


<script>
import axios from 'axios';

export default {
  name: "Producto",
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

.imagen-inicio{
    justify-content: space-around;
    align-items: flex-start;
   
}
.menu-navegacion{
 position: relative;
     top:0;     
     right: 0px;      
     width: 15vw;
     height: 100%;
     background: white;
     background-blend-mode: multiply;
     display: flex;
     flex-direction: column;
     justify-content: space-evenly;
     align-items: center;
     transition: transform .3s ease-in-out; 
     transform: translate(110%);
     box-shadow: 0 0 6px rgba(0, 0, 0, .5);
   }


.header{
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px 0px;
    border-bottom: 3px solid rgb(194, 123, 9);
    margin-bottom: 100px;
    background-color: #f2b327;
}

.header-1{
  text-align: center;
  padding:0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
}
.contenedor{
  display: flex;  
  justify-content: start;
  flex: wrap;
}
.producto{
position:static;
margin:30px auto; 
width:300px; 
height:320px;
background:white; 
text-align:start; 
line-height:20px; 
color:black; 
border: black 5px solid;	
display: block;
cursor: pointer;
}

.but1{
  text-align: center;
}

.costo-producto{
  margin-bottom: 7px;
  color: black;
  justify-content: start;
  align-items: center;
}

.checklist-productos{
  width: 45%;
}

  .contenedor-productos{
  display:flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  }

 .img-productos{
   object-fit: cover;
   width: 100%;
   display: block;
   margin-bottom: 15px;   
   cursor: pointer;
 }

 .image-light{
  position: fixed;
  background:rgba(0, 0, 0,.5);
  width: 100%;
  height: 100%;
  top:0;
  left:0;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(100%);
  transition: transform .2s ease-in-out;
}

.close{
  position: absolute;
  top: 15px;
  right: 15px;
  width: 40px;
  cursor: pointer;
}

.agregar-imagen{
  object-fit: cover;
  width: 60%;
  border-radius: 10px;
  transform: scale(0);
  transition: transform .3s .2s;
}

.footer{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #f2b327;
    padding-bottom: -5.0px;
    }
</style>
