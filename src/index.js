

//asynchronously getting the data for the language
const changeLanguage = () => {
  let selectedLanguage = document.getElementById("language").value;
  fetch(`../locales/${selectedLanguage}.json`)
  .then(response => response.json()).then(data => {
    var languageLabels = data.labels;
    var languageInstructions = data.instructions;
    document.getElementsByName("first_name_label").forEach(element => element.innerText = languageLabels.first_name);
    document.getElementsByName("last_name_label").forEach(element => element.innerText = languageLabels.last_name);
    document.getElementsByName("email_label").forEach(element => element.innerText = languageLabels.email);
    document.getElementsByName("phone_label").forEach(element => element.innerText = languageLabels.phone);
    document.getElementsByName("submit").forEach(element => element.value = languageLabels.submit);
    document.getElementsByName("instructions_title").forEach(element => element.innerText = languageInstructions.instructions_title);
    document.getElementsByName("instructions_detail").forEach(element => element.innerText = languageInstructions.instructions_detail);
  })
}



const animateStick = () => {
  const options = document.querySelectorAll('.first_radio_button')
  Array.from(options).forEach(option => {
    const stickContainer = document.querySelectorAll(`#${option.id}_label .first_stick_figure *`);
    Array.from(stickContainer).forEach(child => {
      if(option.checked){
        child.classList.add(`activated_${child.classList[0]}`);
        return;
      }
      child.classList.remove(`activated_${child.classList[0]}`);
    });
  });
}