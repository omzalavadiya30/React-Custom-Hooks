# 📦 React Custom Hook – useFetch

A React application built using Vite and Tailwind CSS (latest) that demonstrates how to create and use a custom hook (useFetch) for fetching data from an external API in a clean, reusable, and scalable way.

## 🚀 Live Demo

🔗 Netlify Deployment:
- [Netlify](https://vite-keeper-app.netlify.app/)

##  🛠️ Tech Stack

* React (Vite)
* Tailwind CSS (Latest version)
* JavaScript (ES6+)
* Fetch API
* Netlify (Deployment)

## ✨ Features

* ✅ Custom reusable useFetch hook
* ✅ Handles loading, success, and error states
* ✅ Full-screen error UI when internet is unavailable
* ✅ Scroll disabled only during loading and error states
* ✅ Responsive product grid layout
* ✅ Clean UI with full-screen black background
* ✅ API pagination handling
* ✅ Fallback handling for missing images
* ✅ Deployed and production-ready

## 📌 Custom Hook: useFetch

* The useFetch hook abstracts the data-fetching logic and returns:
    * data – fetched API data
    * loading – boolean loading state
    * error – error message if fetching fails
* This improves code readability, reusability, and separation of concerns.

## 🌐 API Used

https://api.escuelajs.co/api/v1/products

## 🎨 UI & Responsiveness

* Built using Tailwind CSS utility classes
* Responsive grid:
    * 1 column on mobile
    * 2 columns on tablets
    * 3–4 columns on larger screens
* Full-screen black background across all states
* Clean, centered error and loading screens

## ⚠️ Error & Offline Handling

* Displays a full-screen error message when the internet is unavailable
* Disables scrolling only during loading and error states
* Restores scrolling automatically once data is loaded
* Ensures a smooth and controlled user experience

## 🧠 Key Design Decisions

* Created a custom hook to centralize API logic
* Used Tailwind CSS for rapid and responsive UI development
* Managed API pagination explicitly instead of assuming full data
* Added fallback images to prevent UI breakage
* Controlled scroll behavior dynamically for better UX