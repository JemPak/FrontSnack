import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Producto from './components/Producto.vue'
import Contacto from './components/Contacto.vue'
import Instalacion from './components/Instalacion.vue'
//import #name_componente from './components/Solicitud.vue'
import Home from './components/Home.vue'

// Agregar la ruta del componente acá
const routes = [
  {
    path: "/",
    name: "root",
    component: App,
  },
  {
    path: "/Contacto",
    name: "Contacto",
    component: Contacto,
  },
  {
    path:"/Home",
    name: "Home",
    component: Home,
  },
  {
    path:"/Solicitud/Instalacion",
    name: "Instalacion",
    component: Instalacion,
  }, 
  {
    path: "/Producto",
    name: "Producto",
    component: Producto
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
