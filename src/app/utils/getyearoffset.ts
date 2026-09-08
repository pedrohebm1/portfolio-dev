export default function getYearOffset(date1: Date, date2: Date): number {
    const startDate = new Date(Math.min(date1.getTime(), date2.getTime()));
    const endDate = new Date(Math.max(date1.getTime(), date2.getTime()));

    let years = endDate.getFullYear() - startDate.getFullYear();

    const monthDifference = endDate.getMonth() - startDate.getMonth();
    const dayDifference = endDate.getDate() - startDate.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        years--;
    }

    return years;
}