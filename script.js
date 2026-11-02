const chapters = [

    {
        number: "01",
        label: "CHAPTER ONE",
        title: "Aaj Ka Din",
        poem: `
            Aaj ka din tumhare naam likha hai,<br>
            Har khushi ka paighaam likha hai.<br><br>

            Aaj hawaon mein narmi si rahe,<br>
            Tumhari har dua poori si rahe.<br><br>

            Har taraf roshni ka samaa ho,<br>
            Tumhare chehre par hamesha muskurahat ho.<br><br>

            Yeh din tumhare liye khaas rahe,<br>
            Aur har aane wala saal bhi lajawab rahe.
        `
    },

    {
        number: "02",
        label: "CHAPTER TWO",
        title: "Tumhari Muskurahat",
        poem: `
            Tumhari muskurahat yun hi mehakti rahe,<br>
            Har subah tumhari roshan chamakti rahe.<br><br>

            Zindagi ke har mod par bahaar mile,<br>
            Tumhein har woh khushi baar baar mile.<br><br>

            Kabhi aankhon mein udaasi na aaye,<br>
            Har naya din koi khoobsurat wajah laaye.<br><br>

            Tum jahan raho, khushiyon ka samaa rahe,<br>
            Tumhare dil mein hamesha sukoon basa rahe.
        `
    },

    {
        number: "03",
        label: "CHAPTER THREE",
        title: "Meri Dua",
        poem: `
            Rab tumhari raahon ko aasaan kare,<br>
            Har gham se tumhara daaman anjaan kare.<br><br>

            Tumhare naseeb mein sukoon likhe,<br>
            Har khwaab ke aage junoon likhe.<br><br>

            Har din tumhein nayi umeed de,<br>
            Har raat tumhein chain ki neend de.<br><br>

            Jo dil mein ho, woh dua ban kar qabool ho,<br>
            Tumhari zindagi khushiyon se bharpoor ho.
        `
    },

    {
        number: "04",
        label: "CHAPTER FOUR",
        title: "Hamesha Khush Raho",
        poem: `
            Saal badlein, magar khushi kam na ho,<br>
            Tumhari aankhon mein nami gham ki na ho.<br><br>

            Jo chaho tum, woh tumhein milta rahe,<br>
            Har aane wala kal behtar hota rahe.<br><br>

            Agar kabhi waqt tumhein aazmaye,<br>
            Tumhara hausla har mushkil se jeet jaaye.<br><br>

            Bas yun hi zindagi haseen hoti rahe,<br>
            Tumhari duniya khushiyon se roshan rahe.
        `
    }

];

let currentPage = 0;

const book = document.getElementById("book");
const openBookButton = document.getElementById("openBook");

const pageContent = document.getElementById("pageContent");
const previousButton = document.getElementById("previousPage");
const nextButton = document.getElementById("nextPage");

const pageCounter = document.getElementById("pageCounter");

const letterButton = document.getElementById("letterButton");
const letterSection = document.getElementById("letterSection");


/* OPEN BOOK */

openBookButton.addEventListener("click", () => {

    book.classList.add("opened");

    showPage(0);

});


/* DISPLAY CHAPTER */

function showPage(index) {

    currentPage = index;

    const chapter = chapters[index];

    pageContent.innerHTML = `

        <p class="page-number">${chapter.number}</p>

        <p class="chapter-label">${chapter.label}</p>

        <h2>${chapter.title}</h2>

        <div class="poem">
            ${chapter.poem}
        </div>

    `;

    pageCounter.textContent = `${index + 1} / ${chapters.length}`;

    previousButton.disabled = index === 0;

    nextButton.disabled = index === chapters.length - 1;

}


/* NEXT PAGE */

nextButton.addEventListener("click", () => {

    if (currentPage < chapters.length - 1) {

        showPage(currentPage + 1);

    }

});


/* PREVIOUS PAGE */

previousButton.addEventListener("click", () => {

    if (currentPage > 0) {

        showPage(currentPage - 1);

    }

});


/* OPEN BIRTHDAY LETTER */

letterButton.addEventListener("click", () => {

    letterSection.classList.toggle("hidden");

    if (!letterSection.classList.contains("hidden")) {

        setTimeout(() => {

            letterSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }, 100);

        letterButton.textContent = "Close the letter ♡";

    } else {

        letterButton.textContent = "A little birthday letter ♡";

    }

});


/* BACKGROUND STARS */

const starsContainer = document.getElementById("stars");

for (let i = 0; i < 65; i++) {

    const star = document.createElement("div");

    star.classList.add("star");

    star.style.left = Math.random() * 100 + "%";

    star.style.top = Math.random() * 100 + "%";

    star.style.animationDelay = Math.random() * 5 + "s";

    star.style.animationDuration = (2 + Math.random() * 4) + "s";

    starsContainer.appendChild(star);

}