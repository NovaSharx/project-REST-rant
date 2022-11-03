const React = require('react')
const Def = require('../default')

function show(data) {

    let comments = (
        <h3 className='inactive'>
            No comments yet!
        </h3>
    )
    if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
            return (
                <div className="border">
                  <h2 className="rant">{c.rant ? 'Rant! ðŸ˜¡' : 'Rave! ðŸ˜»'}</h2>
                  <h4>{c.content}</h4>
                  <h3>
                    <stong>- {c.author}</stong>
                  </h3>
                  <h4>Rating: {c.stars}</h4>
                </div>
              )
        })
    }

    return (
        <Def>
            <main className='text-center'>
                <h1>{data.place.name}</h1>
                <h3>Located in {data.place.city}, {data.place.state}</h3>
                <div>
                    <img className='showpage-image' src={data.place.pic} alt={data.place.name + ' Image'} />
                    <h2>Description</h2>
                    <h3>{data.place.showEstablished()}</h3>
                    <h4>Serving {data.place.cuisines}</h4>
                </div>
                <div>
                    <h2>Comments</h2>
                    {comments}
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