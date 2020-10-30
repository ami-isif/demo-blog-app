export const user = {
username: "akuansah59@gmail.com",
password:  "12345",
loggedIn:  false,
SetloggedIn ( loggedInState ) {
  this.loggedIn= loggedInState;
 }
}

export function login(username,password) {
    if (username === user.username && password === user.password) {
        user.SetloggedIn(true);
        return true;
    }

return false;
}

export function logout(){
    user.loggedIn = false;
}
