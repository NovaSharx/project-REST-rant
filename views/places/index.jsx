const React = require('react')
const Def = require('../default')

function index(data) {
    let placesFormatted = data.places.map((place, index) => {
        return (
            <div className=" col-sm-6 col-md-4 col-lg-3 place-item">
                <h2 className="text-center">
                    <a href={`/places/${place.id}`}>{place.name}</a>
                </h2>
                <p className="text-center">
                    {place.cuisines}
                </p>
                <img className="places-image" src={place.pic} alt={place.name} />
                <p className="text-center">
                    Located in {place.city}, {place.state}
                </p>
            </div>
        )
    })

    return (
        <Def>
            <h1>Places to Rant or Rave About</h1>
            <div className="row">
                {placesFormatted}
            </div>
        </Def>
    )
}

module.exports = index