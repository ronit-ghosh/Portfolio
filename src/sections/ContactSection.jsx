import axios from "axios"
import { useState } from "react"
import { Slide, toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

const ContactSection = () => {
    const [fullname, setFullname] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const URL = import.meta.env.VITE_REACT_APP_BACKEND_URL

    async function handleSubmit() {
        try {
            setLoading(true)
            const response = await axios.post(`${URL}/contact`, { fullname, email, message })
            toast.success(response.data.msg)
            setLoading(false)
            setFullname('')
            setEmail('')
            setMessage('')
            setError('')
        } catch (error) {
            setError(error.response.data.msg)
            setLoading(false)
        }
    }

    return (
        <section className="text-subtext bg-background body-font relative">

            <ToastContainer
                position="top-right"
                autoClose={1200}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
                theme="dark"
                transition={Slide}
            />
            <div className="container px-5 pt-16 mx-auto">
                <div className="flex flex-col text-center w-full mb-6">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-heading">Contact Me</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Feel free to reach out to me htmlFor any collaboration or opportunities. <span className="font-semibold hover:underline cursor-pointer">work.ronitghosh@gmail.com</span> </p>
                </div>
                <div className="w-full h-6 flex justify-center items-center text-rose-600">{error}</div>
                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                    <div className="flex flex-wrap -m-2">
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="name" className="leading-7 text-sm text-subtext">Name</label>
                                <input onChange={(e) => setFullname(e.target.value)} type="text" value={fullname} id="name" name="name" placeholder="" className="bg-transparent w-full bg-opacity-50 rounded border border-border focus:border-accent focus:bg-transparent focus:ring-2 focus:ring-accent/80 text-base outline-none text-subtext py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
                            </div>
                        </div>
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="email" className="leading-7 text-sm text-subtext">Email</label>
                                <input onChange={(e) => setEmail(e.target.value)} type="email" value={email} id="email" name="email" placeholder="" className="w-full bg-transparent bg-opacity-50 rounded border border-border focus:border-accent focus:bg-transparent focus:ring-2 focus:ring-accent/80 text-base outline-none text-subtext py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <div className="relative">
                                <label htmlFor="message" className="leading-7 text-sm text-subtext">Message</label>
                                <textarea onChange={(e) => setMessage(e.target.value)} value={message} id="message" name="message" className="bg-transparent w-full bg-opacity-50 rounded border border-border focus:border-accent focus:bg-transparent focus:ring-2 focus:ring-accent/80 h-32 text-base outline-none text-subtext py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                            </div>
                        </div>
                        <div className="p-2 w-full flex justify-center">
                            <button onClick={handleSubmit} className="flex items-center justify-center overflow-hidden text-white bg-accent border-0 h-11 w-28 focus:outline-none hover:bg-accent_hover rounded text-lg">
                                {loading ?
                                    <div className="flex-col gap-4 w-full flex items-center justify-center">
                                        <div className="w-8 h-8 border-4 border-transparent text-gray-200 text-4xl animate-spin flex items-center justify-center border-t-gray-100 rounded-full">
                                            <div className="w-5 h-5 border-4 border-transparent text-gray-400 text-2xl animate-spin flex items-center justify-center border-t-gray-300 rounded-full"></div>
                                        </div>
                                    </div>
                                    :
                                    'Submit'
                                }
                            </button>
                        </div>
                        <div className="p-2 w-full mt-16 border-t border-border text-center"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection
