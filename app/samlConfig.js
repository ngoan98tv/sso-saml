const fs = require('fs');

module.exports = {
    callbackUrl: 'http://localhost/login/callback',
    entryPoint: 'http://localhost:8080/simplesaml/saml2/idp/SSOService.php',
    logoutUrl: 'http://localhost:8080/simplesaml/saml2/idp/SingleLogoutService.php',
    logoutCallbackUrl: 'http://localhost/logout/callback',
    issuer: 'saml-poc',
    identifierFormat: null,
    decryptionPvk: fs.readFileSync(__dirname + '/certs/key.pem', 'utf8'),
    privateCert: fs.readFileSync(__dirname + '/certs/key.pem', 'utf8'),
    validateInResponseTo: false,
    disableRequestedAuthnContext: true
}