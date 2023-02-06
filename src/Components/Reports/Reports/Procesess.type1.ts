export interface IProcess{
    dataReport: string;
    ProductName: string;
    ProducedQuantity: string; 
    Target: string;
    Waste: string;
    Shift: string; 
    Leader:string;
    Notes: string;
}




export enum PageEnum{
    list,
    add,
    edit
}