export class User {

    constructor( ){ }
    
    id: number;
    name: string;
    email: string;
    password: string;
    profile: "ADMIN" | "PARTICIPANTE";
}
