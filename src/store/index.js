import Vue from "vue";
import Vuex from "vuex";
import { authModule } from "./modules.js/authModule";
import { dataModule } from "./modules.js/dataModule";

Vue.use(Vuex);

const store = new Vuex.Store({
	modules: {
		authModule: authModule,
		dataModule: dataModule,
	},
});

export default store;
