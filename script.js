// Данные о духовных дарах
const spiritualGifts = {
    prophecy: { 
        name: "Пророчество", 
        icon: "fas fa-bullhorn", 
        description: "Способность передавать Божьи послания и наставления",
        detailedDescription: "Дар пророчества позволяет получать откровения от Бога и передавать их другим людям. Это может проявляться в виде предупреждений, наставлений, ободрений или откровений о будущем. Люди с этим даром часто чувствуют сильное побуждение делиться Божьим словом и могут точно передавать духовные послания."
    },
    teaching: { 
        name: "Учение", 
        icon: "fas fa-chalkboard-teacher", 
        description: "Дар объяснять и передавать духовные истины",
        detailedDescription: "Дар учения позволяет ясно и понятно объяснять сложные духовные концепции. Люди с этим даром любят изучать Библию, структурировать информацию и помогать другим расти в понимании Божьего слова. Они получают удовольствие от подготовки и проведения библейских занятий."
    },
    exhortation: { 
        name: "Увещевание", 
        icon: "fas fa-hands-helping", 
        description: "Способность ободрять и поддерживать других",
        detailedDescription: "Дар увещевания проявляется в способности ободрять, поддерживать и мотивировать других людей. Люди с этим даром умеют находить правильные слова в сложных ситуациях, видят потенциал в других и помогают им преодолевать препятствия. Они часто становятся советниками и наставниками."
    },
    giving: { 
        name: "Раздаяние", 
        icon: "fas fa-hand-holding-heart", 
        description: "Дар щедро делиться материальными и духовными благами",
        detailedDescription: "Дар раздаяния проявляется в щедрости и готовности делиться ресурсами с нуждающимися. Люди с этим даром получают удовольствие от помощи материально, жертвуют время и деньги на благие дела, и считают свои ресурсы принадлежащими Богу. Они часто думают о том, как можно помочь другим."
    },
    leadership: { 
        name: "Управление", 
        icon: "fas fa-users-cog", 
        description: "Способность организовывать и направлять служение",
        detailedDescription: "Дар управления позволяет эффективно организовывать и направлять служение. Люди с этим даром умеют принимать решения, брать на себя ответственность и вдохновлять других на достижение целей. К ним часто обращаются за советом и руководством, и они естественно становятся лидерами."
    },
    mercy: { 
        name: "Милосердие", 
        icon: "fas fa-heart", 
        description: "Дар сострадания и помощи нуждающимся",
        detailedDescription: "Дар милосердия проявляется в глубоком сострадании к людям, переживающим боль и страдания. Люди с этим даром чувствуют боль других как свою собственную, получают удовлетворение от помощи больным и нуждающимся, и готовы тратить время на поддержку тех, кто в беде. Они умеют слушать и проявлять сострадание."
    },
    faith: { 
        name: "Вера", 
        icon: "fas fa-cross", 
        description: "Особая способность доверять Богу в трудных обстоятельствах",
        detailedDescription: "Дар веры позволяет сохранять твердую веру в Божьи обещания даже в самых трудных обстоятельствах. Люди с этим даром доверяют Богу в ситуациях, которые кажутся невозможными, умеют видеть Божью руку в сложных обстоятельствах, и их вера вдохновляет других доверять Богу. Они часто молятся за чудеса."
    },
    discernment: { 
        name: "Различение духов", 
        icon: "fas fa-eye", 
        description: "Способность различать истину от лжи",
        detailedDescription: "Дар различения духов позволяет различать истину от лжи и определять духовные мотивы. Люди с этим даром могут определить, когда что-то не соответствует Божьей истине, чувствуют, когда что-то духовно неправильно, и умеют различать истинные и ложные учения. К ним часто обращаются за советом в духовных вопросах."
    },
    evangelism: { 
        name: "Благовестие", 
        icon: "fas fa-globe", 
        description: "Дар делиться Евангелием с неверующими",
        detailedDescription: "Дар благовестия проявляется в сильном желании делиться Евангелием с неверующими. Люди с этим даром испытывают радость, рассказывая другим о Христе, активно ищут возможности поделиться Евангелием, и умеют объяснять его простым и понятным языком. Они часто думают о том, как привести людей к Христу."
    },
    service: { 
        name: "Служение", 
        icon: "fas fa-tools", 
        description: "Способность помогать и поддерживать других",
        detailedDescription: "Дар служения проявляется в готовности выполнять практическую работу и помогать другим. Люди с этим даром получают удовольствие от практической помощи, умеют замечать нужды других, готовы выполнять работу, которую другие не хотят делать, и часто предлагают свою помощь без просьбы. Они получают радость от того, что могут облегчить жизнь другим."
    },
    hospitality: { 
        name: "Гостеприимство", 
        icon: "fas fa-home", 
        description: "Дар создавать уютную атмосферу для гостей",
        detailedDescription: "Дар гостеприимства позволяет создавать уютную и теплую атмосферу для гостей. Люди с этим даром получают удовольствие от приема гостей, их дом всегда открыт для нуждающихся, они любят готовить еду для других и умеют создавать комфортную атмосферу. Люди чувствуют себя комфортно в их доме."
    },
    administration: { 
        name: "Администрирование", 
        icon: "fas fa-tasks", 
        description: "Способность организовывать и координировать работу",
        detailedDescription: "Дар администрирования позволяет эффективно планировать, организовывать и координировать работу. Люди с этим даром хорошо организуют мероприятия, умеют управлять ресурсами и людьми, получают удовольствие от планирования и организации, умеют создавать системы и процессы. Люди доверяют им организацию важных мероприятий."
    }
};

