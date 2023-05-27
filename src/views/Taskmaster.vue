<template>
	<v-container fill-height fluid>
		<v-row>
			<v-col>
				<v-row class="mb-15" align="center" justify="center">
					<v-col cols="2" class="headshot">
						<v-img src="../assets/Taskmaster_logo.jpg" alt="Cameron"></v-img>
					</v-col>
					<v-col align="center" cols="4">
						<h1 class="white--text text-xl-h1">Taskmaster</h1>
						<v-divider class="mt-5 mb-5" color="white" width="20%"></v-divider>
						<h3 class="white--text text-xl-h4">Welcome Contestants</h3>
					</v-col>
				</v-row>
				<v-row class="mt-15" align="center" justify="center">
					<transition name="fade">
						<Step0 v-if="step==0"/>
					</transition>
					<transition name="fade">
						<Step1 v-if="step==1"/>
					</transition>
					<transition name="fade">
						<Step2 v-if="step==2"/>
					</transition>
				</v-row>
				<v-row class="mt-15" align="center" justify="center">
					<v-btn
					x-large
					dark 
					@click="reset"
					>
						Reset
					</v-btn>
				</v-row>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import Step0 from '../components/taskmaster/Step0.vue'
import Step1 from '../components/taskmaster/Step1.vue'
import Step2 from '../components/taskmaster/Step2.vue'

export default {
	name: 'Home',
	components: {
		Step0,
		Step1,
		Step2,
	},
	created() {
		var storedStep = localStorage.getItem('TaskmasterStep')
		console.log(storedStep)
		if (storedStep != null){
			this.step == storedStep
		}else{
			this.step = 0
		}
		console.log(this.step)
	},
	data() {
		return {
			step: localStorage.getItem('TaskmasterStep')
		}
	},
	methods: {
		ready() {
			this.step=1
			localStorage.setItem("TaskmasterStep", this.step)
		},
		step1(username) {
			localStorage.setItem("Username", username)
			this.step=2
			localStorage.setItem("TaskmasterStep", this.step)
			console.log(localStorage.getItem("Username"))
		},
		step2() {
			this.step=3
			localStorage.setItem("TaskmasterStep", this.step)
			console.log(localStorage.getItem("Username"))
		},
		reset() {
			localStorage.setItem("Username", "")
			this.step=0
			localStorage.setItem("TaskmasterStep", this.step)
		}
	}
}

</script>

<style>

#app{
	background-image: url('../assets/homepage-tile.png') !important;
}

.fade-enter-active {
  transition: opacity 2s;
}

.fade-leave-active {
  transition: opacity 0s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>