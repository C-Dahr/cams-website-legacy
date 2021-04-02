<template>
    <v-app>
        <!--<Navbar/>-->
        <v-main>
            <router-view/>
        </v-main>
    </v-app>
</template>

<script>
//import Navbar from '@/components/Navbar.vue'

export default {
    name: 'App',
    components: {
        //Navbar
    },
    data: () => ({
    }),
};

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: rgb(2,0,36);
  background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 75%, rgba(0,212,255,1) 100%);
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
