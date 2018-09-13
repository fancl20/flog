import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Posts from './views/Posts.vue';
import Post from './views/Post.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: { name: 'posts' }
    },
    {
      path: '/post',
      name: 'posts',
      component: Posts
    },
    {
      path: '/post/:postId',
      name: 'post',
      component: Post
    }
  ]
});
