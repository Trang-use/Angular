import {ObjectId} from 'bson'
export interface IproductsDetails{
    id : ObjectId,
    Name : string,
    Price : number,
    Quantity : number,
    Description : string,
    List_Size : any
    Img : string
    Color_Img : any
    Current_Img : any
    Current_Size : any
    Current_Quantity : any
}
