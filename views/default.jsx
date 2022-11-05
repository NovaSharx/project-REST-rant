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
                            <li> <a href="/" key='home'>Home</a> </li>
                            <li> <a href="/places" key='places'>Places</a> </li>
                            <li> <a href="/places/new" key='add-place'>Add Place</a> </li>
                        </ul>
                    </nav>
                    <div className="content-inside">
                        {html.children}
                    </div>
                </div>
                <footer>
                    Author: Davin Jones
                </footer>
            </body>
        </html>
    )
}

module.exports = Def