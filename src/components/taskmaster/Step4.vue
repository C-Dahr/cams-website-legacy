<template>
    <v-card dark max-width="60%" color="rgb(0, 0, 0, 0.7)">
        <v-card-title class="white--text text-xl-h4">
            Woohoo!
        </v-card-title>
        <v-card-text class="white--text text-lg-h5 text-left" style="line-height: 2;" color="rgb(50, 50, 50, 1)">
            <v-row>
                <v-col>
                    You got it {{ username }}! That one was tricky, I hope my relaxing painting helped. Next up we've got this weird bunch of symbols:
                </v-col>
            </v-row>
        </v-card-text>
        <v-img class="ml-15 mr-10" max-width="90%" src="../../assets/dredge.png" alt="dredge"></v-img>
        <v-row justify="center">
            <v-col cols="8">
                <v-text-field v-model="game" :error="wrong" label="Answer" v-on:keyup.enter="checkGame"></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-btn
                    x-large
                    light 
                    @click="checkGame"
                >
                    Submit
                </v-btn>
            </v-col>
        </v-row>
        <transition name="fade">
        <v-card-text class="white--text text-lg-h5 text-left" style="line-height: 2;" v-if="wrong">
            <v-row >
                <v-col>
                    Nope, that's not right.
                </v-col>
            </v-row>
        </v-card-text>
        </transition>
        <v-card-text class="white--text text-lg-h5 text-left" style="line-height: 2;">
            <v-row >
                <v-col>
                    Must be some kind of secret code that you've got to crack, like Benedict Cumberbatch's character in Imitation Game. Have you seen Imitation game? It's a movie in which a gay man during the world war gets a job trying to crack the enigma machine, a complex code machine being used by the Germans to communicate with one another.
                </v-col>
            </v-row>
        </v-card-text>
        <v-card-actions class="justify-center pb-5">
        </v-card-actions>
        </v-card>
</template>

<script>

export default {
    name: 'Step4',
    components: {
        
    },
    data() {
		return {
            username: localStorage.getItem("Username"),
            game: "",
            wrong: false,
		}
	},
    methods: {
        checkGame() {
            if(this.game.toUpperCase() === "DREDGE"){
                this.step4();
            }else{
                this.wrong=true;
            }
        },
        step4() {
            this.$parent.step4();
        }
    }
};

</script>

<style>

</style>
