
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000));
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value};${expires};path=/`;
}

function getCookie(name) {
    try {
        const value = document.cookie.split(`${name}=`)[1].split(";")[0];
        return value;
        } catch {
            return "";
        }
        
}

let lastFetchCall = "";

function makeTrafficCall() {
    // Logic for fetch to only call once per day;
    const time = new Date();
    const DOTW = time.getDay();


    // // Traffic
    const request = new Request("https://server.sgambapps.com/?site=mathMagic", {
        method: "POST",
    });
    if (lastFetchCall !== parseInt(DOTW)) {
        fetch(request)
        .then(res => {
            if (res.ok) {
            console.log("visit counted");
            }
        })
        .catch(err => console.log(err));

        setCookie("lastFetch", DOTW.toString(), 10000);
        console.log("cookie set");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    try {
        const ld = getCookie("lastFetch");
        lastFetchCall = ld !== "" ? parseInt(ld) : "";
        makeTrafficCall();
    } catch (e) {
        console.log("get cookie error");
        console.log(e);
    }
});