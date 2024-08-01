import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations";
import actions from "./actions";
import {
	chat,
	HealthMonitoring,
	navLinks,
	petProfile,
	schedule,
} from "../constants/constants";

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		isLogged: false,
		view: "login",
		healthData: HealthMonitoring,
		chatData: chat,
		menu: navLinks,
		appoitmentsData: schedule,
		profileData: petProfile,
		error: "",
		user: "",
	},
	mutations,
	actions,
});

export default store;
