

//asynchronously getting the data for the language
const changeLanguage = () => {
  let selectedLanguage = document.getElementById("language").value;
  fetch(`../locales/${selectedLanguage}.json`)
  .then(response => response.json()).then(data => {
    var languageLabels = data.labels;
    document.getElementById("first_name_label").innerText = languageLabels.first_name;
    document.getElementById("last_name_label").innerText = languageLabels.last_name;
    document.getElementById("email_label").innerText = languageLabels.email;
    document.getElementById("phone_label").innerText = languageLabels.phone;
    document.getElementById("submit").value = languageLabels.submit;
  })
}