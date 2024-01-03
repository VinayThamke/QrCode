const fs = require("fs");
const qr = require("qrcode");
const readline = require("readline");

// Create a readline interface to get user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Prompt the user for the website URL
rl.question("Enter the website URL: ", (website) => {
  generateWebsiteQRCode(website);
});

// Function to generate QR code based on website
function generateWebsiteQRCode(website) {
  const dataToEncode = `Website: ${website}`;
  const filePath = "website_qrcode.png";

  qr.toFile(filePath, dataToEncode, (err) => {
    if (err) throw err;
    console.log(`Website QR code saved to: ${filePath}`);
    rl.close();
  });
}

// Handle the close event for the readline interface
rl.on("close", () => {
  process.exit(0);
});
