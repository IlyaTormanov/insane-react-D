import { ActionType, todoItem} from "./actions";

export const todoListDefault:todoItem[]=[
    {
        id:0,
        userId:0,
        title:"",
        creationDate:new Date().getDate(),
        content:"",
        author:""
    }
]



export const trelloReducer=(state=todoListDefault,action:ActionType<todoItem[]>)=>{
    if(action.type==='GET_TRELLO_ACTION'){
        return [...state,action.payload]
    }
    else return state
}