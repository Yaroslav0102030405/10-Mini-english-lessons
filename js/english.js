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
  // formSubmit05: document.querySelector(".js-form-5"),
  // inputNice: document.querySelector(".js-input-5"),
  // inputToo: document.querySelector(".js-input-06"),
  // audioSrc5: document.querySelector(".audio-answer6"),
  // btnSubmit5: document.querySelector(".submit-05"),
  // itemColor5: document.querySelector(".item-color-05"),
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
  audioLessonBoy2: document.querySelector(".audio-lesson-boy-2"),
  audioBtn18: document.querySelector(".audio-btn-18"),
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

refs.audioBtn14.addEventListener("click", () => {
  refs.audioLessonBoy.src = "../audio/boy/Hello What is your n.mp3";
  onActiveText(refs.activeLessonBoy);
});

refs.audioBtn15.addEventListener("click", () => {
  refs.audioLessonGirl.src = "../audio/girl/Hi My name is Anna A.mp3";
  onActiveText(refs.activeLessonGirl);
});

refs.audioBtn16.addEventListener("click", () => {
  refs.audioLessonBoy1.src = "../audio/boy/I am Kiril.mp3";
  onActiveText(refs.activeLessonBoy1);
});

refs.audioBtn17.addEventListener("click", () => {
  refs.audioLessonGirl1.src = "../audio/girl/Nice to meet you .mp3";
  onActiveText(refs.activeLessonGirl1);
});

refs.audioBtn18.addEventListener("click", () => {
  refs.audioLessonBoy2.src = "../audio/boy/Nice to meet you too.mp3";
  onActiveText(refs.activeLessonBoy2);
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
    refs.item01.classList.add("gray2");
    markupSuccess();
  } else if (hello === "Hello ✔️" || hello === "hello ✔️") {
    onAudioError();
    onSmileyError(refs.inputEl2);
    markupError();
    // refs.item01.classList.add("gray3");
  } else if (hi === "Hi ✔️" || hi === "hi ✔️") {
    onAudioError();
    onSmileyError(refs.inputEl);
    markupError();
    // refs.item01.classList.add("gray3");
  } else {
    onSmileyError(refs.inputEl);
    onSmileyError(refs.inputEl2);
    onAudioError();
    markupError();
    // refs.item01.classList.add("gray3");
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
  refs.btnSubmit.textContent = "✔️ Правильно";
  refs.btnSubmit.style.backgroundColor = "#2ecc71";
  // refs.item01.classList.add("gray2");
};

const markupError = () => {
  refs.btnSubmit.textContent = "❌ Не правильно";
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
    refs.itemColor.classList.add("green");
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
  refs.btnSubmit2.textContent = "✔️ Правильно";
  refs.btnSubmit2.style.backgroundColor = "#2ecc71";
  // refs.item01.classList.add("gray2");
};

const markupError1 = () => {
  refs.btnSubmit2.textContent = "❌ Не правильно";
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
    refs.itemColor3.classList.add("green");
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
  refs.btnSubmit3.textContent = "✔️ Правильно";
  refs.btnSubmit3.style.backgroundColor = "#2ecc71";
  // refs.item01.classList.add("gray2");
};

const markupError3 = () => {
  refs.btnSubmit3.textContent = "❌ Не правильно";
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
    refs.itemColor4.classList.add("green");
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
  refs.btnSubmit4.textContent = "✔️ Правильно";
  refs.btnSubmit4.style.backgroundColor = "#2ecc71";
  // refs.item01.classList.add("gray2");
};

const markupError4 = () => {
  refs.btnSubmit4.textContent = "❌ Не правильно";
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
// refs.formSubmit05.addEventListener("submit", onFormSubmit05);
// refs.inputNice.addEventListener("input", onInpu5);
// refs.inputToo.addEventListener("input", onInput05);

// function onFormSubmit04(e) {
//   e.preventDefault();
//   const nice = refs.inputNice.value;
//   const too = refs.inputToo.value;

//   if (
//     (nice === "Nice to meet you ✔️" && too === "Nice to meet you too ✔️") ||
//     (nice === "nice to meet you ✔️" && too === "nice to meet you too ✔️") ||
//     (nice === "Nice to meet you ✔️" && too === "nice to meet you too ✔️") ||
//     (nice === "nice to meet you ✔️" && too === "Nice to meet you too ✔️")
//   ) {
//     // onAudioSuccess();
//     refs.audioSrc4.src = "../audio/Правильна відповідь .mp3";
//     refs.itemColor4.classList.add("green");
//     markupSuccess4();
//   } else if (nice === "Nice to meet you ✔️" || nice === "nice to meet you ✔️") {
//     // onAudioError();
//     refs.audioSrc4.src = "../audio/Відповідь неправильн.mp3";
//     onSmileyError4(refs.inputToo);
//     markupError4();
//     // refs.itemColor.classList.add("red");
//   } else if (
//     too === "Nice to meet you too ✔️" ||
//     too === "nice to meet you too ✔️"
//   ) {
//     // onAudioError();
//     refs.audioSrc4.src = "../audio/Відповідь неправильн.mp3";
//     onSmileyError4(refs.inputNice);
//     markupError4();
//     // refs.itemColor.classList.add("red");
//   } else {
//     onSmileyError4(refs.inputNice);
//     onSmileyError4(refs.inputToo);
//     // onAudioError();
//     refs.audioSrc3.src = "../audio/Відповідь неправильн.mp3";
//     markupError4();
//     // refs.itemColor.classList.add("red");
//   }
// }

// // markup
// const markupSuccess4 = () => {
//   refs.btnSubmit4.textContent = "✔️ Правильно";
//   refs.btnSubmit4.style.backgroundColor = "#2ecc71";
//   // refs.item01.classList.add("gray2");
// };

// const markupError4 = () => {
//   refs.btnSubmit4.textContent = "❌ Не правильно";
//   refs.btnSubmit4.style.backgroundColor = "tomato";
// };

// // input-1
// function onInput4(event) {
//   if (
//     event.currentTarget.value === "Nice to meet you" ||
//     event.currentTarget.value === "nice to meet you"
//   ) {
//     onSmileySuccess4(refs.inputNice);
//   }
// }

// // inpup-2
// function onInput04(event) {
//   if (
//     event.currentTarget.value === "Nice to meet you too" ||
//     event.currentTarget.value === "nice to meet you too"
//   ) {
//     onSmileySuccess4(refs.inputToo);
//   }
// }

// // emoji success and error
// const onSmileySuccess4 = (inputSuccess) => {
//   inputSuccess.value = `${inputSuccess.value} ✔️`;
// };

// const onSmileyError4 = (inputError) => {
//   inputError.value = `${inputError.value} ❌`;
// };
