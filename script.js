let Capture = (Math.random() * 1000);
let CaptureCode = Math.floor(Capture);
document.getElementById("capture").innerText = CaptureCode;

function testCode() {
    let userCode = document.getElementById("codeEnter").value;
    if (CaptureCode.toString() === userCode) {
        alert('The code was entered correctly');
        location.reload();
    } else {
        alert('The code was entered incorrectly');
        location.reload();
    }
}