// Переменная для хранения текущего открытого подменю
let currentSubMenu = null;

// Находим все элементы меню с подменю
const menuItems = document.querySelectorAll('.menu_main > .menu__item:has(.menu_sub) > a');

// Обрабатываем каждый элемент меню
menuItems.forEach(menuItem => {
    menuItem.addEventListener('click', function(event) {
        event.preventDefault(); // Предотвращаем переход по ссылке

        // Находим подменю, связанное с текущим элементом меню
        const subMenu = menuItem.parentElement.querySelector('.menu_sub');

        // Проверяем, открыто ли подменю
        if (subMenu.classList.contains('menu_active')) {
            // Если подменю открыто, закрываем его
            subMenu.classList.remove('menu_active');
            currentSubMenu = null; // Сбрасываем текущий элемент
        } else {
            // Если подменю закрыто, закрываем текущее открытое подменю (если оно есть)
            if (currentSubMenu !== null) {
                currentSubMenu.classList.remove('menu_active');
            }
            // Открываем новое подменю
            subMenu.classList.add('menu_active');
            currentSubMenu = subMenu; // Обновляем текущий элемент
        }
    });
});
