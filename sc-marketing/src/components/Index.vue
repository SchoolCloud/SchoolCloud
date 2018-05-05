<template>
  <div class="index-content">
    <div class="jumbotron jumbotron-fluid bg-info mb-0 p-0">
      <b-carousel class="" style="min-height:50rem; min-width:50rem;" indicators img-width="100vh" img-height="100vh">
        <b-carousel-slide class="bg-success" caption="First Slide" text="This is the text of the first slide">Slide 1</b-carousel-slide>
        <b-carousel-slide class="bg-warning" caption="Second Slide" text="This is the text of the second slide">Slide 2</b-carousel-slide>
        <b-carousel-slide class="bg-danger " caption="Third Slide" text="This is the text of the third slide">Slide 3</b-carousel-slide>
      </b-carousel>
      <!-- <div class="container">
        <div class="display-4">
          Bear Icon
        </div>
      </div> -->
    </div>
    <!-- About Section -->
    <div id="AboutSection" class="text-center bg-warning mb-4">
        About section
    </div>
    <div class="Products"> 
      <div class="row col-12 justify-content-center ">
        <div class="card mb-3 mx-2" 
        v-for="item in products" v-bind:key="item.id">
          <div class="card-header">{{item.header}}</div>
          <div class="card-body text-primary">
            <div class="card-title">{{item.title}}</div>
            <div class="card-text">{{item.body}}</div>
          </div>
        </div>
      </div>
    </div>
    <div id="MarketingBanner" class="bg-danger text-center">
      Marketing Banner
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {    
      products:[
        {
          id:0,
          header: 'Card 0',
          title: 'Card 0 Title',
          body: 'Card 0 Body'
        },
        {
          id:1,
          header: 'Card 1',
          title: 'Card 1 Title',
          body: 'Card 1 Body'
        },
        {
          id:2,
          header: 'Card 2',
          title: 'Card 2 Title',
          body: 'Card 2 Body'
        },
        {
          id:3,
          header: 'Card 3',
          title: 'Card 3 Title',
          body: 'Card 3 Body'
        },
        {
          id:4,
          header: 'Card 4',
          title: 'Card 4 Title',
          body: 'Card 4 Body'
        },
        {
          id:5,
          header: 'Card 5',
          title: 'Card 5 Title',
          body: 'Card 5 Body'
        }
      ]  
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.card{
  min-height: 20rem; 
  min-width:20rem;
}
.jumbotron{
  min-height: 95vh;
}
#AboutSection{
  min-height: 30vh;
}
#MarketingBanner{
  min-height: 30vh;
}
</style>
