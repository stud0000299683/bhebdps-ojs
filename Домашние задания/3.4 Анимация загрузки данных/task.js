document.getElementById("file").onchange = function() {
  const fileDesc = document.querySelector(".input__wrapper-desc");
  let fileName = this.value.split("\\");
  fileName = fileName[fileName.length - 1];
  fileDesc.textContent = fileName;
};


document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('form');
  const progress = document.getElementById('progress');

  form.addEventListener('submit', async (event) => {
      event.preventDefault();

      try {
          const formData = new FormData(form);
          // Отправляем запрос на сервер
          const response = await fetch('https://students.netoservices.ru/nestjs-backend/upload', {
              method: 'POST',
              body: formData,
          });

          if (!response.ok) 
              throw new Error(`Network response was not ok: ${response.status}`);
          const data = await response.json();
          console.log('Success:', data);

          const request = new XMLHttpRequest();

          request.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload', true);

          // Обработчик события прогресса
          request.upload.addEventListener('progress', (event) => {
              if (event.lengthComputable) {
                  const percentComplete = event.loaded / event.total;
                  progress.value = percentComplete;
              }
          });

          request.onload = () => {
            console.log(request.status);
              if (request.status === 201)
                alert('Ваш файл был успешно загружен!'); 
              else 
                console.error('Ошибка при загрузке файла:', request.statusText);
          };

          request.onerror = () => {
            console.error('Ошибка сети.');
          };

          request.send(formData);
      } catch (error) {
          console.error('Error:', error.message || error);
      }
  });
});
