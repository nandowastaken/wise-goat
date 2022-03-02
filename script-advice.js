function getAdvice() {
    const text_advice = document.getElementById("advice-paragraph");
    w3.getHttpObject("https://api.adviceslip.com/advice", function(data) {
        advice = data.slip.advice;
        text_advice.innerHTML = '"' + advice + '"';
    });
}

function resizeImage() {
    let advice_container = document.querySelector('.advice-container');
    let advice_container_height = advice_container.clientHeight;
    document.getElementById("goat-image").style.height = (advice_container_height - 100) + "px";

    alert(document.getElementById("goat-image").clientHeight);
}

getAdvice(); 
resizeImage();