<template>
    <v-card dark max-width="60%" color="rgb(0, 0, 0, 0.7)" class="elevation-10">
        <v-card-title class="white--text text-xl-h4">
            Almost there!
        </v-card-title>
        <v-card-text class="white--text text-lg-h5 text-left" style="line-height: 2;" color="rgb(50, 50, 50, 1)">
            <v-row>
                <v-col>
                    Only a couple more to go! Let's see what's up next.
                </v-col>
            </v-row>
            <v-row>
                <v-col class="text-center">ERROR 404: PUZZLE NOT FOUND</v-col>
            </v-row>
            <v-row>
                <v-col class="text-center"><img src="badurl.PnG"/></v-col>
            </v-row>
        </v-card-text>
        <v-row justify="center">
            <v-col cols="8">
                <v-text-field v-model="code" :error="wrong" label="Answer" v-on:keyup.enter="checkCode"></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-btn
                    x-large
                    light 
                    @click="checkCode"
                >
                    Submit
                </v-btn>
            </v-col>
        </v-row>
        <transition name="fade">
        <v-card-text class="white--text text-lg-h5 text-left" style="line-height: 2;" v-if="wrong">
            <v-row >
                <v-col>
                    Not much use guessing, it could be anything. There's gotta be a way to figure out the code. Some really should <b>CONTACT</b> support.
                </v-col>
            </v-row>
        </v-card-text>
        </transition>
        <v-card-text class="white--text text-lg-h5 text-left" style="line-height: 2;">
            <v-row >
                <v-col>
                    Oh what the hell. Oops, sorry. This puzzle is completely broken. I don't really know what to do here now, I guess you're stuck waiting until someone <b>contacts</b> support.
                </v-col>
            </v-row>
        </v-card-text>
        <v-card-actions class="justify-center pb-5">
        </v-card-actions>
        </v-card>
</template>

<script>

export default {
    name: 'Step5',
    components: {
        
    },
    data() {
		return {
            username: localStorage.getItem("Username"),
            code: "",
            wrong: false,
		}
	},
    methods: {
        checkCode() {
            if(this.code.toUpperCase() === "1234ZACHSMELLS"){
                this.step5();
            }else{
                this.wrong=true;
            }
        },
        step5() {
            this.$parent.step5();
        }
    }
};

</script>

<style>

</style>
