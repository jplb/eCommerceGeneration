import { Produto } from "./Produto"

export class User {

    public id: number
    public nome: string
    public email: string
    public senha: string
    public telefoneFixo: string
    public telefoneCelular: string
    public endereco: string
    public tipo: string

    public produto: Produto
}

