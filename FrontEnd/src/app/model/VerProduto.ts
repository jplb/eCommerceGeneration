import { User } from "./User"

export class VerProduto{
    public id: number
    public nome: string
    public tamanho: string
    public cor: string
    public foto: string
    public tema: string
    public estoque: number
    public preco: number
    public modelo: string
    public user: User
    public quantidade: number
    public subTotal: number
}