module.exports = function(user) {
    return `
        <body style="margin: 12px auto; max-width: 600px">
            <h1>Second App</h1>
            <hr>
            <p>${user ? 'Logged as <b>' + user.email + '</b>' : "Haven't logged yet!"}</p>
            ${user ? "<a href='/logout'>Log-out</a>" : "<a href='/login'>Log-in</a>"}
        </body>
    `;
}