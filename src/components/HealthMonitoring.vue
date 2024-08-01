<script>
import { Line as LineChartGenerator } from "vue-chartjs/legacy";

import {
	Chart as ChartJS,
	Title,
	Tooltip,
	Legend,
	LineElement,
	LinearScale,
	CategoryScale,
	PointElement,
} from "chart.js";

ChartJS.register(
	Title,
	Tooltip,
	Legend,
	LineElement,
	LinearScale,
	CategoryScale,
	PointElement
);

export default {
	data() {
		return {
			filter: "Monthly",
			chartOptions: {
				responsive: true,
				maintainAspectRatio: false,
			},
			chartId: "line-chart",
			datasetIdKey: "label",
			width: 830,
			height: 300,
			barIndex: 1,
		};
	},
	methods: {
		changeTab(index) {
			this.barIndex = index;
		},
	},
	computed: {
		healthData() {
			return this.$store.state.healthData;
		},
		titles() {
			const titlesArray = this.$store.state.healthData.map(
				(item) => item.tab
			);
			return titlesArray;
		},
		icons() {
			const iconsArray = this.$store.state.healthData.map(
				(item) => item.tab.icon
			);
			return iconsArray;
		},
		takeChartDataLabels() {
			const labels = this.$store.state.healthData
				.find((item) => item.tab.id === this.barIndex)
				.data.map((item) => item.month);
			return labels;
		},
		takeChartDataNumbers() {
			const numbers = this.$store.state.healthData
				.find((item) => item.tab.id === this.barIndex)
				.data.map((item) => item.number);
			return numbers;
		},
		chartData() {
			return {
				labels: this.takeChartDataLabels,
				datasets: [
					{
						label: "",
						backgroundColor: "#f87979",
						data: this.takeChartDataNumbers,
					},
				],
			};
		},
	},
	components: {
		LineChartGenerator,
	},
};
</script>

<template>
	<section
		class="w-full h-full flex flex-col justify-start items-start p-4 py-6 rounded-2xl gap-4"
	>
		<div class="w-full flex justify-between items-center">
			<h2 class="uppercase">Health Monitoring</h2>
			<select
				name="filter"
				v-model="filter"
				class="border rounded-lg border-gray-borders bg-white px-2"
			>
				<option value="Monthly" selected>Monthly</option>
				<option value="Weekly">Weekly</option>
				<option value="Daily">Daily</option>
			</select>
		</div>
		<div
			class="w-full border border-gray-borders rounded-xl flex justify-around items-center p-2"
		>
			<button
				v-for="(item, index) in titles"
				:key="index + item.id"
				class="py-2 px-6 rounded-xl cursor-pointer flex justify-center items-center gap-2"
				:class="
					item.id === barIndex
						? `bg-blue-primary text-white-primary`
						: ``
				"
				@click="changeTab(item.id)"
			>
				<img :src="item.icon" :alt="item.title" />
				{{ item.title }}
			</button>
		</div>
		<div>
			<LineChartGenerator
				:chart-options="chartOptions"
				:chart-data="chartData"
				:chart-id="chartId"
				:dataset-id-key="datasetIdKey"
				:width="width"
				:height="height"
			/>
		</div>
	</section>
</template>
