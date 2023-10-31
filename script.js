document.addEventListener("DOMContentLoaded", function () {
    const paragraph = document.getElementById("paragraph");
    const words = paragraph.textContent.split(/\s+/);

    words.forEach(function (word) {
        if (word.length > 8) {
            const span = document.createElement("span");
            span.textContent = word;
            span.style.backgroundColor = "blue"; 
            paragraph.innerHTML = paragraph.innerHTML.replace(
                new RegExp('\\b' + word + '\\b', "g"), 
                span.outerHTML
            );
        }
    });

    const sourceLink = document.createElement("a");
    sourceLink.href =
        "https://www.inc.com/jeff-haden/this-new-linkedin-study-reveals-top-8-jobinterview-questions-and-how-great-job-candidates-answer-them.html";
    sourceLink.textContent = "Source";
    paragraph.insertAdjacentElement("afterend", sourceLink);
    
    

    const wordCount = words.length;
    const countDisplay = document.createElement("p");
    countDisplay.textContent = `Word count: ${wordCount}`;
    paragraph.insertAdjacentElement("beforebegin", countDisplay);

    
    const updatedText = paragraph.innerHTML.replace(/\?/g, "🤔").replace(/\!/g, "😲")
    
    paragraph.innerHTML = updatedText;


});