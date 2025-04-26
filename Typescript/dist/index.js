"use strict";
// let array: any[];
const arc = (user) => {
    if (user.role === "admin" || user.role === "owner") {
        return true;
    }
    else
        return false;
};
const arjav = {
    uname: "arjav0703",
    name: "Arjav",
    age: 15,
    email: "arjav@hackclub.app",
    role: "owner",
};
if (arc(arjav)) {
    console.log(`Access granted to ${arjav.uname}`);
}
else {
    console.log(`Access denied to ${arjav.uname}`);
}
