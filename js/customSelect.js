const selectedAll = document.querySelectorAll(".form-select__dropdown-wrapper");

selectedAll.forEach((selected) => {
    const optionsList = selected.querySelectorAll("div.form-select__dropdown-wrapper li");

    selected.addEventListener("click", () => {
        let arrow = selected.children[1];

        if (selected.classList.contains("active")) {
            descriptionToHint(selected)
            handleDropdown(selected, arrow, false);
        } else {
            let currentActive = document.querySelector(".form-select__dropdown-wrapper.active");

            if (currentActive) {
                let anotherArrow = currentActive.children[1];
                handleDropdown(currentActive, anotherArrow, false);
            }

            descriptionToHint(selected)
            handleDropdown(selected, arrow, true);
        }
    });


    for (let o of optionsList) {
        o.addEventListener("click", () => {
            descriptionToHint(selected)
            selected.querySelector(".selected-display").innerHTML = o.innerHTML;
        });
    }
});


window.addEventListener("click", function (e) {
    if (e.target.closest(".form-select__dropdown-wrapper") === null) {
        closeAllDropdowns();
    }
});


function closeAllDropdowns() {
    const selectedAll = document.querySelectorAll(".form-select__dropdown-wrapper");
    selectedAll.forEach((selected) => {
        let arrow = selected.children[1];

        handleDropdown(selected, arrow, false);
    });
}


function handleDropdown(dropdown, arrow, open) {
    if (open) {
        arrow.classList.add("rotated");
        dropdown.classList.add("active");
    } else {
        arrow.classList.remove("rotated");
        dropdown.classList.remove("active");
    }
}

const descriptionToHint = (selected) => {
    let selectedDisplay = selected.querySelector(".selected-display");
    let descriptionText = document.querySelector('.setting-description-text');
    if (selectedDisplay.innerHTML) {
        descriptionText.classList.add('hint');
    } else {
        descriptionText.classList.remove('hint');
    }
}