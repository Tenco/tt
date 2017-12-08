import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Projects from './projects/Projects';
import Tasks from './tasks/Tasks'

Vue.use(VueRouter);

var router = new VueRouter({
   routes: [
       {
           path: '/',
           redirect: '/projects'

       },
       {
           path: '/projects',
           name: 'Projects',
           component: Projects
       },
       {
           path: '/tasks',
           name: 'Tasks',
           component: Tasks
       }
   ]
});

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})