<template>
    <v-card dark max-width="50%" color="rgb(0, 0, 0, 0.7)" class="elevation-10">
        <v-card-title class="white--text text-xl-h4">
            Hi {{ username }}!
        </v-card-title>
        <v-card-text class="white--text text-lg-h5 text-left" style="line-height: 2;">
            <v-row>
                <v-col>
                    It's nice to meet you. Let's get started. Our first puzzle is a simple bit of trivia!
                </v-col>
            </v-row>
            <v-row>
                <v-col>What is the taskmaster's favorite movie?</v-col>
            </v-row>
        </v-card-text>
        <v-row justify="center">
            <v-col cols="8">
                <v-text-field v-model="movie" :error="wrong" label="Answer" v-on:keyup.enter="checkMovie"></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-btn
                    x-large
                    light 
                    @click="checkMovie"
                >
                    Submit
                </v-btn>
            </v-col>
        </v-row>
        <transition name="fade">
        <v-card-text class="white--text text-lg-h5 text-left" style="line-height: 2;" v-if="wrong">
            <v-row >
                <v-col>
                    Nope, that's not it.
                </v-col>
            </v-row>
        </v-card-text>
        </transition>
        <v-card-text class="white--text text-lg-h5 text-left" style="line-height: 2;">
            <v-row >
                <v-col>
                    Aw man that's kinda tricky huh? He changes his mind a lot. If only there were some sort of list that you could check of all his favorite movies. Oh well.
                </v-col>
            </v-row>
        </v-card-text>
        <v-card-actions class="justify-center pb-5">
        </v-card-actions>
        </v-card>
</template>

<script>

export default {
    name: 'Step2',
    components: {
        
    },
    data() {
		return {
            username: localStorage.getItem("Username"),
            movie: "",
            wrong: false,
		}
	},
    methods: {
        checkMovie() {
            if(this.movie.toUpperCase() == "AMADEUS"){
                this.step2();
            }else{
                this.wrong=true;
            }
        },
        step2() {
            this.$parent.step2();
        }
    }
};

</script>

<style>

</style>
