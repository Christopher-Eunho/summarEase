// Add a listener to the button click event.
document.getElementById('addBtn').addEventListener('click', function() {
    // Get the current tab's URL and log it to the console.
    chrome.tabs.query({ active: true, currentWindow: true }, async function(tabs) {
    let url = tabs[0].url;
    // Send popupData to localhost:15000/database as a POST request
    const postResponse = await fetch('http://localhost:8000/extension', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({url})
    });

    // Check the response status of the POST request
    if (postResponse.status === 200) {
        console.log('Popup data sent successfully!');
    } else {
        console.log('Failed to send popup data.');
    }    
    });
  });