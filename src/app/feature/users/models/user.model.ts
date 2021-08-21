export interface User {

    id: number;
    email: string;
    senha: string;
    profile: "ADMIN" | "PARTICIPANTE";
}
