chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "addToPin2City",
    title: "Add to Pin2City",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info) => {
  if (info.menuItemId === "addToPin2City") {
    let selectedText = info.selectionText;

    // Extract only 6 digit pincode
    let match = selectedText.match(/\b\d{6}\b/);

    if (match) {
      let pin = match[0];

      chrome.storage.local.get(["pincodeData"], function (result) {
        let dataList = result.pincodeData || [];

        // Duplicate check
        if (dataList.some(item => item.pincode === pin)) {
          return;
        }

        fetch(`https://api.postalpincode.in/pincode/${pin}`)
          .then(res => res.json())
          .then(data => {
            let city = "";
            let state = "";

            if (
              data &&
              data[0] &&
              data[0].PostOffice &&
              data[0].PostOffice.length > 0
            ) {
              let info = data[0].PostOffice[0];

              city = info.District || "";
              state = info.State || "";
            }

            // Even if API fails → pincode still save
            let entry = {
              city: city,
              state: state,
              pincode: pin
            };

            dataList.push(entry);

            chrome.storage.local.set({
              pincodeData: dataList
            });
          })
          .catch(() => {
            // API completely failed → still save pincode
            let entry = {
              city: "",
              state: "",
              pincode: pin
            };

            dataList.push(entry);

            chrome.storage.local.set({
              pincodeData: dataList
            });
          });
      });
    }
  }
});