<template>
	<component
		class="button"
		:class="classesmod"
		:is="tag"
		:to="to"
		:href="href"
	>
		{{ changeTag }}
		<slot />
	</component>
</template>

<script>
	export default {
		name: 'Button',
		props: {
			href: String,
			to: String,
			round: Boolean,
			bg: String,
		},

		data: () => ({
			tag: 'button',
		}),

		computed: {
			changeTag() {
				if (this.to) {
					this.tag = 'router-link';
				} else if (this.href) {
					this.tag = 'a';
				} else {
					this.tag = 'button';
				}
			},

			classesmod() {
				return {
					'button--bg--blue': this.bg === 'blue',
					'button--bg--white': this.bg === 'white',
					'button--bg--transparent': this.bg === 'none',
					'button--round': this.round,
				};
			},
		},
	};
</script>

<style lang="scss" scoped>
	@import './styles/button.scss';
</style>
