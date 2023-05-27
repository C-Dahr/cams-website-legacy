<template>
	<v-container fill-height fluid>
		<v-row>
			<v-col>
				<v-row class="mb-15" align="center" justify="center">
					<v-col cols="2" class="headshot">
						<v-img src="../assets/Taskmaster_logo.jpg" alt="Cameron"></v-img>
					</v-col>
					<v-col  cols="4" align="center">
						<h1 class="white--text text-xl-h1">Taskmaster</h1>
						<v-divider class="mt-5 mb-5" color="white" width="20%"></v-divider>
						<h3 class="white--text text-xl-h4">Welcome Contestants</h3>
					</v-col>
				</v-row>
				<v-row class="mt-15" justify="center">
					<transition name="fade">
						<Step0 v-if="step==0"/>
					</transition>
				</v-row>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import Step0 from '../components/taskmaster/Step0.vue'

export default {
	name: 'Home',
	components: {
		Step0
	},
	data() {
		return {
			step: 0
		}
	},
	methods: {
		ready() {
			this.step=1
		},
		step1() {
			
		}
	}
}

</script>

<style>

#app{
	background-image: url('../assets/homepage-tile.png') !important;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>