<template>
    <div>
        <TopBar/>
        <MainComponent/>
    </div>
</template>

<script>
import TopBar from '@/components/TopBar.vue';
import MainComponent from '@/components/MainComponent.vue';

export default {
    name: "HomeView",
    components: {
        TopBar,
        MainComponent
    }
}
</script>