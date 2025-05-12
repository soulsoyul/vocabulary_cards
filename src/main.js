// 단어 저장용 배열 (localStorage로 영속화)
let cards = JSON.parse(localStorage.getItem('cards')) || [];

// 새 단어 추가
window.addCard = function () {
    const word = prompt("새 단어를 입력하세요:");
    const meaning = prompt("단어 뜻을 입력하세요:");
    if (word && meaning) {
        const newCard = { word, meaning };
        cards.push(newCard);
        localStorage.setItem('cards', JSON.stringify(cards));
        alert("단어가 추가되었습니다!");
        updateCardDisplay(); // UI 업데이트
    } else {
        alert("단어와 뜻을 모두 입력해주세요.");
    }
};

// 카드 UI 업데이트
function updateCardDisplay() {
    const wordElement = document.getElementById('word');
    const meaningElement = document.getElementById('meaning');
    if (cards.length > 0) {
        const currentCard = cards[cards.length - 1]; // 마지막 카드 표시
        wordElement.textContent = currentCard.word;
        meaningElement.textContent = currentCard.meaning;
    }
}

// 카드 뒤집기
window.flipCard = function () {
    document.querySelector('.card').classList.toggle('flipped');
};

// 다음 카드
let currentIndex = 0;
window.nextCard = function () {
    if (cards.length === 0) return;
    currentIndex = (currentIndex + 1) % cards.length;
    const wordElement = document.getElementById('word');
    const meaningElement = document.getElementById('meaning');
    wordElement.textContent = cards[currentIndex].word;
    meaningElement.textContent = cards[currentIndex].meaning;
    document.querySelector('.card').classList.remove('flipped');
};

// 퀴즈 확인
window.checkAnswer = function () {
    const userWord = document.getElementById('userWord').value;
    const userMeaning = document.getElementById('userMeaning').value;
    const resultElement = document.getElementById('result');
    const currentCard = cards[currentIndex];
    if (currentCard && userWord === currentCard.word && userMeaning === currentCard.meaning) {
        resultElement.textContent = "정답입니다!";
    } else {
        resultElement.textContent = "틀렸습니다. 다시 시도해보세요.";
    }
};

// 로그인/회원가입 로직
window.signup = function () {
    const email = prompt("이메일을 입력하세요:");
    const password = prompt("비밀번호를 입력하세요:");
    if (email && password) {
        localStorage.setItem('user', JSON.stringify({ email, password }));
        alert(`회원가입 성공: ${email}`);
        document.getElementById('auth-section').style.display = 'none';
        document.querySelector('.card-section').style.display = 'block';
        document.querySelector('.input-section').style.display = 'block';
    }
};

window.login = function () {
    const email = prompt("이메일을 입력하세요:");
    const password = prompt("비밀번호를 입력하세요:");
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.email === email && user.password === password) {
        alert("로그인 성공!");
        document.getElementById('auth-section').style.display = 'none';
        document.querySelector('.card-section').style.display = 'block';
        document.querySelector('.input-section').style.display = 'block';
    } else {
        alert("로그인 실패. 다시 시도해주세요.");
    }
};

window.logout = function () {
    alert("로그아웃 되었습니다.");
    document.getElementById('auth-section').style.display = 'block';
    document.querySelector('.card-section').style.display = 'none';
    document.querySelector('.input-section').style.display = 'none';
};
