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
import helenAvatar from "../assets/imgs/helen-avatar.png";
import kathrynAvatar from "../assets/imgs/kathryn-avatar.png";
import jamesAvatar from "../assets/imgs/james-avatar.png";
import jimAvatar from "../assets/imgs/jim-avatar.png";

type NavLinks = Array<{
	title: string;
	links: { subItem: string; slug: string; logo: string }[];
}>;

export const chat = [
	// DATE has to be a TimeStamp but like many other variables i'm hardcoding the values for the sake of the challenge
	{
		itWasRead: false,
		avatar: "Helen Brooks",
		imgUrl: helenAvatar,
		messages:
			"Luna has been scratching her ears a lot lately and shaking her head. I checked her ears and they look red and inflamed. She also seems to be in pain when I touch them.",
		date: "15:56",
	},
	{
		itWasRead: false,
		avatar: "Kathryn Murphy",
		imgUrl: kathrynAvatar,
		messages:
			"The best way to treat an ear infection is to visit your local vet clinic and get a prescription for ear drops. The ear drops will help clear the infection and reduce th",
		date: "Wed",
	},
	{
		itWasRead: true,
		avatar: "James Grey",
		imgUrl: jamesAvatar,
		messages:
			"You should follow the instructions on the ear drops label, but usually you need to apply them twice a day for 7 to 10 days. You should clean her ears once a day, preferably before applying the ear drops",
		date: "Tue",
	},
	{
		itWasRead: true,
		avatar: "Jim Brown",
		imgUrl: jimAvatar,
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
			monthly: {
				labels: [
					"September",
					"October",
					"November",
					"December",
					"January",
					"February",
					"March",
					"April",
					"May",
					"June",
					"July",
					"August",
				],
				numbers: [4, 7, 6, 7, 4, 7, 8, 3, 7, 2, 7, 2],
			},
			weekly: {
				labels: [
					"Monday",
					"Tuesday",
					"Wednesday",
					"Thursday",
					"Friday",
					"Saturday",
					"Sunday",
				],
				numbers: [5, 3, 5, 7, 8, 3, 6],
			},
			daily: {
				labels: ["06:00", "12:00", "18:00", "00:00"],
				numbers: [5, 6, 2, 7],
			},
		},
	},
	{
		tab: { title: "Pulse", icon: pulseIcon, id: 2 },
		data: {
			monthly: {
				labels: [
					"September",
					"October",
					"November",
					"December",
					"January",
					"February",
					"March",
					"April",
					"May",
					"June",
					"July",
					"August",
				],
				numbers: [9, 3, 5, 7, 4, 6, 4, 5, 8, 3, 7, 2],
			},
			weekly: {
				labels: [
					"Monday",
					"Tuesday",
					"Wednesday",
					"Thursday",
					"Friday",
					"Saturday",
					"Sunday",
				],
				numbers: [4, 5, 5, 7, 3, 5, 7],
			},
			daily: {
				labels: ["06:00", "12:00", "18:00", "00:00"],
				numbers: [3, 8, 9, 3],
			},
		},
	},
	{
		tab: { title: "Temperature", icon: temperatureIcon, id: 3 },
		data: {
			monthly: {
				labels: [
					"September",
					"October",
					"November",
					"December",
					"January",
					"February",
					"March",
					"April",
					"May",
					"June",
					"July",
					"August",
				],
				numbers: [2, 1, 9, 7, 4, 7, 3, 7, 8, 3, 7, 2],
			},
			weekly: {
				labels: [
					"Monday",
					"Tuesday",
					"Wednesday",
					"Thursday",
					"Friday",
					"Saturday",
					"Sunday",
				],
				numbers: [8, 1, 5, 7, 2, 2, 4],
			},
			daily: {
				labels: ["06:00", "12:00", "18:00", "00:00"],
				numbers: [8, 9, 5, 3],
			},
		},
	},
	{
		tab: { title: "Calories burned", icon: caloriesIcon, id: 4 },
		data: {
			monthly: {
				labels: [
					"September",
					"October",
					"November",
					"December",
					"January",
					"February",
					"March",
					"April",
					"May",
					"June",
					"July",
					"August",
				],
				numbers: [8, 2, 1, 7, 4, 7, 4, 3, 7, 8, 7, 8],
			},
			weekly: {
				labels: [
					"Monday",
					"Tuesday",
					"Wednesday",
					"Thursday",
					"Friday",
					"Saturday",
					"Sunday",
				],
				numbers: [9, 3, 5, 7, 7, 4, 7],
			},
			daily: {
				labels: ["06:00", "12:00", "18:00", "00:00"],
				numbers: [9, 3, 5, 7],
			},
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
