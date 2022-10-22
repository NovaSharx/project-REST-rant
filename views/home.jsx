const React = require('react')
const Def = require('./default')

function home() {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img className="centered-image" src="./images/home_hero_image.jpg" alt="Home Hero Image" />
                    <div>
                    Photo by <a href="https://unsplash.com/@brookelark">Brooke Lark</a> on <a href="https://unsplash.com/">Unsplash</a>
                    </div>
                </div>

                <a href="/places">
                    <button className='btn btn-primary'>Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home