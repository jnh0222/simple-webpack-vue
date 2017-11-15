<template>
	<div class="container">
		<head-menu></head-menu>
		<router-view></router-view>
		<foot-menu></foot-menu>
	</div>
</template>

<script>
import HeadMenu from './HeadMenu.vue';
import FootMenu from './FootMenu.vue';
export default {
  components: {HeadMenu, FootMenu},
}
</script>

<style scoped>
</style>
