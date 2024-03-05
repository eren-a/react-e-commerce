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
                <a href="/">Find your Store</a>
                <a href="/">Our Locations</a>
                <a href="/">Customer Service</a>
                <a href="/">Contact Us</a>
                <a href="/">About</a>
            </div>
        </>
    )
}

export default Bottom
