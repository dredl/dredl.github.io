const select = document.querySelector(".select");
const dropdown = document.querySelector(".dropdown");
const dropdown2 = document.querySelector(".dropdown2");
const dropdown3 = document.querySelector(".dropdown3");
const cardDropdown = document.querySelector(".card--dropdown");
const dropdownSm = document.querySelector(".dropdown--sm");
const dropdownIconMenu = document.querySelector(".dropdown--icon-menu");
const selectText = document.getElementById("selectText");
const selectText2 = document.getElementById("selectText2");
const selectText3 = document.getElementById("selectText3");
const selectNumber = document.getElementById("selectNumber");
const selectNumber2 = document.getElementById("selectNumber2");
const selectTextMenu = document.getElementById("selectTextMenu");
const options = document.querySelectorAll(".options");
const searchInput = document.querySelector(".input-wrapper .input");
const searchInputButton = document.querySelector(".search--input__button");
const options2 = document.getElementsByClassName("options2");
const options3 = document.getElementsByClassName("options3");
const options4 = document.getElementsByClassName("options4");
const options5 = document.getElementsByClassName("options5");
const options6 = document.getElementsByClassName("options6");
const closeIcon = document.querySelectorAll(".ui_close");
const input = document.querySelectorAll(".input");
const inputs = document.querySelectorAll(".text-field");
const checkboxIndeterminate = document.querySelector(
    ".input--checkbox--indeterminate"
);
const addButton = document.querySelectorAll(".button--add");
const leftCheckbox = document.querySelectorAll(".group__item--left--checkbox");
const passwords = document.querySelectorAll(".field-password");
const stars = document.querySelectorAll('.star')
const yellowStars = document.querySelectorAll('.star-yellow')

// console.log(passwords)
console.log(stars)

stars.forEach((star, i) => {
  star.addEventListener('click', () => {
    const currentPosition = i + 1

    stars.forEach((star, j) => {
      if (currentPosition >= j + 1) {
        star.style.color = '#EEB82C'
      } else {
        star.style.color = '#C5C5C9'
      }
    })

  })
})

yellowStars.forEach((star, i) => {
  star.addEventListener('click', () => {
    const currentPosition = i + 1

    yellowStars.forEach((star, j) => {
      if (currentPosition >= j + 1) {
        star.style.color = '#FFF4A6'
      } else {
        star.style.color = '#C5C5C9'
      }
    })

  })
})



passwords.forEach((el) => {
  const eyeIcon = el.querySelector(".ui_eye");
  const inputsPassword = el.querySelector(".input--password");

  // const eyeIconOff = el.querySelector(".ui_eye-off");

  eyeIcon.addEventListener("click", () => {
    const type = inputsPassword.getAttribute("type") === "text" ? "password" : "text";
    inputsPassword.setAttribute("type", type);
    type === "password"
        ? eyeIcon.classList.replace("ui_eye", "ui_eye-off")
        : eyeIcon.classList.replace("ui_eye-off", "ui_eye");
  });


});

leftCheckbox.forEach((el) => {
  el.addEventListener("click", function () {
    if (el.querySelector(".checkbox--input").checked === false) {
      el.querySelector(".checkbox--input").checked = true;
    } else {
      el.querySelector(".checkbox--input").checked = false;
    }
  });
});

addButton.forEach((el) => {
  el.addEventListener("click", function () {
    if (!el.classList.contains("added")) {
      el.classList.add("added");
      el.innerHTML = "Добавлено";
    } else {
      el.classList.remove("added");
      el.innerHTML = "Добавить";
    }
  });
});

checkboxIndeterminate.indeterminate = true;


searchInput.addEventListener("input", function () {
  if (searchInput.value.length > 0) {
    searchInputButton.classList.add("blue");
  } else {
    searchInputButton.classList.remove("blue");
  }
});

select.onclick = function () {
  select.classList.toggle("active");
};

dropdown.onclick = function () {
  dropdown.classList.toggle("active2");
};

dropdown2.onclick = function () {
  dropdown2.classList.toggle("active2");
};

dropdown3.onclick = function () {
  dropdown3.classList.toggle("active2");
};

cardDropdown.onclick = function () {
  cardDropdown.classList.toggle("active2");
};

dropdownSm.onclick = function () {
  dropdownSm.classList.toggle("active2");
};

dropdownIconMenu.onclick = function () {
  dropdownIconMenu.classList.toggle("active2");
};

closeIcon.forEach((el) => {
  el.addEventListener("click", () => {
    input.value = "";
  });
});

inputs.forEach((el) => {
  const input = el.querySelector(".input");
  const clear = el.querySelector(".ui_close");
  // console.log(clear)

  input.addEventListener("input", function () {
    if (input.value.length > 0) {
      clear.classList.add("block");
      clear.addEventListener("click", function (e) {
        input.value = "";
        clear.classList.remove("block");
      });
    } else {
      clear.classList.remove("block");
    }
  });

});

for (option of options) {
  option.onclick = function (e) {
    e.stopPropagation();
    selectText.innerHTML = this.textContent;
    selectText.style.color = "#5656FF";
    dropdown2.classList.remove("active2");
  };
}


for (option2 of options2) {
  option2.onclick = function (e) {
    e.stopPropagation();
    selectText2.innerHTML = this.textContent;
    selectText2.style.color = "#5656FF";
    dropdown.classList.remove("active2");
  };
}

for (option3 of options3) {
  option3.onclick = function (e) {
    e.stopPropagation();
    selectText3.innerHTML = this.textContent;
    selectText3.style.color = "#5656FF";
    dropdown3.classList.remove("active2");
  };
}

for (option4 of options4) {
  option4.onclick = function (e) {
    e.stopPropagation();
    selectNumber.innerHTML = this.textContent;
    dropdownSm.classList.remove("active2");
  };
}

for (option5 of options5) {
  option5.onclick = function (e) {
    e.stopPropagation();
    selectTextMenu.innerHTML = this.textContent;
    dropdownIconMenu.classList.remove("active2");
  };
}

for (option6 of options6) {
  option6.onclick = function (e) {
    e.stopPropagation();
    selectNumber2.innerHTML = this.textContent;
    cardDropdown.classList.remove("active2");
  };
}
