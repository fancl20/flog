<template>
    <ul>
      <li v-for="post in posts">
        <router-link :to="{ name:'post', params: { postId: post.file }}">
          {{ post.meta.title}}
        </router-link>
      </li>
    </ul>
</template>

<script lang="ts">
import { Prop, Vue } from 'vue-property-decorator';
import { posts } from '../posts';

export default class Posts extends Vue {
  @Prop()
  private posts = posts
    .filter(p => {
      return p.meta && p.meta.publish && p.meta.title;
    })
    .sort((a, b) => {
      return b.meta.publish - a.meta.publish;
    });
}
</script>
