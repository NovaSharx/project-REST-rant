const React = require('react')
const Def = require('../default')

function show(data) {
    return (
        <Def>
            <main className='text-center'>
                <h1>{data.place.name}</h1>
                <p >Located in {data.place.city}, {data.place.state}</p>
                <div>
                    <h2>Rating</h2>
                    <p>Not Rated</p>
                </div>
                <div>
                    <img className='showpage-image' src={data.place.pic} alt={data.place.name + ' Image'} />
                    <h2>Description</h2>
                    <p>{data.place.cuisines}</p>
                </div>
                <div>
                    <h2>Comments</h2>
                    <p>No comments yet!</p>
                </div>
            </main>
        </Def>
    )
}

module.exports = show