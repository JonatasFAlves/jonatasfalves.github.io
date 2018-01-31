const mySiema = new Siema({
    duration: 300,
    onInit: changeCarouselInfo,
    onChange: changeCarouselInfo
});

function changeCarouselInfo() {
    if(this.currentSlide <= 1){
        document.querySelector('.info').innerHTML = 'Trying to solve a school management problem, the SALAS software help faculties manage it\'s professors and classrooms. Working with Java and MySQL';
        document.querySelector('.tech-info').innerHTML = 'Working with Java and MySQL';
    } else if (this.currentSlide <= 3) {
        document.querySelector('.info').innerHTML = 'The MeuColetivo app helps public transportation users be heard.';
        document.querySelector('.tech-info').innerHTML = 'Working with Web development and Bootstrap';
    } else {
        document.querySelector('.info').innerHTML = 'In my spare time, i make some css replications. Mostly from Dribbble.';
        document.querySelector('.tech-info').innerHTML = 'Working with HTML, CSS';
    }
}

document.querySelector('.prev').addEventListener('click', () => mySiema.prev());
document.querySelector('.next').addEventListener('click', () => mySiema.next());