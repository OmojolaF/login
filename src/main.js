import { createApp } from 'vue'
import App from './App.vue'
import './assets/index.css'
import VueRouter from 'vue-router'
import description from './components/description.vue'
import contents from './components/contents.vue'
import dashboard from './components/dashboard.vue'
import forms from './components/forms.vue'
import logout from './components/logout.vue'

// Vue.use(VueRouter);

// const routes = [
//     {path: '/components/contents, component: contents'},
//     {path: '/components/description, component: description'},
//     {path: '/components/dashboard, component: dashboard'},
//     {path: '/components/forms, component: forms'},
//     {path: '/components/logout, component: logout'}
// ];

// const router = new VueRouter({
//     routes,
//     mode: 'history'
// })

// new Vue({
//     el: '#app',
//     router,
//     render(h) {
//         h(App)
//     },
// })

createApp(App).mount('#app')
