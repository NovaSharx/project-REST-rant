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
                    <div className="content-inside"></div>
                    {html.children}
                </div>
                <footer>
                    LinkedIn Link Here
                </footer>
            </body>
        </html>
    )
}

module.exports = Def