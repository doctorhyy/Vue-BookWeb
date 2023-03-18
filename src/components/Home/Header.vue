<template>
    <Menu mode="horizontal" :theme="theme" active-name="1">
        <MenuItem name="1" style="width: 191px; font-weight: 600; font-size: 16px;">
            <Icon type="ios-paper" />
            图书管理系统
        </MenuItem>
        <div style="flex:1"></div>
        <MenuItem name="2">
            <Icon type="ios-people" />
            用户管理
        </MenuItem>
        <Submenu name="3">
            <template #title>
                <Icon type="ios-stats" />
                统计分析
            </template>
            <MenuGroup title="使用">
                <MenuItem name="3-1">新增和启动</MenuItem>
                <MenuItem name="3-2">活跃分析</MenuItem>
                <MenuItem name="3-3">时段分析</MenuItem>
            </MenuGroup>
            <MenuGroup title="留存">
                <MenuItem name="3-4">用户留存</MenuItem>
                <MenuItem name="3-5">流失用户</MenuItem>
            </MenuGroup>
        </Submenu>
       
        <MenuItem name="4">
            <Icon type="ios-construct" />
            综合设置
        </MenuItem>
        <MenuItem name="5" @click="toggle">
               
             <Icon :type="iconTheme" />
          
        </MenuItem>
       
    </Menu>
    <br>

   

</template>
<script>

    export default {
        data () {
            return {
                iconTheme:'md-sunny',
                theme: 'light'
            }
        },methods: {
            toggle(){
                if(this.iconTheme==='md-sunny'){
                    this.iconTheme='md-moon'
                    this.theme='dark'
                }else if(this.iconTheme==='md-moon'){
                    this.iconTheme='md-sunny'
                    this.theme='light'
                }
                this.$store.dispatch('send',this.theme)
                console.log(this.$store)
            }
        },
    }
</script>
<style scoped>
    .ivu-menu {
        display: flex !important;
    }
    
</style>
