const ContactSection = () => {
    return (
        <section className="text-subtext bg-background body-font relative">
            <div className="container px-5 pt-16 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-heading">Contact Me</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Feel free to reach out to me htmlFor any collaboration or opportunities. <span className="font-semibold hover:underline cursor-pointer">work.ronitghosh@gmail.com</span> </p>
                </div>
                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                    <div className="flex flex-wrap -m-2">
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="name" className="leading-7 text-sm text-subtext">Name</label>
                                <input type="text" id="name" name="name" placeholder="" className="bg-transparent w-full bg-opacity-50 rounded border border-border focus:border-accent focus:bg-transparent focus:ring-2 focus:ring-accent/80 text-base outline-none text-subtext py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
                            </div>
                        </div>
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="email" className="leading-7 text-sm text-subtext">Email</label>
                                <input type="email" id="email" name="email" placeholder="" className="w-full bg-transparent bg-opacity-50 rounded border border-border focus:border-accent focus:bg-transparent focus:ring-2 focus:ring-accent/80 text-base outline-none text-subtext py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <div className="relative">
                                <label htmlFor="message" className="leading-7 text-sm text-subtext">Message</label>
                                <textarea id="message" name="message" className="bg-transparent w-full bg-opacity-50 rounded border border-border focus:border-accent focus:bg-transparent focus:ring-2 focus:ring-accent/80 h-32 text-base outline-none text-subtext py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <button className="flex mx-auto text-white bg-accent border-0 py-2 px-8 focus:outline-none hover:bg-accent_hover rounded text-lg">Submit</button>
                        </div>
                        <div className="p-2 w-full mt-16 border-t border-border text-center"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection
