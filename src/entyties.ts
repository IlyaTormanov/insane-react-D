
export interface TodoEntity{
    id:number,
    userId:number,
    title:string,
    creationDate:number,
    content:string,
    avatar?:File
}