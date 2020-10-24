import React from 'react'
import { useFetchApi } from '../hooks/useFetchApi'

import Layout from '../components/Layout'
import Search from '../components/Search'
import CardSquare from '../components/CardSquare'
import CardVertical from '../components/CardVertical'
import CardHorizontal from '../components/CardHorizontal'
import CardInfo from '../components/CardInfo'
import ListSimpleStore from '../components/ListSimpleStore'
import ListCategories from '../components/ListCategories'
import ListStores from '../components/ListStores'

const Index = () => {

  const [itemList] = useFetchApi('https://apidjangoprueba.azurewebsites.net/api/items-list/')

  console.log(itemList)

  return (
    <Layout>
      <Search></Search>
      <ListCategories></ListCategories>
      <hr />
      <ListSimpleStore></ListSimpleStore>
      <hr />
      <ListStores></ListStores>
      <hr />
      <CardSquare />
      <CardVertical />
      <CardHorizontal />
      <CardInfo />
    </Layout>
  )
}

export default Index
