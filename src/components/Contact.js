import { useState } from "react";
import Button from "./Button";
import emailjs from '@emailjs/browser';
import MapComp from "./MapComp";
const initialValues = {
    name: "",
    email: "",
    message: ""
}
function Contact() {
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [message, setMessage] = useState("");
    const [values, setValues] = useState(initialValues);
    const [loading, isLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        isLoading(!loading)
        emailjs.sendForm('service_0k7sqys', 'template_py1g735', e.target, 'NcSUafJLSL3cqsMvt')
            .then((result) => {
                console.log(result.text);
                alert("Response " + result.text + " comment sended ");
                isLoading(false)
            }, (error) => {
                console.log(error.text);
                alert(error.text +"Ahh, something went wrong. Please try again.");
                isLoading(false)
            });
        e.currentTarget.reset();
    }

    const handleClick = (e) => {
        setValues(e.target.value)

        // console.log(values.name);
        // alert("Merci " + values.name+ " pour votre commentaire ");
    }


    return (
        <div className="mt-12 py-2 flex xl:flex-row gap-2 overflow-hidden">

            <div className="block mx-12 px-8  bg-slate-800 gap-2 flex-[0.25] bg-black-100 p-3 rounded-2xl">
                <h2 className=" text-white fond-extrabold text-4xl text-center">Contact</h2>
                <form className="mt-12 mx-12 flex flex-col gap-12 "
                    onSubmit={handleSubmit}
                >
                    <label className="flex flex-col">
                        <span className="block text-sm font-medium text-white mb-3">Name</span>
                        <input
                            className="input py-2 px-2 bg-gray-200 rounded-lg outline-none  border-none font-medium"
                            type="text"
                            name="name"
                            onChange={handleInputChange}
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="block text-sm font-sans text-white mb-3">Email</span>
                        <input
                            className="input py-2 px-2 bg-gray-200 rounded-lg outline-none  border-none font-medium"
                            type="email"
                            name="email"
                            onChange={handleInputChange}
                        />
                    </label>
                    <label className="flex flex-col w-80">
                        <span className="block text-sm font-medium text-white mb-4">Message</span>
                        <textarea
                            className=" py-2 px-2  rounded-lg outline-none  border-none 
                        font-medium bg-slate-200 h-40"
                            name="message"
                            onChange={handleInputChange}
                        />
                    </label>
                    <Button primary rounded type="submit" className="mx-12 hover:bg-blue-900 text-xl px-0 justify-center"
                        onClick={handleClick}
                        loading={loading}
                    >
                        Send
                    </Button>
                </form>
            </div>

            <div className='xl:flex-1 xl:h-auto md:h-[250px] h-[350px]'>
            </div>

            <MapComp />


        </div>
    )
}
export default Contact;