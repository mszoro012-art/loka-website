// إظهار رسالة الحب
function showLove() {
    const message = document.getElementById("love-message");
    const startButton = document.getElementById("start-button");

    message.textContent =
        "يا Loka ❤️ إنتِ أجمل حاجة حصلت في حياتي، وبحب كل لحظة معاكي 💗";

    startButton.hidden = false;
}

// الانتقال إلى صفحة الذكريات
function startJourney() {
    document.getElementById("welcome").hidden = true;
document.getElementById("music-player").hidden = false;
toggleMusic();
    const memories = document.getElementById("memories");
    memories.hidden = false;

    memories.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

// أسماء الخانات والصور الخاصة بكل خانة
const categories = {
    laugh: {
        title: "لحظات الضحك 😂",
        photos: ["photo2.jpg.jpeg", "photo3.jpg.jpeg"]
    },
    food: {
        title: "الأكل والخروجات 🍕",
        photos: ["photo18.jpg.jpeg"]
    },
    drawing: {
        title: "الرسم 🎨",
        photos: ["photo17.jpg.jpeg"]
    },
    childhood: {
        title: "صورنا وإحنا صغيرين 🧸",
        photos: ["photo16.jpg.jpeg"]
    }
};

// فتح خانة الذكريات وعرض صورها
function openCategory(categoryName) {
    const category = categories[categoryName];
    if (!category) return;

    const gallery = document.getElementById("gallery");
    const title = document.getElementById("gallery-title");
    const photosContainer = document.getElementById("gallery-photos");

    title.textContent = category.title;
    photosContainer.replaceChildren();

    category.photos.forEach(function (photoName) {
        const image = document.createElement("img");

        image.src = "imager/" + photoName;
        image.alt = category.title;
        image.loading = "lazy";
        image.title = "اضغطي لفتح الصورة ❤️";
        image.style.cursor = "zoom-in";

        image.onclick = function () {
            const overlay = document.createElement("div");

            overlay.style.cssText = `
                position: fixed;
                inset: 0;
                background: rgba(30, 10, 20, 0.92);
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 20px;
                z-index: 9999;
                cursor: zoom-out;
            `;

            const bigImage = document.createElement("img");
            bigImage.src = image.src;
            bigImage.alt = image.alt;
            bigImage.style.cssText = `
                max-width: 95%;
                max-height: 90vh;
                object-fit: contain;
                border-radius: 16px;
                box-shadow: 0 0 30px rgba(255,255,255,0.2);
            `;

            const closeButton = document.createElement("button");
            closeButton.textContent = "✕";
            closeButton.setAttribute("aria-label", "إغلاق الصورة");
            closeButton.style.cssText = `
                position: absolute;
                top: 18px;
                right: 18px;
                width: 45px;
                height: 45px;
                border: none;
                border-radius: 50%;
                background: #e64980;
                color: white;
                font-size: 24px;
                cursor: pointer;
            `;

            closeButton.onclick = function (event) {
                event.stopPropagation();
                overlay.remove();
            };

            overlay.onclick = function () {
                overlay.remove();
            };

            bigImage.onclick = function (event) {
                event.stopPropagation();
            };

            overlay.appendChild(bigImage);
            overlay.appendChild(closeButton);
            document.body.appendChild(overlay);
        };

        image.onerror = function () {
            image.alt = "الصورة مش موجودة: " + photoName;
            image.classList.add("image-error");
        };

        photosContainer.appendChild(image);
    });

    gallery.hidden = false;
    gallery.scrollIntoView({ behavior: "smooth", block: "start" });
}

// الرجوع إلى الخانات الأربعة
function closeGallery() {
    document.getElementById("gallery").hidden = true;

    document.querySelector(".memory-categories").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

// القلوب المتحركة
const heartsContainer = document.getElementById("hearts-container");

function createHeart() {
    const heart = document.createElement("span");

    heart.className = "heart";
    heart.textContent = "♥";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (15 + Math.random() * 20) + "px";
    heart.style.animationDuration = (4 + Math.random() * 3) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(function () {
        heart.remove();
    }, 7000);
}

setInterval(createHeart, 700);
const romanticMessages = [
    "يا Loka، وجودك في حياتي بيخلّي كل حاجة أحلى ❤️",
    "لو رجع بيا الزمن، هختارك إنتِ كل مرة يا حبيبتي 💗",
    "إنتِ مش مجرد ذكرى حلوة، إنتِ أجمل حكاية في حياتي 🥹",
    "كل يوم معاكي بيخليني أحبك أكتر من اليوم اللي قبله 💕",
    "يا رب أفضل دايمًا سبب في ضحكتك وفرحتك يا Loka 🌷",
    "قلبي اختارك إنتِ، ولسه بيختارك كل يوم ❤️‍🔥"
];

let romanticMessageIndex = 0;

function romanticSurprise() {
    const result = document.getElementById("romantic-result");
    const message = document.getElementById("romantic-message");
    const heart = document.getElementById("big-heart");

    if (!result || !message || !heart) return;

    message.textContent =
        romanticMessages[romanticMessageIndex];

    romanticMessageIndex =
        (romanticMessageIndex + 1) % romanticMessages.length;

    result.hidden = false;

    heart.classList.remove("heart-pop");
    void heart.offsetWidth;
    heart.classList.add("heart-pop");

    for (let i = 0; i < 12; i++) {
        createRomanticHeart();
    }
}

function createRomanticHeart() {
    const heart = document.createElement("span");

    heart.className = "romantic-flying-heart";
    heart.textContent = ["💗", "💕", "💖", "❤️"][Math.floor(Math.random() * 4)];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.setProperty(
        "--heart-drift",
        (Math.random() * 160 - 80) + "px"
    );
    heart.style.animationDuration = (2.5 + Math.random() * 2) + "s";

    document.body.appendChild(heart);

    setTimeout(function () {
        heart.remove();
    }, 5000);
}
const ourSong = document.getElementById("our-song");
const musicToggle = document.getElementById("music-toggle");
const musicVolume = document.getElementById("music-volume");
const musicStatus = document.getElementById("music-status");

if (ourSong && musicVolume) {
    ourSong.volume = Number(musicVolume.value) / 100;

    musicVolume.addEventListener("input", function () {
        ourSong.volume = Number(musicVolume.value) / 100;
    });

    ourSong.addEventListener("ended", function () {
        musicToggle.textContent = "▶ شغّلي أغنيتنا";
        musicStatus.textContent = "الأغنية خلصت 💗";
    });

    ourSong.addEventListener("error", function () {
        musicStatus.textContent =
            "مش قادرين نشغّل الأغنية. اتأكدي من اسم الملف ومكانه ❤️";
    });
}

function toggleMusic() {
    if (!ourSong) return;

    if (ourSong.paused) {
        ourSong.play()
            .then(function () {
                musicToggle.textContent = "⏸ وقّفي الأغنية";
                musicStatus.textContent = "الأغنية شغّالة يا حبيبتي 💗";
            })
            .catch(function () {
                musicStatus.textContent =
                    "اضغطي على التشغيل مرة تانية لتشغيل الأغنية 🎵";
            });
    } else {
        ourSong.pause();
        musicToggle.textContent = "▶ شغّلي أغنيتنا";
        musicStatus.textContent = "الأغنية متوقفة مؤقتًا 💕";
    }
}
const loveQuizQuestions = [
    {
        question: "إيه أكتر حاجة بتخلي الدنيا أحلى؟ 💗",
        answers: [
            "يوم طويل ونوم كتير 😴",
            "ضحكة Loka الحلوة 🥹",
            "أكل كتير وبس 🍕"
        ],
        correct: 1,
        right: "ضحكتك لوحدها كفاية تنوّر يومي كله يا Loka ❤️",
        wrong: "الإجابة دي حلوة، بس ضحكتك ليها مكانة خاصة عندي 😂💕"
    },
    {
        question: "لو حكايتنا كانت فيلم، هيبقى اسمه إيه؟ 🎬",
        answers: [
            "أجمل حكاية حب ❤️",
            "مغامرات الأكل والنوم 🍕",
            "مين أخد الشاحن؟ 😂"
        ],
        correct: 0,
        right: "بالظبط! وأجمل جزء في الفيلم إنك إنتِ بطلته 💖",
        wrong: "اسم يضحك فعلًا 😂 بس فيلمنا بالنسبالي أجمل حكاية حب!"
    },
    {
        question: "لو عندنا يوم كامل نقضيه سوا، نعمل إيه؟ 🌷",
        answers: [
            "نفضل نبص في السقف 😂",
            "نقضي اليوم في الزعل 😢",
            "نضحك ونتكلم ونصنع ذكريات 🥰"
        ],
        correct: 2,
        right: "أحلى يوم هو اللي بيكون معاكي، حتى لو معملناش حاجة ❤️",
        wrong: "حتى اليوم العادي معاكي ممكن يبقى أجمل ذكرى عندي 💗"
    },
    {
        question: "إيه أحلى حاجة في الذكريات؟ 📸",
        answers: [
            "إنها بتفكرني بأيام حلوة معاكي 💕",
            "إن الصور بتاخد مساحة 😂",
            "إنها بتخلينا ننسى كل حاجة"
        ],
        correct: 0,
        right: "كل صورة لينا حكاية صغيرة بحب أرجعلها يا حبيبتي 🥹",
        wrong: "الصور مش مجرد صور، دي لحظات عشناها سوا ❤️"
    },
    {
        question: "لو كنت هقدملك هدية، إيه أهم حاجة فيها؟ 🎁",
        answers: [
            "حجم العلبة 😂",
            "المحبة اللي جواها 💌",
            "عدد الشرائط اللي عليها 🎀"
        ],
        correct: 1,
        right: "بالظبط، أهم حاجة إن كل تفصيلة معمولة بحب ليكي 💗",
        wrong: "العلبة ممكن تخلص، بس المحبة اللي جواها هي الأهم ❤️"
    },
    {
        question: "لو يومك كان صعب، تتمني إيه؟ 🫶",
        answers: [
            "حد يسمعني ويطمنّي 💗",
            "واجبات أكتر 😂",
            "يوم أطول من 48 ساعة 😴"
        ],
        correct: 0,
        right: "أتمنى دايمًا تلاقي عندي راحة وأمان وضحكة من قلبك ❤️",
        wrong: "كلنا بنحتاج حد يهون علينا، وإنتِ تستاهلي كل الحنية 💕"
    },
    {
        question: "وفي آخر سؤال... عارفة إنتِ غالية قد إيه؟ 🥹",
        answers: [
            "شوية صغيرين 😂",
            "على قد النجوم ⭐",
            "أغلى من الكلام اللي يقدر يوصف 💖"
        ],
        correct: 2,
        right: "مفيش نتيجة تقدر توصف مكانتك عندي يا Loka. إنتِ حكاية غالية على قلبي ❤️",
        wrong: "ولا إجابة تقدر توصف ده كله، إنتِ أغلى من الكلام يا Loka 🥹💗"
    }
];

let loveQuizIndex = 0;
let loveQuizScore = 0;
let loveQuizAnswered = false;

function startLoveQuiz() {
    loveQuizIndex = 0;
    loveQuizScore = 0;

    document.getElementById("quiz-start").hidden = true;
    document.getElementById("quiz-result").hidden = true;
    document.getElementById("quiz-game").hidden = false;

    showLoveQuestion();
    document.getElementById("love-quiz").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

function showLoveQuestion() {
    const item = loveQuizQuestions[loveQuizIndex];

    loveQuizAnswered = false;

    document.getElementById("quiz-counter").textContent =
        `السؤال ${loveQuizIndex + 1} من ${loveQuizQuestions.length}`;

    document.getElementById("quiz-progress-fill").style.width =
        `${((loveQuizIndex + 1) / loveQuizQuestions.length) * 100}%`;

    document.getElementById("quiz-question").textContent = item.question;
    document.getElementById("quiz-feedback").textContent = "";
    document.getElementById("quiz-next").hidden = true;

    const answersBox = document.getElementById("quiz-answers");
    answersBox.replaceChildren();

    item.answers.forEach(function (answer, index) {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "quiz-answer";
        button.textContent = answer;

        button.addEventListener("click", function () {
            chooseLoveAnswer(index);
        });

        answersBox.appendChild(button);
    });
}

function chooseLoveAnswer(answerIndex) {
    if (loveQuizAnswered) return;

    loveQuizAnswered = true;

    const item = loveQuizQuestions[loveQuizIndex];
    const answerButtons = document.querySelectorAll(".quiz-answer");
    const isCorrect = answerIndex === item.correct;

    if (isCorrect) loveQuizScore++;

    answerButtons.forEach(function (button, index) {
        button.disabled = true;

        if (index === item.correct) {
            button.classList.add("quiz-correct");
        } else if (index === answerIndex) {
            button.classList.add("quiz-chosen-wrong");
        }
    });

    document.getElementById("quiz-feedback").textContent =
        isCorrect ? item.right : item.wrong;

    const nextButton = document.getElementById("quiz-next");
    nextButton.hidden = false;
    nextButton.textContent =
        loveQuizIndex === loveQuizQuestions.length - 1
            ? "نشوف النتيجة 💖"
            : "السؤال اللي بعده 💗";
}

function nextLoveQuestion() {
    if (!loveQuizAnswered) return;

    loveQuizIndex++;

    if (loveQuizIndex < loveQuizQuestions.length) {
        showLoveQuestion();
    } else {
        showLoveQuizResult();
    }
}

function showLoveQuizResult() {
    document.getElementById("quiz-game").hidden = true;
    document.getElementById("quiz-result").hidden = false;

    document.getElementById("quiz-result-score").textContent =
        `جاوبتي صح على ${loveQuizScore} من ${loveQuizQuestions.length} أسئلة 💗`;

    let title;
    let message;
    let heart;

    if (loveQuizScore === 7) {
        title = "يا سلام على الذاكرة الحلوة! 🏆";
        message = "كسبتي اللعبة، بس إنتِ أصلًا ليكي مكانة مميزة في قلبي من غير أي اختبار يا Loka ❤️";
        heart = "👑💖";
    } else if (loveQuizScore >= 4) {
        title = "نتيجة جميلة يا حبيبتي 🌷";
        message = "كل سؤال كان فرصة أقولك قد إيه وجودك بيخلّي الحكاية أحلى 💕";
        heart = "💗✨";
    } else {
        title = "دي مجرد لعبة يا قلبي 🥹";
        message = "مش لازم تفتكري كل الإجابات، المهم إننا نفضل نصنع ذكريات جديدة سوا ❤️";
        heart = "🧸💖";
    }

    document.getElementById("quiz-result-title").textContent = title;
    document.getElementById("quiz-result-message").textContent = message;
    document.getElementById("quiz-result-heart").textContent = heart;

    document.getElementById("love-quiz").scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}

function restartLoveQuiz() {
    document.getElementById("quiz-result").hidden = true;
    document.getElementById("quiz-start").hidden = false;

    document.getElementById("love-quiz").scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}