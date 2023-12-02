// enum

enum Roles {
  SUPER_ADMIN,
  ADMIN,
  MANAGER,
  SELLER,
  BUYER
}

let myRole: Roles = Roles.ADMIN;

function sendMessage(role: Roles) {
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