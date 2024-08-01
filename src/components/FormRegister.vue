<script>
import userIcon from "../assets/imgs/user.png";
import lockIcon from "../assets/imgs/lock.png";

export default {
	data() {
		return {
			registerUser: "",
			registerPass: "",
			userIcon,
			lockIcon,
			errorMessage: false,
		};
	},
	methods: {
		async handleRegister() {
			const postData = {
				email: this.registerUser,
				password: this.registerPass,
			};
			try {
				await this.$store.dispatch("Register", postData);
				this.$router.push("/");
				this.errorMessage = false;
			} catch (error) {
				console.log(error);
				this.errorMessage = true;
			}
		},
	},
};
</script>

<template>
	<form
		action="POST"
		class="flex flex-col justify-center items-start gap-6"
		@submit.prevent="handleRegister"
	>
		<h1 class="uppercase mb-4">Register</h1>
		<fieldset class="flex justify-center items-center">
			<label for="register-email" class="hidden">Email</label>
			<img :src="userIcon" alt="user" width="24px" height="24px" />
			<input
				type="text"
				name="register-email"
				v-model="registerUser"
				placeholder="Type An Email"
				class="focus:outline-none rounded-xl p-4 py-2"
				required
				pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
			/>
		</fieldset>
		<div class="h-[2px] w-[250px] bg-gray-borders" />
		<fieldset class="flex justify-center items-center">
			<label for="register-password" class="hidden">Password</label>
			<img :src="lockIcon" alt="lock" width="24px" height="24px" />
			<input
				type="password"
				name="register-password"
				v-model="registerPass"
				placeholder="Type a Password"
				class="focus:outline-none rounded-xl p-4 py-2"
				required
				minlength="8"
				maxlength="16"
			/>
		</fieldset>
		<div class="h-[2px] w-[250px] bg-gray-borders" />
		<button
			type="submit"
			class="p-4 bg-blue-primary text-white-primary rounded-xl py-2 uppercase mt-4"
		>
			submit
		</button>
		<p class="p-4 py-2 text-pink-secondary" v-show="errorMessage">
			there was an error, please retry
		</p>
	</form>
</template>
