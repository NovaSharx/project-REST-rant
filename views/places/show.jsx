const React = require('react')
const Def = require('../default')

function show(data) {

    let comments = (
        <h3 className='inactive'>
            No comments yet
        </h3>
    )
    let rating = (
        <h3>
            Not yet rated
        </h3>
    )
    if (data.place.comments.length) {
        let sumRatings = data.place.comments.reduce((tot, c) => {
            return tot + c.stars
        }, 0)
        let averageRating = sumRatings / data.place.comments.length
        rating = (
            <h4>
                {Math.round(averageRating)} Stars
            </h4>
        )
        
        comments = data.place.comments.map(c => {
            return (
                <div className="border col-sm-6 col-md-4 col-lg-3">
                    <h2 className="rant">{c.rant ? 'Rant! >:(' : 'Rave! :D'}</h2>
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
                <h2>Rating</h2>
                {rating}
                <br />
                <h3>Located in {data.place.city}, {data.place.state}</h3>
                <div>
                    <img className='showpage-image place-image' src={data.place.pic} alt={data.place.name + ' Image'} />
                    <h2>Description</h2>
                    <h3>{data.place.showEstablished()}</h3>
                    <h4>Serving {data.place.cuisines}</h4>
                </div>
                <div>
                    <h2>Comments</h2>
                    <div className='row' style={{display: 'flex', justifyContent: 'center'}}>
                        {comments}
                    </div>
                </div>
                <div>
                    <h2>Leave a Rant or a Rave!</h2>
                    <form method='POST' action={`/places/${data.place.id}/comment`}>
                        <div className='form-group'>
                            <label htmlFor="content">Content</label>
                            <input type="text" id='content' name='content' />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="author">Author</label>
                            <input type="text" id='author' name='author' />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="stars">Star Rating</label>
                            <input type="range" id='stars' name='stars' min='0' max='5' step='0.5' />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="rant">Rant?</label>
                            <input type="checkbox" name="rant" id="rant" defaultChecked />
                        </div>
                        <br />
                        <input type="submit" className='btn btn-primary' value='Add Comment' />
                    </form>
                </div>

                <br />

                <div>
                    <a href={`/places/${data.place.id}/edit`} className='btn btn-warning'>
                        Edit
                    </a>
                    <form method='POST' action={`/places/${data.place.id}?_method=DELETE`}>
                        <input type='submit' className='btn btn-danger' value='Delete' />
                    </form>
                </div>

            </main>
        </Def>
    )
}

module.exports = show