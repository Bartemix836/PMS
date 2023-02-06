export interface IProcess{
    dataProcess: string;
    ProcessName: string;
    InputMaterials: string; 
    Temperature: string;
    OperationTime: string;
    OutputProduct: string; 
    PreviousProcess: string;
}




export enum PageEnum{
    list,
    add,
    edit
}