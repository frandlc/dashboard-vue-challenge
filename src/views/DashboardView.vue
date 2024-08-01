<script>
import bell from "../assets/imgs/bell.png";
import help from "../assets/imgs/help.png";
import search from "../assets/imgs/Search.png";
import Chat from "../components/Chat.vue";
import HealthMonitoring from "../components/HealthMonitoring.vue";
import PetProfile from "../components/PetProfile.vue";
import SidebarView from "../components/Sidebar.vue";
import VaccSchedule from "../components/VaccSchedule.vue";

export default {
	data() {
		return {
			bell,
			help,
			search,
		};
	},
	components: {
		SidebarView,
		Chat,
		VaccSchedule,
		HealthMonitoring,
		PetProfile,
	},
};
</script>
<template>
	<div class="w-full">
		<SidebarView />
		<main class="ml-[310px]">
			<header
				class="relative w-full flex justify-between items-center p-4 border-b z-10 bg-white"
			>
				<div
					class="w-1/2 p-4 border border-gray-borders rounded-xl flex justify-start items-center py-2"
				>
					<img
						:src="search"
						alt="search"
						width="24px"
						height="24px"
					/>
					<input
						class="focus:outline-none"
						type="text"
						placeholder="Search"
					/>
				</div>
				<div class="flex justify-center items-center gap-4">
					<img :src="help" alt="help" width="24px" height="24px" />
					<img
						:src="bell"
						alt="notifications"
						width="24px"
						height="24px"
					/>
					<button
						class="p-4 bg-blue-primary text-white-primary rounded-xl py-2"
					>
						Add widget
					</button>
				</div>
			</header>
			<div
				class="bg-gray-bg h-screen mt-[-75px] z-0 grid grid-cols-10 grid-rows-10 gap-4 p-4"
			>
				<div
					class="bg-white-primary col-start-1 col-span-6 mt-[75px] row-start-1 row-span-4 rounded-2xl"
				>
					<PetProfile />
				</div>
				<div
					class="bg-white-primary col-start-1 col-span-6 row-start-5 row-span-6 rounded-2xl"
				>
					<HealthMonitoring />
				</div>
				<div
					class="bg-white-primary mt-[75px] col-start-7 col-span-4 row-start-1 row-span-6 rounded-2xl"
				>
					<VaccSchedule />
				</div>
				<div
					class="bg-white-primary col-start-7 col-span-4 row-start-7 row-span-4 rounded-2xl"
				>
					<Chat />
				</div>
			</div>
		</main>
	</div>
</template>
