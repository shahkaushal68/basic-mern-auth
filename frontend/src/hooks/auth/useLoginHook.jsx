import { useState } from "react"
import { doLogin } from "../../actions/authActions";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const useLoginHook = () => {
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        //console.log("event", event.target.value);
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    const handleLogin = async (event) => {
        event.preventDefault();
        const loginResponse = await doLogin(formData);
        if (loginResponse?.data?.status === 200) {
            toast.success("user Login successfully");
            localStorage.setItem('token', loginResponse?.data?.token);
            navigate("/chat");
        } else {
            toast.error(loginResponse?.data?.message)
        }
    }

    return {
        formData,
        handleInputChange,
        handleLogin
    }

}

export default useLoginHook
