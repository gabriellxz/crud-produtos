import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useParams } from "react-router-dom"
import api from "../../config/axios"
import { useEffect } from "react"

interface FormProps {
    onAction: (data: any) => void,
        buttonText: string
}

const postSchema = yup.object({
    produto: yup.string().required(),
    quantidade: yup.number().required(),
    valorProduto: yup.number().required()
})

export default function Form(props: FormProps) {

    const {id} = useParams()

    const { register, handleSubmit, reset } = useForm({
        resolver: yupResolver(postSchema)
    })

    function getUpdate() {
        api.get(`/posts/${id}`)
        .then((response) => {
            reset(response.data)
        }).catch(() => {
            console.log("Error")
        })
    }

    useEffect(() => {
        getUpdate()
    }, [])

    return (
        <section className="section-form">
            <form onSubmit={handleSubmit(props.onAction)}>
                <div className="container-form">
                    <div className="container-input">
                        <input type="text" placeholder="Digite o nome do produto" className="input" {...register('produto')} />
                    </div>
                    <div className="container-input">
                        <input type="number" placeholder="Quantidade" className="input" {...register('quantidade')} />
                    </div>
                    <div className="container-input">
                        <input type="number" placeholder="Digite o valor do produto" className="input" {...register('valorProduto')} />
                    </div>
                    <button className="btn-add">{props.buttonText}</button>
                </div>
            </form>
        </section>
    )
}