# HTML-Trusted-Input

## Summary

Chrome extension that allows the user to encrypt and decrypt content on untrusted webpages. The interface works seamlessly with pre-existing websites and creates "trusted" elements on the page that the server cannot access.

## Features

From the context menu, the user can convert a textarea on a webpage into a trusted textarea that the foreign server cannot access. User inputted text in this textarea is encrypted and placed back into the original textarea when the user submits it.

The extension also provides the ability to decrypt blocks of text in place on a webpage. The foreign server cannot read this decrypted content.

A border is drawn around the trusted area of the page when the extension is active, to alert the user. The border color is customizeable so that ther server cannot spoof it. 

## Implementation

The trusted areas are implemented with iframes superimposed on top of the original website, using static webpages located on the local machine. CSS styling is identical between the original website and the trusted elements.


