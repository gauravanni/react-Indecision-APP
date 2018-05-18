import {createStore} from 'redux';


// Action generators- functions that returns action objects
const incrementCount=({incrementBy=1 }={})=>({
    type:'INCREMENT',
    incrementBy
});

const decrementCount=({decrementBy=1 }={})=>({
    type:'DECREMENT',
    decrementBy
});

const resetCount=()=>({
    type:'RESET'
});

const setCount=({count})=>({
    type:'SETCOUNT',
    count
});

const countReducer=(state={count:0},action)=>{
    switch(action.type){
        case 'INCREMENT':
        return{
            count:state.count + action.incrementBy
        };
        case 'DECREMENT':
        return{
            count:state.count-action.decrementBy
        };
        case 'RESET':
        return{
            count:0
        };
        case 'SETCOUNT':
        return{
            count:action.count
        }
        default:
        return state;
    }
}

const store=createStore(countReducer);

store.subscribe(()=>{
    console.log(store.getState());
});


//Actions - object that gets sent to the store
store.dispatch(incrementCount({incrementBy:5}))

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy:10}));

store.dispatch(setCount({count:101}));





