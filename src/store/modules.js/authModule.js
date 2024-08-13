const login = async (params) =>
	setTimeout(() => {
		console.log(params, "login");
		return params.email;
	}, 1000);

const register = async (params) =>
	setTimeout(() => {
		console.log(params, "register");
		return params;
	}, 1000);

export const authModule = {
	namespaced: true,
	state: () => ({
		isLogged: false,
		view: "login",
		user: "",
		authError: "",
	}),
	mutations: {
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
	},
	actions: {
		changeViewRegister({ commit }) {
			commit("changeViewRegister");
		},
		changeViewLogin({ commit }) {
			commit("changeViewLogin");
		},
		changeViewForgotPassword({ commit }) {
			commit("changeViewForgotPassword");
		},
		async Register({ dispatch }, user) {
			await register(user);
			await dispatch("LogIn", user);
		},
		async LogIn({ commit }, user) {
			await login(user);
			sessionStorage.setItem("token", user.email);
			await commit("login", user.email);
		},
		async LogOut({ commit }) {
			sessionStorage.removeItem("token");
			commit("logout");
		},
	},
};
