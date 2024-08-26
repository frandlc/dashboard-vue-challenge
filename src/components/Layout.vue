<script>
import Sidebar from "./Sidebar.vue";

export default {
	components: {
		Sidebar,
	},
};
</script>

<template>
	<div class="relative w-full flex">
		<Sidebar />
		<main>
			<slot></slot>
		</main>
	</div>
</template>
