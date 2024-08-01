<script setup lang="ts">
interface Props {
	item: {
		title: string;
		links: {
			logo: string;
			subItem: string;
			slug: string;
		}[];
	};
}

const props = defineProps<Props>();
</script>

<template>
	<div class="w-full px-2 mb-4 text-font-primary flex flex-col">
		<h4 class="mb-4 pl-2 uppercase">{{ props.item.title }}</h4>
		<div
			v-for="item in props.item.links"
			:key="item.slug"
			class="flex gap-2 p-2 hover:bg-blue-primary rounded-lg hover:text-white-primary"
		>
			<img
				:src="item.logo"
				:alt="item.subItem"
				width="24px"
				height="24px"
			/><router-link class="capitalize" :to="item.slug">{{
				item.subItem
			}}</router-link>
		</div>
	</div>
</template>
