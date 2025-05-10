console.log("script.js 로드됨");

// Firebase 객체 확인 (window 객체에서 가져옴)
const auth = window.auth;
const db = window.db;

if (!auth || !db) {
    console.error("Firebase 초기화 실패: auth 또는 db가 정의되지 않았습니다.");
    alert("Firebase 초기화 실패: 페이지를 새로고침하거나 설정을 확인하세요.");
    throw new Error("Firebase 초기화 실패");
}

let cards = [];
let currentCardIndex = 0;
let currentUser = null;

// 인증 상태 변경 감지
auth.onAuthStateChanged(user => {
    console.log("인증 상태 변경:", user ? user.email : "로그아웃");
    currentUser = user;
    const cardSection = document.querySelector('.card-section');
    const inputSection = document.querySelector('.input-section');
    const logoutBtn = document.querySelector('button[onclick="logout()"]');
    const authSection = document.getElementById('auth-section');
    if (user) {
        cardSection.style.display = 'block';
        inputSection.style.display = 'block';
        logoutBtn.style.display = 'inline-block';
        authSection.style.display = 'none';
        loadCards();
        document.getElementById('user-status').textContent = `로그인: ${user.email}`;
    } else {
        cardSection.style.display = 'none';
        inputSection.style.display = 'none';
        logoutBtn.style.display = 'none';
        authSection.style.display = 'block';
        document.getElementById('user-status').textContent = '로그아웃 상태';
    }
});

function login() {
    if (!auth) {
        console.error("auth가 초기화되지 않았습니다.");
        alert("Firebase가 초기화되지 않았습니다. 페이지를 새로고침하세요.");
        return;
    }
    console.log("로그인 버튼 클릭됨");
    const email = prompt("이메일을 입력하세요:");
    const password = prompt("비밀번호를 입력하세요:");
    if (email && password) {
        auth.signInWithEmailAndPassword(email, password)
            .then(userCredential => {
                console.log("로그인 성공:", userCredential.user.email);
            })
            .catch(error => {
                console.error("로그인 오류:", error.message);
                alert(error.message);
            });
    } else {
        alert("이메일과 비밀번호를 입력해주세요!");
    }
}

function signup() {
    if (!auth) {
        console.error("auth가 초기화되지 않았습니다.");
        alert("Firebase가 초기화되지 않았습니다. 페이지를 새로고침하세요.");
        return;
    }
    console.log("회원가입 버튼 클릭됨");
    const email = prompt("이메일을 입력하세요:");
    const password = prompt("비밀번호를 입력하세요:");
    if (email && password) {
        auth.createUserWithEmailAndPassword(email, password)
            .then(userCredential => {
                console.log("회원가입 성공:", userCredential.user.email);
                alert("회원가입 성공! 로그인 상태입니다.");
            })
            .catch(error => {
                console.error("회원가입 오류:", error.message);
                alert(error.message);
            });
    } else {
        alert("이메일과 비밀번호를 입력해주세요!");
    }
}

function logout() {
    if (!auth) {
        console.error("auth가 초기화되지 않았습니다.");
        alert("Firebase가 초기화되지 않았습니다.");
        return;
    }
    console.log("로그아웃 버튼 클릭됨");
    auth.signOut();
}

function addCard() {
    if (!db || !currentUser) {
        console.error("db 또는 currentUser가 초기화되지 않았습니다.");
        alert("Firebase 또는 사용자 상태가 초기화되지 않았습니다.");
        return;
    }
    console.log("새 단어 추가 버튼 클릭됨");
    const word = prompt("영단어를 입력하세요:");
    const meaning = prompt("한글 뜻을 입력하세요:");
    if (word && meaning) {
        db.collection('users').doc(currentUser.uid).collection('cards').add({
            word: word,
            meaning: meaning,
            timestamp: db.FieldValue.serverTimestamp()
        }).then(() => loadCards());
    }
}

function flipCard() {
    console.log("카드 클릭됨");
    const card = document.querySelector('.card');
    card.classList.toggle('flipped');
}

function loadCards() {
    console.log("카드 로드 시도");
    if (!db || !currentUser) {
        console.error("db 또는 currentUser가 초기화되지 않았습니다.");
        return;
    }
    db.collection('users').doc(currentUser.uid).collection('cards')
        .orderBy('timestamp', 'desc')
        .get()
        .then(snapshot => {
            cards = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            currentCardIndex = 0;
            updateCard();
        })
        .catch(error => console.error("카드 로드 오류:", error));
}

function updateCard() {
    console.log("카드 업데이트");
    if (cards.length > 0) {
        const currentCard = cards[currentCardIndex];
        document.getElementById('word').textContent = currentCard.word;
        document.getElementById('meaning').textContent = currentCard.meaning;
        document.querySelector('.card').classList.remove('flipped');
    } else {
        document.getElementById('word').textContent = "단어를 추가하세요!";
        document.getElementById('meaning').textContent = "뜻을 추가하세요!";
    }
}

function checkAnswer() {
    console.log("정답 확인 버튼 클릭됨");
    const userWord = document.getElementById('userWord').value.trim();
    const userMeaning = document.getElementById('userMeaning').value.trim();
    const currentCard = cards[currentCardIndex];

    if (currentCard) {
        const isWordCorrect = userWord.toLowerCase() === currentCard.word.toLowerCase();
        const isMeaningCorrect = userMeaning === currentCard.meaning;
        const result = document.getElementById('result');
        if (isWordCorrect && isMeaningCorrect) {
            result.textContent = "정답입니다!";
            result.style.color = "#4CAF50";
            nextCard();
        } else {
            result.textContent = `오답입니다! 정답: ${currentCard.word} - ${currentCard.meaning}`;
            result.style.color = "#ff4444";
        }
    } else {
        result.textContent = "먼저 단어를 추가하세요!";
        result.style.color = "#ff4444";
    }
    document.getElementById('userWord').value = '';
    document.getElementById('userMeaning').value = '';
}

function nextCard() {
    console.log("다음 카드 버튼 클릭됨");
    currentCardIndex = (currentCardIndex + 1) % cards.length;
    updateCard();
}
