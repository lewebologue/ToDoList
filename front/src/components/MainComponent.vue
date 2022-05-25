<template>
    <div class="list--main-container">
        <div class="add-list-content">
            <h2>Add list</h2>
            <div class="commands">
                <input type="text" placeholder="todo*" required v-model="name">
                <input type="text" placeholder="description" v-model="description">
                <button @click="addNew()">add</button>
            </div>
        </div>
        <div class="all-list-container">
            <h2>All lists</h2>
            <div v-for="list in lists" :key="list.id">
                <div class="list-bloc" v-if="list.isDone==false">
                    <div class="list-name">
                        <a @click="detailedView(list._id)">{{list.name}}</a>
                    </div>
                    <div class="list-button">
                        <button @click.prevent="isDone(list._id)">done</button>
                        <button @click.prevent="deleteList(list._id)">delete</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="completed-lists">
            <h2>Completed lists</h2>
            <div v-for="list in lists" :key="list.id">
                <div class="list-bloc" v-if="list.isDone==true">
                    <div class="list-name">
                        <h3>{{list.name}}</h3>
                    </div>
                    <div class="list-button">
                        <button @click.prevent="toDo(list._id)">To do</button>
                        <button @click.prevent="deleteList(list._id)">delete</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "MainComponent",
    data() {
        return {
            name:"",
            description:"",
            lists: []
        }
    },
    mounted(){
        const url = "http://localhost:3000/api/all";
        const options={
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }
        fetch(url, options)
        .then(response => response.json())
        .then(data => {
            this.lists = data;
        })
        .catch(error => console.log(error));
    },
    methods: {
        addNew(){
            const data = { name: this.name, description: this.description };
            const url = "http://localhost:3000/api/new";
            const options = {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                }
            };
            fetch(url, options)
                .then(response => response.json())
                .then(data => {
                    this.lists.push(data);
                    this.name = "";
                    this.description = "";
                })
                .catch(error => console.error(error));
        },
        isDone(id){
            const url = 'http://localhost:3000/api/' + id;
            const options = {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ isDone: true })
            };
            fetch(url, options)
                .then(response => response.json())
                .then(data => {
                    this.lists.push(data);
                    window.location.reload();
                })
                .catch(error => console.error(error));
        },
        toDo(id){
            const url = 'http://localhost:3000/api/' + id;
            const options = {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ isDone: false })
            };
            fetch(url, options)
                .then(response => response.json())
                .then(data => {
                    this.lists.push(data);
                    window.location.reload();
                })
                .catch(error => console.error(error));
        },
        deleteList(id){
            const url = 'http://localhost:3000/api/' + id;
            const options = {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            };
            fetch(url, options)
                .then(response => response.json())
                .then(data => {
                    this.lists.push(data);
                    window.location.reload();
                })
                .catch(error => console.error(error));
        },
        detailedView(id){
            this.$router.push('/' + id);
        },
    },

}
</script>