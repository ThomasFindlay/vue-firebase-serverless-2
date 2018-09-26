import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/register',
      name: 'register',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/Register.vue')
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/Login.vue')
    },
    {
      path: '/blog',
      redirect: '/blog/',
      component: {
        render(c) {
          return c('router-view');
        }
      },
      children: [
        {
          path: '/',
          name: 'View blogs',
          component: () => import('@/views/Blog/ViewBlogs.vue')
        },
        {
          path: 'add-blog',
          name: 'Add blog',
          component: () => import('@/views/Blog/AddBlog.vue')
        },
        {
          path: 'edit-blog/:id',
          name: 'Edit blog',
          component: () => import('@/views/Blog/EditBlog.vue')
        }
      ]
    }
  ]
});
