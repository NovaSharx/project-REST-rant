const React = require('react')
const Def = require('./default')

function home() {
    return (
        <Def>
            <main>
                <h1>REST-Rant</h1>
                <h3 id="hero-headline">An App Where Users Can Review Restaurants!</h3>
                <div id="hero-section">
                    <img id="hero-image" src="./images/home_hero_image.jpg" alt="Home Hero Image" />
                    <div id="hero-credit">
                        Photo by <a href="https://unsplash.com/@brookelark">Brooke Lark</a> on <a href="https://unsplash.com/">Unsplash</a>
                    </div>
                </div>

                <div id="call-to-action">
                    <a href="/places">
                        <button className='btn btn-primary btn-lg'>PLACES PAGE</button>
                    </a>
                </div>

            </main>
        </Def>
    )
}

module.exports = home