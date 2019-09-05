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


// SET_EXPENSES

export const setRepairs = (repairs) => ({
    type: 'SET_REPAIRS',
    repairs
});

export const startSetRepairs = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/repairs`).once('value').then((snapshot) => {
            const repairs = [];

            snapshot.forEach((childSnapshot) => {
                repairs.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });

            dispatch(setRepairs(repairs));
        });
    };
};

