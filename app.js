const correctAnswers = ['C', 'B', 'A', 'D'];
const form = document.querySelector('#quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault();

    const userAnswers = [
        form.q1.value,
        form.q2.value,
        form.q3.value,
        form.q4.value,
    ];
    
    let score = 0;
    userAnswers.forEach((answer, index) => {
        if (answer == correctAnswers[index]) {
            score += 25;
        }
    })

    // to make window goes up after submit
    scrollTo(0, 0);

    result.classList.remove('d-none');

    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if (output === score) {
            clearInterval(timer);
        } else {
            output++;
        }
    }, 25);

    // modal trigger
    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
    })
})

