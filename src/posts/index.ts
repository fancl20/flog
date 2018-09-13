import { safeLoad } from 'js-yaml';

let context = require.context('html-loader!markdown-loader!./', true, /\.md$/);

class Post {
  file: string;
  meta: any;
  content: string;
  constructor(file: string, meta: any, content: string) {
    this.file = file.slice(2, -3); // ./name.md => name
    this.meta = meta;
    this.content = content;
  }
}
let posts: Post[] = [];
context.keys().forEach((file: string) => {
  let parser = new DOMParser();
  let content = context(file);
  let nodes = parser.parseFromString(content, 'text/html');
  let first = nodes.childNodes[0];
  let meta: any;
  if (first && first.nodeType == Node.COMMENT_NODE && first.nodeValue) {
    meta = safeLoad(first.nodeValue);
  }
  posts.push(new Post(file, meta, content));
});
export { posts };
