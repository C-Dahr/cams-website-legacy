<template>
	<v-container fill-height fluid>
		<v-row align="center" justify="center">
			<transition name="fade">
				<v-col align="center" v-if="show">
					<h1 class="white--text text-xl-h1">Cameron Dahr</h1>
					<v-divider class="mt-5 mb-5" color="white" width="20%"></v-divider>
					<h3 class="white--text text-xl-h4">Full Stack Software Developer</h3>
				</v-col>
			</transition>
		</v-row>
	</v-container>
</template>

<script>

export default {
	name: 'Home',
	components: {
	},
	data() {
		return {
			show: false
		}
	},
	mounted() {
		this.show = true; // might need this.$nextTick
	}
}

</script>

<style>

.fade-enter-active, .fade-leave-active {
  transition: opacity 6s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>