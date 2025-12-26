const firebaseConfig = {
  apiKey: "AIzaSyBuXDtvUfpo8MgoG_0Y0ucVQLGing1XNl4",
  authDomain: "gimnasioweb-920c6.firebaseapp.com",
  databaseURL: "https://gimnasioweb-920c6-default-rtdb.firebaseio.com",
  projectId: "gimnasioweb-920c6",
  storageBucket: "gimnasioweb-920c6.firebasestorage.app",
  messagingSenderId: "737345422248",
  appId: "1:737345422248:web:e59554ae93c2b038df139d"
};
// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("Cr");

document.getElementById("Cr").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var namecr = getElementVal("name");
  var emailidcr = getElementVal("emailid");
  var msgContentcr = getElementVal("msgContent");

  saveMessages(namecr, emailidcr, msgContentcr);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("Cr").reset();
}

const saveMessages = (namecr, emailidcr, msgContentcr) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    namecr: namecr,
    emailidcr: emailidcr,
    msgContentcr: msgContentcr,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
