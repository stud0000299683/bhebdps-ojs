// Получаем все элементы с классом rotator__case и клдем их в sliders
const slides = document.querySelectorAll('.rotator__case');
//Задаем текущий индекс элемента
let currentIndex = 0; 

//Создаем функцию замены изменения текста
function changeText() {
    //Удаляем видимость текущего элемента
    slides[currentIndex].classList.remove('rotator__case_active');
     //Добавляем к индексу 1 ну и смотрим остаток от деления чтобы зациклить цикл.
    currentIndex = (currentIndex+1)%slides.length;
    // Добавляем видимость новому элементу
    slides[currentIndex].classList.add('rotator__case_active'); 
};

//Запускаем фунуцию в интервале.
setInterval(changeText, 1000);
