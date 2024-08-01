<script>
import { Doughnut } from "vue-chartjs/legacy";

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
			filterActivity: "Monthly",
			filterSleep: "Monthly",
			filterWelness: "Monthly",
			chartId: "doughnut-chart",
			datasetIdKey: "label",
			width: { default: 200 },
			height: { default: 200 },
			chartOptions: {
				responsive: true,
				maintainAspectRatio: false,
			},
		};
	},
	computed: {
		profileData() {
			return this.$store.state.profileData;
		},
		chartDataActivity() {
			return {
				labels: [],
				datasets: [
					{
						backgroundColor: ["#E53761", "#F2F5FA"],
						data: [
							this.profileData.activity,
							100 - this.profileData.activity,
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
							this.profileData.sleep,
							100 - this.profileData.sleep,
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
							this.profileData.welness,
							100 - this.profileData.welness,
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
		<div class="bg-white-primary p-4 rounded-2xl py-6 relative">
			<div class="w-full flex justify-between items-center mb-6">
				<h2 class="uppercase">Activity</h2>
				<select
					name="filterActivity"
					v-model="filterActivity"
					class="border rounded-lg border-gray-borders bg-white px-2"
				>
					<option value="Monthly" selected>Monthly</option>
					<option value="Weekly">Weekly</option>
					<option value="Daily">Daily</option>
				</select>
			</div>
			<div class="absolute top-[65px] left-[30px] text-2xl font-bold">
				{{ profileData.activity + "%" }}
			</div>
			<Doughnut
				:chartData="chartDataActivity"
				:chart-options="chartOptions"
				:chart-id="chartId"
				:dataset-id-key="datasetIdKey"
				:width="width"
				:height="height"
			/>
		</div>
		<div class="bg-white-primary p-4 rounded-2xl py-6 relative">
			<div class="w-full flex justify-between items-center mb-6">
				<h2 class="uppercase">sleep</h2>
				<select
					name="filterSleep"
					v-model="filterSleep"
					class="border rounded-lg border-gray-borders bg-white px-2"
				>
					<option value="Monthly" selected>Monthly</option>
					<option value="Weekly">Weekly</option>
					<option value="Daily">Daily</option>
				</select>
			</div>
			<div class="absolute top-[65px] left-[30px] text-2xl font-bold">
				{{ profileData.sleep + "%" }}
			</div>
			<Doughnut
				:chartData="chartDataSleep"
				:chart-options="chartOptions"
				:chart-id="chartId"
				:dataset-id-key="datasetIdKey"
				:width="width"
				:height="height"
			/>
		</div>
		<div class="bg-white-primary p-4 rounded-2xl py-6 relative">
			<div class="w-full flex justify-between items-center mb-6">
				<h2 class="uppercase">welness</h2>
				<select
					name="filterWelness"
					v-model="filterWelness"
					class="border rounded-lg border-gray-borders bg-white px-2"
				>
					<option value="Monthly" selected>Monthly</option>
					<option value="Weekly">Weekly</option>
					<option value="Daily">Daily</option>
				</select>
			</div>
			<div class="absolute top-[65px] left-[30px] text-2xl font-bold">
				{{ profileData.welness + "%" }}
			</div>
			<Doughnut
				:chartData="chartDataWelness"
				:chart-options="chartOptions"
				:chart-id="chartId"
				:dataset-id-key="datasetIdKey"
				:width="width"
				:height="height"
			/>
		</div>
	</section>
</template>
