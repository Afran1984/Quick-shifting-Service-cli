import React from 'react'
import Bannar from '../Bannar/Bannar.jsx'
import Card from '../Card/Card.jsx'
import Service from '../Service/Service.jsx'
import PartnerSlaider from '../PartnerSlaider/PartnerSlaider.jsx'
import Featcher from '../Featcher/Featcher.jsx'

const Home = () => {
  return (
    <div>
      <Bannar></Bannar>
      <Card></Card>
      <Service></Service>
      <PartnerSlaider></PartnerSlaider>
      <Featcher></Featcher>
      
    </div>
  )
}

export default Home
