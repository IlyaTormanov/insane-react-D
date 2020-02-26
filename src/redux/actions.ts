export interface Author{
    id:number,
    username:string,
    todos:todoItem[]
}
export interface todoItem{
    id:number,
    userId:number
    title:string,
    creationDate:number,
    content:string
    author?:string
}


export type ActionType<T>={type:string,payload:T}


export const TrelloAction=(payload:todoItem[]) =>{
    return{type:"GET_TRELLO_ACTION",payload:payload}
}
