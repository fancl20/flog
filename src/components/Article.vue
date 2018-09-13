<template>
  <div v-html="getContent"></div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Article extends Vue {
  @Prop() private name?: string;
  @Prop() private content?: string;
  get getContent(): string {
    if (this.content) {
      return this.content;
    }
    return require(`html-loader!markdown-loader!@/posts/${this.name}.md`);
  }
}
</script>