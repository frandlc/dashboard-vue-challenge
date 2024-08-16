<script>
import { Doughnut } from "vue-chartjs";

import {
	Chart as ChartJS,
	Title,
	Tooltip,
	Legend,
	ArcElement,
	CategoryScale,
} from "chart.js";

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

export default {
	data() {
		return {
			filterActivity: "monthly",
			filterSleep: "monthly",
			filterWelness: "monthly",
			width: 200,
			height: 200,
			chartOptions: {
				maintainAspectRatio: true,
				borderRadius: 10,
				color: "#F2F5FA",
				cutout: "85%",
				clip: false,
			},
			styles: {
				maxWidth: "80%",
				minHeight: "80%",
			},
		};
	},
	computed: {
		profileData() {
			return this.$store.state.dataModule.profileData;
		},
		chartDataActivity() {
			return {
				labels: [],
				datasets: [
					{
						backgroundColor: ["#E53761", "#F2F5FA"],
						data: [
							this.profileData.activity[this.filterActivity],
							100 -
								this.profileData.activity[this.filterActivity],
						],
					},
				],
			};
		},
		chartDataSleep() {
			return {
				labels: [],
				datasets: [
					{
						backgroundColor: ["#27A468", "#F2F5FA"],
						data: [
							this.profileData.sleep[this.filterSleep],
							100 - this.profileData.sleep[this.filterSleep],
						],
					},
				],
			};
		},
		chartDataWelness() {
			return {
				labels: [],
				datasets: [
					{
						backgroundColor: ["#F2A735", "#F2F5FA"],
						data: [
							this.profileData.welness[this.filterWelness],
							100 - this.profileData.welness[this.filterWelness],
						],
					},
				],
			};
		},
	},
	components: {
		Doughnut,
	},
};
</script>

<template>
	<section
		class="w-full h-full grid grid-rows-1 grid-cols-3 gap-4 bg-gray-bg"
	>
		<div
			class="bg-white-primary p-4 rounded-2xl py-6 relative flex flex-col justify-between"
		>
			<div class="w-full flex justify-between items-center">
				<h2 class="uppercase">Activity</h2>
				<select
					name="filterActivity"
					v-model="filterActivity"
					class="border rounded-lg border-gray-borders bg-white px-2"
				>
					<option value="monthly" selected>Monthly</option>
					<option value="weekly">Weekly</option>
					<option value="daily">Daily</option>
				</select>
			</div>
			<div class="w-full h-4/5 relative">
				<div
					class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl font-semibold"
				>
					{{ profileData.activity[filterActivity] + "%" }}
				</div>
				<div
					class="absolute top-1/2 left-1/2 transform -translate-x-[53%] -translate-y-[53%] flex-1 w-full h-full flex justify-center items-center"
				>
					<Doughnut
						:chartData="chartDataActivity"
						:chartOptions="chartOptions"
						chartId="activity"
						:width="width"
						:height="height"
						:styles="styles"
					/>
				</div>
			</div>
		</div>
		<div
			class="bg-white-primary p-4 rounded-2xl py-6 relative flex flex-col justify-between"
		>
			<div class="w-full flex justify-between items-center">
				<h2 class="uppercase">sleep</h2>
				<select
					name="filterSleep"
					v-model="filterSleep"
					class="border rounded-lg border-gray-borders bg-white px-2"
				>
					<option value="monthly" selected>Monthly</option>
					<option value="weekly">Weekly</option>
					<option value="daily">Daily</option>
				</select>
			</div>
			<div class="w-full h-4/5 relative">
				<div
					class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl font-semibold"
				>
					{{ profileData.sleep[filterSleep] + "%" }}
				</div>
				<div
					class="absolute top-1/2 left-1/2 transform -translate-x-[53%] -translate-y-[53%] flex-1 w-full h-full flex justify-center items-center"
				>
					<Doughnut
						:chartData="chartDataSleep"
						:chartOptions="chartOptions"
						chartId="sleep"
						:width="width"
						:height="height"
						:styles="styles"
					/>
				</div>
			</div>
		</div>
		<div
			class="bg-white-primary p-4 rounded-2xl py-6 relative flex flex-col justify-between"
		>
			<div class="w-full flex justify-between items-center">
				<h2 class="uppercase">welness</h2>
				<select
					name="filterWelness"
					v-model="filterWelness"
					class="border rounded-lg border-gray-borders bg-white px-2"
				>
					<option value="monthly" selected>Monthly</option>
					<option value="weekly">Weekly</option>
					<option value="daily">Daily</option>
				</select>
			</div>
			<div class="w-full h-4/5 relative">
				<div
					class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl font-semibold"
				>
					{{ profileData.welness[filterWelness] + "%" }}
				</div>
				<div
					class="absolute top-1/2 left-1/2 transform -translate-x-[53%] -translate-y-[53%] flex-1 w-full h-full flex justify-center items-center"
				>
					<Doughnut
						:chartData="chartDataWelness"
						:chartOptions="chartOptions"
						chartId="welness"
						:width="width"
						:height="height"
						:styles="styles"
					/>
				</div>
			</div>
		</div>
	</section>
</template>
