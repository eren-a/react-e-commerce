import React from 'react'

function Bottom() {
    return (
        <>
            <div className="news-container">
                NEWSLETTER
                <input type="email" placeholder="email address"></input>
                <button>Sign me in</button>
            </div>

            <div className="links">
                <a href="/react-e-commerce/#/">Find your Store</a>
                <a href="/react-e-commerce/#/">Our Locations</a>
                <a href="/react-e-commerce/#/">Customer Service</a>
                <a href="/react-e-commerce/#/">Contact Us</a>
                <a href="/react-e-commerce/#/">About</a>
            </div>
        </>
    )
}

export default Bottom
