<template>
    <div id="login" class="auth--container">
        <div class="auth--container__title">
            <h1>TOUDOU(m)</h1>
        </div>
        <div class="auth--container__login">
            <div class="container__login__title">
                <h2>LOGIN</h2>
            </div>
            <div class="container__login__form">
                <input type="text" required placeholder="email" v-model="email">
                <input type="password" required placeholder="password" v-model="password">
            </div>
            <div class="container__login_account">
                <p>No account?</p>
                <a class="event" @click="hideContainer()">Click here !</a>
            </div>
            <div class="container__login__button">
                <button @click="login()">connect</button>
            </div>
        </div>
        <!--Boostrap alert banner-->
        <div class="alert alert-danger w-100 text-center" v-if="error">
            <p>{{error}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "LoginComp",
    data() {
        return {
            email: "",
            password: "",
            error:"",
        }
    },
    methods: {
        hideContainer(){
            document.getElementById("login").classList.add('hide');
            document.getElementById("signup").classList.remove('hide');
        },
        login(){
            const credentials = {
                "email": this.email,
                "password": this.password
            }
            const url = "http://localhost:3000/api/login";
            const options = {
                method: "POST",
                body: JSON.stringify(credentials),
                headers: {
                    'Content-type' : 'application/json'
                }
            };
            fetch(url, options)
            .then(res => res.json())
            .then(res =>{
                if(res.userId && res.token){
                    sessionStorage.setItem("userId", res.userId),
                    sessionStorage.setItem("token", res.token),
                    this.$router.push('/home')
                }else{
                    this.showError(res.error)
                }
            })
            .catch(err => console.log(err));
        },
        //error handling for bootstrap
        showError(error){
            this.error = error;
            setTimeout(() => {
                this.error = "";
            }, 3000);
        }
    },
}
</script>