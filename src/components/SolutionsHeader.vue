<template>
    <div id="titleHeader" :class="backgroundColor">
       {{titlepartial}}       
    </div>
</template>

<script>
export default {
    props: [
        'titlepartial',
        'backgroundColor'
    ]
}
</script>
<style scoped>
#titleHeader{
    min-height: 15rem;
}
</style>