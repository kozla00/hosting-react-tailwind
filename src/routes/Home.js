import React from "react"
import Header from '../components/header/Header'
import Hero from '../components/hero/Hero'
import Analytics from '../components/analytics/Analytics'
import Servicemedal from '../components/servicemedal/Servicemedal'
import Choose from '../components/choose/Choose'
import Pricing from '../components/pricing/Pricing'
import Questions from '../components/questions/Questions'
import Client from '../components/client/Client'
import Team from '../components/team/Team'
import Message from '../components/message/Message'
import Footer from '../components/footer/Footer'


const Home = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Servicemedal />
            <Analytics />
            <Choose />
            <Pricing />
            <Questions />
            <Client />
            <Team />
            <Message />
            <Footer />         
        </div>
    )
}

export default Home