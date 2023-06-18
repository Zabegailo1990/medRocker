<template>
	<div class="user">
		<Dropdown>
			<template #title>
				<h2 class="user__title">
					{{ fullname || 'undefined' }}
				</h2>
			</template>
			<Loading class="user__loading" v-if="isLoading" />
			<div class="user__inner" v-else>
				<Album
					v-for="album in albums"
					:key="album.id"
					:title="album.title"
					:albumId="album.id"
				/>
			</div>
		</Dropdown>
	</div>
</template>

<script>
	import Dropdown from '../Dropdown/index.vue';
	import Album from '../Album/index.vue';
	import Loading from '../Loading/index.vue';
	import { instance } from '../../api';

	export default {
		name: 'User',
		components: {
			Dropdown,
			Album,
			Loading,
		},

		props: {
			fullname: String,
			userId: Number,
		},

		data: () => ({
			albums: [],
			isLoading: false,
		}),

		mounted() {
			this.fetchAlbums();
		},

		methods: {
			fetchAlbums() {
				this.isLoading = true;
				instance
					.get(`/albums?userId=${this.userId}`)
					.then((response) => {
						this.albums = response?.data || [];
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
	@import './styles/user.scss';
</style>
