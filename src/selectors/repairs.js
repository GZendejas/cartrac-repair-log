import moment from 'moment';

// Get Filtered Repairs
export default (repairs, { text, startDate, endDate }) => {
    return repairs.filter((repair) => {
        const repairedOnMoment =  moment(repair.repairedOn);
        const startDateMatch = startDate ? startDate.isSameOrBefore(repairedOnMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(repairedOnMoment, 'day') : true;
        const textMatch = repair.description.toLowerCase().includes(text.toLowerCase())

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        return a.repairedOn < b.repairedOn ? 1 : -1;
    });
};
