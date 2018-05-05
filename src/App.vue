<template>
  <div id="app">
    <Navigation></Navigation>
    <!-- <img src="./assets/logo.png"> -->
    <transition name="component-fade">
      <router-view/>
    </transition>
    <ContactPartial id="ContactPartial"></ContactPartial>
    <Footer id="Footer"></Footer>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Navigation from './components/Nav'
import Footer from './components/Footer'
import ContactPartial from './components/ContactPartial'

export default {
  name: 'App',
  components: {
    'Navigation': Navigation,
    'Footer': Footer,
    'ContactPartial': ContactPartial
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
}
body{
  min-height: 100vh;
}
#ContactPartial{
  min-height: 20vh;
}
#Footer{
  min-height: 10vh;
}

/* .slide-fade-enter-active {
  transition: all .8s ease;
}
.slide-fade-leave-active {
  transition: all .8s ease cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
} */
.component-fade-enter-active, .component-fade-leave-active{
  transition: opacity .5s ease;
}
.component-fade-enter, .component-fade-leave-to
{
  opacity: 0;
}

</style>
