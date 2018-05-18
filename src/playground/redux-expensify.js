import {createStore,combineReducers} from 'redux'
import uuid from 'uuid';

//ADD_EXPENSE
const addExpense=({description='',note='',amount=0,createdAt=0}={})=>({
    type:'ADD_EXPENSE',
    expenses:{
        id:uuid(),
        description,
        note,
        amount,
        createdAt
    }
});
//REMOVE_EXPENSE
const removeExpense=({ id }={})=>({
    type:'REMOVE_EXPENSE',
    id
});
//EDIT_EXPENSE
const editExpense=(id,amount)=>({
    type:'EDIT_EXPENSE',
    id,
    amount
});

//SET_TEXT_FILTER
const setTextFilter=(text='')=>({   
    type:'SET_TEXT_FILTER',
    text
});

//SORT_BY_AMOUNT
const sortbyAmount=()=>({
    type:'SORT_BY_AMOUNT'
});

//SORT_BY_DATE
const sortbyDate=()=>({
    type:'SORT_BY_DATE'
});

//SET_START_DATE
const setStartDate=(startDate=undefined)=>({
    type:'SET_START_DATE',
    startDate
});

//SET_END_DATE
const setEndDate=(endDate=undefined)=>({
    type:'SET_END_DATE',
    endDate
});

// expense reducer
const expensesDefaultState=[];
const expensesReducer=(state=expensesDefaultState,action)=>{
    switch(action.type){
        case 'ADD_EXPENSE':
        //return state.concat(action.expenses)
        //spread operator
        return [
                ...state,
                action.expenses
            ];
        case 'REMOVE_EXPENSE':
        return state.filter(({id})=>{
            return id!==action.id;
        });
        case 'EDIT_EXPENSE':
        return state.map((expense)=>{
            if(expense.id===action.id){
                return{
                    ...expense,
                    ...action.amount
                };
            }
            else{
                return expense;
            }
        });
        default:
        return state;
    }
};

// filter reducer
const filterDefaultState={
    text:'',
    sortBy:'date',
    startDate:undefined,
    endDate:undefined
}
const filterReducer=(state=filterDefaultState,action)=>{
    switch(action.type){
        case 'SET_TEXT_FILTER':
        return {
            ...state,
            text:action.text
        }
        case 'SORT_BY_AMOUNT':
        return{
            ...state,
            sortBy:'amount'
        }
        case 'SORT_BY_DATE':
        return{
            ...state,
            sortBy:'date'
        }
        case 'SET_END_DATE':
        return{
            ...state,
            endDate:action.endDate
        }
        case 'SET_START_DATE':
        return{
            ...state,
            startDate:action.startDate
        }
        default:
        return state;
    }
};

// Get visible expenses
const getVisibleExpenses=(expenses,{text,sortBy,startDate,endDate})=>{
    return expenses.filter((expense)=>{
        const startDateMatch=typeof startDate!=='number' || expense.createdAt>=startDate;
        const endDateMatch=typeof endDate!=='number' || expense.createdAt<=endDate;
        const textMatch=expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b)=>{
        if(sortBy==='date'){
            return a.createdAt<b.createdAt ? 1 :-1
        }else if(sortBy==='amount'){
            return a.amount<b.amount ? 1 : -1
        }
    });
};

// store creation
const store=createStore(
    combineReducers({
        expenses:expensesReducer,
        filters:filterReducer
    })
);

store.subscribe(()=>{
    const state=store.getState();
    const visibleExpenses=getVisibleExpenses(state.expenses,state.filters)
    console.log(visibleExpenses);
});

const expenseOne= store.dispatch(addExpense({ description:'rent',amount:3000,createdAt:1500 }));
const expenseTwo= store.dispatch(addExpense({ description:'Coffee',amount:4000,createdAt:1200 }));
// store.dispatch(removeExpense({ id:expenseOne.expenses.id }));
// store.dispatch(editExpense(expenseTwo.expenses.id,{amount:300}));
//store.dispatch(setTextFilter('coffee'));
//store.dispatch(setTextFilter());
store.dispatch(sortbyAmount());
//store.dispatch(sortbyDate());
//store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
//store.dispatch(setEndDate(1250));

const demoState={
    expenses:[{
        id:'abc',
        description:'rent',
        note:'This was my final rent',
        amount:5000,
        createdAt:0
    }],
    filters:{
        text:'rent',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    }
};