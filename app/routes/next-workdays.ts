import { addDays, isWeekend } from "date-fns";

export function getNextWorkdays(amount: number) {
	const today = new Date();
	today.setHours(10);
	today.setMinutes(0);
	const workdays = [];
	let currentDay = 1;

	while (workdays.length < amount) {
		const nextDay = addDays(today, currentDay);

		if (!isWeekend(nextDay)) {
			workdays.push(nextDay);
		}

		currentDay++;
	}

	return workdays;
}
