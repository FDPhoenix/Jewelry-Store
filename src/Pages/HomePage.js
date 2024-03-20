import React from 'react'
import Header from '../Components/Header'
import Banner from '../Components/Banner'
import Footer from '../Components/Footer'
import Product from '../Components/Product'


function HomePage() {
  return (
    <div>
      <Header />
      <Banner name='Apple China' title='Think Different - Không Gì Không Thể Làm Giả' />
      <Product number='8' />
      <Footer />
    </div>
  )
}

export default HomePage
