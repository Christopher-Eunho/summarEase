let code, co2, nova, productName, nutriScore; 

let contextMenuItem= {
    "id": "BiteWise",
    "title": "BiteWise",
    "contexts": ["selection"]
}



const handleContextClick = async (clickData) => {
    console.log(clickData);

    // if (clickData.menuItemId == "BiteWise" && clickData.selectionText){
    //     let barcode = clickData.selectionText;
    //     const url = "https://world.openfoodfacts.org/api/v0/product/"+barcode;
       
    //     try{
    //     const response = await fetch(url);
    //     const data = await response.json();

    //     let popupData = getPopupData(data);

    //     // Send popupData to localhost:15000/database as a POST request
    //     const postResponse = await fetch('http://localhost:15000/database', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(popupData)
    //     });

    //     // Check the response status of the POST request
    //     if (postResponse.status === 200) {
    //         console.log('Popup data sent successfully!');
    //     } else {
    //         console.log('Failed to send popup data.');
    //     }    

       
        
    //     const tabs = await chrome.tabs.query({active: true, currentWindow: true});
    //     const res = await chrome.tabs.sendMessage((tabs[0].id), popupData);
    //     } catch(error) {
    //         console.log(error);
    //     }


    // }

}

chrome.contextMenus.create(contextMenuItem);
chrome.contextMenus.onClicked.addListener(handleContextClick);
