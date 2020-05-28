<template>
  <div class="new">
      <h1>Comments</h1>
      <div v-bind:key="post._id" v-for="post in posts">
        <div class="card">
        <div class="card-header"><h3>{{post.name}}</h3></div>
        <div class="card-body">{{post.comment}}</div>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        <hr>
        </div>
      </div>
</template>
 
<script>
const API_URL = "http://localhost:4000/posts";
 
export default {
  name: "new",
  data:function(){
    return{
    error:"",
    posts:[],
    }
  },
  mounted(){
    fetch(API_URL)
    .then(response => response.json())
    .then(result => {
      this.posts = result
    })
  },

  methods:{}
}
</script>
 
