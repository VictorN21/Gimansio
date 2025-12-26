const firebaseConfig = {
  apiKey: "AIzaSyBuXDtvUfpo8MgoG_0Y0ucVQLGing1XNl4",
  authDomain: "gimnasioweb-920c6.firebaseapp.com",
  databaseURL: "https://gimnasioweb-920c6-default-rtdb.firebaseio.com",
  projectId: "gimnasioweb-920c6",
  storageBucket: "gimnasioweb-920c6.firebasestorage.app",
  messagingSenderId: "737345422248",
  appId: "1:737345422248:web:e59554ae93c2b038df139d"
};

firebase.initializeApp(firebaseConfig);


var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

 
  document.querySelector(".alert").style.display = "block";


  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
