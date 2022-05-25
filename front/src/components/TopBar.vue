<template>
    <section class="top-nav">
        <div>
            <h2>TOUDOU(m)</h2>
        </div>
        <input id="menu-toggle" type="checkbox" />
        <label class='menu-button-container' for="menu-toggle">
        <div class='menu-button'></div>
        </label>
        <ul class="menu">
            <li><router-link to="/home">Home</router-link></li>
            <li><a @click="logout()">Disconnect</a></li>
        </ul>
    </section>
</template>

<script>
export default {
    name: "TopBar",
    methods: {
        logout() {
            sessionStorage.removeItem('token');
            sessionStorage.removeItem('userId');
            this.$router.push('/');
        },
    },
}
</script>