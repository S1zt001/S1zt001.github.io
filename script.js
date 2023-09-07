function checkAnswers() {
    const answers = {
        q1: document.querySelector('input[name="q1"]:checked'),
        q2: document.querySelector('input[name="q2"]:checked')
    };

    const result = calculateResult(answers);

    // 跳转到结果页面
    window.location.href = `result.html?result=${result}`;
}

function calculateResult(answers) {
    let score = 0;

    if (answers.q1 && answers.q1.value === "红色") {
        score += 1;
    }

    if (answers.q2 && answers.q2.value === "狗") {
        score += 1;
    }

    return score;
}
