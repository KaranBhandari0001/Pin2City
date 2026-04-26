let dataList = [];

document.addEventListener("DOMContentLoaded", () => {
  chrome.storage.local.get(["pincodeData"], function (result) {
    if (result.pincodeData) {
      dataList = result.pincodeData;
      updateTable();
    }
  });

  document.getElementById("clearBtn").addEventListener("click", clearList);
  document.getElementById("downloadBtn").addEventListener("click", downloadExcel);
});

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

  chrome.storage.local.set({
    pincodeData: []
  });

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