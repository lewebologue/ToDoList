<template>
    <div id="signup" class="auth--container hide">
        <div class="auth--container__title">
            <h1>TOUDOU(m)</h1>
        </div>
        <div class="auth--container__login">
            <div class="container__login__title">
                <h2>SIGNUP</h2>
            </div>
            <div class="container__login__form">
                <input type="email" required placeholder="email" v-model="email">
                <input type="password" required placeholder="password" v-model="password"  pattern=".{8,}" title="Eight or more characters">
            </div>
            <div class="container__login_account">
                <p>Already have an account?</p>
                <a class="event" @click="hideContainer()">Click here !</a>
            </div>
            <div class="container__login__button">
                <button @click="signup()">signup</button>
            </div>
        </div>
        <!--Boostrap alert banner-->
        <div class="alert alert-danger" v-if="error">
            <p>{{error}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "SignupComp",
    data() {
        return {
            email: "",
            password: "",
            error:"",
        }
    },
    methods: {
        hideContainer() {
            document.getElementById("signup").classList.add('hide');
            document.getElementById("login").classList.remove('hide');
        },
        signup() {
            const credentials = {
                "email": this.email,
                "password": this.password
            }
            //check if email is correct using regex
            const mailRegexp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/;
            if (mailRegexp.test(this.email)) {
                const url = "http://localhost:3000/api/signup";
                const options = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(credentials)
                }
                fetch(url, options)
                .then(response => response.json())
                .then(data => {
                    if (data.error) {
                        this.error = data.error;
                    } else {
                        sessionStorage.setItem('token', data.token);
                        sessionStorage.setItem('userId', data.userId);
                        this.$router.push('/home');
                    }
                })
            } else {
                alert("Email is not valid");
            }
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