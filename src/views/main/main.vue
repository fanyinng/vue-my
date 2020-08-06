<template>
    <div class="mainBox">
        <el-container>
            <!--<el-header>-->
            <div class="centerView">
                <mainTop>
                </mainTop>
            </div>
            <!--</el-header>-->
            <el-aside>
                <mainLeft></mainLeft>
            </el-aside>
            <el-container>
                <el-main></el-main>
            </el-container>

            <el-footer></el-footer>
        </el-container>
    </div>

</template>

<script>
    import mainTop from "./main_top"
    import mainLeft from "./main_left";

    export default {
        name: "main",
        components: {mainLeft, mainTop}
    }
</script>

<style scoped>

</style>