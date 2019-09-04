
// Repairs Reducer

const repairsReducerDefaultState = [];

export default (state = repairsReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_REPAIR':
            return [
                ...state,
                action.repair
            ];
        default:
            return state;
    }
}