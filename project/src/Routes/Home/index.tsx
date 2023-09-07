import Form from "../../components/Form";
import { Outlet } from 'react-router-dom'
import api from "../../config/axios";

export default function Home() {

    const handleCreatePost = (data: any) => {
        api.post('/posts', data)
    }

    return (
        <>
            <Form onAction={handleCreatePost} buttonText={"Adicionar"}/>
            <Outlet />
        </>
    )
}