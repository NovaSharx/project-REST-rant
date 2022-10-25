const React = require('react')

function Def(html) {
    return (
        <html>
            <head>
                <title>Title</title>
                {/* BOOTSTRAP CDN LINK */}
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" />
                {/* STATIC CSS LINK */}
                <link rel="stylesheet" href="/css/style.css" />
            </head>
            <body>
                <div className="content">
                    <nav>
                        <ul>
                            <li> <a href="/">Home</a> </li>
                            <li> <a href="/places">Places</a> </li>
                            <li> <a href="/places/new">Add Place</a> </li>
                        </ul>
                    </nav>
                    <div className="content-inside">
                        {html.children}
                    </div>
                </div>
                <footer>
                    LinkedIn Link Here
                </footer>
            </body>
        </html>
    )
}

module.exports = Def