
// Repairs Reducer

const repairsReducerDefaultState = [];

export default (state = repairsReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_REPAIR':
            return [
                ...state,
                action.repair
            ];
        case 'SET_REPAIRS':
            return action.repairs;
        case 'EDIT_REPAIR':
            return state.map((repair) => {
                if(repair.id === action.id) {
                    return {
                        ...repair,
                        ...action.updates
                    };
                } else {
                    return repair;
                }
            });
        case 'REMOVE_REPAIR':
            return state.filter(({ id }) => action.id !== id);
        default:
            return state;
    }
}