// Данные о духовных дарах (5 основных даров)
const spiritualGifts = {
    apostolic: { 
        name: "Апостольский дар", 
        icon: "fas fa-bullhorn", 
        description: "Способность основывать новые церкви и служения",
        detailedDescription: "Апостольский дар проявляется в способности основывать новые церкви, служения и миссии. Люди с этим даром обладают видением для расширения Царства Божьего, умеют мобилизовать ресурсы и людей для новых проектов, и часто становятся пионерами в новых направлениях служения.",
        color: "#667eea"
    },
    pastoral: { 
        name: "Пасторский дар", 
        icon: "fas fa-users", 
        description: "Дар заботы и духовного руководства людьми",
        detailedDescription: "Пасторский дар проявляется в глубокой заботе о духовном благополучии людей. Люди с этим даром естественно становятся духовными наставниками, умеют слушать, поддерживать и направлять других в их духовном пути. Они создают атмосферу безопасности и доверия в церкви.",
        color: "#764ba2"
    },
    teaching: { 
        name: "Учительский дар", 
        icon: "fas fa-chalkboard-teacher", 
        description: "Дар объяснять и передавать духовные истины",
        detailedDescription: "Учительский дар позволяет ясно и систематически объяснять сложные духовные концепции. Люди с этим даром любят изучать Библию, структурировать информацию и помогать другим расти в понимании Божьего слова. Они получают удовольствие от подготовки и проведения библейских занятий.",
        color: "#f093fb"
    },
    prophetic: { 
        name: "Пророческий дар", 
        icon: "fas fa-eye", 
        description: "Способность получать и передавать Божьи откровения",
        detailedDescription: "Пророческий дар позволяет получать откровения от Бога и передавать их другим людям. Это может проявляться в виде предупреждений, наставлений, ободрений или откровений о будущем. Люди с этим даром часто чувствуют сильное побуждение делиться Божьим словом.",
        color: "#f5576c"
    },
    evangelistic: { 
        name: "Евангелизационный дар", 
        icon: "fas fa-globe", 
        description: "Дар делиться Евангелием с неверующими",
        detailedDescription: "Евангелизационный дар проявляется в сильном желании делиться Евангелием с неверующими. Люди с этим даром испытывают радость, рассказывая другим о Христе, активно ищут возможности поделиться Евангелием, и умеют объяснять его простым и понятным языком.",
        color: "#4facfe"
    }
};

// Вспомогательные дары
const supportingGifts = {
    service: { name: "Служение", icon: "fas fa-tools", description: "Практическая помощь и поддержка" },
    giving: { name: "Раздаяние", icon: "fas fa-hand-holding-heart", description: "Щедрость и материальная поддержка" },
    leadership: { name: "Управление", icon: "fas fa-users-cog", description: "Организация и координация работы" },
    mercy: { name: "Милосердие", icon: "fas fa-heart", description: "Сострадание и помощь нуждающимся" },
    faith: { name: "Вера", icon: "fas fa-cross", description: "Особая способность доверять Богу" },
    discernment: { name: "Различение духов", icon: "fas fa-eye", description: "Способность различать истину от лжи" },
    hospitality: { name: "Гостеприимство", icon: "fas fa-home", description: "Создание уютной атмосферы" },
    administration: { name: "Администрирование", icon: "fas fa-tasks", description: "Планирование и организация" }
};

