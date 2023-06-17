<template>
	<v-container fill-height fluid>
		<v-row>
			<v-col>
				<v-row class="mt-5 mb-15" align="center" justify="center">
					<v-col cols="2">
						<v-sheet color="black" class="elevation-20" rounded="xl">
							<v-img src="../assets/taskbot.jpg" alt="Taskbot"></v-img>
						</v-sheet>
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
					<transition name="fade">
						<Step3 v-if="step==3"/>
					</transition>
					<transition name="fade">
						<Step4 v-if="step==4"/>
					</transition>
					<transition name="fade">
						<Step5 v-if="step==5"/>
					</transition>
					<transition name="fade">
						<Step6 v-if="step==6"/>
					</transition>
					<transition name="fade">
						<Step7 v-if="step==7"/>
					</transition>
				</v-row>
				<v-row class="mt-15 mb-10" align="center" justify="center">
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
import Step3 from '../components/taskmaster/Step3.vue'
import Step4 from '../components/taskmaster/Step4.vue'
import Step5 from '../components/taskmaster/Step5.vue'
import Step6 from '../components/taskmaster/Step6.vue'
import Step7 from '../components/taskmaster/Step7.vue'

export default {
	name: 'Home',
	components: {
		Step0,
		Step1,
		Step2,
		Step3,
		Step4,
		Step5,
		Step6,
		Step7,
	},
	created() {
		var storedStep = localStorage.getItem('TaskmasterStep')
		if (storedStep != null){
			this.step == storedStep
		}else{
			this.step = 0
		}
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
		},
		step2() {
			this.step=3
			localStorage.setItem("TaskmasterStep", this.step)
		},
		step3() {
			this.step=4
			localStorage.setItem("TaskmasterStep", this.step)
		},
		step4() {
			this.step=5
			localStorage.setItem("TaskmasterStep", this.step)
		},
		step5() {
			this.step=6
			localStorage.setItem("TaskmasterStep", this.step)
		},
		step6() {
			this.step=7
			localStorage.setItem("TaskmasterStep", this.step)
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