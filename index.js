function changeType() {
    let input = document.getElementById("passwordInput");
    input.type = input.type === "text" ? "password" : "text";
}

document.getElementById("nextStep1").addEventListener("click", function () {
    var yourselfTab = new bootstrap.Tab(document.querySelector('a[href="#yourself"]'));
    yourselfTab.show();
    let step1 = document.getElementById("step1")
    step1.classList.add("done")
});
document.getElementById("prevStep1").addEventListener("click", function () {
    var phoneTab = new bootstrap.Tab(document.querySelector('a[href="#phone"]'));
    phoneTab.show();
    let step1 = document.getElementById("step1")
    step1.classList.remove("done")
});

document.getElementById("nextStep2").addEventListener("click", function () {
    var companyTab = new bootstrap.Tab(document.querySelector('a[href="#company"]'));
    companyTab.show();
    let step2 = document.getElementById("step2")
    step2.classList.add("done")
});
document.getElementById("prevStep2").addEventListener("click", function () {
    var yourselfTab = new bootstrap.Tab(document.querySelector('a[href="#yourself"]'));
    yourselfTab.show();
    let step2 = document.getElementById("step2")
    step2.classList.remove("done")
});
document.getElementById("nextStep3").addEventListener("click", function () {
    var teamMemberTab = new bootstrap.Tab(document.querySelector('a[href="#teamMember"]'));
    teamMemberTab.show();
    let step3 = document.getElementById("step3")
    step3.classList.add("done")
});
document.getElementById("prevStep3").addEventListener("click", function () {
    var companyTab = new bootstrap.Tab(document.querySelector('a[href="#company"]'));
    companyTab.show();
    let step3 = document.getElementById("step3")
    step3.classList.remove("done")
});

document.getElementById("nextStep4").addEventListener("click", function () {
    window.location.href = "SuccessPage.html"
});
document.getElementById("step1").addEventListener("click", function () {
    window.location.href = "SuccessPage.html"
});


