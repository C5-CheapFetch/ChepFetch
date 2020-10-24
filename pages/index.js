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
import GridCards from '../components/GridCards'

const Index = () => {

  //FETCH A LA API DE PRUEBA
  const [itemList] = useFetchApi('https://apidjangoprueba.azurewebsites.net/api/items-list/')

  
  //___local storage___
  // se guarda la llamada de la api en el local storage para usarse en toda la app
  // localStorage.setItem( "items", JSON.stringify( itemList ))
  
  // se obtienen los productos del local storage y se almacenan en una variable
  // const itemsLocalStorage = JSON.parse( localStorage.getItem("items"))
  
  // console.log(itemsLocalStorage)

  if (typeof window !== 'undefined') {
    console.log('we are running on the client')
  } else {
    console.log('we are running on the server');
  }


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
      <GridCards />
    </Layout>
  )
}

export default Index
