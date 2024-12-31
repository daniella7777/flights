export function generateDatesForUpcomingWeek(count: number): { departureDate: Date; arrivalDate: Date }[] {
    const dates: { departureDate: Date; arrivalDate: Date }[] = [];
    const today = new Date();

    for (let i = 0; i < count; i++) {
        const departureDate = new Date();
        departureDate.setDate(today.getDate() + i + 1);

        const arrivalDate = new Date(departureDate);
        arrivalDate.setHours(departureDate.getHours() + 3); // Example: Flights arrive 3 hours later

        dates.push({ departureDate, arrivalDate });
    }

    return dates;
}

export function generateDatesForFutureAfterWeek(count: number): { departureDate: Date; arrivalDate: Date }[] {
    const dates: { departureDate: Date; arrivalDate: Date }[] = [];
    const today = new Date();

    for (let i = 0; i < count; i++) {
        const departureDate = new Date();
        departureDate.setDate(today.getDate() + 7 + i * 2); // Example: Flights spaced 2 days apart after the upcoming week

        const arrivalDate = new Date(departureDate);
        arrivalDate.setHours(departureDate.getHours() + 5); // Example: Flights arrive 5 hours later

        dates.push({ departureDate, arrivalDate });
    }

    return dates;
}

export function generateDatesForPastYear(count: number, year: number): { departureDate: Date; arrivalDate: Date }[] {
    const dates: { departureDate: Date; arrivalDate: Date }[] = [];

    for (let i = 0; i < count; i++) {
        const departureDate = new Date(year, i % 12, (i + 1) * 2); // Example: Spread flights across months
        const arrivalDate = new Date(departureDate);
        arrivalDate.setHours(departureDate.getHours() + 4); // Example: Flights arrive 4 hours later

        dates.push({ departureDate, arrivalDate });
    }

    return dates;
}
