import {
	chat,
	HealthMonitoring,
	navLinks,
	petProfile,
	schedule,
} from "../../constants/index.ts";

export const dataModule = {
	state: () => ({
		healthData: HealthMonitoring,
		chatData: chat,
		menu: navLinks,
		appoitmentsData: schedule,
		profileData: petProfile,
	}),
};
