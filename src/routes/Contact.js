import React from "react"
import Header from '../components/header/Header'
import Message from '../components/message/Message'
import Footer from '../components/footer/Footer'
import Contactmessage from "../components/contactmessage/Contactmessage"


const Contact = () => {
    return (
        <div>
            <Header />
            <Contactmessage />
            <Message />
            <Footer />         
        </div>
    )
}

export default Contact