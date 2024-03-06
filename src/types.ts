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
};


export interface Basket {
    semelle?: string;
    empeigne?: string;
    pointe?: string;
    oeillet?: string;
    bande?: string;
    languette?: string;
    lacet?: string;
    trimestre?: string;
};
  

export const colors = {
    "#000000": "Noir",
    "#FFFFFF": "Blanc",
    "#FF0000": "Rouge",
    "#00FF00": "Vert",
    "#0000FF": "Bleu",
    "#FFFF00": "Jaune",
    "#FF00FF": "Magenta",
    "#00FFFF": "Cyan",
    "#C0C0C0": "Gris clair",
    "#808080": "Gris",
    "#800000": "Marron",
    "#808000": "Olive",
};


export const materiaux = [
    {
      value: "https://www.tout-en-cuir.fr/wp-content/uploads/2015/04/leather-540142__180.jpg",
      label: "Cuir",
    },
    {
      value: "https://cdn2.tissus-price.com/96592-large_default/tissu-aspect-lin-paillete-or-grande-largeur.jpg",
      label: "Tissu",
    },
    {
      value: "https://www.leparisien.fr/resizer/Nn8w8ddKnePrrKOThDl5Uj6x0B4=/622x388/cloudfront-eu-central-1.images.arcpublishing.com/lpguideshopping/BVITJ2DXMJCPNCGQGO7P5LKNIM.jpg",
      label: "Synthétique",
    },
];