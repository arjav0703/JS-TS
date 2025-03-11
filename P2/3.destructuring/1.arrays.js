// Destructuring Arrays
 
// const DesktopEnvironments = ['GNOME','KDE','Hyprland','XCFE','Cinnamon','MATE','Unity'];

// const [bloat, mid, GOAT, ...low] = DesktopEnvironments; // destructuring array
// console.log(GOAT, mid, bloat, ...low);

// console.log(...DesktopEnvironments) // spread operator


// Challenge
const colors = ["red", "green", "blue", "yellow", "orange"];

// Your task is to use array destructuring to extract the first three colors from the colors array and assign them to separate variables named color1, color2, and color3.

// After extracting the colors, log each variable's value to the console.

//----------------------------------------------
const [color1, color2, color3, ...remainingColors] = colors

console.log(color1, color2, color3);