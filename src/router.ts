import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from './components/HelloWorld.vue'
import PiniaCartTutorial from './components/PiniaCartTutorial.vue'
import Brands from "./components/Brands.vue";
import Services from "./components/Services.vue";
import Products from "./components/Products.vue";
import Blog from "./components/Blog.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Products },
    { path: '/hello-world', component: HelloWorld },
    { path: '/brands', component: Brands },
    { path: '/products', component: Products },
    { path: '/services', component: Services },
    { path: '/blog', component: Blog },
    { path: '/pinia-cart-tutorial', component: PiniaCartTutorial },
  ]
})
export default router;