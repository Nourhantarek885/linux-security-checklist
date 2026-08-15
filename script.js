const checkboxes = document.querySelectorAll(
    'input[type="checkbox"]'
);

const progress = document.createElement("p");

progress.id = "progress";

document.querySelector(".container").appendChild(progress);

checkboxes.forEach(function (checkbox, index) {

    const savedState = localStorage.getItem(
        `linux-task-${index}`
    );

    checkbox.checked = savedState === "true";

    checkbox.addEventListener("change", function () {

        localStorage.setItem(
            `linux-task-${index}`,
            checkbox.checked
        );

        updateProgress();
    });
});

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
    const progressFill = document.getElementById("progress-fill");

if (progressFill) {
    progressFill.style.width = `${percentage}%`;
}
}

updateProgress();
const resetButton = document.getElementById("resetProgress");

if (resetButton) {
    resetButton.addEventListener("click", function () {

        checkboxes.forEach(function (checkbox, index) {

            checkbox.checked = false;

            localStorage.removeItem(
                `linux-task-${index}`
            );
        });

        updateProgress();
    });
}
