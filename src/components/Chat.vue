<script>
export default {
	data() {
		return {};
	},
	computed: {
		chatData() {
			return this.$store.state.dataModule.chatData;
		},
	},
};
</script>

<template>
	<section
		class="w-full h-full flex flex-col justify-start items-center p-4 py-6 rounded-2xl gap-4"
	>
		<div class="w-full flex justify-between items-center">
			<h2 class="uppercase">Chat</h2>
		</div>
		<div class="w-full flex flex-col justify-start items-start gap-6">
			<div
				class="w-full flex justify-between items-start"
				v-for="(item, index) in chatData"
				:key="index + item.avatar"
			>
				<div class="w-[90%] flex justify-start items-center">
					<div class="w-full flex justify-start items-start">
						<div class="w-[48px] h-[48px] relative">
							<img
								:src="item.imgUrl"
								:alt="item.avatar"
								width="48px"
								height="48px"
							/>
							<img
								v-if="item.itWasRead"
								src="../assets/imgs/redIcon.png"
								alt="red circle"
								width="12px"
								height="12px"
								class="absolute top-0 right-0"
							/>
							<img
								v-if="!item.itWasRead"
								src="../assets/imgs/greenIcon.png"
								alt="red green"
								width="12px"
								height="12px"
								class="absolute top-0 right-0"
							/>
						</div>
						<div class="p-4 pt-0 pr-0 h-12 overflow-hidden w-full">
							<h4>{{ item.avatar }}</h4>
							<p class="text-sm truncate">{{ item.messages }}</p>
						</div>
					</div>
				</div>
				<div class="flex flex-col justify-center items-center">
					<p class="text-right">{{ item.date }}</p>
					<p
						v-if="index === 1"
						class="text-white rounded bg-pink-secondary text-center text-sm w-5"
					>
						2
					</p>
				</div>
			</div>
		</div>
	</section>
</template>
