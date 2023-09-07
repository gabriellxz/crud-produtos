import { useEffect, useState } from "react";
import ListTbody from "../ListTbody";
import api from "../../config/axios";
import Produtos from "../../Models/produtos";

export default function Grid() {

    const [produto, setProduto] = useState([])

    const getProdutos = async () => {
        const response = await api.get('/posts')
        try {
            setProduto(response.data)
        } catch (err) {
            console.log("Error: 404")
        }
    }

    const handleDeletePost = (id:number) => {
        api.delete(`/posts/${id}`)
        setProduto(produto.filter((p:Produtos) => p.id !== id))
    }

    useEffect(() => {
        getProdutos()
    }, [])

    return (
        <section className="section-table">
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Quantidade</th>
                        <th>Valor do produto</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        produto.map((p: Produtos) => (
                            <ListTbody key={p.id} produto={p} handleDelete={handleDeletePost}/>
                        ))
                    }
                </tbody>
            </table>
        </section>
    )
}