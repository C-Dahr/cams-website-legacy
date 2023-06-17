<template>
    <v-card dark max-width="50%" color="rgb(0, 0, 0, 0.7)" class="elevation-10">
        <v-card-title class="white--text text-xl-h4">
            Hello!
        </v-card-title>
        <v-card-text class="white--text text-lg-h5 text-left" style="line-height: 2;">
            My name is TaskBot, and I am your virtual tasking assistant! I am here to help you have the best tasking experience possible :) If you've come to visit me, that must mean you're on Task #9! That's awfully exciting. The taskmaster has left us some puzzles for you to solve, but I'm sure it's nothing you can't handle! And when you get a chance, make sure to look around the website! Also please keep in mind that the TaskBot experience wasn't created with mobile in mind, and is best enjoyed on a computer. Whenever you're ready, go ahead and click below and we can get started!
        </v-card-text>
        <v-card-actions class="justify-center pb-5">
            <v-btn
                x-large
                light 
                @click="ready"
            >
                I'm ready
            </v-btn>
        </v-card-actions>
        </v-card>
</template>

<script>

export default {
    name: 'Step0',
    components: {
    },
    data() {
		return {
		}
	},
    methods: {
        ready() {
            this.$parent.ready();
        }
    }
};

</script>

<style>

</style>