// Вопросы теста (72 вопроса)
const questions = [
    // Пророчество (1-6)
    "Я чувствую сильное желание делиться Божьим словом с другими",
    "Я получаю откровения от Бога, которые нужно передать другим",
    "Я могу точно передавать Божьи послания людям",
    "Люди говорят, что мои слова часто оказываются пророческими",
    "Я чувствую, когда Бог хочет, чтобы я передал послание другим",
    "Я получаю видения или сны, которые имеют духовное значение",
    
    // Учение (7-12)
    "Мне нравится объяснять сложные духовные концепции простым языком",
    "Я люблю изучать Библию и делиться своими открытиями",
    "Люди часто просят меня объяснить духовные истины",
    "Я получаю удовольствие от подготовки и проведения библейских занятий",
    "Я умею структурировать информацию так, чтобы она была понятной",
    "Мне нравится помогать другим расти в понимании Божьего слова",
    
    // Увещевание (13-18)
    "Я часто ободряю людей, когда они переживают трудности",
    "Я умею находить правильные слова для поддержки людей",
    "Люди обращаются ко мне за советом в сложных ситуациях",
    "Я получаю радость от того, что помогаю другим преодолевать препятствия",
    "Я умею мотивировать людей к действию",
    "Я часто вижу потенциал в людях и помогаю им его раскрыть",
    
    // Раздаяние (19-24)
    "Я с радостью делюсь своими ресурсами с нуждающимися",
    "Я жертвую деньги и время на благие дела",
    "Я получаю удовольствие от того, что могу помочь материально",
    "Я часто думаю о том, как можно помочь другим",
    "Я готов пожертвовать своими удобствами ради других",
    "Я считаю, что мои ресурсы принадлежат Богу",
    
    // Управление/Лидерство (25-30)
    "Люди часто обращаются ко мне за советом и руководством",
    "Люди естественно следуют моему примеру и руководству",
    "Я умею принимать решения и брать на себя ответственность",
    "Я получаю удовольствие от организации и координации работы",
    "Люди доверяют мне руководство проектами",
    "Я умею вдохновлять других на достижение целей",
    
    // Милосердие (31-36)
    "Я глубоко сочувствую людям, переживающим боль и страдания",
    "Я чувствую боль других людей как свою собственную",
    "Я получаю удовлетворение от помощи больным и нуждающимся",
    "Я часто посещаю больных и одиноких людей",
    "Я умею слушать людей и проявлять к ним сострадание",
    "Я готов тратить время на поддержку тех, кто в беде",
    
    // Вера (37-42)
    "Я твердо верю в Божьи обещания даже в трудных обстоятельствах",
    "Моя вера остается сильной даже когда все вокруг сомневаются",
    "Я доверяю Богу в ситуациях, которые кажутся невозможными",
    "Я часто молюсь за чудеса и верим, что они произойдут",
    "Я умею видеть Божью руку в сложных обстоятельствах",
    "Моя вера вдохновляет других доверять Богу",
    
    // Различение духов (43-48)
    "Я могу определить, когда что-то не соответствует Божьей истине",
    "Я могу определить мотивы и намерения людей",
    "Я чувствую, когда что-то духовно неправильно",
    "Я умею различать истинные и ложные учения",
    "Люди часто обращаются ко мне за советом в духовных вопросах",
    "Я могу определить, когда человек говорит от Бога или от себя",
    
    // Благовестие (49-54)
    "Я испытываю радость, рассказывая другим о Христе",
    "Я активно ищу возможности поделиться Евангелием",
    "Я умею объяснять Евангелие простым и понятным языком",
    "Я получаю удовольствие от общения с неверующими",
    "Я часто думаю о том, как привести людей к Христу",
    "Я готов идти туда, где есть неверующие люди",
    
    // Служение (55-60)
    "Я получаю удовольствие от практической помощи другим людям",
    "Я получаю удовлетворение от выполнения практических задач",
    "Я умею замечать нужды других и помогать им",
    "Я готов выполнять работу, которую другие не хотят делать",
    "Я получаю радость от того, что могу облегчить жизнь другим",
    "Я часто предлагаю свою помощь без просьбы",
    
    // Гостеприимство (61-66)
    "Мне нравится принимать гостей и создавать для них комфортную атмосферу",
    "Мой дом всегда открыт для гостей и нуждающихся",
    "Я получаю удовольствие от приготовления еды для других",
    "Я умею создавать уютную и теплую атмосферу",
    "Люди чувствуют себя комфортно в моем доме",
    "Я часто приглашаю людей к себе домой",
    
    // Администрирование (67-72)
    "Я хорошо организую мероприятия и координирую работу групп",
    "Я эффективно планирую и организую различные проекты",
    "Я умею управлять ресурсами и людьми",
    "Я получаю удовольствие от планирования и организации",
    "Я умею создавать системы и процессы",
    "Люди доверяют мне организацию важных мероприятий"
];

