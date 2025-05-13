import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

import { firebaseConfig } from './firebase-config.js';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
console.log("Firebase 초기화 성공:", db);

let cards = [];
let currentUser = null;

onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("인증 상태 변경:", user.email);
        currentUser = user;
        loadCards();
    } else {
        console.log("로그아웃 상태");
        currentUser = null;
        cards = [];
        updateCardDisplay();
    }
});

window.loadCards = async function () {
    if (!currentUser) {
        console.log("로그인 필요");
        return;
    }
    try {
        console.log("카드 로드 시도, Firestore db:", db);
        const querySnapshot = await getDocs(collection(db, `users/${currentUser.uid}/cards`));
        cards = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        console.log("카드 로드 성공:", cards);
        updateCardDisplay();
    } catch (error) {
        console.error("카드 로드 실패:", error);
    }
};

window.addCard = async function () {
    if (!currentUser) {
        alert("로그인 후 단어를 추가할 수 있습니다.");
        return;
    }
    const word = prompt("새 단어를 입력하세요:");
    const meaning = prompt("단어 뜻을 입력하세요:");
    if (word && meaning) {
        try {
            console.log("새 단어 추가 버튼 클릭됨, Firestore db:", db);
            await addDoc(collection(db, `users/${currentUser.uid}/cards`), { word, meaning });
            console.log("새 단어 추가 성공:", { word, meaning });
            await loadCards();
            alert("단어가 추가되었습니다!");
        } catch (error) {
            console.error("단어 추가 실패:", error);
            alert("단어 추가에 실패했습니다.");
        }
    } else {
        alert("단어와 뜻을 모두 입력해주세요.");
    }
};

function updateCardDisplay() {
    console.log("카드 업데이트");
    const wordElement = document.getElementById('word');
    const meaningElement = document.getElementById('meaning');
    if (cards.length > 0) {
        const currentCard = cards[cards.length - 1];
        wordElement.textContent = currentCard.word || "단어를 추가하세요!";
        meaningElement.textContent = currentCard.meaning || "단어를 추가하세요!";
    } else {
        wordElement.textContent = "단어를 추가하세요!";
        meaningElement.textContent = "단어를 추가하세요!";
    }
    console.log("UI 업데이트 후 cards:", cards);
}

window.flipCard = function () {
    console.log("카드 클릭됨");
    document.querySelector('.card').classList.toggle('flipped');
};

let currentIndex = 0;
window.nextCard = function () {
    console.log("다음 카드 버튼 클릭됨");
    if (cards.length === 0) return;
    currentIndex = (currentIndex + 1) % cards.length;
    const wordElement = document.getElementById('word');
    const meaningElement = document.getElementById('meaning');
    wordElement.textContent = cards[currentIndex].word;
    meaningElement.textContent = cards[currentIndex].meaning;
    document.querySelector('.card').classList.remove('flipped');
};

window.checkAnswer = function () {
    console.log("정답 확인 버튼 클릭됨");
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

window.signup = async function () {
    const email = prompt("이메일을 입력하세요:");
    const password = prompt("비밀번호를 입력하세요:");
    if (email && password) {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert(`회원가입 성공: ${email}`);
            document.getElementById('auth-section').style.display = 'none';
            document.querySelector('.card-section').style.display = 'block';
            document.querySelector('.input-section').style.display = 'block';
        } catch (error) {
            console.error("회원가입 실패:", error);
            alert("회원가입 실패: " + error.message);
        }
    }
};

window.login = async function () {
    const email = prompt("이메일을 입력하세요:");
    const password = prompt("비밀번호를 입력하세요:");
    if (email && password) {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert("로그인 성공!");
            document.getElementById('auth-section').style.display = 'none';
            document.querySelector('.card-section').style.display = 'block';
            document.querySelector('.input-section').style.display = 'block';
        } catch (error) {
            console.error("로그인 실패:", error);
            alert("로그인 실패: " + error.message);
        }
    }
};

window.logout = async function () {
    try {
        await signOut(auth);
        alert("로그아웃 되었습니다.");
        document.getElementById('auth-section').style.display = 'block';
        document.querySelector('.card-section').style.display = 'none';
        document.querySelector('.input-section').style.display = 'none';
        cards = [];
        updateCardDisplay();
    } catch (error) {
        console.error("로그아웃 실패:", error);
    }
};

loadCards();
