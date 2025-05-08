function calculate() {
    let firstname = document.getElementById('first-name').value;
    let lastname = document.getElementById('last-name').value;

    let english = parseFloat(document.getElementById('english').value);
    let urdu = parseFloat(document.getElementById('urdu').value);
    let maths = parseFloat(document.getElementById('maths').value);
    let chemistry = parseFloat(document.getElementById('chemistry').value);
    let physics = parseFloat(document.getElementById('physics').value);
    let islamiat = parseFloat(document.getElementById('islamiat').value);
    let totalMarks = parseFloat(document.getElementById('total').value);

    document.getElementById('fullname').innerHTML = firstname + ' ' + lastname;
    document.getElementById('eng').innerHTML = english;
    document.getElementById('ur').innerHTML = urdu;
    document.getElementById('mt').innerHTML = maths;
    document.getElementById('ch').innerHTML = chemistry;
    document.getElementById('ph').innerHTML = physics;
    document.getElementById('isl').innerHTML = islamiat;

    let obtainedMarks = english + urdu + maths + chemistry + physics + islamiat;
    document.getElementById('obt-marks').innerHTML = obtainedMarks;

    let Percentage = ((obtainedMarks / totalMarks) * 100).toFixed(1);
    document.getElementById('percentage').innerHTML = Percentage + '%';



    let Grade;
    if (Percentage >= 90) {
        Grade = 'A+';
    }

    else if (Percentage >= 80) {
        Grade = 'A';
    }

    else if (Percentage >= 70) {
        Grade = 'B';
    }

    else if (Percentage >= 60) {
        Grade = 'C';
    }

    else if (Percentage >= 50) {
        Grade = 'D';
    }

    else {
        Grade = 'Fail';
    }

    document.getElementById('grade').innerHTML = Grade;

    document.getElementById('section-3').style.display = 'block';


}

