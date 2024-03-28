// Get the current URL
var currentUrl = window.location.href;

// Check if the current URL is localhost
var isLocalhost = currentUrl.includes("localhost");

// Check if the current URL starts with "https://"
var isSecure = currentUrl.startsWith("https://");

// Output the results
if (isLocalhost) {
  console.log("Current URL is localhost.");
  // Wait for the DOM content to be fully loaded
  document.addEventListener("DOMContentLoaded", function() {
    // Get the link element by its ID
    var link = document.getElementById("dashboard");
    
    // Check if the link element exists
    if (link) {
        // Set the new href attribute value
        link.href = "http://localhost/fixorfix/dashboard.php/";
    } else {
        console.log("Link element not found.");
    }
  });
} else if (isSecure) {
  console.log("Current URL is secure (https://).");
    // Wait for the DOM content to be fully loaded
    document.addEventListener("DOMContentLoaded", function() {
      // Get the link element by its ID
      var link = document.getElementById("dashboard");
      
      // Check if the link element exists
      if (link) {
          // Set the new href attribute value
          link.href = "https://fixorfix.com/dashboard.php/";
      } else {
          console.log("Link element not found.");
      }
    });
} else {
  console.log("Current URL is neither localhost nor secure.");
}

