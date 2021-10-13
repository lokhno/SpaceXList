export const launchesSort = (items, type) => {
    return items.sort((a, b) => {
        const comparison = new Date(b.date_utc).getTime() - new Date(a.date_utc).getTime();
        return type === "increasing" ? comparison : -comparison;
    });
};