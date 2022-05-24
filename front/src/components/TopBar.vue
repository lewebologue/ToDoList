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
            <li><router-link to="/new-list">New list</router-link></li>
            <li><a href="">Disconnect</a></li>
        </ul>
    </section>
</template>

<script>
export default {
    name: "TopBar",
}
</script>