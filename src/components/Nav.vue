<template>
  <b-navbar id="sc-NavBar" toggleable="md" type="dark" sticky="true" class="text-white">
    <!-- <h2>Nav Bar</h2> -->
    <div class="container">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <router-link to="/" class="navbar-brand">Brand</router-link>
    <b-collapse is-nav id="nav_collapse">
      
      <!-- Right Align Items -->
      <b-navbar-nav class="ml-auto">
        <!-- Dropdown Items -->
        <b-nav-item-dropdown text="Solutions">
          <b-dropdown-item v-for="solution in solutions" 
            v-bind:key="solution.id"
            :to="`${solution.page}`">
            {{solution.text}}
            </b-dropdown-item>
        </b-nav-item-dropdown>
        <!-- Navbar Items -->
        <b-nav-item v-for="routes in links" 
          v-bind:key="routes.id"
          :to="`${routes.page}`" class="text-white">
          {{routes.text}}
        </b-nav-item>
        <b-nav-item href="https://dev.schoolcloud.io">Login</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
    </div>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navigation',
  data () {
    return {
      links: [
        
        {
          id: 4,
          text: 'Support',
          page: '/Support'
        },
        {
          id: 5,
          text: 'Demo',
          page: '/Demo'
        },
        {
          id: 6,
          text: 'Blog',
          page: '/Blog'
        },
        {
          id: 7,
          text: 'About',
          page: '/About'
        },
        {
          id: 8,
          text: 'Contact',
          page: '/Contact'
        }
      ],
      solutions:[
        {
          id: 0,
          text: 'Gradebook',
          page: '/Gradebook'
        },
        {
          id: 1,
          text: 'Student Management',
          page: '/StudentMgt'
        },
        {
          id: 2,
          text: 'Campus Management',
          page: '/CampusMgt'
        },
        {
          id: 3,
          text: 'IT Management',
          page: '/IT'
        },
      ]      
    }
  }
}
</script>

<style scoped>
  #sc-NavBar{
    background-color: #7EC0EE;
  }
</style>
