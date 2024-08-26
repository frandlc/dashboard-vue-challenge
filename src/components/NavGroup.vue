<script>
export default {
	computed: {
		chatDataImgs() {
			const array = this.$store.state.dataModule.chatData;
			const imgs = array.map((item) => item.imgUrl).slice(0, 3);
			return imgs;
		},
	},
	props: ["item"],
};
</script>

<template>
	<div class="w-full px-2 mb-4 text-font-primary flex flex-col">
		<h4 class="mb-4 pl-2 uppercase">{{ item.title }}</h4>
		<div
			v-for="item in item.links"
			:key="item.slug"
			class="flex gap-2 p-2 hover:bg-blue-primary rounded-lg hover:text-white-primary relative"
		>
			<img
				:src="item.logo"
				:alt="item.subItem"
				width="24px"
				height="24px"
			/><router-link class="capitalize" :to="item.slug">{{
				item.subItem
			}}</router-link>
			<p
				v-if="item.slug === `/appointments`"
				class="text-white rounded bg-pink-secondary text-center text-sm w-5 absolute right-0 top-[10px] mr-2"
			>
				2
			</p>
			<div
				v-if="item.slug === `/chat`"
				class="flex absolute right-0 top-[7px] pr-2"
			>
				<img
					v-for="img in chatDataImgs"
					:src="img"
					alt="chat avatar"
					width="26px"
					height="26px"
					class="-ml-3"
				/>
			</div>
		</div>
	</div>
</template>
