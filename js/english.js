const openModal = document.querySelector(".box-1");
const closeModal = document.querySelector(".closeModal-1");
const backdrop = document.querySelector(".backdrop-1");

openModal.addEventListener("click", onOpenModal);
closeModal.addEventListener("click", onCloseModal);
backdrop.addEventListener("click", onBackdrop);
function onOpenModal() {
  backdrop.classList.remove("is-hidden-1");
}

function onCloseModal() {
  backdrop.classList.toggle("is-hidden-1");
}

function onBackdrop(e) {
  if (e.currentTarget === e.target) {
    backdrop.classList.toggle("is-hidden-1");
  }
}

// Modal 2 ---------------
const openModal2 = document.querySelector(".box-2");
const closeModal2 = document.querySelector(".closeModal-2");
const backdrop2 = document.querySelector(".backdrop-2");

openModal2.addEventListener("click", onOpenModal2);
closeModal2.addEventListener("click", onCloseModal2);
backdrop2.addEventListener("click", onBackdrop2);

function onOpenModal2() {
  backdrop2.classList.remove("is-hidden-2");
}

function onCloseModal2() {
  backdrop2.classList.toggle("is-hidden-2");
}

function onBackdrop2(e) {
  if (e.currentTarget === e.target) {
    backdrop2.classList.toggle("is-hidden-2");
  }
}

// Modal 3 ---------------
const openModal3 = document.querySelector(".box-3");
const closeModal3 = document.querySelector(".closeModal-3");
const backdrop3 = document.querySelector(".backdrop-3");

openModal3.addEventListener("click", onOpenModal3);
closeModal3.addEventListener("click", onCloseModal3);
backdrop3.addEventListener("click", onBackdrop3);

function onOpenModal3() {
  backdrop3.classList.toggle("is-hidden-3");
}

function onCloseModal3() {
  backdrop3.classList.toggle("is-hidden-3");
}

function onBackdrop3(e) {
  if (e.currentTarget === e.target) {
    backdrop3.classList.toggle("is-hidden-3");
  }
}

// Modal 4 ---------------
const openModal4 = document.querySelector(".box-4");
const closeModal4 = document.querySelector(".closeModal-4");
const backdrop4 = document.querySelector(".backdrop-4");

openModal4.addEventListener("click", onOpenModal4);
closeModal4.addEventListener("click", onCloseModal4);
backdrop4.addEventListener("click", onBackdrop4);

function onOpenModal4() {
  backdrop4.classList.toggle("is-hidden-4");
}

function onCloseModal4() {
  backdrop4.classList.toggle("is-hidden-4");
}

function onBackdrop4(e) {
  if (e.currentTarget === e.target) {
    backdrop4.classList.toggle("is-hidden-4");
  }
}

// Modal 5 ---------------
const openModal5 = document.querySelector(".box-5");
const closeModal5 = document.querySelector(".closeModal-5");
const backdrop5 = document.querySelector(".backdrop-5");

openModal5.addEventListener("click", onOpenModal5);
closeModal5.addEventListener("click", onCloseModal5);
backdrop5.addEventListener("click", onBackdrop5);

function onOpenModal5() {
  backdrop5.classList.toggle("is-hidden-5");
}

function onCloseModal5() {
  backdrop5.classList.toggle("is-hidden-5");
}

function onBackdrop5(e) {
  if (e.currentTarget === e.target) {
    backdrop5.classList.toggle("is-hidden-5");
  }
}

// Modal 6 ---------------
const openModal6 = document.querySelector(".box-6");
const closeModal6 = document.querySelector(".closeModal-6");
const backdrop6 = document.querySelector(".backdrop-6");

openModal6.addEventListener("click", onOpenModal6);
closeModal6.addEventListener("click", onCloseModal6);
backdrop6.addEventListener("click", onBackdrop6);

function onOpenModal6() {
  backdrop6.classList.toggle("is-hidden-6");
}

function onCloseModal6() {
  backdrop6.classList.toggle("is-hidden-6");
}

function onBackdrop6(e) {
  if (e.currentTarget === e.target) {
    backdrop6.classList.toggle("is-hidden-6");
  }
}