// Состояние приложения
let currentQuestion = 0;
let answers = [];
let scores = {};

// Инициализация приложения
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Инициализация кнопок
    document.getElementById('start-btn').addEventListener('click', startTest);
    document.getElementById('next-btn').addEventListener('click', nextQuestion);
    document.getElementById('prev-btn').addEventListener('click', prevQuestion);
    document.getElementById('restart-btn').addEventListener('click', restartTest);
    document.getElementById('share-btn').addEventListener('click', shareResults);
    
    // Инициализация опций
    const options = document.querySelectorAll('input[name="answer"]');
    options.forEach(option => {
        option.addEventListener('change', handleAnswerChange);
    });
    
    // Анимация появления элементов
    animateElements();
}

function animateElements() {
    const elements = document.querySelectorAll('.info-card, .header-content');
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            element.style.transition = 'all 0.6s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

function startTest() {
    // Анимация перехода
    const infoSection = document.getElementById('info-section');
    const testSection = document.getElementById('test-section');
    
    infoSection.style.animation = 'fadeOut 0.5s ease-out forwards';
    
    setTimeout(() => {
        infoSection.style.display = 'none';
        testSection.style.display = 'block';
        testSection.style.animation = 'fadeInUp 0.5s ease-out forwards';
        
        // Инициализация теста
        currentQuestion = 0;
        answers = [];
        scores = {};
        
        // Инициализация прогресса
        updateProgress();
        showQuestion();
        
        // Анимация появления вопроса
        const questionCard = document.querySelector('.question-card');
        questionCard.style.opacity = '0';
        questionCard.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            questionCard.style.transition = 'all 0.6s ease';
            questionCard.style.opacity = '1';
            questionCard.style.transform = 'translateY(0)';
        }, 100);
    }, 500);
}

