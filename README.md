# HTML-Trusted-Element

HTML DOM element for running untrusted code with access to user data in a sandboxed environment.

## <trusted-frame>

### Summary

The HTMLTrustedElement provides properties and methods for running untrusted code with access to user data in a sandboxed environment.

### Attributes

+ encryptedSize: The size of the encrypted data that can be set and read from the element.

### Properties

### Functions

+ getEncryptedValue (DOMString[size: encryptedSize]): Returns the encrypted data from the element.
+ setEncryptedValue (DOMString[size: encryptedSize]): Sends encrypted data to the element. 
+ clear: Asks the element to clear its data.

## <load-resource>

###Attributes

+ src
