async function loadCurrencyData() {
    const apiUrl = 'https://students.netoservices.ru/nestjs-backend/slow-get-courses';
    const cachedData = localStorage.getItem('currencyData');    
    if (cachedData) {
        displayCurrencies(JSON.parse(cachedData));
    }

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Нет связи с сервером. Попробуйте позже');
        }

        const data = await response.json();
        const currencies = data.response.Valute;

        localStorage.setItem('currencyData', JSON.stringify(currencies));
        displayCurrencies(currencies);

    } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
    } finally {
        document.getElementById('loader').classList.remove('loader_active');
    }
}

function displayCurrencies(currencies) {
    const itemsContainer = document.getElementById('items');
    
    itemsContainer.innerHTML = '';
    for (const key in currencies) {
        if (currencies.hasOwnProperty(key)) {
            const currency = currencies[key];
            const itemContainer = document.createElement('div');
            itemContainer.className = 'item';

            const itemCode = document.createElement('div');
            itemCode.className = 'item__code';
            itemCode.textContent = currency.CharCode;

            const itemValue = document.createElement('div');
            itemValue.className = 'item__value';
            itemValue.textContent = currency.Value.toFixed(2);

            const itemCurrency = document.createElement('div');
            itemCurrency.className = 'item__currency';
            itemCurrency.textContent = 'руб.';

            itemContainer.append(itemCode, itemValue, itemCurrency);
            itemsContainer.appendChild(itemContainer);
        }
    }
}

loadCurrencyData();
