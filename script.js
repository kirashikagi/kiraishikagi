const questions = [
    {
        text: 'Я получаю удовольствие от изучения и объяснения библейских истин',
        category: 'учительство'
    },
    {
        text: 'Мне легко замечать практические нужды других людей',
        category: 'служение'
    },
    {
        text: 'Я часто чувствую сильное побуждение молиться за конкретные нужды',
        category: 'молитва'
    },
    {
        text: 'Люди часто обращаются ко мне за утешением и советом',
        category: 'душепопечительство'
    },
    {
        text: 'Я могу доступно объяснять сложные духовные истины',
        category: 'учительство'
    },
    {
        text: 'Мне нравится организовывать людей для совместного служения',
        category: 'администрирование'
    },
    {
        text: 'Я часто первым вызываюсь помочь в практических нуждах',
        category: 'служение'
    },
    {
        text: 'Я замечаю духовные проблемы раньше других',
        category: 'различение'
    },
    {
        text: 'Мне легко делиться верой с незнакомыми людьми',
        category: 'евангелизм'
    },
    {
        text: 'Я чувствую особую радость, когда жертвую на Божье дело',
        category: 'даяние'
    },
    {
        text: 'Мне нравится поддерживать людей в трудных ситуациях',
        category: 'милосердие'
    },
    {
        text: 'Я часто получаю подтверждение, что мои молитвы были услышаны',
        category: 'молитва'
    },
    {
        text: 'Мне легко руководить группой людей',
        category: 'лидерство'
    },
    {
        text: 'Я часто вижу духовный потенциал в людях',
        category: 'наставничество'
    },
    {
        text: 'Мне важно, чтобы истина преподавалась точно и ясно',
        category: 'учительство'
    }
];

const giftDescriptions = {
    'учительство': {
        title: 'Дар учительства',
        description: 'Способность эффективно объяснять и применять Божье Слово, помогая другим расти в понимании духовных истин. Этот дар включает в себя способность систематически излагать библейские принципы и помогать людям применять их в повседневной жизни.'
    },
    'служение': {
        title: 'Дар служения',
        description: 'Способность видеть практические нужды и находить способы их восполнения. Люди с этим даром получают удовольствие от практической помощи другим и часто замечают то, что другие упускают из виду.'
    },
    'молитва': {
        title: 'Дар молитвы и ходатайства',
        description: 'Особая чувствительность к водительству Духа Святого в молитве и способность эффективно молиться за других. Включает в себя глубокое понимание духовных нужд и настойчивость в молитве.'
    },
    'душепопечительство': {
        title: 'Дар душепопечительства',
        description: 'Способность оказывать духовную поддержку, утешение и совет другим людям. Включает умение внимательно слушать, проявлять эмпатию и помогать людям в их духовном росте.'
    },
    'администрирование': {
        title: 'Дар администрирования',
        description: 'Способность эффективно организовывать людей и ресурсы для достижения конкретных целей в служении. Включает навыки планирования, координации и управления.'
    },
    'различение': {
        title: 'Дар различения духов',
        description: 'Способность различать духовные истины от заблуждений, подлинное от ложного. Помогает защищать церковь от ложных учений и распознавать духовные проблемы.'
    },
    'евангелизм': {
        title: 'Дар благовестия',
        description: 'Особая способность эффективно делиться Евангелием с неверующими. Включает умение ясно объяснять путь спасения и приводить людей к принятию Христа.'
    },
    'даяние': {
        title: 'Дар даяния',
        description: 'Способность щедро и с радостью жертвовать свои материальные ресурсы для Божьего дела. Включает мудрость в распределении ресурсов и чувствительность к нуждам других.'
    },
    'милосердие': {
        title: 'Дар милосердия',
        description: 'Способность проявлять искреннее сострадание и оказывать практическую помощь страдающим. Включает эмпатию и желание облегчить боль других.'
    },
    'лидерство': {
        title: 'Дар лидерства',
        description: 'Способность вести и вдохновлять других в служении. Включает умение формировать видение, мотивировать людей и помогать им достигать духовных целей.'
    },
    'наставничество': {
        title: 'Дар наставничества',
        description: 'Способность видеть потенциал в людях и помогать им развиваться духовно. Включает умение поддерживать, обучать и направлять других в их духовном пути.'
    }
};

let currentQuestion = 0;
let answers = {};

function startTest() {
    document.getElementById('welcome-screen').classList.remove('active');
    document.getElementById('test-screen').classList.add('active');
    showQuestion();
}

function showQuestion() {
    const question = questions[currentQuestion];
    document.getElementById('question-container').textContent = question.text;
    document.getElementById('progress').style.width = `${(currentQuestion + 1) / questions.length * 100}%`;
    
    // Reset button selection
    document.querySelectorAll('.btn-answer').forEach(btn => {
        btn.classList.remove('selected');
        if (answers[currentQuestion] === parseInt(btn.textContent)) {
            btn.classList.add('selected');
        }
    });
}

function submitAnswer(value) {
    answers[currentQuestion] = value;
    
    document.querySelectorAll('.btn-answer').forEach(btn => {
        btn.classList.remove('selected');
        if (parseInt(btn.textContent) === value) {
            btn.classList.add('selected');
        }
    });

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion();
    } else {
        showResults();
    }
}

function calculateResults() {
    const results = {};
    
    questions.forEach((question, index) => {
        if (answers[index]) {
            results[question.category] = (results[question.category] || 0) + answers[index];
        }
    });

    return Object.entries(results)
        .map(([category, score]) => ({
            category,
            score,
            averageScore: score / questions.filter(q => q.category === category).length
        }))
        .sort((a, b) => b.averageScore - a.averageScore);
}

function showResults() {
    document.getElementById('test-screen').classList.remove('active');
    document.getElementById('results-screen').classList.add('active');

    const results = calculateResults();
    const resultsContainer = document.getElementById('results-container');
    resultsContainer.innerHTML = '';

    results.slice(0, 3).forEach(result => {
        const gift = giftDescriptions[result.category];
        const resultElement = document.createElement('div');
        resultElement.className = 'gift-result';
        resultElement.innerHTML = `
            <h3 class="gift-title">${gift.title}</h3>
            <p class="gift-score">Средний балл: ${result.averageScore.toFixed(1)} из 5</p>
            <p class="gift-description">${gift.description}</p>
        `;
        resultsContainer.appendChild(resultElement);
    });
}

function restartTest() {
    currentQuestion = 0;
    answers = {};
    document.getElementById('results-screen').classList.remove('active');
    document.getElementById('welcome-screen').classList.add('active');
} 