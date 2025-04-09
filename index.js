document.querySelectorAll(".nextStep").forEach(button => {
    button.addEventListener("click", function () {
        changeStep(1);
    });
});

document.querySelectorAll(".prevStep").forEach(button => {
    button.addEventListener("click", function () {
        changeStep(-1);
    });
});

function changeStep(direction) {
    let tabs = Array.from(document.querySelectorAll(".nav-link"));
    let activeTab = document.querySelector(".nav-link.active");
    let currentIndex = tabs.indexOf(activeTab);
    let newIndex = currentIndex + direction;

    if (newIndex >= 0 && newIndex < tabs.length) {
        let newTab = new bootstrap.Tab(tabs[newIndex]);
        newTab.show();

        let currentStep = document.getElementById(`step${currentIndex + 1}`);
        if (currentStep) {
            currentStep.classList.toggle("done", direction > 0);
        }
    }
}


document.getElementById("nextStep4").addEventListener("click", function () {
    window.location.href = "SuccessPage.html";
});
