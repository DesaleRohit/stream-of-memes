const memes = [
    { text: "“Why fix a bug today when you can create two new ones tomorrow?”" },
    { text: "“It compiles? Ship it.” – Developer's ancient proverb" },
    { text: "“It worked yesterday. I swear.”" },
    { text: "“There is no cloud. It’s just someone else’s computer.”" },
    { text: "“Stack Overflow is my IDE.”" },
    { text: "“Weekend plan: Eat, Sleep, Debug, Repeat.”" },
    { text: "“First, solve the problem. Then, write the code... and then fix the code... and then fix the fix.”" },
    { text: "“My code doesn't work, I have no idea why. My code works, I have no idea why.”" },
    { text: "“Code chal gaya? Chamatkaar hai bhai!”" },
    { text: "“Project complete? Chal jhootha!”" },
    { text: "“Yeh bug toh kal bhi tha, aaj bhi hai... aur kal bhi rahega.”" },
    { text: "“Main code likhta hoon, compiler rulata hai.”" },
    { text: "“Hackathon ka matlab: 24 ghante bina snan ke coding.”" },
    { text: "“Java samajhne ke liye zindagi chhoti pad jaati hai.”" },
    { text: "“Exam se ek din pehle: ‘Yaar koi final year project bhej de”" },
    { text: "“Client bola: 'Sir jaldi karna hai'. Main bola: 'Sir toh kal bhi yahi bola tha.'”" },
    { text: "“Kabhi kabhi lagta hai... system developer nahi, majdoor hai.”" },
    { text: "“Code debug karte waqt: ‘Mujhse na ho payega’”" },
    { text: "“Jab code chalta hai bina kisi error ke... dil garden garden ho jaata hai.”" }
];


function getRandomMeme() {
    return memes[Math.floor(Math.random() * memes.length)].text;
}

function typeMemeOffline() {
    const quote = getRandomMeme();
    let index = 0;
    memeText.textContent = "";

    function typeLetter() {
        if (index < quote.length) {
            memeText.textContent += quote.charAt(index) + "";
            index++;
            setTimeout(typeLetter, 60);
        }
    }

    typeLetter();
}

typeMemeOffline();
setInterval(typeMemeOffline, 5000);
