<template>
  <div id="app">
    <div id="nav">
      <router-link to="/post">Posts</router-link>|
      <router-link to="/post/about">About</router-link>
    </div>
    <div id="content">
      <router-view/>
    </div>
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  display: block;
  border: gray 1px solid;
}

#nav {
  border-bottom: gray 1px solid;
  padding: 10px;
}

#content {
  padding-left: 2em;
  padding-right: 2em;
}

#content a:any-link {
  color: black;
}

body {
  max-width: 720px;
  margin: auto;
  padding: 1em;
}

#nav a {
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  font-weight: bold;
}

code {
  overflow-x: auto;
}
</style>