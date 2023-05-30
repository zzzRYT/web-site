const now = new Date();

function input() {
    const dday = new Date(document.querySelector('#input_date').value);
    const passedTime = now.getTime() - dday.getTime();
    const passedDay = Math.round(passedTime/(24*60*60*1000));
    document.querySelector('#love').innerHTML = passedDay + '일';
}