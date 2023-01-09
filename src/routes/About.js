import React from "react"
import Header from '../components/header/Header'
import Message from '../components/message/Message'
import Footer from '../components/footer/Footer'
import Aboutcompany from "../components/aboutcompany/Aboutcompany"


const About = () => {
    return (
        <div>
            <Header />
            <Aboutcompany />
            <Message />
            <Footer />         
        </div>
    )
}

export default About