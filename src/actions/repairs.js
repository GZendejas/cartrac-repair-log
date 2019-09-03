import database from '../firebase/firebase';


// ADD_REPAIR

export const addRepair = (repair) => ({
    type: 'ADD_REPAIR',
    repair
});


export const startAddRepair = (repairData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            description = '',
            repairedOn = 0,
            mileage = 0,
            details = ''
        } = repairData;
        const repair = { description, repairedOn, mileage, details };

        return database.ref(`users/${uid}/repairs`).push(repair).then((ref) => {
            dispatch(addRepair({
                id: ref.key,
                ...repair
            }));
        });
    };
};