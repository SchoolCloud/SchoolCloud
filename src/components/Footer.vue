<template>
    <div class="footer row d-flex justify-content-center w-100 bg-secondary m-0 p-0 text-white align-content-center">
        &copy; {{copyright}}
    </div>
</template>

<script>
export default {
    name: 'footer',
    data(){
        return{
            copyright: '2018 - Schoolcloud Systems, LLC'
        }
    }
}
</script>
<style scoped>
/* .footer{
    background-color: red;
} */
</style>
