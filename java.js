const apiKey = "grandeurlildnbn804990ji402ll13t7";
const accessKey = "c8b8b67dd919344834650127d9ec321fca79f46dd01b514477b45ea0ec53ac27";
const accessToken = "cac4db8cac536eec83693f973a42caa5d30d07fdff8e0dc51e38523462ff97f8";
const YourUserEmail = "shilamsengi23@gmail.com"; 
const YourUserPassword = "babashila"; 

const project = grandeur.init(apiKey, accessKey, accessToken);
project.auth().login(YourUserEmail, YourUserPassword);

// This subscribes to the "millis" variable.
project.devices().device(YourDeviceId).data().on("millis", (path, value) => document.getElementById("data").innerHTML = value);
