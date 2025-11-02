const target = document.querySelector("#target");

const browser = navigator.userAgentData.brands[0].brand;
const version = navigator.userAgentData.brands[0].version;

const data = navigator.userAgent
let os = "Not found"

if (data.includes('Windows')) os = "Windows";
if (data.includes('Linux')) os = "Linux";
if (data.includes('iPhone')) os = "iOS";
if (data.includes('Android')) os = "Android";
if (data.includes('Mac')) os = "MacOS";

const width = screen.width;
const height = screen.height;

const availWidth = screen.availWidth;
const availHeight = screen.availHeight;

const date = new Date();
const options = {
  day: "numeric",
  month: "long",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
}
const local = date.toLocaleDateString("fi-FI", options);

target.insertAdjacentHTML("beforeend", '<p> Browser: ' + browser + ' Version: ' + version + ' </p>');
target.insertAdjacentHTML("beforeend", '<p> Date and time:  ' + local + '</p>');
target.insertAdjacentHTML("beforeend", '<p> Operating system:  ' + os + '</p>');
target.insertAdjacentHTML("beforeend", '<p> Screen width ' + width  + ' Screen height: ' + height + '</p>');
target.insertAdjacentHTML("beforeend", '<p> Available Screen width ' + availWidth  + ' Available Screen height: ' + availHeight + '</p>');





