# 📍 Pin2City – Bulk Pincode to City/State Converter

Pin2City is a simple and powerful browser extension that helps you instantly convert Indian pincodes into their corresponding **shipping city and state**.

Now with **Right Click Save Feature**, you can directly select a pincode from any webpage (like WhatsApp Web) and save it instantly without manual copy-paste.

No more switching tabs or searching Google again and again.

---

## 🚀 Why I Built This

While working on online order processing and data entry, I constantly faced one annoying problem:

👉 Every time I had a pincode, I had to manually copy it
👉 Then open the extension
👉 Paste the pincode manually
👉 Then search for the city and state

This process was repetitive, slow, and time-consuming.

So instead of wasting time, I built **Pin2City** to solve this problem for myself — and for anyone facing the same issue.

The first version (v1.0) was based on manual pincode input.

Now this is the **second version (v2.0)** with a much faster workflow using **Right Click → Add to Pin2City**.

This version makes daily order processing much faster and smoother.

---

## ✨ Features

* 🔍 **Instant Pincode Lookup**
  Get city and state in one click

* 🖱️ **Right Click Save (NEW in v2.0)**
  Select any pincode on a webpage and save it directly using right click

* ➕ **Bulk Pincode Collection**
  Save multiple pincodes while browsing without opening the popup again and again

* 📋 **Live Data Table**
  View all saved results in a clean table

* ❌ **Duplicate Prevention**
  Avoid adding the same pincode twice

* 💾 **Auto Save (Local Storage)**
  Your data stays even after closing the browser

* 🧹 **Clear List**
  Remove all entries instantly

* ⬇️ **Export to CSV (Excel Ready)**
  Download data in this format:
  `Shipping City, State, Pincode`

---

## 🛠️ Tech Stack

* HTML
* CSS
* JavaScript
* Browser Extension API
* Context Menu API
* Chrome Storage API
* Public Pincode API

---

## 📦 Installation

1. Download or clone this repository
2. Open Chrome / Edge browser
3. Go to `chrome://extensions/`
4. Enable **Developer Mode**
5. Click **Load Unpacked**
6. Select the project folder

Done ✅

---

## 📁 Project Structure

```text
pin2city/
│── manifest.json
│── popup.html
│── popup.css
│── popup.js
│── background.js
│── icons/
```

---

## ⚡ How to Use

### Method 1 — Right Click Save (Recommended)

1. Open WhatsApp Web or any webpage
2. Select a pincode like `121006`
3. Right Click
4. Click **Add to Pin2City**
5. Open extension popup
6. Download CSV

---

### Method 2 — Manual Add (v1 Method)

1. Copy pincode manually
2. Open extension
3. Paste and Add
4. Export CSV

---

## 🎯 Use Cases

* E-commerce order processing
* Logistics & shipping work
* WhatsApp order management
* Data entry tasks
* Bulk pincode lookup

---

## 💡 Future Improvements

* Full address extractor (Name + Address + Phone + Pincode)
* One-click autofill in shipping forms
* Bulk paste support
* Better shipping city accuracy
* Dark mode UI
* Multi-API fallback system
* Smart automation features

This is just the beginning 🚀

---

## 🤝 Contributing

Feel free to fork this project and improve it.

---

## 📄 License

MIT License

---

## ⭐ Support

If you found this useful, consider giving it a ⭐ on GitHub!
