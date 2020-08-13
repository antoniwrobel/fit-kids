import React from "react"
import Layout from "./layout"

import Swiper from "../components/Swiper"

const HomePage = () => {
  return (
    <Layout>
      <Swiper id={1} indexPage />
      <h1>Home</h1>
    </Layout>
  )
}

export default HomePage