// 25 вопросов теста (5 вопросов на каждый основной дар)
const questions = [
    // Апостольский дар (1-5)
    {
        text: "Я чувствую сильное желание основывать новые служения и проекты",
        category: "Апостольский дар",
        gift: "apostolic"
    },
    {
        text: "Я умею мобилизовать людей и ресурсы для новых инициатив",
        category: "Апостольский дар",
        gift: "apostolic"
    },
    {
        text: "Я часто вижу возможности для расширения служения в новых местах",
        category: "Апостольский дар",
        gift: "apostolic"
    },
    {
        text: "Люди обращаются ко мне за советом по запуску новых проектов",
        category: "Апостольский дар",
        gift: "apostolic"
    },
    {
        text: "Я получаю удовлетворение от создания новых структур и систем",
        category: "Апостольский дар",
        gift: "apostolic"
    },
    
    // Пасторский дар (6-10)
    {
        text: "Я глубоко забочусь о духовном благополучии людей",
        category: "Пасторский дар",
        gift: "pastoral"
    },
    {
        text: "Люди естественно обращаются ко мне за духовным советом",
        category: "Пасторский дар",
        gift: "pastoral"
    },
    {
        text: "Я умею создавать атмосферу безопасности и доверия",
        category: "Пасторский дар",
        gift: "pastoral"
    },
    {
        text: "Я получаю радость от духовного наставничества других",
        category: "Пасторский дар",
        gift: "pastoral"
    },
    {
        text: "Я чувствую ответственность за духовный рост членов церкви",
        category: "Пасторский дар",
        gift: "pastoral"
    },
    
    // Учительский дар (11-15)
    {
        text: "Мне нравится объяснять сложные духовные концепции простым языком",
        category: "Учительский дар",
        gift: "teaching"
    },
    {
        text: "Я люблю изучать Библию и делиться своими открытиями",
        category: "Учительский дар",
        gift: "teaching"
    },
    {
        text: "Люди часто просят меня объяснить духовные истины",
        category: "Учительский дар",
        gift: "teaching"
    },
    {
        text: "Я получаю удовольствие от подготовки и проведения библейских занятий",
        category: "Учительский дар",
        gift: "teaching"
    },
    {
        text: "Я умею структурировать информацию так, чтобы она была понятной",
        category: "Учительский дар",
        gift: "teaching"
    },
    
    // Пророческий дар (16-20)
    {
        text: "Я чувствую сильное желание делиться Божьим словом с другими",
        category: "Пророческий дар",
        gift: "prophetic"
    },
    {
        text: "Я получаю откровения от Бога, которые нужно передать другим",
        category: "Пророческий дар",
        gift: "prophetic"
    },
    {
        text: "Я могу точно передавать Божьи послания людям",
        category: "Пророческий дар",
        gift: "prophetic"
    },
    {
        text: "Люди говорят, что мои слова часто оказываются пророческими",
        category: "Пророческий дар",
        gift: "prophetic"
    },
    {
        text: "Я чувствую, когда Бог хочет, чтобы я передал послание другим",
        category: "Пророческий дар",
        gift: "prophetic"
    },
    
    // Евангелизационный дар (21-25)
    {
        text: "Я испытываю радость, рассказывая другим о Христе",
        category: "Евангелизационный дар",
        gift: "evangelistic"
    },
    {
        text: "Я активно ищу возможности поделиться Евангелием",
        category: "Евангелизационный дар",
        gift: "evangelistic"
    },
    {
        text: "Я умею объяснять Евангелие простым и понятным языком",
        category: "Евангелизационный дар",
        gift: "evangelistic"
    },
    {
        text: "Я получаю удовольствие от общения с неверующими",
        category: "Евангелизационный дар",
        gift: "evangelistic"
    },
    {
        text: "Я часто думаю о том, как привести людей к Христу",
        category: "Евангелизационный дар",
        gift: "evangelistic"
    }
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
    const questionNumber = document.getElementById('question-number');
    const questionCategory = document.getElementById('question-category');
    
    questionText.textContent = questions[currentQuestion].text;
    questionNumber.textContent = currentQuestion + 1;
    questionCategory.textContent = questions[currentQuestion].category;
    
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
    
    // Кратковременная анимация выбора
    const selectedOption = event.target.closest('.option');
    selectedOption.style.transform = 'scale(1.02)';
    selectedOption.style.borderColor = '#667eea';
    selectedOption.style.backgroundColor = 'rgba(102, 126, 234, 0.1)';
    
    // Убираем подсветку через короткое время
    setTimeout(() => {
        selectedOption.style.transform = 'scale(1)';
        selectedOption.style.borderColor = '#e2e8f0';
        selectedOption.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
    }, 300);
        
        // Автоматический переход к следующему вопросу
        if (currentQuestion < questions.length - 1) {
            setTimeout(() => {
                nextQuestion();
        }, 500);
        } else {
            // Если это последний вопрос, завершаем тест
            setTimeout(() => {
                finishTest();
        }, 500);
        }
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    prevBtn.disabled = currentQuestion === 0;
    
    // Скрываем кнопку "Далее" на последнем вопросе
    if (currentQuestion === questions.length - 1) {
        nextBtn.style.display = 'none';
    } else {
        nextBtn.style.display = 'flex';
        nextBtn.disabled = !answers[currentQuestion];
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
    // Подсчет очков для каждого основного дара
    const giftScores = {};
    const giftDetails = {};
    
    Object.keys(spiritualGifts).forEach(giftKey => {
        let totalScore = 0;
        let answeredQuestions = 0;
        let strongAnswers = 0; // Ответы 4-5 баллов
        let moderateAnswers = 0; // Ответы 3 балла
        
        // Подсчитываем очки для вопросов этого дара
        questions.forEach((question, index) => {
            if (question.gift === giftKey && answers[index]) {
                totalScore += answers[index];
                answeredQuestions++;
                
                if (answers[index] >= 4) {
                    strongAnswers++;
                } else if (answers[index] === 3) {
                    moderateAnswers++;
                }
            }
        });
        
        if (answeredQuestions > 0) {
            const maxPossibleScore = answeredQuestions * 5;
            const basePercentage = Math.round((totalScore / maxPossibleScore) * 100);
            
            // Бонус за сильные ответы
            const strongBonus = strongAnswers * 3;
            const moderateBonus = moderateAnswers * 1;
            const adjustedPercentage = Math.min(100, basePercentage + strongBonus + moderateBonus);
            
            giftScores[giftKey] = Math.round(adjustedPercentage);
            
            // Детальная информация о даре
            giftDetails[giftKey] = {
                totalScore: totalScore,
                answeredQuestions: answeredQuestions,
                strongAnswers: strongAnswers,
                moderateAnswers: moderateAnswers,
                averageScore: (totalScore / answeredQuestions).toFixed(1),
                strength: strongAnswers >= 3 ? 'Высокая' : strongAnswers >= 1 ? 'Средняя' : 'Низкая'
            };
        } else {
            giftScores[giftKey] = 0;
            giftDetails[giftKey] = {
                totalScore: 0,
                answeredQuestions: 0,
                strongAnswers: 0,
                moderateAnswers: 0,
                averageScore: '0.0',
                strength: 'Не определена'
            };
        }
    });
    
    // Сортировка по убыванию
    scores = Object.fromEntries(
        Object.entries(giftScores).sort(([,a], [,b]) => b - a)
    );
    
    // Сохраняем детальную информацию
    window.giftDetails = giftDetails;
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
    displayMainGifts();
    displaySupportingGifts();
    displayResultsSummary();
}

function displayMainGifts() {
    const mainGiftsContainer = document.getElementById('main-gifts');
    mainGiftsContainer.innerHTML = '<h3>Ваши основные духовные дары</h3>';
    
    Object.entries(scores).forEach(([giftKey, score], index) => {
        const gift = spiritualGifts[giftKey];
        const details = window.giftDetails[giftKey];
        
        const giftCard = document.createElement('div');
        giftCard.className = 'gift-card';
        giftCard.style.animationDelay = `${index * 0.1}s`;
        giftCard.style.borderLeftColor = gift.color;
        
        const rank = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `${index + 1}️⃣`;
        
        giftCard.innerHTML = `
            <div class="gift-name">
                <i class="${gift.icon}" style="color: ${gift.color}"></i>
                <span>${rank} ${gift.name}</span>
            </div>
            <div class="gift-score" style="color: ${gift.color}">${score}%</div>
            <div class="gift-description">${gift.description}</div>
            <div class="gift-detailed-description">${gift.detailedDescription}</div>
            <div class="gift-stats">
                <span>Сила: ${details.strength}</span>
                <span>Средний балл: ${details.averageScore}</span>
            </div>
        `;
        
        mainGiftsContainer.appendChild(giftCard);
    });
}

function displaySupportingGifts() {
    const supportingGiftsContainer = document.getElementById('supporting-gifts');
    supportingGiftsContainer.innerHTML = '<h3>Вспомогательные дары</h3>';
    
    // Определяем вспомогательные дары на основе ответов
    const supportingScores = {};
    
    Object.keys(supportingGifts).forEach(giftKey => {
        let totalScore = 0;
        let answeredQuestions = 0;
        
        // Анализируем ответы на все вопросы для определения вспомогательных даров
        questions.forEach((question, index) => {
            if (answers[index]) {
                totalScore += answers[index];
                answeredQuestions++;
            }
        });
        
        if (answeredQuestions > 0) {
            const averageScore = totalScore / answeredQuestions;
            supportingScores[giftKey] = Math.round(averageScore * 20); // Конвертируем в проценты
        }
    });
    
    // Сортируем вспомогательные дары
    const sortedSupporting = Object.entries(supportingScores)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 3); // Показываем топ-3
    
    sortedSupporting.forEach(([giftKey, score], index) => {
        const gift = supportingGifts[giftKey];
        
        const giftCard = document.createElement('div');
        giftCard.className = 'gift-card supporting';
        giftCard.style.animationDelay = `${index * 0.1}s`;
        
        giftCard.innerHTML = `
            <div class="gift-name">
                <i class="${gift.icon}"></i>
                <span>${gift.name}</span>
            </div>
            <div class="gift-score">${score}%</div>
            <div class="gift-description">${gift.description}</div>
        `;
        
        supportingGiftsContainer.appendChild(giftCard);
    });
}

