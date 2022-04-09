const heads = document.getElementsByClassName("head");
const spanIt = (text) => {
    let spannedText = "";
    for (let i = 0; i < text.length; i++) {
        console.log("second");
        spannedText += `<span class='head'>${text[i]}}</span>`;
    }
    return spannedText;
};
for (let i = 0; i < heads.length; i++) {
    heads[i].innerHTML = spanIt(heads.innerHTML);
}
