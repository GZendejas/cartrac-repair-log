
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
        default:
            return state;
    }
}