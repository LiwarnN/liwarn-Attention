var proc = 0;
function changeProc() {
    document.getElementById('per').innerHTML = proc + '%';
    document.getElementById('per').style = "margin-left:" + proc + '%';
    document.getElementById('prog').style = "width:" + proc + '%';
    proc++;
    //body...
}
var timerId = setInterval(changeProc, 99);
setTimeout(function(){ clearInterval(timerId) }, 100*100)