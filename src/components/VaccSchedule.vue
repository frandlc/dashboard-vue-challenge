<script>
export default {
	data() {
		return {
			filter: "",
			search: "",
			showAppointments: [],
		};
	},
	computed: {
		appointmentsData() {
			return this.$store.state.dataModule.appointmentsData;
		},
		appointmentsFiltered() {
			let filteredApp = [...this.appointmentsData];
			if (!!this.filter && this.filter !== "All") {
				filteredApp = filteredApp.filter(
					(item) => item.type === this.filter
				);
			}
			if (!!this.search.trim()) {
				filteredApp = filteredApp.filter((item) =>
					Object.values(item).some((v) =>
						v.toLowerCase().includes(this.search.toLowerCase())
					)
				);
			}
			return filteredApp;
		},
	},
};
</script>

<template>
	<section
		class="w-full h-full flex flex-col justify-start items-start p-6 py-6 rounded-2xl gap-8"
	>
		<div class="w-full flex justify-between items-center">
			<h2 class="uppercase">Vaccination Schedule</h2>
			<div class="flex justify-center items-center gap-4">
				<div class="flex justify-center items-center gap-4">
					<input
						type="text"
						placeholder=""
						class="bg-transparent text-end focus:outline-none w-[150px]"
						name="search"
						v-model="search"
					/>
					<img
						src="../assets/imgs/Search.png"
						alt="search"
						width="24px"
						height="24px"
					/>
				</div>
				<select
					name="filter"
					v-model="filter"
					class="border rounded-lg border-gray-borders bg-white px-2"
				>
					<option value="" selected disabled hidden>By type</option>
					<option value="Overdue">Overdue</option>
					<option value="Noncore">Noncore</option>
					<option value="Core">Core</option>
					<option value="All">All types</option>
				</select>
			</div>
		</div>
		<div
			class="w-full overflow-x-auto border border-gray-borders rounded-t-2xl"
		>
			<table class="w-full">
				<thead class="bg-gray-bg px-6">
					<tr>
						<th class="text-left p-4 font-light">Name</th>
						<th class="text-left p-4 font-light">Type</th>
						<th class="text-left p-4 font-light">Date</th>
						<th class="text-right p-4 font-light">Veterinarian</th>
					</tr>
				</thead>
				<tr
					v-for="(item, index) in appointmentsFiltered"
					:key="index + item.name"
					class="p-4 border-y"
				>
					<td
						v-for="(value, name, index) in item"
						:key="value"
						class="text-left p-4"
					>
						<span
							class="font-medium"
							:class="
								value === `Core`
									? `px-3 py-1 rounded-lg border border-[#BDE8D3] bg-[#EAF8F1] text-[#27A468] block text-center w-full font-medium`
									: value === `Noncore`
									? `px-3 py-1 rounded-lg border border-[#F7E1C1] bg-[#FCF5EB] text-[#F2A735] block text-center w-full font-medium`
									: value === `Overdue`
									? `px-3 py-1 rounded-lg border border-[#F7C1CE] bg-[#FCEBEF] text-[#D03258] block text-center w-full font-medium`
									: name === `veterinary` && value
									? `px-3 py-1 rounded-lg border block text-center w-full font-medium`
									: ``
							"
						>
							{{ value ? value : "" }}
						</span>
						<button
							v-if="!value && name === `veterinary`"
							class="text-white-primary bg-blue-primary py-1 px-3 rounded-lg block text-center w-full font-medium"
						>
							Find Veterinar
						</button>
					</td>
				</tr>
			</table>
		</div>
	</section>
</template>
