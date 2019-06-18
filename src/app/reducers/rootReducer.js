const initState = {
    data: [],
}

const rootReducer = (state = initState, action) => {
    //console.log(action)
    if(action.type === 'STORE_DATA'){
        return {
            ...state,
            data: action.data
          };
    }
    return state
}

export default rootReducer