const refs = {
  // додавання класу і white-color
  textColorWhite: document.querySelector(".activeKiril"),
  activeHello: document.querySelector(".activeHello"),
  activeHi: document.querySelector(".activeHi"),
  activeWhat: document.querySelector(".activeWhat"),
  activeMyName: document.querySelector(".activeMyName"),
  activeAndYou: document.querySelector(".activeAndYou"),
  activeKiril: document.querySelector(".activeKiril2"),
  activeNice: document.querySelector(".activeNice"),
  activeToo: document.querySelector(".activeToo"),
  activeHelloWhat: document.querySelector(".activeHelloWhat"),
  activeHiMy: document.querySelector(".activeHiMy"),
  activeIam: document.querySelector(".activeIam"),
  activeNiceYou: document.querySelector(".activeNiceYou"),
  activeNiceToo: document.querySelector(".activeNiceToo"),
  activeLessonBoy: document.querySelector(".activeLessonBoy"),
  activeLessonGirl: document.querySelector(".activeLessonGirl"),
  activeLessonBoy1: document.querySelector(".activeLessonBoy1"),
  activeLessonGirl1: document.querySelector(".activeLessonGirl1"),
  activeLessonBoy2: document.querySelector(".activeLessonBoy2"),
  activeLessonGirl2: document.querySelector(".activeLessonGirl2"),
  activeLessonBoy3: document.querySelector(".activeLessonBoy3"),
  activeLessonGirl3: document.querySelector(".activeLessonGirl3"),
  activeLessonBoy4: document.querySelector(".activeLessonBoy4"),
  // інший код
  iconBtn1: document.querySelector(".btn-icon1"),
  iconBtn1: document.querySelector(".btn-icon1"),
  iconBtn2: document.querySelector(".btn-icon2"),
  item1: document.querySelector(".audio-start"),
  item2: document.querySelector(".audio-hi"),
  item3: document.querySelector(".audio-answer"),
  item4: document.querySelector(".audio-answer-2"),
  // форма 1
  formSubmit: document.querySelector(".js-form"),
  btnSubmit: document.querySelector(".submit"),
  dataHello: document.querySelector('[data-hello="hello"]'),
  dataHi: document.querySelector('[data-hi="hi"]'),
  success: document.querySelector(".success"),
  item01: document.querySelector(".item-01"),
  inputEl: document.querySelector(".js-input"),
  inputEl2: document.querySelector(".js-input2"),
  // форма 2
  formSubmit02: document.querySelector(".js-form-2"),
  inputWhat: document.querySelector(".js-input-02"),
  inputMyName: document.querySelector(".js-input-03"),
  audioSrc2: document.querySelector(".audio-answer3"),
  btnSubmit2: document.querySelector(".submit-02"),
  itemColor: document.querySelector(".item-color-02"),
  // форма 3
  formSubmit03: document.querySelector(".js-form-3"),
  inputAndYou: document.querySelector(".js-input-3"),
  inputIamKiril: document.querySelector(".js-input-04"),
  audioSrc3: document.querySelector(".audio-answer4"),
  btnSubmit3: document.querySelector(".submit-03"),
  itemColor3: document.querySelector(".item-color-03"),
  // форма 4
  formSubmit04: document.querySelector(".js-form-4"),
  inputNice: document.querySelector(".js-input-4"),
  inputToo: document.querySelector(".js-input-05"),
  audioSrc4: document.querySelector(".audio-answer5"),
  btnSubmit4: document.querySelector(".submit-04"),
  itemColor4: document.querySelector(".item-color-04"),
  // форма 5
  formSubmit05: document.querySelector(".js-form-5"),
  inputHello5: document.querySelector(".js-input-5"),
  // inputWhat05: document.querySelector(".js-input-51"),
  inputHi52: document.querySelector(".js-input-52"),
  // inputMy5: document.querySelector(".js-input-53"),
  // inputAnd5: document.querySelector(".js-input-54"),
  audioSrc5: document.querySelector(".audio-answer6"),
  btnSubmit5: document.querySelector(".submit-05"),
  // itemColor5: document.querySelector(".item-color-05"),
  // форма 6
  formSubmit6: document.querySelector(".js-form-6"),
  inputWhat6: document.querySelector(".js-input-6"),
  inputMy6: document.querySelector(".js-input-61"),
  audioSrc6: document.querySelector(".audio-answer61"),
  btnSubmit6: document.querySelector(".submit-6"),
  // форма 7
  formSubmit7: document.querySelector(".js-form-7"),
  inputAnd7: document.querySelector(".js-input-7"),
  inputIam7: document.querySelector(".js-input-07"),
  audioSrc7: document.querySelector(".audio-answer7"),
  btnSubmit7: document.querySelector(".submit-7"),
  // форма 8
  formSubmit8: document.querySelector(".js-form-8"),
  inputNice8: document.querySelector(".js-input-8"),
  inputToo8: document.querySelector(".js-input-08"),
  audioSrc8: document.querySelector(".audio-answer8"),
  btnSubmit8: document.querySelector(".submit-8"),

  // зміна аудіо src
  audioHello: document.querySelector(".audio-hello"),
  audioBtn1: document.querySelector(".audio-btn-1"),
  audioHi: document.querySelector(".audio-hi"),
  audioBtn2: document.querySelector(".audio-btn-2"),
  audioWhat3: document.querySelector(".audio-what-is"),
  audioBtn3: document.querySelector(".audio-btn-3"),
  audioMyName: document.querySelector(".audio-mane-is"),
  audioBtn4: document.querySelector(".audio-btn-4"),
  audioAndYou: document.querySelector(".audio-and-you"),
  audioBtn5: document.querySelector(".audio-btn-5"),
  audioKiril: document.querySelector(".audio-kiril"),
  audioBtn6: document.querySelector(".audio-btn-6"),
  audioNice: document.querySelector(".audio-nice"),
  audioBtn7: document.querySelector(".audio-btn-7"),
  audioToo: document.querySelector(".audio-too"),
  audioBtn8: document.querySelector(".audio-btn-8"),
  audioHelloWhat: document.querySelector(".audio-hello-what"),
  audioBtn9: document.querySelector(".audio-btn-9"),
  audioHiMy: document.querySelector(".audio-hi-my"),
  audioBtn10: document.querySelector(".audio-btn-10"),
  audioIam: document.querySelector(".audio-i-am"),
  audioBtn11: document.querySelector(".audio-btn-11"),
  audioNiceYou: document.querySelector(".audio-nice-you"),
  audioBtn12: document.querySelector(".audio-btn-12"),
  audioNiceToo: document.querySelector(".audio-nice-too"),
  audioBtn13: document.querySelector(".audio-btn-13"),
  audioLessonBoy: document.querySelector(".audio-lesson-boy"),
  audioBtn14: document.querySelector(".audio-btn-14"),
  audioLessonGirl: document.querySelector(".audio-lesson-girl"),
  audioBtn15: document.querySelector(".audio-btn-15"),
  audioLessonBoy1: document.querySelector(".audio-lesson-boy-1"),
  audioBtn16: document.querySelector(".audio-btn-16"),
  audioLessonGirl1: document.querySelector(".audio-lesson-girl-1"),
  audioBtn17: document.querySelector(".audio-btn-17"),

  audioLessonGirl2: document.querySelector(".audio-and-you7"),
  audioBtn18: document.querySelector(".audio-btn-18"),
  audioLessonBoy3: document.querySelector(".audio-kiril7"),
  audioBtn19: document.querySelector(".audio-btn-19"),

  audioLessonGirl3: document.querySelector(".audio-nice-8"),
  audioBtn20: document.querySelector(".audio-btn-20"),
  audioLessonBoy4: document.querySelector(".audio-too-8"),
  audioBtn21: document.querySelector(".audio-btn-21"),

  // урок1
  box1: document.querySelector(".js-box-1"),
  boxTitle: document.querySelector(".boxtitle-1"),
  box2: document.querySelector(".js-box-2"),
  boxTitle2: document.querySelector(".boxtitle-2"),
  box3: document.querySelector(".js-box-3"),
  boxTitle3: document.querySelector(".boxtitle-3"),
  box4: document.querySelector(".js-box-4"),
  boxTitle4: document.querySelector(".boxtitle-4"),
  box6: document.querySelector(".js-box-6"),
  boxTitle6: document.querySelector(".boxtitle-6"),

  // lesson
  lesson1: document.querySelector(".lesson-1"),
  lesson2: document.querySelector(".lesson-2"),
  lesson3: document.querySelector(".lesson-3"),
  lesson4: document.querySelector(".lesson-4"),
  lesson6: document.querySelector(".lesson-6"),
};

