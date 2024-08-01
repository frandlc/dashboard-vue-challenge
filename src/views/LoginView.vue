<script>
import FormLogin from "../components/FormLogin.vue";
import FormRegister from "../components/FormRegister.vue";
import ForgotPassword from "../components/ForgotPassword.vue";

export default {
	data() {
		return {};
	},
	methods: {
		changeView(viewString) {
			this.$store.dispatch(viewString);
		},
	},
	computed: {
		view() {
			return this.$store.state.view;
		},
	},
	components: {
		FormLogin,
		FormRegister,
		ForgotPassword,
	},
};
</script>

<template>
	<main
		class="flex justify-center items-center w-full h-fit md:h-screen bg-gray-bg"
	>
		<div
			class="bg-white-primary p-8 flex flex-col justify-center items-center gap-5 rounded-2xl border border-gray-borders"
			v-show="view === `login`"
		>
			<FormLogin />
			<button
				type="button"
				class="capitalize text-sm text-left mt-6 font-normal cursor-pointer"
				@click.prevent="changeView(`changeViewRegister`)"
			>
				Don't have an account?
			</button>
		</div>
		<div
			class="bg-white-primary p-8 flex flex-col justify-center items-center gap-5 rounded-2xl border border-gray-borders"
			v-show="view === `register`"
		>
			<FormRegister />
			<button
				type="button"
				class="capitalize text-sm text-left mt-6 font-normal cursor-pointer"
				@click.prevent="changeView(`changeViewLogin`)"
			>
				have an account?
			</button>
		</div>
		<div
			class="bg-white-primary p-8 flex flex-col justify-center items-center gap-5 rounded-2xl border border-gray-borders"
			v-show="view === `recover-password`"
		>
			<ForgotPassword />
			<button
				type="button"
				class="capitalize text-sm text-left mt-6 font-normal cursor-pointer"
				@click.prevent="changeView(`changeViewRegister`)"
			>
				Don't have an account?
			</button>
		</div>
	</main>
</template>
