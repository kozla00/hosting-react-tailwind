import React from "react"
import Header from '../components/header/Header'
import Securitylist from "../components/securitylist/Securitylist"
import Message from '../components/message/Message'
import Footer from '../components/footer/Footer'



const Security = () => {
    return (
        <div>
            <Header />
            <Securitylist />
            <Message />
            <Footer />         
        </div>
    )
}

export default Security