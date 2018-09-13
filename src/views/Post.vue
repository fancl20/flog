<template>
    <Article :name="$route.params.postId"/>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Article from '@/components/Article.vue';

@Component({
  components: {
    Article
  }
})
export default class Post extends Vue {}
</script>
