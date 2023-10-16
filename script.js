const liKeys = document.querySelectorAll('li');
const textContentElement = document.querySelector(".text-content");
const deleteKey = document.querySelector(".delete");
const spaceKey = document.querySelector(".space");
const capsLockKey = document.querySelector(".caps-lock");
let capsLockIsActive = false;

liKeys.forEach(li => {
  li.addEventListener('click', () => {
    const clickedKey = li.textContent.toLowerCase();

    if (clickedKey === 'space') {
      textContentElement.value += ' ';
    } else if (clickedKey === 'return') {
      textContentElement.value += '\n';
    } else if (clickedKey === 'delete') {
      textContentElement.value = textContentElement.value.slice(0, -1);
    } else if (clickedKey === 'caps lock') {
      capsLockIsActive = !capsLockIsActive
    }
    else {
      if (capsLockIsActive) {
        clickedKey = clickedKey.toUpperCase();
      }
      textContentElement.value += clickedKey;
    }
  });
});

document.addEventListener('keydown', event => {
  liKeys.forEach(li => {
    const pushedKey = li.textContent.toLowerCase();
    if (pushedKey === event.key) {
      li.classList.add("active")
    } else if ("Backspace" === event.key || "Enter" === event.key || "Tab" === event.key || "Control" === event.key || "Meta" === event.key || "Alt" === event.key || "Shift" === event.key) {
      li.classList.add("active")
    }
  });

  if (event.key !== undefined) {
    if (event.key === ' ') {
      textContentElement.textContent += " ";
    } else if (event.key === "Enter") {
      textContentElement.textContent += '\n';
    } else if (event.key === "Backspace") {
      textContentElement.textContent = textContentElement.textContent.slice(0, -1);
    } else {
      textContentElement.textContent += event.key;
    }
  }
});

document.addEventListener('keyup', event => {
  liKeys.forEach(li => {
    li.classList.remove("active");
  });
});