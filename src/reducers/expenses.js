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

export default expensesReducer;