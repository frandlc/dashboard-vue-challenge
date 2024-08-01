<script>
import userIcon from "../assets/imgs/user.png";

function passwordRequest(postData) {
	setTimeout(() => {
		console.log(postData);
	}, 1000);
}
export default {
	data() {
		return {
			user: "",
			userIcon,
			errorMessage: false,
			responseMessage: false,
		};
	},
	methods: {
		async handlePasswordRequest() {
			const postData = JSON.stringify({
				email: this.user,
			});
			try {
				await passwordRequest(postData);
				this.responseMessage = true;
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
		@submit.prevent="handlePasswordRequest"
	>
		<h1 class="uppercase mb-4">Recover your password</h1>
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
		<button
			type="submit"
			class="p-4 bg-blue-primary text-white-primary rounded-xl py-2 uppercase mt-4 cursor-pointer"
			:class="responseMessage ? `bg-gray-bg text-black` : ``"
			:disabled="responseMessage"
		>
			submit
		</button>
		<p class="p-4 py-2 text-pink-secondary" v-show="errorMessage">
			there was an error, please retry
		</p>
		<p class="p-4 py-2 text-green-800" v-show="responseMessage">
			Request confirmed
		</p>
	</form>
</template>
