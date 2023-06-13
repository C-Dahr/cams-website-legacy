<template>
	<v-container fill-height fluid>
		<v-row>
			<v-col>
				<v-row class="mb-15" align="center" justify="center">
					<v-col cols="2">
                        <v-avatar class="elevation-20" size="512">
							<v-img src="../assets/callie_1.png" alt="Cameron"></v-img>
						</v-avatar>
					</v-col>
					<v-col  cols="4" align="center">
						<h1 class="white--text text-xl-h1">Contact Us</h1>
						<v-divider class="mt-5 mb-5" color="white" width="20%"></v-divider>
						<h3 class="white--text text-xl-h4">We're here to help</h3>
					</v-col>
				</v-row>
				<v-row class="mt-15" justify="center">
					<v-card dark max-width="50%" color="rgb(0, 0, 0, 0.7)" class="elevation-10">
						<v-card-title class="white--text text-xl-h4">
							Contact Info
						</v-card-title>
						<v-card-text class="white--text text-lg-h5 text-left" style="line-height: 2;">
                            <v-row>
                                <v-col>
                                    For any business inqueries, event planning, Dungeons and Dragons scheduling or to report technical errors, please reach out to us via email at:
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col class="text-center text-lg-h4">
                                    <v-icon>mdi-email</v-icon>
                                    <a href="mailto:cam.the.taskmaster@gmail.com">cam.the.taskmaster@gmail.com</a>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col>
                                    and we will be sure to get back to you as soon as possible.
                                </v-col>
                            </v-row>
						</v-card-text>
					</v-card>
				</v-row>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>

export default {
	name: 'Contact',
	components: {
	},
	data() {
		return {
		}
	},
}

</script>

<style>

</style>