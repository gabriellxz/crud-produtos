import { IconHttpDelete } from "@tabler/icons-react"
import Produtos from "../../Models/produtos"
import Moeda from "../../utils/moeda"
import { useNavigate } from "react-router-dom"

interface ProdutoProps {
    produto: Produtos
    handleDelete: (id:number) => void
}

export default function ListTbody(props: ProdutoProps) {

    const navigate = useNavigate()

    return (
        <>
            <tr>
                <td>{props.produto.produto}</td>
                <td>{props.produto.quantidade}</td>
                <td>{Moeda.formatar(props.produto.valorProduto * props.produto.quantidade)}</td>
                <td>
                    <span onClick={() => props.handleDelete(props.produto.id)}><IconHttpDelete /></span>
                </td>
                <td>
                    <span className="btn-add" onClick={() => navigate(`/updatePost/${props.produto.id}`)}>Editar</span>
                </td>
            </tr>
        </>
    )
}