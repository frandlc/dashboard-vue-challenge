const mutations = {
	changeViewRegister(state) {
		state.view = "register";
	},
	changeViewLogin(state) {
		state.view = "login";
	},
	changeViewForgotPassword(state) {
		state.view = "recover-password";
	},
	login(state, user) {
		state.isLogged = true;
		state.user = user;
	},
	logout(state) {
		state.isLogged = false;
		state.user = "";
	},
};

export default mutations;
