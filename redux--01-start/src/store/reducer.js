
const initialState = {
    counter: 0,
    results: [],
}

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case 'INCREMENT': 
            // const newState = Object.assign({}, state)
            // newState.counter = state.counter + 1;
            // console.log(newState)
            // return newState;
            return {
                ...state,
                counter: state.counter + 1,
            }
        case 'DECREMENT': 
           console.log('action object', action)
            return {
                ...state,
                counter: state.counter - 1,
            }
        case 'ADD':
            console.log(
                {
                    ...state, 
                    counter: state.counter + action.value,
                }
            )
            return {
                ...state, 
                counter: state.counter + action.value,
            }
        case 'SUBSTRACT':
        console.log(
            {
                ...state, 
                counter: state.counter + action.value,
            }
        )
            return {
                ...state,
                counter: state.counter - action.value,
            }
        case 'STORE_RESULT':
        console.log(
            {
                ...state, 
                counter: state.counter + action.value,
            }
        )
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: state.counter}),
            }
            
    }
    
    return state;
};

export default reducer;