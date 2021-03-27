export interface type{
    type:string;
    name:string;
    value:string;
}

export interface stock {
    consommees:number;
    achetes:number;
}

export interface stockAliment{
    stock :any;
    aliment:string;
    annee:any;
}

export interface alimentationJour{
    nomAlimenation :string;
    quantiteAlimentation:number;
    date:Date;
}