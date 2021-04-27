import React from 'react'
import Header from '../components/home/Header'
import MessengerCustomerChat from 'react-messenger-customer-chat';

const Home = () => {

    return <>
        <Header />

        <MessengerCustomerChat
            pageId="431464983981700"
            appId="1579746828898100"

        />
    </>
}

export default Home
