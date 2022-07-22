//**********-**************
//declaración, para modo dark-light
const btnSwitch = document.querySelector("#switch"); //queryselector esta por id

btnSwitch.addEventListener("click", () => {
  document.body.classList.toggle("dark"); //Cambiamos la condición de la clase en el body, agregando dark
  btnSwitch.classList.toggle("active"); //Cambiamos la condición de la clase switch en el boton, agregando active
});

//**********-**************
//declaración, para función color
const toggleColors = document.getElementById("toggle-colors");
const rootStyles = document.documentElement.style; //Aqui es donde tenemos todas las variables de nuestro CSS

//Elemento escucha para trabajar con los colores
toggleColors.addEventListener("click", (e) => {
  //console.log(e.target.dataset);
  rootStyles.setProperty("--primary-color", e.target.dataset.color);
});

//**********-**************
//Elemento escucha para trabajar abrir paginas de enlace footer
window.onload = function () {
  const btn_mail = document.getElementById("btn_mail");
  btn_mail.addEventListener("click", (e) => {
    window.open("mailto:dojofre@gmail.com");
  });

  const btn_whatsapp = document.getElementById("btn_whatsapp");
  btn_whatsapp.addEventListener("click", (e) => {
    window.open("https://wa.me/56954041295");
  });

  const btn_linkedin = document.getElementById("btn_linkedin");
  btn_linkedin.addEventListener("click", (e) => {
    window.open(
      "https://cl.linkedin.com/in/domingo-carlos-jofre-labarca-920198124"
    );
  });

  const btn_github = document.getElementById("btn_github");
  btn_github.addEventListener("click", (e) => {
    window.open("https://github.com/dojofre/Portafolio");
  });
};

//**********-**************
//declaración, para función lenguaje
const flagsElement = document.getElementById("flags");
const textsToChange = document.querySelectorAll("[data-section]"); //Al seleccionar por el atributo data-section obtenemos todos los atributos a modificar

//Elemento escucha para trabajar cambio de lenguaje
flagsElement.addEventListener("click", (e) => {
  //console.log(e.target.parentElement.dataset.language);
  changeLanguage(e.target.parentElement.dataset.language);
});

const changeLanguage = async (language) => {
  //función asincrona, ya que tarda un tiempo en leer el Json de lenguaje
  const requestJson = await fetch(`./languages/${language}.json`); //con la función fetch, pasamos la ruta donde esta el Json
  const texts = await requestJson.json(); //para transformarlo en objeto y poder utilizarlo en Js
  //console.log(texts);

  //se hace bucle para recorrer los data-section, se declara una nueva variable textToChange
  for (const textToChange of textsToChange) {
    //console.log(textsToChange);
    const section = textToChange.dataset.section;
    const value = textToChange.dataset.value;
    //console.log(section, value);

    textToChange.innerHTML = texts[section][value];
  }
};
