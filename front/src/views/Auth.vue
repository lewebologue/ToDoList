<template>
    <div class="main--container">
        <LoginComp/>
        <SignupComp/>
    </div>
</template>

<script>
import LoginComp from '@/components/LoginComp.vue';
import SignupComp from '@/components/SignupComp.vue';

export default {
    name: "AuthView",
    components:{
        LoginComp,
        SignupComp,
    },
}
</script>