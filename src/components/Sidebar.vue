<script>
import NavGroup from "./NavGroup.vue";
import logo from "../assets/imgs/logo.png";
import menu from "../assets/imgs/menu.png";

export default {
	data() {
		return {
			logo,
			menu,
		};
	},
	methods: {
		logout() {
			this.$store.dispatch("LogOut");
			this.$router.push("/login");
		},
	},
	components: {
		NavGroup: NavGroup,
	},
	computed: {
		links() {
			return this.$store.state.menu;
		},
	},
};
</script>

<template>
	<nav
		class="w-[310px] h-screen px-6 py-4 flex flex-col justify-between items-center border-r fixed top-0 left-0"
	>
		<div class="w-full flex justify-start items-center gap-2 p-2 pl-4">
			<img :src="logo" alt="Pet care logo" width="24px" height="24px" />
			<span class="font-medium">PetCare.</span>
			<img
				:src="menu"
				alt="menu"
				width="24px"
				height="24px"
				class="self-end md:hidden"
			/>
		</div>
		<div
			class="w-full flex flex-col justify-center items-start gap-2 p-2"
			v-for="item in links"
			:key="item.title"
		>
			<div class="w-full">
				<NavGroup :item="item" />
				<div
					v-if="links[links.length - 1].title !== item.title"
					class="h-[2px] w-[250px] bg-gray-borders"
				/>
			</div>
		</div>

		<div class="w-full ml-4 p-4">
			<button
				class="flex font-medium text-pink-secondary gap-2 capitalize cursor-pointer"
				@click.prevent="logout"
			>
				<img
					src="../assets/imgs/logout.png"
					alt="logout button"
					width="24px"
					height="24px"
				/>Log out
			</button>
		</div>
	</nav>
</template>
