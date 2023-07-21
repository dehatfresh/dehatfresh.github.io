importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

firebase.initializeApp({
    apiKey: "AIzaSyBjAr4ncg-GJfJ78_NMfikv6W_wrPB7uyA",
    authDomain: "dehatfresh-india.firebaseapp.com",
    projectId: "dehatfresh-india",
    storageBucket: "dehatfresh-india.appspot.com",
    messagingSenderId: "236261142113",
    appId: "1:236261142113:web:0f68e074ff6369a20fc420",
    databaseURL: "https://dehatfresh-india-default-rtdb.firebaseio.com/",
});

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);
});