// додавання аудіо та зміна кольору
refs.iconBtn1.addEventListener("click", () => {
  refs.item1.src = "../audio/Привіт Мене звати Кі.mp3";
  const textActive = refs.textColorWhite;
  onActiveText(textActive);
});

refs.audioBtn1.addEventListener("click", () => {
  refs.audioHello.src = "../audio/boy/Hello .mp3";
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
  onActiveText(refs.activeAndYou);
});

refs.audioBtn6.addEventListener("click", () => {
  refs.audioKiril.src = "../audio/boy/I am Kiril.mp3";
  onActiveText(refs.activeKiril);
});

refs.audioBtn7.addEventListener("click", () => {
  refs.audioNice.src = "../audio/girl/Nice to meet you .mp3";
  onActiveText(refs.activeNice);
});

refs.audioBtn8.addEventListener("click", () => {
  refs.audioToo.src = "../audio/boy/Nice to meet you too.mp3";
  onActiveText(refs.activeToo);
});

refs.audioBtn9.addEventListener("click", () => {
  refs.audioHelloWhat.src = "../audio/boy/Hello What is your n.mp3";
  onActiveText(refs.activeHelloWhat);
});

refs.audioBtn10.addEventListener("click", () => {
  refs.audioHiMy.src = "../audio/girl/Hi My name is Anna A.mp3";
  onActiveText(refs.activeHiMy);
});

refs.audioBtn11.addEventListener("click", () => {
  refs.audioIam.src = "../audio/boy/I am Kiril.mp3";
  onActiveText(refs.activeIam);
});

refs.audioBtn12.addEventListener("click", () => {
  refs.audioNiceYou.src = "../audio/girl/Nice to meet you .mp3";
  onActiveText(refs.activeNiceYou);
});

refs.audioBtn13.addEventListener("click", () => {
  refs.audioNiceToo.src = "../audio/boy/Nice to meet you too.mp3";
  onActiveText(refs.activeNiceToo);
});

// форма 5
refs.audioBtn14.addEventListener("click", () => {
  refs.audioLessonBoy.src = "../audio/boy/Hello .mp3";
  onActiveText(refs.activeLessonBoy);
});

refs.audioBtn15.addEventListener("click", () => {
  refs.audioLessonGirl.src = "../audio/girl/Hi .mp3";
  onActiveText(refs.activeLessonGirl);
});

refs.audioBtn16.addEventListener("click", () => {
  refs.audioLessonBoy1.src = "../audio/boy/What is your name .mp3";
  onActiveText(refs.activeLessonBoy1);
});

refs.audioBtn17.addEventListener("click", () => {
  refs.audioLessonGirl1.src = "../audio/girl/My name is Anna.mp3";
  onActiveText(refs.activeLessonGirl1);
});

refs.audioBtn18.addEventListener("click", () => {
  refs.audioLessonGirl2.src = "../audio/girl/And you .mp3";
  onActiveText(refs.activeLessonGirl2);
});

refs.audioBtn19.addEventListener("click", () => {
  refs.audioLessonBoy3.src = "../audio/boy/I am Kiril.mp3";
  onActiveText(refs.activeLessonBoy3);
});

refs.audioBtn20.addEventListener("click", () => {
  refs.audioLessonGirl3.src = "../audio/girl/Nice to meet you .mp3";
  onActiveText(refs.activeLessonGirl3);
});

refs.audioBtn21.addEventListener("click", () => {
  refs.audioLessonBoy4.src = "../audio/boy/Nice to meet you too.mp3";
  onActiveText(refs.activeLessonBoy4);
});

// додавання класу
function onActiveText(active) {
  active.classList.add("voice-text-en");
}

refs.formSubmit.addEventListener("submit", onFormSubmit);
refs.inputEl.addEventListener("input", onInput);
refs.inputEl2.addEventListener("input", onInput2);

function onFormSubmit(e) {
  e.preventDefault();
  const formElements = e.currentTarget.elements;
  const hello = formElements.hello.value;
  const hi = formElements.hi.value;

  if (
    (hello === "Hello ✔️" && hi === "Hi ✔️") ||
    (hello === "hello ✔️" && hi === "hi ✔️") ||
    (hello === "Hello ✔️" && hi === "hi ✔️") ||
    (hello === "hello ✔️" && hi === "Hi ✔️")
  ) {
    onAudioSuccess();
    // refs.item01.classList.add("gray2");
    refs.box1.style.backgroundColor = "#2ecc71";
    refs.boxTitle.textContent = "Урок 1 Hello! ✔️";
    refs.lesson1.textContent = "Урок 1: ⭐";
    markupSuccess();
  } else if (hello === "Hello ✔️" || hello === "hello ✔️") {
    onAudioError();
    onSmileyError(refs.inputEl2);
    markupError();
  } else if (hi === "Hi ✔️" || hi === "hi ✔️") {
    onAudioError();
    onSmileyError(refs.inputEl);
    markupError();
  } else {
    onSmileyError(refs.inputEl);
    onSmileyError(refs.inputEl2);
    onAudioError();
    markupError();
  }
}

