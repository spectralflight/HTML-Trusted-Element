var DISABLED_ELEMENTS = ["a", "area"];
var HTMLAreaElement = null;
var HTMLAnchorElement = null;

Object.freeze(location.prototype);
var create_dummy_location = function (old_location) {
    new_location = Object.create(location.prototype);
    for (var prop in old_location) {
        if (typeof prop === "function") {
            new_location[prop] = function () {};
        }
        else {
            new_location[prop] = old_location[prop]
        }
    } 
    Object.freeze(new_location);
    return new_location;
}
var location = create_dummy_location(location);

var restric_document () {
    var createElementOld = Document.createElement;
    Document.prototypecreateElement = function (tag_name) {
        if (tag_name in DISABLED_ELEMENTS) {
            return null;
        }
        else {
            return createElementOld;
        }
    }
    Document.prototype.location = location;
    Object.freeze(Document.prototype);
}
restrict_document();
