import React from 'react'
import background from '../images/iphone-12-pro-xtmobile_-banner.jpg'
function Banner(props) {
    return (
        <div class="bg-dark py-5" style={{ backgroundImage: `url(${background})` }}>
            <div className="container px-4 px-lg-5 my-5">
                <div class="text-center text-white">
                    <h1 class="display-4 fw-bolder">{props.name}</h1>
                    <p class="lead fw-normal text-white-50 mb-0">{props.title}</p>
                </div>
            </div>
        </div>
    )
}

export default Banner