// audio
const onAudioSuccess = () => {
  refs.item3.src = "../audio/Правильна відповідь .mp3";
};
const onAudioError = () => {
  refs.item3.src = "../audio/Відповідь неправильн.mp3";
};

// markup
const markupSuccess = () => {
  refs.btnSubmit.textContent = "Вітаю! 👍";
  refs.btnSubmit.style.backgroundColor = "#2ecc71";
  // refs.item01.classList.add("gray2");
};

const markupError = () => {
  refs.btnSubmit.textContent = "Спробуй ще... 🙄";
  refs.btnSubmit.style.backgroundColor = "tomato";
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

// форма 2 --------------------------------------------------------------
refs.formSubmit02.addEventListener("submit", onFormSubmit02);
refs.inputWhat.addEventListener("input", onInput1);
refs.inputMyName.addEventListener("input", onInput22);

function onFormSubmit02(e) {
  e.preventDefault();
  const what = refs.inputWhat.value;
  const myname = refs.inputMyName.value;

  if (
    (what === "What is your name ✔️" && myname === "My name is Anna ✔️") ||
    (what === "what is your name ✔️" && myname === "my name is anna ✔️") ||
    (what === "What is your name ✔️" && myname === "my name is anna ✔️") ||
    (what === "what is your name ✔️" && myname === "My name is Anna ✔️")
  ) {
    // onAudioSuccess();
    refs.audioSrc2.src = "../audio/Правильна відповідь .mp3";
    // refs.itemColor.classList.add("green");
    refs.box2.style.backgroundColor = "#2ecc71";
    refs.boxTitle2.textContent = "Урок 2 What is your name? ✔️";
    refs.lesson2.textContent = "Урок 2: ⭐";
    markupSuccess1();
  } else if (
    what === "What is your name ✔️" ||
    what === "what is your name ✔️"
  ) {
    // onAudioError();
    refs.audioSrc2.src = "../audio/Відповідь неправильн.mp3";
    onSmileyError1(refs.inputMyName);
    markupError1();
    // refs.itemColor.classList.add("red");
  } else if (
    myname === "My name is Anna ✔️" ||
    myname === "my name is anna ✔️"
  ) {
    // onAudioError();
    refs.audioSrc2.src = "../audio/Відповідь неправильн.mp3";
    onSmileyError1(refs.inputWhat);
    markupError1();
    // refs.itemColor.classList.add("red");
  } else {
    onSmileyError1(refs.inputWhat);
    onSmileyError1(refs.inputMyName);
    // onAudioError();
    refs.audioSrc2.src = "../audio/Відповідь неправильн.mp3";
    markupError1();
    // refs.itemColor.classList.add("red");
  }
}

// markup
const markupSuccess1 = () => {
  refs.btnSubmit2.textContent = "Вітаю! 👍";
  refs.btnSubmit2.style.backgroundColor = "#2ecc71";
  // refs.item01.classList.add("gray2");
};

const markupError1 = () => {
  refs.btnSubmit2.textContent = "Спробуй ще... 🙄";
  refs.btnSubmit2.style.backgroundColor = "tomato";
};

// input-1
function onInput1(event) {
  if (
    event.currentTarget.value === "What is your name" ||
    event.currentTarget.value === "what is your name"
  ) {
    onSmileySuccess1(refs.inputWhat);
  }
}

// inpup-2
function onInput22(event) {
  if (
    event.currentTarget.value === "My name is Anna" ||
    event.currentTarget.value === "my name is anna"
  ) {
    onSmileySuccess1(refs.inputMyName);
  }
}

// emoji success and error
const onSmileySuccess1 = (inputSuccess) => {
  inputSuccess.value = `${inputSuccess.value} ✔️`;
};

const onSmileyError1 = (inputError) => {
  inputError.value = `${inputError.value} ❌`;
};

// форма 3 ----------------------------------------------------------------
refs.formSubmit03.addEventListener("submit", onFormSubmit03);
refs.inputAndYou.addEventListener("input", onInput3);
refs.inputIamKiril.addEventListener("input", onInput03);

function onFormSubmit03(e) {
  e.preventDefault();
  const andYou = refs.inputAndYou.value;
  const iamKiril = refs.inputIamKiril.value;

  if (
    (andYou === "And you ✔️" && iamKiril === "I am Kiril ✔️") ||
    (andYou === "and you ✔️" && iamKiril === "i am kiril ✔️") ||
    (andYou === "And you ✔️" && iamKiril === "i am kiril ✔️") ||
    (andYou === "and you ✔️" && iamKiril === "I am Kiril ✔️")
  ) {
    // onAudioSuccess();
    refs.audioSrc3.src = "../audio/Правильна відповідь .mp3";
    // refs.itemColor3.classList.add("green");

    refs.box3.style.backgroundColor = "#2ecc71";
    refs.boxTitle3.textContent = "Урок 3 And you? I am... ✔️";
    refs.lesson3.textContent = "Урок 3: ⭐";
    markupSuccess3();
  } else if (andYou === "And you ✔️" || andYou === "and you ✔️") {
    // onAudioError();
    refs.audioSrc3.src = "../audio/Відповідь неправильн.mp3";
    onSmileyError3(refs.inputIamKiril);
    markupError3();
    // refs.itemColor.classList.add("red");
  } else if (iamKiril === "I am Kiril ✔️" || iamKiril === "i am kiril ✔️") {
    // onAudioError();
    refs.audioSrc3.src = "../audio/Відповідь неправильн.mp3";
    onSmileyError3(refs.inputAndYou);
    markupError3();
    // refs.itemColor.classList.add("red");
  } else {
    onSmileyError3(refs.inputAndYou);
    onSmileyError3(refs.inputIamKiril);
    // onAudioError();
    refs.audioSrc3.src = "../audio/Відповідь неправильн.mp3";
    markupError3();
    // refs.itemColor.classList.add("red");
  }
}

// markup
const markupSuccess3 = () => {
  refs.btnSubmit3.textContent = "Вітаю! 👍";
  refs.btnSubmit3.style.backgroundColor = "#2ecc71";
  // refs.item01.classList.add("gray2");
  // refs.btnSubmit3.textContent = "✔️ Правильно";
};

const markupError3 = () => {
  refs.btnSubmit3.textContent = "Спробуй ще... 🙄";
  refs.btnSubmit3.style.backgroundColor = "tomato";
};

// input-1
function onInput3(event) {
  if (
    event.currentTarget.value === "And you" ||
    event.currentTarget.value === "and you"
  ) {
    onSmileySuccess3(refs.inputAndYou);
  }
}

// inpup-2
function onInput03(event) {
  if (
    event.currentTarget.value === "I am Kiril" ||
    event.currentTarget.value === "i am kiril"
  ) {
    onSmileySuccess1(refs.inputIamKiril);
  }
}

// emoji success and error
const onSmileySuccess3 = (inputSuccess) => {
  inputSuccess.value = `${inputSuccess.value} ✔️`;
};

const onSmileyError3 = (inputError) => {
  inputError.value = `${inputError.value} ❌`;
};

// форма 4 ----------------------------------------------------------------
refs.formSubmit04.addEventListener("submit", onFormSubmit04);
refs.inputNice.addEventListener("input", onInput4);
refs.inputToo.addEventListener("input", onInput04);

function onFormSubmit04(e) {
  e.preventDefault();
  const nice = refs.inputNice.value;
  const too = refs.inputToo.value;

  if (
    (nice === "Nice to meet you ✔️" && too === "Nice to meet you too ✔️") ||
    (nice === "nice to meet you ✔️" && too === "nice to meet you too ✔️") ||
    (nice === "Nice to meet you ✔️" && too === "nice to meet you too ✔️") ||
    (nice === "nice to meet you ✔️" && too === "Nice to meet you too ✔️")
  ) {
    // onAudioSuccess();
    refs.audioSrc4.src = "../audio/Правильна відповідь .mp3";
    // refs.itemColor4.classList.add("green");
    refs.box4.style.backgroundColor = "#2ecc71";
    refs.boxTitle4.textContent = "Урок 1 Nice to meet you! ✔️";
    refs.lesson4.textContent = "Урок 4: ⭐";
    markupSuccess4();
  } else if (nice === "Nice to meet you ✔️" || nice === "nice to meet you ✔️") {
    // onAudioError();
    refs.audioSrc4.src = "../audio/Відповідь неправильн.mp3";
    onSmileyError4(refs.inputToo);
    markupError4();
    // refs.itemColor.classList.add("red");
  } else if (
    too === "Nice to meet you too ✔️" ||
    too === "nice to meet you too ✔️"
  ) {
    // onAudioError();
    refs.audioSrc4.src = "../audio/Відповідь неправильн.mp3";
    onSmileyError4(refs.inputNice);
    markupError4();
    // refs.itemColor.classList.add("red");
  } else {
    onSmileyError4(refs.inputNice);
    onSmileyError4(refs.inputToo);
    // onAudioError();
    refs.audioSrc3.src = "../audio/Відповідь неправильн.mp3";
    markupError4();
    // refs.itemColor.classList.add("red");
  }
}

// markup
const markupSuccess4 = () => {
  refs.btnSubmit4.textContent = "Вітаю! 👍";
  refs.btnSubmit4.style.backgroundColor = "#2ecc71";
  // refs.item01.classList.add("gray2");
};

const markupError4 = () => {
  refs.btnSubmit4.textContent = "Спробуй ще... 🙄";
  refs.btnSubmit4.style.backgroundColor = "tomato";
};

// input-1
function onInput4(event) {
  if (
    event.currentTarget.value === "Nice to meet you" ||
    event.currentTarget.value === "nice to meet you"
  ) {
    onSmileySuccess4(refs.inputNice);
  }
}

// inpup-2
function onInput04(event) {
  if (
    event.currentTarget.value === "Nice to meet you too" ||
    event.currentTarget.value === "nice to meet you too"
  ) {
    onSmileySuccess4(refs.inputToo);
  }
}

// emoji success and error
const onSmileySuccess4 = (inputSuccess) => {
  inputSuccess.value = `${inputSuccess.value} ✔️`;
};

const onSmileyError4 = (inputError) => {
  inputError.value = `${inputError.value} ❌`;
};

// форма 6 ----------------------------------------------------------------
refs.formSubmit05.addEventListener("submit", onFormSubmit05);
refs.inputHello5.addEventListener("input", onInput5);
refs.inputHi52.addEventListener("input", onInput05);

function onFormSubmit05(e) {
  e.preventDefault();
  const formElements5 = e.currentTarget.elements;
  const hello5 = formElements5.hello5.value;
  const hi5 = formElements5.hi5.value;

  if (
    (hello5 === "Hello ✔️" && hi5 === "Hi ✔️") ||
    (hello5 === "hello ✔️" && hi5 === "hi ✔️") ||
    (hello5 === "Hello ✔️" && hi5 === "hi ✔️") ||
    (hello5 === "hello ✔️" && hi5 === "Hi ✔️")
  ) {
    onAudioSuccess5();
    markupSuccess5();
  } else if (hello5 === "Hello ✔️" || hello5 === "hello ✔️") {
    onAudioError5();
    onSmileyError5(refs.inputHi52);
    markupError5();
  } else if (hi5 === "Hi ✔️" || hi5 === "hi ✔️") {
    onAudioError5();
    onSmileyError5(refs.inputHello5);
    markupError5();
  } else {
    onSmileyError5(refs.inputHello5);
    onSmileyError5(refs.inputHi52);
    onAudioError5();
    markupError5();
  }
}

// audio
const onAudioSuccess5 = () => {
  refs.item3.src = "../audio/Правильна відповідь .mp3";
};
const onAudioError5 = () => {
  refs.item3.src = "../audio/Відповідь неправильн.mp3";
};

// markup
const markupSuccess5 = () => {
  refs.btnSubmit5.textContent = "Вітаю! 👍";
  refs.btnSubmit5.style.backgroundColor = "#2ecc71";
  // refs.item01.classList.add("gray2");
};

const markupError5 = () => {
  refs.btnSubmit5.textContent = "Спробуй ще... 🙄";
  refs.btnSubmit5.style.backgroundColor = "tomato";
};

// input-1
function onInput5(event) {
  if (
    event.currentTarget.value === "Hello" ||
    event.currentTarget.value === "hello"
  ) {
    onSmileySuccess(refs.inputHello5);
  }
}

// inpup-2
function onInput05(event) {
  if (
    event.currentTarget.value === "Hi" ||
    event.currentTarget.value === "hi"
  ) {
    onSmileySuccess5(refs.inputHi52);
  }
}

// emoji success and error
const onSmileySuccess5 = (inputSuccess) => {
  inputSuccess.value = `${inputSuccess.value} ✔️`;
};

const onSmileyError5 = (inputError) => {
  inputError.value = `${inputError.value} ❌`;
};

// форма 6
refs.formSubmit6.addEventListener("submit", onFormSubmit06);
refs.inputWhat6.addEventListener("input", onInput6);
refs.inputMy6.addEventListener("input", onInput06);

function onFormSubmit06(e) {
  e.preventDefault();
  const what6 = refs.inputWhat6.value;
  const my6 = refs.inputMy6.value;

  if (
    (what6 === "What is your name ✔️" && my6 === "My name is Anna ✔️") ||
    (what6 === "what is your name ✔️" && my6 === "my name is anna ✔️") ||
    (what6 === "What is your name ✔️" && my6 === "my name is anna ✔️") ||
    (what6 === "what is your name ✔️" && my6 === "My name is Anna ✔️")
  ) {
    refs.audioSrc2.src = "../audio/Правильна відповідь .mp3";
    markupSuccess6();
  } else if (
    what6 === "What is your name ✔️" ||
    what6 === "what is your name ✔️"
  ) {
    refs.audioSrc2.src = "../audio/Відповідь неправильн.mp3";
    onSmileyError6(refs.inputMy6);
    markupError6();
  } else if (my6 === "My name is Anna ✔️" || my6 === "my name is anna ✔️") {
    refs.audioSrc2.src = "../audio/Відповідь неправильн.mp3";
    onSmileyError6(refs.inputWhat6);
    markupError6();
  } else {
    onSmileyError6(refs.inputWhat6);
    onSmileyError6(refs.inputMy6);
    refs.audioSrc2.src = "../audio/Відповідь неправильн.mp3";
    markupError6();
  }
}

// markup
const markupSuccess6 = () => {
  refs.btnSubmit6.textContent = "Вітаю! 👍";
  refs.btnSubmit6.style.backgroundColor = "#2ecc71";
  // refs.item01.classList.add("gray2");
};

const markupError6 = () => {
  refs.btnSubmit6.textContent = "Спробуй ще... 🙄";
  refs.btnSubmit6.style.backgroundColor = "tomato";
};

// input-1
function onInput6(event) {
  if (
    event.currentTarget.value === "What is your name" ||
    event.currentTarget.value === "what is your name"
  ) {
    onSmileySuccess6(refs.inputWhat6);
  }
}

// inpup-2
function onInput06(event) {
  if (
    event.currentTarget.value === "My name is Anna" ||
    event.currentTarget.value === "my name is anna"
  ) {
    onSmileySuccess6(refs.inputMy6);
  }
}

// emoji success and error
const onSmileySuccess6 = (inputSuccess) => {
  inputSuccess.value = `${inputSuccess.value} ✔️`;
};

const onSmileyError6 = (inputError) => {
  inputError.value = `${inputError.value} ❌`;
};

// форма 7
refs.formSubmit7.addEventListener("submit", onFormSubmit07);
refs.inputAnd7.addEventListener("input", onInput7);
refs.inputIam7.addEventListener("input", onInput07);

function onFormSubmit07(e) {
  e.preventDefault();
  const and7 = refs.inputAnd7.value;
  const inputIam7 = refs.inputIam7.value;

  if (
    (and7 === "And you ✔️" && inputIam7 === "I am Kiril ✔️") ||
    (and7 === "and you ✔️" && inputIam7 === "i am kiril ✔️") ||
    (and7 === "And you ✔️" && inputIam7 === "i am kiril ✔️") ||
    (and7 === "and you ✔️" && inputIam7 === "I am Kiril ✔️")
  ) {
    // onAudioSuccess();
    refs.audioSrc7.src = "../audio/Правильна відповідь .mp3";
    // refs.itemColor3.classList.add("green");

    // refs.box3.style.backgroundColor = "#2ecc71";
    // refs.boxTitle3.textContent = "Урок 3 And you? I am... ✔️";
    // refs.lesson3.textContent = "Урок 3: ⭐";
    markupSuccess7();
  } else if (and7 === "And you ✔️" || and7 === "and you ✔️") {
    // onAudioError();
    refs.audioSrc7.src = "../audio/Відповідь неправильн.mp3";
    onSmileyError7(refs.inputIam7);
    markupError7();
    // refs.itemColor.classList.add("red");
  } else if (inputIam7 === "I am Kiril ✔️" || inputIam7 === "i am kiril ✔️") {
    // onAudioError();
    refs.audioSrc7.src = "../audio/Відповідь неправильн.mp3";
    onSmileyError7(refs.inputAnd7);
    markupError7();
    // refs.itemColor.classList.add("red");
  } else {
    onSmileyError7(refs.inputAnd7);
    onSmileyError7(refs.inputIam7);
    // onAudioError();
    refs.audioSrc7.src = "../audio/Відповідь неправильн.mp3";
    markupError7();
    // refs.itemColor.classList.add("red");
  }
}

// markup
const markupSuccess7 = () => {
  refs.btnSubmit7.textContent = "Вітаю! 👍";
  refs.btnSubmit7.style.backgroundColor = "#2ecc71";
  // refs.item01.classList.add("gray2");
  // refs.btnSubmit3.textContent = "✔️ Правильно";
};

const markupError7 = () => {
  refs.btnSubmit7.textContent = "Спробуй ще... 🙄";
  refs.btnSubmit7.style.backgroundColor = "tomato";
};

// input-1
function onInput7(event) {
  if (
    event.currentTarget.value === "And you" ||
    event.currentTarget.value === "and you"
  ) {
    onSmileySuccess7(refs.inputAnd7);
  }
}

// inpup-2
function onInput07(event) {
  if (
    event.currentTarget.value === "I am Kiril" ||
    event.currentTarget.value === "i am kiril"
  ) {
    onSmileySuccess7(refs.inputIam7);
  }
}

// emoji success and error
const onSmileySuccess7 = (inputSuccess) => {
  inputSuccess.value = `${inputSuccess.value} ✔️`;
};

const onSmileyError7 = (inputError) => {
  inputError.value = `${inputError.value} ❌`;
};

// форма 8

refs.formSubmit8.addEventListener("submit", onFormSubmit08);
refs.inputNice8.addEventListener("input", onInput8);
refs.inputToo8.addEventListener("input", onInput08);

function onFormSubmit08(e) {
  e.preventDefault();
  const nice8 = refs.inputNice8.value;
  const too8 = refs.inputToo8.value;

  if (
    (nice8 === "Nice to meet you ✔️" && too8 === "Nice to meet you too ✔️") ||
    (nice8 === "nice to meet you ✔️" && too8 === "nice to meet you too ✔️") ||
    (nice8 === "Nice to meet you ✔️" && too8 === "nice to meet you too ✔️") ||
    (nice8 === "nice to meet you ✔️" && too8 === "Nice to meet you too ✔️")
  ) {
    refs.audioSrc8.src = "../audio/Правильна відповідь .mp3";
    // refs.itemColor4.classList.add("green");
    refs.box6.style.backgroundColor = "#2ecc71";
    refs.boxTitle6.textContent = "Перевірка знань ✔️";
    refs.lesson6.textContent = "Перевірка знань: ⭐";
    markupSuccess8();
  } else if (
    nice8 === "Nice to meet you ✔️" ||
    nice8 === "nice to meet you ✔️"
  ) {
    // onAudioError();
    refs.audioSrc8.src = "../audio/Відповідь неправильн.mp3";
    onSmileyError8(refs.inputToo);
    markupError8();
    // refs.itemColor.classList.add("red");
  } else if (
    too8 === "Nice to meet you too ✔️" ||
    too8 === "nice to meet you too ✔️"
  ) {
    // onAudioError();
    refs.audioSrc8.src = "../audio/Відповідь неправильн.mp3";
    onSmileyError8(refs.inputNice);
    markupError8();
    // refs.itemColor.classList.add("red");
  } else {
    onSmileyError8(refs.inputNice8);
    onSmileyError8(refs.inputToo8);
    // onAudioError();
    refs.audioSrc8.src = "../audio/Відповідь неправильн.mp3";
    markupError8();
    // refs.itemColor.classList.add("red");
  }
}

// markup
const markupSuccess8 = () => {
  refs.btnSubmit8.textContent = "Вітаю! 👍";
  refs.btnSubmit8.style.backgroundColor = "#2ecc71";
  // refs.item01.classList.add("gray2");
};

const markupError8 = () => {
  refs.btnSubmit8.textContent = "Спробуй ще... 🙄";
  refs.btnSubmit8.style.backgroundColor = "tomato";
};

// input-1
function onInput8(event) {
  if (
    event.currentTarget.value === "Nice to meet you" ||
    event.currentTarget.value === "nice to meet you"
  ) {
    onSmileySuccess8(refs.inputNice8);
  }
}

// inpup-2
function onInput08(event) {
  if (
    event.currentTarget.value === "Nice to meet you too" ||
    event.currentTarget.value === "nice to meet you too"
  ) {
    onSmileySuccess4(refs.inputToo8);
  }
}

// emoji success and error
const onSmileySuccess8 = (inputSuccess) => {
  inputSuccess.value = `${inputSuccess.value} ✔️`;
};

const onSmileyError8 = (inputError) => {
  inputError.value = `${inputError.value} ❌`;
};

// refs.inputSrc5.addEventListener("input");
// refs.inputSubmit5.addEventListener("input");

// function onFormSubmit05(e) {
//   e.preventDefault();
//   const formElements5 = e.currentTarget.elements;
//   const hello5 = formElements5.hello5.value;
//   const what5 = formElements5.what5.value;
//   const hi5 = formElements5.hi5.value;
//   const my5 = formElements5.my5.value;
//   const and5 = formElements5.and5.value;

//   if (
//     (hello5 === "Hello ✔️" &&
//       what5 === "What is your name ✔️" &&
//       hi5 === "Hi ✔️" &&
//       my5 === "My name is Anna ✔️" &&
//       and5 === "And you ✔️") ||
//     (hello5 === "hello ✔️" &&
//       what5 === "what is your name ✔️" &&
//       hi5 === "hi ✔️" &&
//       my5 === "my name is anna ✔️" &&
//       and5 === "and you ✔️")
//   ) {
//     refs.audioSrc4.src = "../audio/Правильна відповідь .mp3";
//     markupSuccess5();
//   } else if (
//     (hello5 === "Hello ✔️" &&
//       what5 === "What is your name ✔️" &&
//       hi5 === "Hi ✔️" &&
//       my5 === "My name is Anna ✔️") ||
//     (hello5 === "hello ✔️" &&
//       what5 === "what is your name ✔️" &&
//       hi5 === "hi ✔️" &&
//       my5 === "my name is anna ✔️")
//   ) {
//     onSmileyError5(refs.inputAnd5);
//     refs.audioSrc4.src = "../audio/Відповідь неправильн.mp3";
//     markupError5();
//   } else if (
//     (hello5 === "Hello ✔️" &&
//       what5 === "What is your name ✔️" &&
//       hi5 === "Hi ✔️") ||
//     (hello5 === "hello ✔️" &&
//       what5 === "what is your name ✔️" &&
//       hi5 === "hi ✔️")
//   ) {
//     onSmileyError5(refs.inputMy5);
//     onSmileyError5(refs.inputAnd5);
//     refs.audioSrc4.src = "../audio/Відповідь неправильн.mp3";
//     markupError5();
//   } else if (
//     (hello5 === "Hello ✔️" && what5 === "What is your name ✔️") ||
//     (hello5 === "hello ✔️" && what5 === "what is your name ✔️")
//   ) {
//     onSmileyError5(refs.inputHi52);
//     onSmileyError5(refs.inputMy5);
//     onSmileyError5(refs.inputAnd5);
//     refs.audioSrc4.src = "../audio/Відповідь неправильн.mp3";
//     markupError5();
//   } else if (hello5 === "Hello ✔️" || hello5 === "hello ✔️") {
//     refs.audioSrc4.src = "../audio/Відповідь неправильн.mp3";
//     // onSmileyError5(refs.inputHello5);
//     onSmileyError5(refs.inputWhat05);
//     onSmileyError5(refs.inputHi52);
//     onSmileyError5(refs.inputMy5);
//     onSmileyError5(refs.inputAnd5);
//     markupError5();
//   } else if (
//     what5 === "What is your name ✔️" ||
//     what5 === "what is your name ✔️"
//   ) {
//     refs.audioSrc4.src = "../audio/Відповідь неправильн.mp3";
//     onSmileyError5(refs.inputHello5);
//     // onSmileyError5(refs.inputWhat05);
//     onSmileyError5(refs.inputHi52);
//     onSmileyError5(refs.inputMy5);
//     onSmileyError5(refs.inputAnd5);
//     markupError5();
//   } else if (hi5 === "Hi ✔️" || hi5 === "hi ✔️") {
//     refs.audioSrc4.src = "../audio/Відповідь неправильн.mp3";
//     onSmileyError5(refs.inputHello5);
//     onSmileyError5(refs.inputWhat05);
//     //  onSmileyError5(refs.inputHi52);
//     onSmileyError5(refs.inputMy5);
//     onSmileyError5(refs.inputAnd5);
//     markupError5();
//   } else if (my5 === "My name is Anna ✔️" || my5 === "my name is anna ✔️") {
//     refs.audioSrc4.src = "../audio/Відповідь неправильн.mp3";
//     onSmileyError5(refs.inputHello5);
//     onSmileyError5(refs.inputWhat05);
//     onSmileyError5(refs.inputHi52);
//     // onSmileyError5(refs.inputMy5);
//     onSmileyError5(refs.inputAnd5);
//     markupError5();
//   } else if (and5 === "And you ✔️" || and5 === "and you ✔️") {
//     refs.audioSrc4.src = "../audio/Відповідь неправильн.mp3";
//     onSmileyError5(refs.inputHello5);
//     onSmileyError5(refs.inputWhat05);
//     onSmileyError5(refs.inputHi52);
//     onSmileyError5(refs.inputMy5);
//     // onSmileyError5(refs.inputAnd5);
//     markupError5();
//   } else {
//     onSmileyError5(refs.inputHello5);
//     onSmileyError5(refs.inputWhat05);
//     onSmileyError5(refs.inputHi52);
//     onSmileyError5(refs.inputMy5);
//     onSmileyError5(refs.inputAnd5);
//     refs.audioSrc3.src = "../audio/Відповідь неправильн.mp3";
//     markupError5();
//   }
// }

// markup
// const markupSuccess5 = () => {
//   refs.btnSubmit5.textContent = "Вітаю! 👍";
//   refs.btnSubmit5.style.backgroundColor = "#2ecc71";
//   // refs.item01.classList.add("gray2");
// };

// const markupError5 = () => {
//   refs.btnSubmit5.textContent = "Спробуй ще... 🙄";
//   refs.btnSubmit5.style.backgroundColor = "tomato";
// };

// input-1
// function onInput5(event) {
//   if (
//     event.currentTarget.value === "Hello" ||
//     event.currentTarget.value === "hello"
//   ) {
//     onSmileySuccess5(refs.inputHello5);
//   }
// }

// inpup-2
// function onInput05(event) {
//   if (
//     event.currentTarget.value === "What is your name" ||
//     event.currentTarget.value === "what is your name"
//   ) {
//     onSmileySuccess5(refs.inputWhat05);
//   }
// }

// input-3
// function onInputHi5(event) {
//   if (
//     event.currentTarget.value === "Hi" ||
//     event.currentTarget.value === "hi"
//   ) {
//     onSmileySuccess5(refs.inputHi52);
//   }
// }

// inpup-4
// function onInputMy5(event) {
//   if (
//     event.currentTarget.value === "My name is Anna" ||
//     event.currentTarget.value === "my name is anna"
//   ) {
//     onSmileySuccess5(refs.inputMy5);
//   }
// }

// input 5
// function onInputAnd5(event) {
//   if (
//     event.currentTarget.value === "And you" ||
//     event.currentTarget.value === "and you"
//   ) {
//     onSmileySuccess5(refs.inputAnd5);
//   }
// }

// emoji success and error
// const onSmileySuccess5 = (inputSuccess) => {
//   inputSuccess.value = `${inputSuccess.value} ✔️`;
// };

// const onSmileyError5 = (inputError) => {
//   inputError.value = `${inputError.value} ❌`;
// };
