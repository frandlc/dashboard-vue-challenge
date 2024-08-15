import dashboardIcon from "../assets/imgs/Dashboard.png";
import powIcon from "../assets/imgs/Pow.png";
import healthIcon from "../assets/imgs/HealthMonitoring.png";
import vaccineIcon from "../assets/imgs/Vaccine.png";
import chatIcon from "../assets/imgs/Chat.png";
import calendarIcon from "../assets/imgs/Calendar.png";
import settingsIcon from "../assets/imgs/Settings.png";
import documentationIcon from "../assets/imgs/Documentation.png";
import heartIcon from "../assets/imgs/heart.png";
import pulseIcon from "../assets/imgs/Pulse.png";
import temperatureIcon from "../assets/imgs/temperature.png";
import caloriesIcon from "../assets/imgs/calories.png";

type NavLinks = Array<{
	title: string;
	links: { subItem: string; slug: string; logo: string }[];
}>;

export const chat = [
	// DATE has to be a TimeStamp but like many other variables i'm hardcoding the values for the sake of the challenge
	{
		itWasRead: false,
		avatar: "Helen Brooks",
		messages:
			"Luna has been scratching her ears a lot lately and shaking her head. I checked her ears and they look red and inflamed. She also seems to be in pain when I touch them.",
		date: "15:56",
	},
	{
		itWasRead: false,
		avatar: "Kathryn Murphy",
		messages:
			"The best way to treat an ear infection is to visit your local vet clinic and get a prescription for ear drops. The ear drops will help clear the infection and reduce th",
		date: "Wed",
	},
	{
		itWasRead: true,
		avatar: "James Grey",
		messages:
			"You should follow the instructions on the ear drops label, but usually you need to apply them twice a day for 7 to 10 days. You should clean her ears once a day, preferably before applying the ear drops",
		date: "Tue",
	},
	{
		itWasRead: true,
		avatar: "Jim Brown",
		messages: "Hi, I have a question about my cat.",
		date: "Tue",
	},
];

export const schedule = [
	{
		name: "Rabies",
		type: "Overdue",
		date: "01 Dec 2023",
		veterinary: "",
	},
	{
		name: "Bordetella",
		type: "Noncore",
		date: "11 Dec 2024",
		veterinary: "James Grey",
	},
	{
		name: "Distemper",
		type: "Core",
		date: "27 Jun 2024",
		veterinary: "Jim Brown",
	},
	{
		name: "Calicivirus",
		type: "Core",
		date: "16 Sep 2024",
		veterinary: "Helen Brooks",
	},
];

export const petProfile = {
	activity: {
		daily: 75,
		weekly: 50,
		monthly: 25,
	},
	sleep: {
		daily: 59,
		weekly: 39,
		monthly: 79,
	},
	welness: {
		daily: 22,
		weekly: 82,
		monthly: 52,
	},
};

export const HealthMonitoring = [
	{
		tab: { title: "Stress level", icon: heartIcon, id: 1 },
		data: {
			monthly: [
				{
					time: "September",
					number: 1,
				},
				{
					time: "November",
					number: 6,
				},

				{
					time: "December",
					number: 4,
				},
				{
					time: "January",
					number: 9,
				},
			],
			weekly: [
				{
					time: "Monday",
					number: 9,
				},
				{
					time: "Tuesday",
					number: 4,
				},

				{
					time: "Wednesday",
					number: 6,
				},
				{
					time: "Thursday",
					number: 1,
				},
			],
			daily: [
				{
					time: "06:00",
					number: 6,
				},
				{
					time: "12:00",
					number: 9,
				},

				{
					time: "18:00",
					number: 1,
				},
				{
					time: "00:00",
					number: 4,
				},
			],
		},
	},
	{
		tab: { title: "Pulse", icon: pulseIcon, id: 2 },
		data: {
			monthly: [
				{
					time: "September",
					number: 9,
				},
				{
					time: "November",
					number: 3,
				},

				{
					time: "December",
					number: 5,
				},
				{
					time: "January",
					number: 7,
				},
			],
			weekly: [
				{
					time: "Monday",
					number: 7,
				},
				{
					time: "Tuesday",
					number: 5,
				},

				{
					time: "Wednesday",
					number: 3,
				},
				{
					time: "Thursday",
					number: 9,
				},
			],
			daily: [
				{
					time: "06:00",
					number: 3,
				},
				{
					time: "12:00",
					number: 9,
				},

				{
					time: "18:00",
					number: 5,
				},
				{
					time: "00:00",
					number: 7,
				},
			],
		},
	},
	{
		tab: { title: "Temperature", icon: temperatureIcon, id: 3 },
		data: {
			monthly: [
				{
					time: "September",
					number: 7,
				},
				{
					time: "November",
					number: 4,
				},

				{
					time: "December",
					number: 2,
				},
				{
					time: "January",
					number: 1,
				},
			],
			weekly: [
				{
					time: "Monday",
					number: 1,
				},
				{
					time: "Tuesday",
					number: 2,
				},

				{
					time: "Wednesday",
					number: 4,
				},
				{
					time: "Thursday",
					number: 7,
				},
			],
			daily: [
				{
					time: "06:00",
					number: 4,
				},
				{
					time: "12:00",
					number: 7,
				},

				{
					time: "18:00",
					number: 2,
				},
				{
					time: "00:00",
					number: 1,
				},
			],
		},
	},
	{
		tab: { title: "Calories burned", icon: caloriesIcon, id: 4 },
		data: {
			monthly: [
				{
					time: "September",
					number: 7,
				},
				{
					time: "November",
					number: 3,
				},

				{
					time: "December",
					number: 9,
				},
				{
					time: "January",
					number: 5,
				},
			],
			weekly: [
				{
					time: "Monday",
					number: 5,
				},
				{
					time: "Tuesday",
					number: 9,
				},

				{
					time: "Wednesday",
					number: 3,
				},
				{
					time: "Thursday",
					number: 7,
				},
			],
			daily: [
				{
					time: "06:00",
					number: 3,
				},
				{
					time: "12:00",
					number: 7,
				},

				{
					time: "18:00",
					number: 9,
				},
				{
					time: "00:00",
					number: 5,
				},
			],
		},
	},
];

export const navLinks: NavLinks = [
	{
		title: "Menu",
		links: [
			{
				subItem: "Dashboard",
				slug: "/",
				logo: dashboardIcon,
			},
			{
				subItem: "Pet profile",
				slug: "/pet",
				logo: powIcon,
			},
		],
	},
	{
		title: "Analytics",
		links: [
			{
				subItem: "Health Monitoring",
				slug: "/healt",
				logo: healthIcon,
			},
			{
				subItem: "Vaccination schedule",
				slug: "/vaccination",
				logo: vaccineIcon,
			},
		],
	},
	{
		title: "Schedule",
		links: [
			{
				subItem: "Chat",
				slug: "/chat",
				logo: chatIcon,
			},
			{
				subItem: "Appointments",
				slug: "/appointments",
				logo: calendarIcon,
			},
		],
	},
	{
		title: "Help",
		links: [
			{
				subItem: "Settings",
				slug: "/settings",
				logo: settingsIcon,
			},
			{
				subItem: "Documentation",
				slug: "/documentation",
				logo: documentationIcon,
			},
		],
	},
];
