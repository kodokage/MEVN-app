<template>
        <div class="addpost" >
                <form  @submit.prevent="addPost">
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" class="form-control" name="name" v-model="post.name" placeholder="Enter Name">
                    </div>

                    <div class="form-group">
                        <label for="subject">Subject</label>
                        <input type="text" class="form-control" name="subject" v-model="post.subject"  placeholder="Enter Subject">
                    </div>

                    <div class="form-group">
                        <label for="comment">Comment</label>
                        <input type="text" class="form-control" name="comment" v-model="post.comment" placeholder="Enter Comment">
                    </div>

                    <input type="submit" value="Add Post" class="btn btn-primary">
                </form>
                <h1>{{joke.name}}</h1>
                <h1>{{joke.subject}}</h1>
                <h1>{{joke.comment}}</h1>
        </div>
</template>

<script>
const POST_URL = "http://localhost:4000/post";
export default {
    name:"addpost",

    data:function(){
        return{
            post:{
                name:"",
                subject:"",
                comment:""
            },
            joke:{}
        }
    },
    methods:{
        addPost(){
            fetch(POST_URL,{
                method:'POST',
                body: JSON.stringify(this.post),
                headers:{
                    'Content-Type':'application/json'
                }
            }).then(res =>res.json())
            .then(res =>console.log(res))
        }
        },
        
    }

</script>