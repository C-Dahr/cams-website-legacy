<template>
    <v-card dark max-width="60%" color="rgb(0, 0, 0, 0.7)" class="elevation-10">
        <v-card-title class="white--text text-xl-h4">
            Home stretch!
        </v-card-title>
        <v-card-text class="white--text text-lg-h5 text-left" style="line-height: 2;" color="rgb(50, 50, 50, 1)">
            <v-row>
                <v-col>
                    You did such a good job! I'm so proud of you {{ username }}! I'm gunna miss you when you're gone :( Anyways to end things off we've got a bit of trivia about last year's Taskmaster, fun!
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-col class="text-center" cols="12">
                    <form @submit="submit" @submit.prevent="submit">
                        <v-row justify="center">
                            <v-col class="text-center" cols="5">
                                <v-text-field
                                    v-model="q1"
                                    :error-messages="q1Errors"
                                    label="How many points did the LAST place player get?"
                                    @input="$v.q1.$reset()"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="1"></v-col>
                            <v-col class="text-center" cols="5">
                                <v-text-field
                                    v-model="q2"
                                    :error-messages="q2Errors"
                                    label="What did Jeremy name his portrait?"
                                    @input="$v.q2.$reset()"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row justify="center">
                            <v-col class="text-center" cols="5">
                                <v-text-field
                                    v-model="q3"
                                    :error-messages="q3Errors"
                                    label="What brand of oven pizza does Caleb like?"
                                    @input="$v.q3.$reset()"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="1"></v-col>
                            <v-col class="text-center" cols="5">
                                <v-text-field
                                    v-model="q4"
                                    :error-messages="q4Errors"
                                    label="What year was Maud Lewis born?"
                                    @input="$v.q4.$reset()"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row justify="center">
                            <v-col class="text-center" cols="5">
                                <v-text-field
                                    v-model="q5"
                                    :error-messages="q5Errors"
                                    label="What was Tristen's breakout role?"
                                    @input="$v.q5.$reset()"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-btn
                            class="mr-4"
                            @click="submit"
                            type="submit"
                            x-large
                            light 
                        >
                            Submit
                        </v-btn>
                    </form>
                </v-col>
            </v-row>
        </v-card-text>
        <transition name="fade">
        <v-card-text class="white--text text-lg-h5 text-left" style="line-height: 2;" v-if="wrong">
            <v-row >
                <v-col>
                    Not much use guessing, it could be anything. There's gotta be a way to figure out the code.
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
import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'

export default {
    name: 'Step6',
    mixins: [validationMixin],
    validations: {
      q1: { required },
      q2: { required },
      q3: { required },
      q4: { required },
      q5: { required },
    },
    components: {  
    },
    computed: {
        q1Errors () {
             const errors = []
             if (!this.$v.q1.$dirty) return errors
             !this.$v.q1.required && errors.push('You forgot this one.')
             if( this.q1 !== "35" ){
                errors.push('Nope.')
             }
        return errors
      },
      q2Errors () {
             const errors = []
             if (!this.$v.q2.$dirty) return errors
             !this.$v.q2.required && errors.push('You forgot this one.')
             if( this.q2.toUpperCase() !== "THE MAESTRO" ){
                errors.push('Nope.')
             }
        return errors
      },
      q3Errors () {
             const errors = []
             if (!this.$v.q3.$dirty) return errors
             !this.$v.q3.required && errors.push('You forgot this one.')
             if( this.q3.toUpperCase() !== "GIUSEPPE" ){
                errors.push('Nope.')
             }
        return errors
      },
      q4Errors () {
             const errors = []
             if (!this.$v.q4.$dirty) return errors
             !this.$v.q4.required && errors.push('You forgot this one.')
             if( this.q4.toUpperCase() !== "1903" ){
                errors.push('Nope.')
             }
        return errors
      },
      q5Errors () {
             const errors = []
             if (!this.$v.q5.$dirty) return errors
             !this.$v.q5.required && errors.push('You forgot this one.')
             if( this.q5.toUpperCase() !== "DICK" ){
                errors.push('Nope.')
             }
        return errors
      }
    },
    data() {
		return {
            username: localStorage.getItem("Username"),
            code: "",
            wrong: false,
            q1: '',
            q2: '',
            q3: '',
            q4: '',
            q5: '',
		}
	},
    methods: {
        step6() {
            this.$parent.step6();
        },
        submit () {
            this.$v.$touch();
            if (
                this.q1Errors.length === 0 &&
                this.q2Errors.length === 0 &&
                this.q3Errors.length === 0 &&
                this.q4Errors.length === 0 &&
                this.q5Errors.length === 0
            ){
                this.step6();
            }
        },
    }
};

</script>

<style>

</style>
