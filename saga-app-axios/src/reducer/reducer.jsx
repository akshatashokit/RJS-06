const initialState = {
    res : {}
};
function reducer(state=initialState,action){
    switch(action.type){
        case "EMPLOYEES":
            return{
                ...state,
                res : action.value
            }
            break;
        default:
            return state;
    }
};
export default reducer;