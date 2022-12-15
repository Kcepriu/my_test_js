const userLogin = prompt("Enter your Login");
const hours = new Date().getHours();
/*  */
if (userLogin === "User" || userLogin === "Admin") {
  // розгалудження на USER
  if (userLogin === "User") {
    const userPassword = prompt("Enter your password");
    if (userPassword === "UserPass") {
      if (hours > 5 && hours < 20) {
        alert('"Good day, dear User!"');
      } else {
        alert("Good evening, dear User!");
      }
    } else if (userPassword === ""  || userPassword === null) {
      alert("Canceled.");
    } else {
      alert("Wrong password");
    }

    // розгалудження на ADMIN
  } else if (userLogin === "Admin") {
    const adminPassword = prompt("Enter your password");
    if (adminPassword === "RootPass") {
      if (hours > 5 && hours < 20) {
        alert('"Good day, dear Admin!"');
      } else {
        alert("Good evening, dear Admin!");
      }
    } else if (adminPassword === "" ||  adminPassword === null) {
      alert("Canceled.");
    } else {
      alert("Wrong password");
    }
  }
  // Продовження першого if
} else if (userLogin === ""  || userLogin === null) {
  alert("Canceled.");
} else if (userLogin.length < 4) {
  alert("I don't know any users having name length less than 4 symbols");
} else {
  alert("I don't know you");
}