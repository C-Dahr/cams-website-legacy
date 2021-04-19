<template>
	<transition name="fade">
		<v-container fill-height fluid v-if="show">
			<v-row>
				<v-col>
					<v-row class="mb-15" align="center" justify="center">
						<v-col cols="1">
							<v-avatar size="300">
								<img src="https://i.imgur.com/EchJRnK.png" alt="Cameron">
							</v-avatar>
						</v-col>
						<v-col  cols="4" align="center">
							<h1 class="white--text text-xl-h1">Cameron Dahr</h1>
							<v-divider class="mt-5 mb-5" color="white" width="20%"></v-divider>
							<h3 class="white--text text-xl-h4">Full Stack Software Developer</h3>
							<v-row cols="2" class="mt-8" align="center" justify="space-between" style="max-width: 30%">
								<v-tooltip bottom>
									<template v-slot:activator="{ on, attrs }">
										<v-btn icon target="_blank" href="https://github.com/C-Dahr" v-bind="attrs" v-on="on">
											<v-icon large color="white">fab fa-github-square</v-icon>
										</v-btn>
									</template>
									<span>Github</span>
								</v-tooltip>
								<v-tooltip bottom>
									<template v-slot:activator="{ on, attrs }">
										<v-btn icon target="_blank" href="https://www.linkedin.com/in/cameron-dahr-8a943a129/" v-bind="attrs" v-on="on">
									<v-icon large color="white">fab fa-linkedin</v-icon>
								</v-btn>
									</template>
									<span>LinkedIn</span>
								</v-tooltip>
								<v-tooltip bottom>
									<template v-slot:activator="{ on, attrs }">
										<v-btn icon target="_blank" href="https://www.facebook.com/cameron.dahr.1" v-bind="attrs" v-on="on">
											<v-icon large color="white">fab fa-facebook-square</v-icon>
										</v-btn>
									</template>
									<span>Facebook</span>
								</v-tooltip>
								<v-tooltip bottom>
									<template v-slot:activator="{ on, attrs }">
										<v-btn icon target="_blank" href="https://letterboxd.com/Cam_Dahr/" v-bind="attrs" v-on="on">
											<v-img src="https://i.imgur.com/GVXzUfZ.png" max-width="35"></v-img>
										</v-btn>
									</template>
									<span>Letterboxd</span>
								</v-tooltip>
							</v-row>
						</v-col>
					</v-row>
					<v-row class="mt-15" align="center" justify="center">
						<v-col cols="5" align="start">
							<p class="white--text text-xl-h4">
								About Me
							</p>
							<p class="white--text text-lg-h5" style="line-height: 2;">
								Hi, my name is Cameron, and I am a Full Stack Software Developer. I graduated from the University of New Brunswick in May of 2020 with a degree in Software Engineering. My hobbies include playing video games, collecting board games and dice, reading/writing, and playing Dungeons and Dragons. I also enjoy watching movies, and log movies I watch on Letterboxd (link to my profile above)!
							</p>
						</v-col>
					</v-row>
				</v-col>
			</v-row>
		</v-container>
	</transition>
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