<script>
import { Line as LineChartGenerator } from "vue-chartjs";

import {
	Chart as ChartJS,
	Title,
	Tooltip,
	Legend,
	Filler,
	LineElement,
	LinearScale,
	CategoryScale,
	PointElement,
} from "chart.js";

ChartJS.register(
	Title,
	Tooltip,
	Legend,
	Filler,
	LineElement,
	LinearScale,
	CategoryScale,
	PointElement
);

export default {
	data() {
		return {
			filter: "monthly",
			chartOptions: {
				responsive: true,
				maintainAspectRatio: false,
				pointBorderColor: "#3788E5",
				pointBackgroundColor: "#3788E5",
				pointRadius: 0,
				backgroundColor: "#3788E5",
				borderColor: "#3788E5",
				borderWidth: 2,
				scales: {
					y: {
						min: 1,
						max: 10,
						grid: {
							borderDash: [10],
							drawTicks: false,
							drawBorder: false,
						},
						ticks: {
							padding: 25,
						},
					},
					x: {
						grid: {
							display: false,
						},
						ticks: {
							count: 4,
						},
					},
				},
				plugins: {
					legend: {
						display: false,
					},
				},
			},
			styles: {
				width: "100%",
				height: "100%",
			},
			chartId: "line-chart",
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
			return this.$store.state.dataModule.healthData;
		},
		titles() {
			const titlesArray = this.healthData.map((item) => item.tab);
			return titlesArray;
		},
		icons() {
			const iconsArray = this.healthData.map((item) => item.tab.icon);
			return iconsArray;
		},
		takeChartDataLabels() {
			const labels = this.healthData.find(
				(item) => item.tab.id === this.barIndex
			).data[this.filter].labels;
			// .data[this.filter].map((item) => item.time);
			return labels;
		},
		takeChartDataNumbers() {
			const numbers = this.healthData.find(
				(item) => item.tab.id === this.barIndex
			).data[this.filter].numbers;
			// .data[this.filter].map((item) => item.number);
			return numbers;
		},
		chartData() {
			return {
				labels: this.takeChartDataLabels,
				datasets: [
					{
						label: "",
						backgroundColor: (ctx) => {
							const canvas = ctx.chart.ctx;
							const gradient = canvas.createLinearGradient(
								0,
								0,
								0,
								340
							);

							gradient.addColorStop(
								0,
								"rgba(55, 136, 229, 0.30)"
							);
							gradient.addColorStop(1, "rgba(55, 136, 229, 0)");

							return gradient;
						},
						fill: true,
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
				<option value="monthly" selected>Monthly</option>
				<option value="weekly">Weekly</option>
				<option value="daily">Daily</option>
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
		<div class="w-full h-[80%]">
			<LineChartGenerator
				:chartOptions="chartOptions"
				:chartData="chartData"
				:chart-id="chartId"
				:styles="styles"
			/>
		</div>
	</section>
</template>
