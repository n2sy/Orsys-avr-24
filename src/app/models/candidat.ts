export class Candidat {
  constructor(
    public _id: number,
    public prenom: string,
    public nom: string,
    public profession: string,
    public age: number,
    public avatar?: string
  ) {}
}

// Version classique
// export class Candidat {
//   public _id: number;
//   public prenom: string;
//   public nom: string;
//   public profession: string;
//   public age: number;
//   public avatar: string;

//   constructor(_id : number, prenom : string, nom : string, profession : string, age : number, avatar? : string) {
//     this._id = _id;
//     this.prenom = prenom;
//     this.nom = nom;
//     // etc...
//   }

// }
