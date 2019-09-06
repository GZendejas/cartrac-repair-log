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


// SET_REPAIRS

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


// EDIT_EREPAIR

export const editRepair = (id, updates) => ({
    type: 'EDIT_REPAIR',
    id,
    updates
});

export const startEditRepair = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/repairs/${id}`).update(updates).then(() => {
            dispatch(editRepair(id, updates));
        });
    };
};

// REMOVE_REPAIR

export const removeRepair = ({ id } = {}) => ({
    type: 'REMOVE_REPAIR',
    id
});

export const startRemoveRepair = ({ id } = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/repairs/${id}`).remove().then(() => {
            dispatch(removeRepair({ id }));
        });
    };
};
