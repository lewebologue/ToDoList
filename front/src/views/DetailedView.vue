<template>
    <div class="detailedView--main-container">
        <TopBar/>
        <div class="detailed--container">
            <div class="list-content">
                <h2>{{name}}</h2>
                <p>{{description}}</p>
            </div>
            <div class="edit-list">
                <h2>Edit list</h2>
                <div class="commands">
                    <input type="text" :placeholder="name" required v-model="edit.name">
                    <input type="text" :placeholder="description" v-model="edit.description">
                    <button @click.prevent="editList()">add</button>
                </div>
            </div>
            <div class="commands-button">
                <button @click="goBack()">go back</button>
                <button @click="deleteList()">delete</button>
            </div>
        </div>
    </div>
</template>

<script>
import TopBar from "@/components/TopBar.vue";

export default {
    name: "DetailedView",
    components: {
        TopBar
    },
    data() {
        return {
            name:"",
            description:"",
            edit:{
                name:"",
                description:""
            }
        }
    },
    mounted() {
        const id = this.$route.params.id;
        const url = "http://localhost:3000/api/" + id;
        const options={
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }
        fetch(url, options)
        .then(response => response.json())
        .then(data => {
            this.name = data.name;
            this.description = data.description;
        })
        .catch(error => console.log(error));
    },
    methods: {
        editList(){
            const data = {
                name: this.edit.name || this.name,
                description: this.edit.description || this.description
            }
            const url = "http://localhost:3000/api/" + this.$route.params.id;
            const options = {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            };
            fetch(url, options)
                .then(response => response.json())
                .then(data => {
                    this.name = data.name;
                    this.description = data.description;
                    this.$router.push("/home");
                })
                .catch(error => console.error(error));
        },
        deleteList(){
            const url = "http://localhost:3000/api/" + this.$route.params.id;
            const options = {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            };
            fetch(url, options)
                .then(response => response.json())
                .then(() => {
                    this.$router.push("/home");
                })
                .catch(error => console.error(error));
        },
        goBack(){
            this.$router.push("/home");
        }
    },    
}
</script>