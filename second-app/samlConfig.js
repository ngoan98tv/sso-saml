const fs = require('fs');

module.exports = {
    logoutUrl: 'http://localhost:8080/simplesaml/saml2/idp/SingleLogoutService.php',
    entryPoint: 'http://localhost:8080/simplesaml/saml2/idp/SSOService.php',
    issuer: 'second-app',
    identifierFormat: null,
    decryptionPvk: fs.readFileSync(__dirname + '/certs/key.pem', 'utf8'),
    privateCert: fs.readFileSync(__dirname + '/certs/key.pem', 'utf8'),
    validateInResponseTo: false,
    disableRequestedAuthnContext: true
}