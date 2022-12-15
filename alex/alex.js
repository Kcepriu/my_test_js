
function getLogin() {
  const log_in = prompt("Input Login");

  if (!log_in) {
    alert("Canceled");
    log_in == null;
  } else if (log_in.length < 4) {
    alert("I don't know any users having name length less than 4 symbols");
    log_in = null;
  } else if (log_in !== "User"  && log_in !=="Admin") {
    alert("I don't know you");
    log_in = null;
  }
  return log_in;
}

function isPasswordCorrect(log_in, passwd) {
  let ok = false;

  if (log_in === "Admin" && passwd === "RootPass") {
    ok = true;
  }
  else if (log_in === "User" && passwd === "UserPass") {
    ok = true;
  }
  else { 
    alert("Wrong password");
  }

  return ok;
 }

function getPassword(log_in) {
  const passwd = prompt("Input Password");
  let ok = false;
  
  if (!passwd) {
    alert("Canceled.");    
  } else {
    ok = isPasswordCorrect(log_in, passwd);
  }

  return ok;
}

function printGreets(log_in) {
  const hours = new Date().getHours();

  if (hours >= 5 && hours < 20) {
    alert(`Good day, dear ${log_in}!`);
  } else { 
    alert(`Good evening, dear ${log_in}!`);
  }

}

function autentification() {
  const log_in = getLogin();
  
  if (!log_in) {
    return;
  }

  const passwd = getPassword(log_in);
  
  if (!passwd) {
    return;
  }

  printGreets(log_in);
}

autentification();