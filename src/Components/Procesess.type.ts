export interface IProcess{
    IdProcess: string;
    InputMaterials: string; 
    Temperature: string;
    OperationTime: string;
    OutputProduct: string; 
}

export const dummyProcesessList: IProcess [] = [
    {
    IdProcess: new Date().toJSON().toString(),
    InputMaterials: "ddsa",
    Temperature: "saddsa",
    OperationTime: "dsadas",
    OutputProduct:"dsadadas"
    },
];


export enum PageEnum{
    list,
    add,
}