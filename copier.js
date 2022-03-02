function copyCode() {
    let copyText = document.getElementById("codeBox");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
}