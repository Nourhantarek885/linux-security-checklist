const checkboxes = document.querySelectorAll(
    'input[type="checkbox"]'
);

const progress = document.createElement("p");

progress.id = "progress";

document.querySelector(".container").appendChild(progress);

function updateProgress() {

    const total = checkboxes.length;

    const completed = document.querySelectorAll(
        'input[type="checkbox"]:checked'
    ).length;

    const percentage = Math.round(
        (completed / total) * 100
    );

    progress.textContent =
        `Progress: ${percentage}% (${completed}/${total})`;
}

checkboxes.forEach(function (checkbox) {

    checkbox.addEventListener(
        "change",
        updateProgress
    );

});

updateProgress();
