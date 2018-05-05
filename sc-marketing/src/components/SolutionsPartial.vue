<template>
    <div id="infoContainer" class="bg-success">
        <!-- {{panelInfo}} -->
        <div class="card mx-1 mb-2">
            <div class="card-body">
                {{id}} {{bgpic}} {{title}} {{modelContent}}
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    props: [
        'id',
        'bgpic', 
        'title',
        'modelContent'
    ]    
}
</script>

<style scoped>
#infoContainer {
    min-height: 20rem;
}
.card{
    min-height: 20rem;
    min-width: 20rem;
}
</style>
