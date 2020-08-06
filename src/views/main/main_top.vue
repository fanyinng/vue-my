<template>
    <div class="normalBox">
        <div class="topItem">
            <div class="logoItem">
                <img src="../../static/images/logoTemp.png"/>
            </div>
            <div class="menuItem">
                <el-menu :default-active="activeName" class="el-menu-demo" mode="horizontal" @select="handleClick"
                         active-text-color="#3085FF">
                    <el-menu-item index="1">组件</el-menu-item>
                    <el-menu-item index="2">更新</el-menu-item>
                    <el-menu-item index="3">关于</el-menu-item>
                    <el-menu-item index="4">资源</el-menu-item>
                </el-menu>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "main_top",
        data() {
            return {
                activeName: '1',
            }
        },
        methods: {
            handleClick() {
                // console.log(tab)
            }
        }
    }
</script>

<style scoped>

</style>