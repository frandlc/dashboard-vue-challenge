<script>
export default {
	data() {
		return {};
	},
	computed: {
		chatData() {
			return this.$store.state.chatData;
		},
	},
};
</script>

<template>
	<section
		class="w-full h-full flex flex-col justify-start items-center p-4 py-6 rounded-2xl gap-3"
	>
		<div class="w-full flex justify-between items-center mb-4">
			<h2 class="uppercase">Chat</h2>
		</div>
		<div
			class="w-full flex justify-start items-start pl-4"
			v-for="(item, index) in chatData"
			:key="index + item.avatar"
		>
			<div class="w-full flex justify-center items-center">
				<div class="w-full flex justify-start items-start">
					<img
						v-if="item.itWasRead"
						src="../assets/imgs/redIcon.png"
						alt="red circle"
						width="14px"
						height="14px"
						class="pt-[5px]"
					/>
					<img
						v-if="!item.itWasRead"
						src="../assets/imgs/greenIcon.png"
						alt="red green"
						width="14px"
						height="14px"
						class="pt-[5px]"
					/>
					<div class="p-4 pt-0 h-12 overflow-hidden">
						<h4>{{ item.avatar }}</h4>
						<p class="text-sm">{{ item.messages }}</p>
					</div>
				</div>
			</div>
			<div>
				<p class="text-right">{{ item.date }}</p>
			</div>
		</div>
	</section>
</template>
