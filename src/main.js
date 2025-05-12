// Firebase 설정 (firebase-config.js에서 가져옴)
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
import { firebaseConfig } from './firebase-config.js';

// Firebase 초기화
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
console.log("Firestore 인스턴스:", db);

// 단어 저장용 배열
let cards = [];

// 카드 로드
window.loadCards = async function () {
    try {
        const querySnapshot = await getDocs(collection(db, "cards"));
        cards = querySnapshot.docs.map(doc => doc.data());
        console.log("카드 로드 성공:", cards);
        updateCardDisplay();
    } catch (error) {
        console.error("카드 로드 실패:", error);
    }
};

// 새 단어 추가
window.addCard = async function () {
    const word = prompt("새 단어를 입력하세요:");
    const meaning = prompt("단어 뜻을 입력하세요:");
    if (word && meaning) {
        try {
            await addDoc(collection(db, "cards"), { word, meaning });
            console.log("새 단어 추가 성공:", { word, meaning });
            await loadCards(); // 카드 재로드
            alert("단어가 추가되었습니다!");
        } catch (error) {
            console.error("단어 추가 실패:", error);
            alert("단어 추가에 실패했습니다.");
        }
    } else {
        alert("단어와 뜻을 모두 입력해주세요.");
    }
};

// 카드 UI 업데이트
function updateCardDisplay() {
    const wordElement = document.getElementById('word');
    const meaningElement = document.getElementById('meaning');
    if (cards.length > 0) {
        const currentCard = cards[cards.length - 1];
        wordElement.textContent = currentCard.word;
        meaningElement.textContent = currentCard.meaning;
    }
    console.log("UI 업데이트 후 cards:", cards);
}

// 나머지 함수 (flipCard, nextCard, checkAnswer, signup, login, logout) 동일
window.flipCard = function () {
    document.querySelector('.card').classList.toggle('flipped');
};

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

window.signup = function () {
    const email = prompt("이메일을 입력하세요:");
    const password = prompt("비밀번호를 입력하세요:");
    if (email && password) {
        console.log(`회원가입 시도: ${email}`);
        alert(`회원가입 성공: ${email}`);
        document.getElementById('auth-section').style.display = 'none';
        document.querySelector('.card-section').style.display = 'block';
        document.querySelector('.input-section').style.display = 'block';
        loadCards();
    }
};

window.login = function () {
    const email = prompt("이메일을 입력하세요:");
    const password = prompt("비밀번호를 입력하세요:");
    console.log(`로그인 시도: ${email}`);
    alert("로그인 성공!");
    document.getElementById('auth-section').style.display = 'none';
    document.querySelector('.card-section').style.display = 'block';
    document.querySelector('.input-section').style.display = 'block';
    loadCards();
};

window.logout = function () {
    alert("로그아웃 되었습니다.");
    document.getElementById('auth-section').style.display = 'block';
    document.querySelector('.card-section').style.display = 'none';
    document.querySelector('.input-section').style.display = 'none';
};

// 초기 카드 로드
loadCards();
