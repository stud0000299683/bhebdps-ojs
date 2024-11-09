let score = 0;
let missed = 0;

const totalToWeen = 10;
const totalToLoose = 5;

function getHole(index) {
    return document.getElementById(`hole${index}`);
}


function randomHole(){
    const holeIndex = Math.floor(Math.random()*9)+1;
    for (let i=1; i<=9; i++ ){
        const hole = getHole(i);
        hole.classList.remove('hole_has-mole');
        }
            
}

function resset(){
    score = 0;
    missed = 0;
    document.getElementById('dead').textContent = score; // Сбрасываем счетчик убитых
    document.getElementById('lost').textContent = missed; // Сбрасываем счетчик промахов
}



function checkHole(event){
    const hole = event.currentTarget;
    if (hole.classList.contains('hole_has-mole')){
        score ++;
        alert('Попал! Счет: ' + score)
        document.getElementById('dead').textContent = score;
    }
    else{
        missed ++;
        alert('Промазал!' + missed)
        document.getElementById('lost').textContent = missed;
    }

    if (score === totalToWeen){
        alert('You ween');
        resset();
    }
    else if (missed === totalToLoose){
        alert('Lose');
        resset();
    }
}


for (let i =1 ; i<=9; i++){
    const hole = getHole(i);
    hole.addEventListener('click', checkHole);
}
