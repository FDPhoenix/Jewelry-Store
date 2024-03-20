import React from 'react'
import Header from '../Components/Header'
import Banner from '../Components/Banner'
import Product from '../Components/Product'
import Footer from '../Components/Footer'

function ProductPage() {
  return (
    <div>
      <Header />
      <Banner name='All Product' />
      <Product />
      <Footer />
    </div>
  )
}

export default ProductPage