function displayResultsSummary() {
    const resultsSummary = document.getElementById('results-summary');
    const topGift = Object.keys(scores)[0];
    const topGiftData = spiritualGifts[topGift];
    const topScore = scores[topGift];
    
    let summaryText = '';
    let recommendation = '';
    
    if (topScore >= 80) {
        summaryText = `У вас ярко выраженный ${topGiftData.name.toLowerCase()}. Это ваш основной дар для служения.`;
        recommendation = `Рекомендуем активно использовать этот дар в церкви и развивать его дальше.`;
    } else if (topScore >= 60) {
        summaryText = `У вас хорошо развит ${topGiftData.name.toLowerCase()}. Это один из ваших сильных даров.`;
        recommendation = `Продолжайте развивать этот дар и искать возможности для его применения.`;
    } else {
        summaryText = `У вас есть потенциал для развития ${topGiftData.name.toLowerCase()}.`;
        recommendation = `Работайте над развитием этого дара через молитву и практику.`;
    }
    
    resultsSummary.innerHTML = `
        <h3>Общий анализ</h3>
        <div class="summary-content">
            <p>${summaryText}</p>
            <p>${recommendation}</p>
            <div class="summary-note">
                <i class="fas fa-lightbulb"></i>
                <span>Помните, что все дары важны для здорового функционирования церкви. Используйте ваши дары с любовью и смирением.</span>
            </div>
        </div>
    `;
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
    const topGifts = Object.entries(scores).slice(0, 3);
    const shareText = `Мои духовные дары:\n${topGifts.map(([gift, score], index) => {
        const giftName = spiritualGifts[gift].name;
        const emoji = index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉';
        return `${emoji} ${giftName}: ${score}%`;
    }).join('\n')}`;
    
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
        border-left: 4px solid #667eea;
    }
    
    .gift-card.supporting {
        border-left-color: #f093fb;
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
    
    .gift-stats {
        display: flex;
        gap: 20px;
        margin-top: 15px;
        padding-top: 15px;
        border-top: 1px solid rgba(102, 126, 234, 0.1);
    }
    
    .gift-stats span {
        font-size: 0.9rem;
        color: #718096;
        background: rgba(102, 126, 234, 0.1);
        padding: 5px 10px;
        border-radius: 15px;
    }
    
    .summary-content {
        background: linear-gradient(135deg, rgba(102, 126, 234, 0.05), rgba(240, 147, 251, 0.05));
        border-radius: 20px;
        padding: 25px;
        border: 1px solid rgba(102, 126, 234, 0.1);
    }
    
    .summary-content p {
        margin-bottom: 15px;
        font-size: 1.1rem;
        color: #4a5568;
        line-height: 1.6;
    }
    
    .summary-note {
        display: flex;
        align-items: center;
        gap: 15px;
        margin-top: 20px;
        padding: 20px;
        background: rgba(240, 147, 251, 0.1);
        border-radius: 15px;
        border-left: 4px solid #f093fb;
    }
    
    .summary-note i {
        font-size: 1.5rem;
        color: #f093fb;
    }
    
    .summary-note span {
        font-size: 1rem;
        color: #718096;
        font-style: italic;
        line-height: 1.5;
    }
    
    .main-gifts h3, .supporting-gifts h3, .results-summary h3 {
        font-size: 1.8rem;
        color: #4a5568;
        margin-bottom: 25px;
        text-align: center;
        font-weight: 600;
    }
`;
document.head.appendChild(style); 