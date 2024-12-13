document.addEventListener("DOMContentLoaded", () => {
    // Находим все элементы has-tooltip
    const tooltips = document.querySelectorAll(".has-tooltip");
    
    // Вшаем на элементы события клика
    tooltips.forEach(tooltip => {
        tooltip.addEventListener("click", event => {
            event.preventDefault();
            
            // Проверяем есть ли сейчас активный элемент и если есть убираем 
            const activeTooltip = document.querySelector(".tooltip_active");
            if (activeTooltip) {
                activeTooltip.classList.remove("tooltip_active");
                activeTooltip.remove();
            }

            // создаем элемент подсказки
            const tooltipText = tooltip.getAttribute("title");
            const newTooltip = document.createElement("div");
            newTooltip.className = "tooltip tooltip_active";
            newTooltip.textContent = tooltipText;

            document.body.appendChild(newTooltip);

            // Определяем где выводить подсказку
            const rect = tooltip.getBoundingClientRect();
            newTooltip.style.left = `${rect.left + window.scrollX}px`;
            newTooltip.style.top = `${rect.bottom + window.scrollY}px`;
        });
    });

    // Добавляем обработчик чтобы сообщеньки пропадали если кликуют куда то еще.
    document.addEventListener("click", event => {
        if (!event.target.closest(".has-tooltip")) {
            const activeTooltip = document.querySelector(".tooltip_active");
            if (activeTooltip) {
                activeTooltip.classList.remove("tooltip_active");
                activeTooltip.remove();
            }
        }
    });
});
