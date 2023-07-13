
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

//asynchronously getting the data for the language
const changeLanguage = () => {
  let selectedLanguage = document.getElementById("language").value;
  fetch(`../locales/${selectedLanguage}.json`)
  .then(response => response.json()).then(data => {
    var navItems = data.nav_controls;
    var languageLabels = data.labels;
    var languageInstructions = data.instructions;
    document.getElementById("demo2").innerText = navItems.demo2;
    document.getElementsByName("name_label").forEach(element => element.innerText = languageLabels.first_name);
    document.getElementsByName("last_name_label").forEach(element => element.innerText = languageLabels.last_name);
    document.getElementsByName("email_label").forEach(element => element.innerText = languageLabels.email);
    document.getElementsByName("phone_label").forEach(element => element.innerText = languageLabels.phone);
    document.getElementsByName("submit").forEach(element => element.value = languageLabels.submit);
    document.getElementsByName("gender_m_label").forEach(element => element.innerText = languageLabels.mr);
    document.getElementsByName("gender_f_label").forEach(element => element.innerText = languageLabels.mrs);
    document.getElementsByName("instructions_title").forEach(element => element.innerText = languageInstructions.instructions_title);
    document.getElementsByName("instructions_detail").forEach(element => element.innerText = languageInstructions.instructions_detail);
    document.getElementsByName("second_instructions").forEach(element => element.innerText = languageInstructions.second_instructions);
    document.getElementsByName("first_step").forEach(element => element.innerText = languageInstructions.first_step);
    document.getElementsByName("second_step").forEach(element => element.innerText = languageInstructions.second_step);
    document.getElementsByName("third_step").forEach(element => element.innerText = languageInstructions.third_step);
    document.getElementsByName("nextButton").forEach(element => element.innerText = languageInstructions.next);
  })
}