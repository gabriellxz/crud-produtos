import { useNavigate, useParams } from "react-router-dom";
import Form from "../../components/Form";
import api from "../../config/axios";

export default function FormUpdate() {

    const {id} = useParams()
    const navigate = useNavigate()

    function handleUpadatePost(data: any) {
        api.put(`/posts/${id}`, data)
        navigate('/')
    }

    return (
        <Form onAction={handleUpadatePost} buttonText={"Salvar"}/>
    )
}