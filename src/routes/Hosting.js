import React from "react"
import Header from '../components/header/Header'
import Message from '../components/message/Message'
import Footer from '../components/footer/Footer'
import Host from "../components/host/Host"
import Webhost from "../components/webhost/Webhost"


const Hosting = () => {
    return (
        <div>
            <Header />
            <Host />
            <Webhost />
            <Message />
            <Footer />         
        </div>
    )
}

export default Hosting