// console.log("hello world"); works!
var questions = document.querySelectorAll(".question");
// all which have question are selected

questions.forEach((question) => {
    question.addEventListener("click", () => {
        if (question.classList.contains("open")) {
            question.classList.remove("open")
        } else {
            var questionIsOpen = document.querySelectorAll(".open")

            questionIsOpen.forEach((quest) => {
                quest.classList.remove("open")
            })

            question.classList.add("open")
        }
    })
})