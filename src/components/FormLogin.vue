<script>
import userIcon from "../assets/imgs/user.png";
import lockIcon from "../assets/imgs/lock.png";

export default {
	data() {
		return {
			user: "",
			pass: "",
			userIcon,
			lockIcon,
			showError: false,
		};
	},
	methods: {
		async handleLogin() {
			const loginData = {
				email: this.user,
				password: this.pass,
			};
			try {
				await this.$store.dispatch("LogIn", loginData);
				this.$router.push("/");
				this.showError = false;
			} catch (error) {
				this.showError = true;
			}
		},
		changeView() {
			this.$store.dispatch(`changeViewForgotPassword`);
		},
	},
};
</script>

<template>
	<form
		action="POST"
		class="flex flex-col justify-center items-start gap-6"
		@submit.prevent="handleLogin"
	>
		<h1 class="uppercase mb-4">Login</h1>
		<fieldset class="flex justify-center items-center">
			<label for="email" class="hidden">Email</label>
			<img :src="userIcon" alt="user" width="24px" height="24px" />
			<input
				type="text"
				name="email"
				v-model="user"
				placeholder="Type Your Email"
				class="focus:outline-none rounded-xl p-4 py-2"
				required
				pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
			/>
		</fieldset>
		<div class="h-[2px] w-[250px] bg-gray-borders" />
		<fieldset class="flex justify-center items-center">
			<label for="password" class="hidden">Password</label>
			<img :src="lockIcon" alt="lock" width="24px" height="24px" />
			<input
				type="password"
				name="password"
				v-model="pass"
				placeholder="Type Your Password"
				class="focus:outline-none rounded-xl p-4 py-2"
				required
				minlength="8"
				maxlength="16"
			/>
		</fieldset>
		<div class="h-[2px] w-[250px] bg-gray-borders" />
		<button
			type="button"
			class="capitalize text-xs m-0 cursor-pointer w-full text-right"
			@click.prevent="changeView"
		>
			Forgot your password?
		</button>
		<button
			type="submit"
			class="p-4 bg-blue-primary text-white-primary rounded-xl py-2 uppercase mt-4 cursor-pointer"
		>
			submit
		</button>
		<p class="p-4 py-2 text-pink-secondary" v-show="showError">
			there was an error, please retry
		</p>
	</form>
</template>
