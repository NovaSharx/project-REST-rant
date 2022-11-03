const React = require('react')
const Def = require('../default')

function show(data) {
    return (
        <Def>
            <main className='text-center'>
                <h1>{data.place.name}</h1>
                <h3>Located in {data.place.city}, {data.place.state}</h3>
                <div>
                    <h2>Rating</h2>
                    <p>Not Rated</p>
                </div>
                <div>
                    <img className='showpage-image' src={data.place.pic} alt={data.place.name + ' Image'} />
                    <h2>Description</h2>
                    <h3>{data.place.showEstablished()}</h3>
                    <h4>Serving {data.place.cuisines}</h4>
                </div>
                <div>
                    <h2>Comments</h2>
                    <p>No comments yet!</p>
                </div>

                <a href={`/places/${data.place.id}/edit`} className='btn btn-warning'>
                    Edit
                </a>
                <form method='POST' action={`/places/${data.place.id}?_method=DELETE`}>
                    <input type='submit' className='btn btn-danger' value='Delete'/>
                </form>
            </main>
        </Def>
    )
}

module.exports = show