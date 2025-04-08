const banner = document.getElementById("banner");
const subcribeButton = document.getElementById("subscribe");

let isSubscribed = false;

subcribeButton.addEventListener("click", event => {
    if (isSubscribed) {
        isSubscribed = false;
        subcribeButton.textContent = "Subscribe";
        banner.style.backgroundColor = "tomato";
        banner.textContent = "You are not subscribed 😔";
    }
    else {
        isSubscribed = true;
        subcribeButton.textContent = "Unsubscribe";
        banner.style.backgroundColor = "lightgreen";
        banner.textContent = "Subscribed! 😄";
    }
})

subcribeButton.addEventListener("mouseover", event => {
    if (isSubscribed) {
        banner.style.backgroundColor = "yellow";
        banner.textContent = "Please don't do it 🥺";
    }
    else {
        banner.style.backgroundColor = "yellow";
        banner.textContent = "You can do it 🥺";
    }
})

subcribeButton.addEventListener("mouseout", event => {
    if (isSubscribed) {
        banner.style.backgroundColor = "lightgreen";
        banner.textContent = "Subscribed! 😄";
    }
    else {
        banner.style.backgroundColor = "tomato";
        banner.textContent = "You are not subscribed 😔";
    }
})