function showQuestion() {
    const questionText = document.getElementById('question-text');
    questionText.textContent = questions[currentQuestion];
    
    // Сброс выбранных ответов
    const options = document.querySelectorAll('input[name="answer"]');
    options.forEach(option => {
        option.checked = false;
    });
    
    // Обновление кнопок навигации
    updateNavigationButtons();
    
    // Анимация появления вопроса
    questionText.style.opacity = '0';
    questionText.style.transform = 'translateX(-20px)';
    
    setTimeout(() => {
        questionText.style.transition = 'all 0.4s ease';
        questionText.style.opacity = '1';
        questionText.style.transform = 'translateX(0)';
    }, 100);
}

function handleAnswerChange(event) {
    const selectedValue = parseInt(event.target.value);
    answers[currentQuestion] = selectedValue;
    
    // Анимация выбора
    const selectedOption = event.target.closest('.option');
    selectedOption.style.transform = 'scale(1.02)';
    selectedOption.style.borderColor = '#667eea';
    
    setTimeout(() => {
        selectedOption.style.transform = 'scale(1)';
        
        // Автоматический переход к следующему вопросу
        if (currentQuestion < questions.length - 1) {
            setTimeout(() => {
                nextQuestion();
            }, 300);
        } else {
            // Если это последний вопрос, завершаем тест
            setTimeout(() => {
                finishTest();
            }, 300);
        }
    }, 200);
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    prevBtn.disabled = currentQuestion === 0;
    
    // Скрываем кнопку "Далее" на последнем вопросе, так как переход автоматический
    if (currentQuestion === questions.length - 1) {
        nextBtn.style.display = 'none';
    } else {
        nextBtn.style.display = 'flex';
        nextBtn.disabled = !answers[currentQuestion];
        nextBtn.innerHTML = '<span>Далее</span><i class="fas fa-arrow-right"></i>';
    }
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        updateProgress();
        showQuestion();
    } else {
        finishTest();
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        updateProgress();
        showQuestion();
        
        // Восстановление предыдущего ответа
        const previousAnswer = answers[currentQuestion];
        if (previousAnswer) {
            const option = document.querySelector(`input[value="${previousAnswer}"]`);
            option.checked = true;
        }
    }
}

function updateProgress() {
    const progressFill = document.getElementById('progress-fill');
    const currentQuestionSpan = document.getElementById('current-question');
    const totalQuestionsSpan = document.getElementById('total-questions');
    
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    progressFill.style.width = `${progress}%`;
    
    currentQuestionSpan.textContent = currentQuestion + 1;
    totalQuestionsSpan.textContent = questions.length;
}

function finishTest() {
    calculateResults();
    showResults();
}

