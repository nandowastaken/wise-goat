function getAdvice() {
    const text_advice = document.getElementById("advice-paragraph");
    w3.getHttpObject("https://api.adviceslip.com/advice", function(data) {
        advice = data.slip.advice;
        text_advice.innerHTML = advice;
    });
}

getAdvice(); 