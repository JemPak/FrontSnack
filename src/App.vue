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
  <div class="imagen"> 
    <img src="./assets/frutos2.jpg" width="1349">
  </div>
  <div class="introduccion">
    <h2>
      Con el creciente aumento de la obesidad en Colombia, nos hemos vistos en la tarea de diseñar un plan de manejo integral en donde las personas tengan acceso a información de interes sobre los beneficios que los superalimentos como los frutos secos pueden brindarle a nuestra salud.
    </h2>
  </div>
  <div class="texto">
    <h2  align="center" >¿ Quienes  Somos ?</h2>  
    <h2  align="center">Nuestra Oferta</h2>
    <h2  align="center">Beneficios</h2>
  </div>
  <div class="cuadros">
    <div class="somos" align="center">
      <h3>
        Somos una empresa 100% Colombiana, sólida en el sector de los alimentos que es un puente entre el comprador y el productor de una variedad de frutos secos, brindando una buena solucion mas natural a los snack de los colombianos.
      </h3>
    </div>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <div class="oferta" align="center">
      <h3>
        Brindamos una experiencia de snack saludables, en nuetsra maquinas dispensadoras encontraras gran variedad de frutos secos, que podras  adquirir de acuerdo a tu cantidad deseadas.
      </h3>
    </div>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <div class="beneficios" align="center">
      <h3>
        Los frutos secos, aparte de ser sabrosos, disminuyen el riesgo cardiovascular, son ricos en proteínas, fibra y minerales y poseen notables virtudes antioxidantes.
      </h3>
    </div> 
  </div>
<br>
</template>

<script>
  export default{
    name: 'App',
    data: function(){},

    methods:{},
    created: function(){}
  }
</script>

<style>

header{
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px 0px;
    border-bottom: 3px solid rgb(194, 123, 9);
    margin-bottom: 100px;
    background-color: #f2b327;
}
.logo{
    margin-right: 800px;
    width: 120px;
    height: 50px;
    cursor: pointer;
    position: static;
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

  .imagen{
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0cm;
    margin: -2.65cm;
  }

  .introduccion{
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 1cm 2cm;
    text-align: center;
    text-justify: auto;
    line-height: 1cm;
    margin: 2.5cm 0cm 0cm;
  }

  .texto{
    padding: 0cm 4cm;
    color: darkred;
    display: flex;
    justify-content: space-between;
    align-content: center;
    margin: 0.3cm;
  }

  .cuadros{
    padding: 0cm 2cm;
    display: flex;
    justify-content:space-around;
    align-content: center;
  }

  .somos {
    padding: 0.5cm;
    border-color: black ;
    border-width: 0.5mm;
    border-style: solid;
  }

  .oferta{
    padding: 0.5cm;
    border-color: black ;
    border-width: 0.5mm;
    border-style: solid;
  }

  .beneficios{
    padding: 0.5cm;
    border-color: black ;
    border-width: 0.5mm;
    border-style: solid;
  }
  
</style>
