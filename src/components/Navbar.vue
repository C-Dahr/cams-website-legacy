<template>
    <v-app-bar app color="#1c1c1c" dark>
        <div class="d-flex align-center pr-5">
            <v-img
                alt="Vuetify Logo"
                contain
                src="../assets/Logo_shadow.png"
                transition="scale-transition"
                width="70"
            />
        </div>
        <v-toolbar-items class="hidden-xs-only">
            <v-btn
                plain
                v-for="item in menuItems"
                :key="item.title"
                :to="item.path"
                target="_blank"
            >
                <v-icon left dark>{{ item.icon }}</v-icon>
                {{ item.title }}
            </v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
    </v-app-bar>
</template>

<script>

export default {
    name: 'Navbar',
    components: {
    },
    data() {
		return {
			menuItems: [
                { title: 'About', path: '/', icon: 'mdi-home' },
                { title: 'Taskmaster', path: '/taskmaster', icon: 'mdi-email' },
     ]
		}
	},
};

</script>

<style>

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
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
