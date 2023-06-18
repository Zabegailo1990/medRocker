<template>
	<div class="album">
		<div class="album__inner">
			<Dropdown>
				<template #title>
					<h2 class="album__title">
						{{ title || 'undefined' }}
					</h2>
				</template>
				<Gallery class="album__gallery" :galleryId="albumId" />
			</Dropdown>
		</div>
	</div>
</template>

<script>
	import Dropdown from '../Dropdown/index.vue';
	import Gallery from '../Gallery/index.vue';

	export default {
		name: 'Album',
		components: {
			Dropdown,
			Gallery,
		},

		props: {
			title: String,
			albumId: Number,
		},
	};
</script>

<style lang="scss" scoped>
	@import './styles/album.scss';
</style>
