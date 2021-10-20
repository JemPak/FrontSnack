import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
//import  #name_component from './components/Producto.vue'
import Contacto from './components/Contacto.vue'
//import #name_componente from './components/Solicitud.vue'

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
    component: Contacto
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
