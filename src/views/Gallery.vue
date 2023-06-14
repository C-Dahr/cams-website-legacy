<template>
	<v-container fill-height fluid>
        <v-row class="mt-5 mb-15">
            <v-col id="left-col" cols="5" justify="center" align="center" class="mt-0">
                <v-row>
                    <v-col>
                        <h1 class="white--text text-xl-h1">Gallery</h1>
                        <v-divider class="mt-5 mb-5" color="white" width="10%"></v-divider>
                        <h3 class="white--text text-xl-h4">Taskmaster 2022</h3>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-card dark max-width="70%" color="rgb(0, 0, 0, 0)" class="elevation-10">
                            <v-carousel
                                height="auto"
                                cycle
                                show-arrows-on-hover
                            >
                                <v-carousel-item
                                    v-for="(item,i) in carouselItems"
                                    :key="i"
                                >
                                <expandable-image :close-on-background-click=true :src="item.src"></expandable-image>
                                </v-carousel-item>
                            </v-carousel>
                        </v-card>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <VueAudio :file="require('../assets/gallery/song.mp3')"></VueAudio>
                    </v-col>
                </v-row>
            </v-col>
            <v-col id="right-col" cols="6" justify="center" align="center">
                <v-row>
                    <v-col
                        v-for="(item,i) in items"
                        :key="i"
                        class="d-flex child-flex"
                        cols="4"
                    >
                    <v-card>
                        <v-img
                            :src="item.src"
                            aspect-ratio="1"
                            cover
                            class="white--text align-end"
                        >
                            <template v-slot:placeholder>
                            <v-row
                                class="fill-height ma-0"
                                align="center"
                                justify="center"
                            >
                                <v-progress-circular
                                indeterminate
                                color="grey-lighten-5"
                                ></v-progress-circular>
                            </v-row>
                            </template>
                            <v-card color="rgb(0, 0, 0, 0.6)" class="white--text align-end">
                                <v-card-text class="white--text" v-text="item.caption"></v-card-text>
                            </v-card>
                        </v-img>
                    </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
	</v-container>
</template>

<script>
import VueAudio from 'vue-audio';

export default {
	name: 'Gallery',
	components: {
        VueAudio
	},
	data() {
		return {
            carouselItems: [
                { src: require('../assets/gallery/portraits.jpg') },
                { src: require('../assets/gallery/group.jpg') },
                { src: require('../assets/gallery/fire.png') },
                { src: require('../assets/gallery/remi.png') },
                { src: require('../assets/gallery/snowman.png') },
                { src: require('../assets/gallery/trex.png') },
            ],
            items: [
                {
                    src: require('../assets/gallery/rice.png'),
                    caption: "Zach pathetically counting rice."
                },
                {
                    src: require('../assets/gallery/gump.png'),
                    caption: "Tom Hanks in Forrest Gump (1994)"
                },
                {
                    src: require('../assets/gallery/bikini.png'),
                    caption: "Jeremy gassing himself with a can of silly string."
                },
                {
                    src: require('../assets/gallery/dick.png'),
                    caption: "Tristen's acting debut."
                },
                {
                    src: require('../assets/gallery/art.png'),
                    caption: "Maud Lewis was born March 7, 1903"
                },
                {
                    src: require('../assets/gallery/scores.jpg'),
                    caption: "The final scores from Taskmaster Series 1"
                },
            ]
		}
	},
}

</script>

<style>

</style>