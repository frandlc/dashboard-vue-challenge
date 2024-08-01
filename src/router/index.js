import Vue from "vue";
import VueRouter from "vue-router";
import DashboardView from "../views/DashboardView.vue";
import LoginView from "../views/LoginView.vue";

Vue.use(VueRouter);

const router = new VueRouter({
	mode: "history",
	routes: [
		{
			path: "/",
			name: "dashboard",
			component: DashboardView,
			meta: {
				requiresAuth: true,
			},
		},
		{
			path: "/login",
			name: "login",
			component: LoginView,
		},
	],
});

router.beforeEach((to, from, next) => {
	if (to.meta.requiresAuth) {
		const token = sessionStorage.getItem("token");
		if (token) {
			next();
		} else {
			next("/login");
		}
	} else if (to.name === "login") {
		const token = sessionStorage.getItem("token");
		if (token) {
			next("/");
		} else {
			next();
		}
	} else {
		next();
	}
});

export default router;
