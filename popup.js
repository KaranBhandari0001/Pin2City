let dataList = [];

// Load saved data
document.addEventListener("DOMContentLoaded", () => {

  chrome.storage.local.get(["pincodeData"], function (result) {
    if (result.pincodeData) {
      dataList = result.pincodeData;
      updateTable();
    }
  });

  // Button Events
  document.getElementById("addBtn").addEventListener("click", addPincode);
  document.getElementById("clearBtn").addEventListener("click", clearList);
  document.getElementById("downloadBtn").addEventListener("click", downloadExcel);
});

function saveData() {
  chrome.storage.local.set({
    pincodeData: dataList
  });
}

function addPincode() {
  let pin = document.getElementById("pincode").value.trim();

  if (!pin) {
    alert("Enter pincode");
    return;
  }

  if (pin.length !== 6 || isNaN(pin)) {
    alert("Invalid pincode");
    return;
  }

  // Duplicate check
  if (dataList.some(item => item.pincode === pin)) {
    alert("Already added");
    return;
  }

  fetch(`https://api.postalpincode.in/pincode/${pin}`)
    .then(res => res.json())
    .then(data => {
      if (
        data &&
        data[0] &&
        data[0].Status === "Success" &&
        data[0].PostOffice &&
        data[0].PostOffice.length > 0
      ) {
        let info = data[0].PostOffice[0];

        // Shipping City = District
        let entry = {
          city: info.District || "N/A",
          state: info.State || "N/A",
          pincode: pin
        };

        dataList.push(entry);
        saveData();
        updateTable();

        document.getElementById("pincode").value = "";
      } else {
        alert("No data found");
      }
    })
    .catch(() => {
      alert("API error");
    });
}

function updateTable() {
  let tbody = document.getElementById("tableBody");
  tbody.innerHTML = "";

  dataList.forEach(item => {
    let row = document.createElement("tr");

    row.innerHTML = `
      <td>${item.city}</td>
      <td>${item.state}</td>
      <td>${item.pincode}</td>
    `;

    tbody.appendChild(row);
  });
}

function clearList() {
  dataList = [];
  saveData();
  updateTable();
}

function downloadExcel() {
  if (dataList.length === 0) {
    alert("No data");
    return;
  }

  let csv = "Shipping City,State,Pincode\n";

  dataList.forEach(item => {
    csv += `${item.city},${item.state},${item.pincode}\n`;
  });

  let blob = new Blob([csv], {
    type: "text/csv;charset=utf-8;"
  });

  let url = URL.createObjectURL(blob);

  let a = document.createElement("a");
  a.href = url;
  a.download = "Pin2City_Data.csv";
  a.click();
}