function calculateResults() {
    // Система подсчета очков по категориям духовных даров
    const giftScores = {};
    const giftCategories = {
        prophecy: [0, 1, 2, 3, 4, 5],           // Вопросы 1-6
        teaching: [6, 7, 8, 9, 10, 11],          // Вопросы 7-12
        exhortation: [12, 13, 14, 15, 16, 17],   // Вопросы 13-18
        giving: [18, 19, 20, 21, 22, 23],        // Вопросы 19-24
        leadership: [24, 25, 26, 27, 28, 29],     // Вопросы 25-30
        mercy: [30, 31, 32, 33, 34, 35],         // Вопросы 31-36
        faith: [36, 37, 38, 39, 40, 41],         // Вопросы 37-42
        discernment: [42, 43, 44, 45, 46, 47],   // Вопросы 43-48
        evangelism: [48, 49, 50, 51, 52, 53],    // Вопросы 49-54
        service: [54, 55, 56, 57, 58, 59],       // Вопросы 55-60
        hospitality: [60, 61, 62, 63, 64, 65],   // Вопросы 61-66
        administration: [66, 67, 68, 69, 70, 71] // Вопросы 67-72
    };
    
    // Подсчет очков для каждого дара
    Object.keys(spiritualGifts).forEach(gift => {
        const questionIndices = giftCategories[gift];
        let totalScore = 0;
        let answeredQuestions = 0;
        
        questionIndices.forEach(index => {
            if (answers[index]) {
                totalScore += answers[index];
                answeredQuestions++;
            }
        });
        
        // Вычисление процента (максимум 30 очков за 6 вопросов по 5 баллов)
        if (answeredQuestions > 0) {
            const maxPossibleScore = answeredQuestions * 5;
            const percentage = Math.round((totalScore / maxPossibleScore) * 100);
            giftScores[gift] = percentage;
        } else {
            giftScores[gift] = 0;
        }
    });
    
    // Сортировка по убыванию
    scores = Object.fromEntries(
        Object.entries(giftScores).sort(([,a], [,b]) => b - a)
    );
}

function showResults() {
    const testSection = document.getElementById('test-section');
    const resultsSection = document.getElementById('results-section');
    
    // Анимация перехода
    testSection.style.animation = 'fadeOut 0.5s ease-out forwards';
    
    setTimeout(() => {
        testSection.style.display = 'none';
        resultsSection.style.display = 'block';
        resultsSection.style.animation = 'fadeInUp 0.5s ease-out forwards';
        
        displayResults();
    }, 500);
}

function displayResults() {
    const giftsContainer = document.getElementById('gifts-container');
    giftsContainer.innerHTML = '';
    
    Object.entries(scores).forEach(([giftKey, score], index) => {
        const gift = spiritualGifts[giftKey];
        const giftCard = document.createElement('div');
        giftCard.className = 'gift-card';
        giftCard.style.animationDelay = `${index * 0.1}s`;
        
        giftCard.innerHTML = `
            <div class="gift-name">
                <i class="${gift.icon}"></i>
                <span>${gift.name}</span>
            </div>
            <div class="gift-score">${score}%</div>
            <div class="gift-description">${gift.description}</div>
            <div class="gift-detailed-description">${gift.detailedDescription}</div>
        `;
        
        giftsContainer.appendChild(giftCard);
    });
}

function restartTest() {
    // Анимация перехода обратно к началу
    const resultsSection = document.getElementById('results-section');
    const infoSection = document.getElementById('info-section');
    
    resultsSection.style.animation = 'fadeOut 0.5s ease-out forwards';
    
    setTimeout(() => {
        resultsSection.style.display = 'none';
        infoSection.style.display = 'block';
        infoSection.style.animation = 'fadeInUp 0.5s ease-out forwards';
        
        // Сброс состояния
        currentQuestion = 0;
        answers = [];
        scores = {};
    }, 500);
}

function shareResults() {
    // Простая функция для демонстрации
    const shareText = `Мои духовные дары:\n${Object.entries(scores).slice(0, 3).map(([gift, score]) => 
        `${spiritualGifts[gift].name}: ${score}%`
    ).join('\n')}`;
    
    if (navigator.share) {
        navigator.share({
            title: 'Мои духовные дары',
            text: shareText
        });
    } else {
        // Fallback для браузеров без поддержки Web Share API
        navigator.clipboard.writeText(shareText).then(() => {
            alert('Результаты скопированы в буфер обмена!');
        });
    }
}

// Добавление CSS анимаций
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(-20px);
        }
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .gift-card {
        animation: slideInUp 0.6s ease-out both;
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style); 