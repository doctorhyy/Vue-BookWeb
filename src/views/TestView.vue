<template>
    <div>
        <Time :time="time" type="datetime" />
        <h2>{{ time }}</h2>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                time: 1678550400000
            }
        },mounted() {
            console.log(typeof(this.time))
        },
    }
</script>