const refs = {
  textColorWhite: document.querySelector(".activeKiril"),
  activeHello: document.querySelector(".activeHello"),
  activeHi: document.querySelector(".activeHi"),
  activeWhat: document.querySelector(".activeWhat"),
  activeMyName: document.querySelector(".activeMyName"),
  iconBtn1: document.querySelector(".btn-icon1"),
  iconBtn1: document.querySelector(".btn-icon1"),
  iconBtn2: document.querySelector(".btn-icon2"),
  item1: document.querySelector(".audio-start"),
  item2: document.querySelector(".audio-hi"),
  item3: document.querySelector(".audio-answer"),
  item4: document.querySelector(".audio-answer-2"),
  formSubmit: document.querySelector(".js-form"),
  btnSubmit: document.querySelector(".submit"),
  dataHello: document.querySelector('[data-hello="hello"]'),
  dataHi: document.querySelector('[data-hi="hi"]'),
  success: document.querySelector(".success"),
  item01: document.querySelector(".item-01"),
  inputEl: document.querySelector(".js-input"),
  inputEl2: document.querySelector(".js-input2"),
  audioHello: document.querySelector(".audio-hello"),
  audioBtn1: document.querySelector(".audio-btn-1"),
  audioHi: document.querySelector(".audio-hi"),
  audioBtn2: document.querySelector(".audio-btn-2"),
  audioWhat3: document.querySelector(".audio-what-is"),
  audioBtn3: document.querySelector(".audio-btn-3"),
  audioMyName: document.querySelector(".audio-mane-is"),
  audioBtn4: document.querySelector(".audio-btn-4"),
  audioAndYou: document.querySelector(".audio-amd-you"),
  audioBtn5: document.querySelector(".audio-btn-5"),
  audioIamKiril: document.querySelector(".audio-am-kiril"),
  audioBtn6: document.querySelector(".audio-btn-6"),
};

refs.iconBtn1.addEventListener("click", () => {
  refs.item1.src = "../audio/Привіт Мене звати Кі.mp3";
  // refs.iconBtn1.style.display = "none";
  const textActive = refs.textColorWhite;
  onActiveText(textActive);
});

refs.audioBtn1.addEventListener("click", () => {
  refs.audioHello.src = "../audio/boy/Hello .mp3";
  // refs.textColorWhite.classList.add("activeHello");
  // const textHello = refs.activeHello;
  onActiveText(refs.activeHello);
});

refs.audioBtn2.addEventListener("click", () => {
  refs.audioHi.src = "../audio/girl/Hi .mp3";
  onActiveText(refs.activeHi);
});

refs.audioBtn3.addEventListener("click", () => {
  refs.audioWhat3.src = "../audio/boy/What is your name .mp3";
  onActiveText(refs.activeWhat);
});

refs.audioBtn4.addEventListener("click", () => {
  refs.audioMyName.src = "../audio/girl/My name is Anna.mp3";
  onActiveText(refs.activeMyName);
});

refs.audioBtn5.addEventListener("click", () => {
  refs.audioAndYou.src = "../audio/girl/And you .mp3";
});

refs.audioBtn6.addEventListener("click", () => {
  refs.audioIamKiril.src = "../audio/boy/I am Kiril.mp3";
});

function onActiveText(active) {
  active.classList.add("voice-text-en");
}

refs.formSubmit.addEventListener("submit", onFormSubmit);
refs.inputEl.addEventListener("input", onInput);
refs.inputEl2.addEventListener("input", onInput2);

function onFormSubmit(e) {
  e.preventDefault();
  const formElements = e.currentTarget.elements;
  // console.log(formElements);

  const hello = formElements.hello.value;
  const hi = formElements.hi.value;

  if (
    (hello === "Hello ✔️" && hi === "Hi ✔️") ||
    (hello === "hello ✔️" && hi === "hi ✔️") ||
    (hello === "Hello ✔️" && hi === "hi ✔️") ||
    (hello === "hello ✔️" && hi === "Hi ✔️")
  ) {
    onAudioSuccess();
    refs.item01.classList.add("gray2");
    markupSuccess();
  } else if (hello === "Hello ✔️" || hello === "hello ✔️") {
    onAudioError();
    onSmileyError(refs.inputEl2);
    markupError();
    refs.item01.classList.add("gray3");
  } else if (hi === "Hi ✔️" || hi === "hi ✔️") {
    onAudioError();
    onSmileyError(refs.inputEl);
    markupError();
    refs.item01.classList.add("gray3");
  } else {
    onSmileyError(refs.inputEl);
    onSmileyError(refs.inputEl2);
    onAudioError();
    markupError();
    refs.item01.classList.add("gray3");
  }
}

// markup
const markupSuccess = () => {
  refs.btnSubmit.textContent = "✔️ Правильно";
  refs.btnSubmit.style.backgroundColor = "#2ecc71";
  // refs.success.innerHTML = "Будь ласка перeходьте <br /> до уроку 2";
  refs.item01.classList.add("gray2");
};

const markupError = () => {
  refs.btnSubmit.textContent = "❌ Не правильно";
  // refs.success.innerHTML = "Будь ласка спробуйте ще";
  refs.btnSubmit.style.backgroundColor = "tomato";
};

// audio
const onAudioSuccess = () => {
  refs.item3.src = "../audio/Правильна відповідь .mp3";
};

const onAudioError = () => {
  refs.item3.src = "../audio/Відповідь неправильн.mp3";
};

// input-1
function onInput(event) {
  if (
    event.currentTarget.value === "Hello" ||
    event.currentTarget.value === "hello"
  ) {
    onSmileySuccess(refs.inputEl);
  }
}

// inpup-2
function onInput2(event) {
  if (
    event.currentTarget.value === "Hi" ||
    event.currentTarget.value === "hi"
  ) {
    onSmileySuccess(refs.inputEl2);
  }
}

// emoji success and error
const onSmileySuccess = (inputSuccess) => {
  inputSuccess.value = `${inputSuccess.value} ✔️`;
};

const onSmileyError = (inputError) => {
  inputError.value = `${inputError.value} ❌`;
};
