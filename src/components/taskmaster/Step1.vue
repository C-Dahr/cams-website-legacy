<template>
    <v-card dark max-width="50%" color="rgb(0, 0, 0, 0.7)" class="elevation-10">
        <v-card-title class="white--text text-xl-h4">
            First things first
        </v-card-title>
        <v-card-text class="white--text text-lg-h5 text-left" style="line-height: 2;">
            I'd love to get to know you better. What's your name?
        </v-card-text>
        <v-row justify="center">
            <v-col cols="8">
                <v-text-field v-model="username" label="Name" v-on:keyup.enter="step1"></v-text-field>
            </v-col>
        </v-row>
        <v-card-actions class="justify-center pb-5">
            <v-btn
                x-large
                light 
                @click="step1"
            >
                Submit
            </v-btn>
        </v-card-actions>
        </v-card>
</template>

<script>

export default {
    name: 'Step1',
    components: {
    },
    data() {
		return {
            username: ''
		}
	},
    methods: {
        step1() {
            this.$parent.step1(this.username);
        }
    }
};

</script>

<style>

</style>
