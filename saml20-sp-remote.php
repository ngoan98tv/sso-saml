<?php
/**
 * SAML 2.0 remote SP metadata for SimpleSAMLphp.
 *
 * See: https://simplesamlphp.org/docs/stable/simplesamlphp-reference-sp-remote
 */
$metadata['first-app'] = array(
    'AssertionConsumerService' => 'http://localhost:8000/login/callback',
    'SingleLogoutService' => 'http://localhost:8000',
);