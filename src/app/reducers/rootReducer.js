const initState = {
    data: [],
    unit: 'imperial',
    chartData: [],
    loading: true,
}

const rootReducer = (state = initState, action) => {
    switch(action.type) {
        case 'STORE_DATA':
            return {
             ...state,
             data: action.data
            };
          break;
        case 'STORE_UNIT':
            return {
                ...state,
                unit: action.unit
            };
          break;
          case 'STORE_CHART_DATA':
            return {
                ...state,
                chartData: action.chartData
            };
          break;
          case 'IS_LOADIGN':
            return {
                ...state,
                loading: action.loading
            };
          break;
          
        default:
          // code block
      }
    // if(action.type === 'STORE_DATA'){
    //     return {
    //         ...state,
    //         data: action.data
    //       };
    // }
    // if(action)
    return state
}

export default rootReducer