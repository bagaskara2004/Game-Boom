const boom = Math.floor(Math.random() * 9);
const card = document.querySelectorAll('.card');
const teks = document.getElementsByTagName('h1')[0];
const repeat = document.getElementsByTagName('a')[0];
let step = 0;
card.forEach(function (e) {
	let value = e.value;
	e.addEventListener('click',function (event) {
		if (value == boom && step < 8) {
			e.classList.add('bom');
			step = 9;
		}
		if (event.srcElement.classList[1] == undefined && step < 8){
			e.classList.add('save');
			step++;
		}
		if (step == 9) {
			teks.innerHTML = "LOSE";
			repeat.style.display = 'block';
		}else if (step == 8) {
			teks.innerHTML = "win"
			repeat.style.display = 'block';
		}
	})
	
})