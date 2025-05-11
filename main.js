// Firebase 초기화 (CDN 방식)
console.log("main.js 로드됨");

const firebaseConfig = {
    apiKey: "AIzaSyA4AYUN2X_84iWC4w3avQ8m6K_DrpRnSro",
    authDomain: "vocabularycards-aa036.firebaseapp.com",
    projectId: "vocabularycards-aa036",
    storageBucket: "vocabularycards-aa036.appspot.com",
    messagingSenderId: "982130486893",
    appId: "1:982130486893:web:f3f0e11eb27b098d649964"
};

let auth, db;
try {
    // CDN 방식: firebase.initializeApp 호출
    const app = firebase.initializeApp(firebaseConfig);
    auth = firebase.auth(); // CDN 방식: app 인스턴스 없이 직접 호출
    db = firebase.firestore(); // CDN 방식: app 인스턴스 없이 직접 호출
    console.log("Firebase 초기화 성공");
} catch (error) {
    console.error("Firebase 초기화 오류:", error.message);
    alert("Firebase 초기화 실패: " + error.message);
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

// 전역 함수로 노출
window.login = function() {
    if (!auth) {
        console.error("auth가 초기화되지 않았습니다.");
        alert("Firebase가 초기화되지 않았습니다. 페이지를 새로고침하세요.");
        return;
    }
    console.log("로그인 버튼 클릭됨");
    const email = prompt("이메일을 입력하세요:");
    const password = prompt("비밀번호를 입력하세요:");
    if (!email || !password) {
        alert("이메일과 비밀번호를 입력해주세요!");
        return;
    }
    console.log("로그인 시도 - 이메일:", email, "비밀번호:", password);
    auth.signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            console.log("로그인 성공:", userCredential.user.email);
        })
        .catch(error => {
            console.error("로그인 오류:", error.message, "코드:", error.code);
            alert("로그인 실패: " + error.message + " (코드: " + error.code + ")");
        });
};

window.signup = function() {
    if (!auth) {
        console.error("auth가 초기화되지 않았습니다.");
        alert("Firebase가 초기화되지 않았습니다. 페이지를 새로고침하세요.");
        return;
    }
    console.log("회원가입 버튼 클릭됨");
    const email = prompt("이메일을 입력하세요:");
    const password = prompt("비밀번호를 입력하세요:");
    if (!email || !password) {
        alert("이메일과 비밀번호를 입력해주세요!");
        return;
    }
    if (!email.includes('@') || email.length < 5) {
        alert("유효한 이메일 주소를 입력해주세요!");
        return;
    }
    if (password.length < 6) {
        alert("비밀번호는 최소 6자 이상이어야 합니다!");
        return;
    }
    console.log("회원가입 시도 - 이메일:", email, "비밀번호:", password);
    console.log("auth 객체 상태:", auth ? "auth 존재" : "auth 없음");
    try {
        console.log("auth.createUserWithEmailAndPassword 호출 시작");
        auth.createUserWithEmailAndPassword(email, password)
            .then(userCredential => {
                console.log("회원가입 성공:", userCredential.user.email);
                alert("회원가입 성공! 로그인 상태입니다.");
            })
            .catch(error => {
                console.error("회원가입 오류:", error.message, "코드:", error.code);
                alert("회원가입 실패: " + error.message + " (코드: " + error.code + ")");
            })
            .finally(() => {
                console.log("회원가입 요청 완료 (성공/실패 여부와 관계없이)");
            });
        console.log("auth.createUserWithEmailAndPassword 호출 완료");
    } catch (error) {
        console.error("회원가입 중 예외 발생:", error.message);
        alert("회원가입 중 예외 발생: " + error.message);
    }
};

window.logout = function() {
    if (!auth) {
        console.error("auth가 초기화되지 않았습니다.");
        alert("Firebase가 초기화되지 않았습니다.");
        return;
    }
    console.log("로그아웃 버튼 클릭됨");
    auth.signOut();
};

window.addCard = function() {
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
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }).then(() => loadCards());
    }
};

window.flipCard = function() {
    console.log("카드 클릭됨");
    const card = document.querySelector('.card');
    card.classList.toggle('flipped');
};

window.loadCards = function() {
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
};

window.updateCard = function() {
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
};

window.checkAnswer = function() {
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
};

window.nextCard = function() {
    console.log("다음 카드 버튼 클릭됨");
    currentCardIndex = (currentCardIndex + 1) % cards.length;
    updateCard();
};
