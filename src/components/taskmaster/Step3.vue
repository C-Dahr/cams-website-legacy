<template>
    <v-card dark max-width="50%" color="rgb(0, 0, 0, 0.7)">
        <v-card-title class="white--text text-xl-h4">
            All right!
        </v-card-title>
        <v-card-text class="white--text text-lg-h5 text-left" style="line-height: 2;">
            <v-row>
                <v-col>
                    Nice work {{ username }}! You're doing great so far. I'm sure they don't get much harder. Okay here's the next one.
                </v-col>
            </v-row>
            <v-row>
                <v-col>What animal am I thinking of?</v-col>
            </v-row>
        </v-card-text>
        <v-row justify="center">
            <v-col cols="8">
                <v-text-field v-model="movie" :error="wrong" label="Answer"></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-btn
                    x-large
                    light 
                    @click="checkAnimal"
                >
                    Submit
                </v-btn>
            </v-col>
        </v-row>
        <transition name="fade">
        <v-card-text class="white--text text-lg-h5 text-left" style="line-height: 2;" v-if="wrong">
            <v-row >
                <v-col>
                    No, that's not right. Are you sure you looked at the painting? Like REALLY stared at it?
                </v-col>
            </v-row>
        </v-card-text>
        </transition>
        <v-card-text class="white--text text-lg-h5 text-left" style="line-height: 2;">
            <v-row >
                <v-col>
                    What? What kind of puzzle is that? You're just supposed to guess what animal he's thinking of? That's kinda lame (don't tell him I said that). Well I guess you just start guessing animals now. I'm not allowed to help ... but I am allowed to give you emotional support! How about some nice art to help you relax?
                </v-col>
            </v-row>
        </v-card-text>
        <v-img src="../../assets/shark_picture.png" alt="shark"></v-img>
        <v-card-text class="white--text text-lg-h5 text-left" style="line-height: 2;">
            <v-row >
                <v-col>
                    Oh yeah, looking at that is helping me relax already
                </v-col>
            </v-row>
        </v-card-text>
        <v-card-actions class="justify-center pb-5">
        </v-card-actions>
        </v-card>
</template>

<script>

export default {
    name: 'Step3',
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
        checkAnimal() {
            if(this.movie.toUpperCase() === "SHARK"){
                this.step3();
            }else{
                this.wrong=true;
            }
        },
        step3() {
            this.$parent.step3();
        }
    }
};

</script>

<style>

</style>
