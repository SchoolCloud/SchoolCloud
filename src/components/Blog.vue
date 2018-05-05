<template>
<div class="container"> 
    <head-partial :titlepartial="title" :backgroundColor="titlecolor" ></head-partial>
    <div class="row justify-content-center m-0 pt-4" :class="panelColor">
        <info-partial v-for="item in panelInfo" v-bind:key="item.id" :bgpic="item.bgpic" :title="item.title" :modelContent="item.modelContent"></info-partial>
    </div>
</div>

</template>

<script>
import HeadPartial from './SolutionsHeader'
import InfoPartial from './SolutionsPartial'

export default {  
    components:{
        HeadPartial,
        InfoPartial
    },  
    data(){
        return {
            title: 'Blog',
            titlecolor: 'bg-warning',
            panelColor: 'bg-success',
            // info: 'Managing Students is awesome with us.',
            panelInfo:[
                {
                    id: 0,
                    bgpic: 'bgPic 0',
                    title: 'Panel Title 0',
                    modelContent: 'Modal Content 0'
                },
                {
                    id: 1,
                    bgpic: 'bgPic 1',
                    title: 'Panel Title 1',
                    modelContent: 'Modal Content 1'
                },
                {
                    id: 2,
                    bgpic: 'bgPic 2',
                    title: 'Panel Title 2',
                    modelContent: 'Modal Content 2'
                },
                {
                    id: 3,
                    bgpic: 'bgPic 3',
                    title: 'Panel Title 3',
                    modelContent: 'Modal Content 3'
                }
            ]
        }
    }        
    
}
</script>