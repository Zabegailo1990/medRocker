<template>
	<div class="gallery">
		<Loading class="gallery__loading" v-if="isLoading" />
		<div class="gallery__inner" v-else>
			<Photo 
				v-for="photo in photos" 
				:key="photo.id" 
				:title="photo.title"
				:photo="photo" 
			/>
		</div>
	</div>
</template>

<script>
	import Photo from '../Photo/index.vue';
	import Loading from '../Loading/index.vue';
	import { instance } from '@/api';

	export default {
		name: 'Gallery',
		components: {
			Photo,
			Loading,
		},

		props: {
			galleryId: Number,
	},
		
		data: () => ({
			photos: [],
			isLoading: false,
		}),

		mounted() {
			this.fetchPhotos();
		},

		methods: {
			fetchPhotos() {
				this.isLoading = true;
				instance
					.get(`photos?albumId=${this.galleryId}`)
					.then((response) => {
						this.photos = response?.data || [];
					})
					.catch(function (error) {
						console.log(error);
					})
					.finally(() => {
						this.isLoading = false;
					});
			},
		},
	};
</script>

<style lang="scss" scoped>
	@import './styles/gallery.scss';
</style>
