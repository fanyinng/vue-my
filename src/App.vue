<template>
    <div>
        <mainVue></mainVue>
    </div>
</template>

<script>
    import mainVue from './views/main/main.vue'

    export default {
        name: 'App',
        components: {
            mainVue
        }
    }
</script>

<style lang="less">
    @import 'style/default.less';
</style>
