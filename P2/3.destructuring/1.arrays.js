// Destructuring Arrays
 
const DesktopEnvironments = ['GNOME','KDE','Hyprland','XCFE','Cinnamon','MATE','Unity'];

const [bloat, mid, GOAT, ...low] = DesktopEnvironments;
console.log(GOAT, mid, bloat, ...low);