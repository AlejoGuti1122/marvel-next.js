import CardsList from "@/app/modules/common/components/CardsList/CardsList"
import Layout from "@/app/modules/home/components/Layout/Layout"
import React from "react"

const home = () => {
  return (
    <div>
      <Layout />
      <div>
        <CardsList/>
      </div>
    </div>
  )
}

export default home
