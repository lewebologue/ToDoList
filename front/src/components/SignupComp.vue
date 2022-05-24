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
                <input type="text" required placeholder="email" v-model="email">
                <input type="password" required placeholder="password" v-model="password">
            </div>
            <div class="container__login_account">
                <p>Already have an account?</p>
                <a class="event" @click="hideContainer()">Click here !</a>
            </div>
            <div class="container__login__button">
                <button @click="signup()">signup</button>
            </div>
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
            const url = "http://localhost:3000/api/signup";
            const options = {
                method: "POST",
                body: JSON.stringify(credentials),
                headers: {
                    'Content-type' : 'application/json'
                }
            };
            fetch(url, options)
            .then(res => res.json())
			.then (() =>{
				alert("Welcome aboard ! Please sign in");
				window.location.reload();
            })
        },
    },
}
</script>