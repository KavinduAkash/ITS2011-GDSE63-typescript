// enum
var Roles;
(function (Roles) {
    Roles[Roles["SUPER_ADMIN"] = 0] = "SUPER_ADMIN";
    Roles[Roles["ADMIN"] = 1] = "ADMIN";
    Roles[Roles["MANAGER"] = 2] = "MANAGER";
    Roles[Roles["SELLER"] = 3] = "SELLER";
    Roles[Roles["BUYER"] = 4] = "BUYER";
})(Roles || (Roles = {}));
var myRole = Roles.ADMIN;
function sendMessage(role) {
    switch (role) {
        case Roles.SUPER_ADMIN:
            console.log("Hello, Super Admin");
            break;
        case Roles.ADMIN:
            console.log("Hello, Admin");
            break;
        case Roles.MANAGER:
            console.log("Hello, Manager");
            break;
        case Roles.SELLER:
            console.log("Hello, Seller");
            break;
        default:
            console.log("Hello, buyer");
    }
}
sendMessage(Roles.SELLER);
