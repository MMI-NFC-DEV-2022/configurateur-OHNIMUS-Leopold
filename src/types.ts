export interface SchemaOffreMaison {
    id?: string;
    nomMaison: string;
    prix: number;
    favori: boolean;
    image: string;
    nbrChambres: number;
    nbrSDB: number;
    adresse: string;
    surface: string;
}


export interface Basket {
    semelle?: string;
    empeigne?: string;
    pointe?: string;
    oeillet?: string;
    bande?: string;
    languette?: string;
    lacet?: string;
    trimestre?: string;
  }
  