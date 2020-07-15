import { ADD_TODO,DELETE_TODO,EDIT_TODO,DELETE_DONE_TODO,ADD_DONE_TODO } from '../actions/actionType';

const initialState = {
    value:'',
    array1: [
        {
            title: "1",
          subtitle: "Breakfast"
        },
        {
          title: "2",
          subtitle: "Lunch"
        },
        {
            title: "3",
            subtitle: "dinner"
          },
      ],
      array2: [
        {
            title: "1",
          subtitle: "Beef"
        },
        {
            title: "2",
          subtitle: "Mutton"
        },
        {
            title: "3",
          subtitle: "Chicken"
        },
      ],

}

const todoReducer = (state=initialState, action ) => {
   
  switch(action.type) {

        case  ADD_TODO :
                let newObj = action.payload
                let array1 = state.array1;
                array1.push(newObj);
                return {
                    ...state,
                    array1 : [...array1]
                };

        case  ADD_DONE_TODO :
               alert('reducer')
               let newdata = action.payload
               let array2 = state.array2;
               array2.push(newdata);
               return {
                ...state,
                array2 : [...array2]
            };
    
        case DELETE_TODO :
                const newList = state.array1.filter((todo) => 
                todo !== state.array1[action.id]);
                return {
                    ...state,
                    array1 : newList
            };

        case DELETE_DONE_TODO :
               const doneList = state.array2.filter((todo) => 
               todo !== state.array2[action.id]);
               return {
                ...state,
                array2 : doneList
                };
        case EDIT_TODO :


        default:
            return state;
    }
}

export default todoReducer;