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

// форма 2
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
