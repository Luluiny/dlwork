<template>
    <div>
        <span class="test drag">文字</span>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                color: 'red'
            }
        }
    }
</script>

<style scope>
    .test {
        color: "这里想使用 data 里面定义的变量"
    }
</style>