<template>
    <v-card dark max-width="60%" color="rgb(0, 0, 0, 0.7)" class="elevation-10">
        <v-card-title class="white--text text-xl-h4">
            You did it!
        </v-card-title>
        <v-card-text class="white--text text-lg-h5 text-left" style="line-height: 2;" color="rgb(50, 50, 50, 1)">
            <v-row>
                <v-col>
                    The secret phrase is...
                </v-col>
            </v-row>
            <v-row>
                <v-col class="text-center text-xl-h1">RAZZMATAZ</v-col>
            </v-row>
        </v-card-text>
        <v-card-text class="white--text text-lg-h5 text-left" style="line-height: 2;">
            <v-row >
                <v-col>
                    Stop the clock! Thanks for playing :)
                </v-col>
            </v-row>
        </v-card-text>
        <v-card-actions class="justify-center pb-5">
        </v-card-actions>
        </v-card>
</template>

<script>

export default {
    name: 'Step7',
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
