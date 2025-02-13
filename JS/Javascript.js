

function AddMessageUser(text) {
    const MessageUser = document.createElement("div");
    MessageUser.classList.add("message-user");
    const textContainer = document.createElement("div");
    textContainer.classList.add("text-container");
    const time = document.createElement("div");
    time.classList.add("message-time");
    const now = new Date();
    time.textContent = now.toLocaleTimeString();
    const message = document.createElement("div");
    message.classList.add("message-user-text");
    message.textContent = text;
    textContainer.appendChild(time);
    textContainer.appendChild(message);
    MessageUser.appendChild(textContainer);
    messagesContainer.appendChild(MessageUser);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function addMessage(text, avatarUrl = "https:///Mef7771.github.io/Images/75pan.jpg") {
    const messageWrapper = document.createElement("div");
    messageWrapper.classList.add("message-wrapper");

    // Создаем контейнер для аватара
    const avatarContainer = document.createElement("div");
    avatarContainer.classList.add("avatar-container");

    const avatar = document.createElement("img");
    avatar.classList.add("avatar");
    avatar.src = avatarUrl;
    avatar.alt = "User Avatar";

    avatarContainer.appendChild(avatar);

    // Создаем контейнер для текста и времени
    const textContainer = document.createElement("div");
    textContainer.classList.add("text-container");

    const time = document.createElement("div");
    time.classList.add("message-time");
    const now = new Date();
    time.textContent = now.toLocaleTimeString(); // Отображает текущее время

    const message = document.createElement("div");
    message.classList.add("message");
    message.textContent = text;

    textContainer.appendChild(time);
    textContainer.appendChild(message);

    // Добавляем аватар и текст в обертку
    messageWrapper.appendChild(avatarContainer);
    messageWrapper.appendChild(textContainer);

    messagesContainer.appendChild(messageWrapper);

    // Автоскролл вниз
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

document.addEventListener("DOMContentLoaded", function () {
    const messagesContainer = document.getElementById("messagesContainer");



    // Вызываем обе функции сразу при загрузке страницы
    addMessage("Это первое сообщение, которое появляется при загрузке страницы.");
    AddMessageUser("А это ответное сообщение от пользователя.");

});
document.addEventListener("DOMContentLoaded", function () {
    const textInput = document.getElementById("textInput");
    
    // Проверяем, что элемент найден
    if (textInput) {
        textInput.addEventListener("keypress", function (event) {
            if (event.key === "Enter") {
                const text = event.target.value.trim();
                if (text) {
                    AddMessageUser(text);  // Вставляем сообщение
                    event.target.value = "";  // Очищаем поле ввода
                }
            }
        });
    } else {
        console.error("Элемент с id 'textInput' не найден");
    }
});





function Main() {
    const addFileIcon = document.getElementById('AddFail');
    const fileInput = document.getElementById('fileInput');
    
    
    if (addFileIcon ) {
    addFileIcon.addEventListener('click', () => {
        fileInput.click();  
    });
    }

    fileInput.addEventListener('change', function(event) {
        const file = event.target.files[0];

        if (!file) {
            return;
        }

        // Создаем элемент для отображения
        let fileElement = document.createElement('div');
        fileElement.classList.add('file-item');

        // Проверяем тип файла
        const fileType = file.type;
        const fileName = file.name;

        if (fileType.startsWith('image/')) {
            // Если это изображение
            const img = document.createElement('img');
            img.src = URL.createObjectURL(file);
            img.alt = fileName;
            img.classList.add('file-image');
            
            // Подпись под изображением
            const imageLabel = document.createElement('div');
            imageLabel.textContent = fileName; // Убираем расширение
            imageLabel.classList.add('file-label');
            
            fileElement.classList.add('file-container'); // Контейнер для изображения
            fileElement.appendChild(img);
            fileElement.appendChild(imageLabel); // Добавляем подпись
        
        } else if (fileType.startsWith('audio/')) {
            // Если это аудио
            const audio = document.createElement('audio');
            audio.controls = true;
            audio.src = URL.createObjectURL(file);
            audio.classList.add('file-audio');
            
            // Подпись сверху
            const audioLabel = document.createElement('div');
            audioLabel.textContent = fileName; // Убираем расширение
            audioLabel.classList.add('file-label');
            
            fileElement.classList.add('file-container'); // Контейнер для аудио
            fileElement.appendChild(audioLabel); // Добавляем подпись
            fileElement.appendChild(audio);
        
        } else if (fileType.startsWith('video/')) {
            // Если это видео
            const video = document.createElement('video');
            video.controls = true;
            video.src = URL.createObjectURL(file);
            video.classList.add('file-video');
            
            // Подпись сверху
            const videoLabel = document.createElement('div');
            videoLabel.textContent = fileName; // Убираем расширение
            videoLabel.classList.add('file-label');
            
            fileElement.classList.add('file-container'); // Контейнер для видео
         
            fileElement.appendChild(video);
            fileElement.appendChild(videoLabel);
        
        } else if (fileType === 'application/zip' || fileName.endsWith('.zip') || fileName.endsWith('.rar')) {
            // Если это ZIP или RAR-архив
            const img = document.createElement('img');
            img.src = '/images/zip.png'; // Укажите путь к изображению
            img.classList.add("zip-fail");
            img.alt = 'Скачать архив';
            img.style.cursor = 'pointer';
            img.style.width = '50px'; // Размер изображения (можно изменить)
            
            // Подпись снизу
            const zipLabel = document.createElement('div');
            zipLabel.textContent = fileName; // Убираем расширение
            zipLabel.classList.add('file-label');
            
            img.addEventListener('click', () => {
                const link = document.createElement('a');
                link.href = URL.createObjectURL(file);
                link.download = fileName;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            });
            
            fileElement.classList.add('file-container'); // Контейнер для архива
            fileElement.appendChild(img); // Добавляем иконку архива в контейнер
            fileElement.appendChild(zipLabel); // Добавляем подпись снизу
        
        } else {
            // Для других типов файлов просто ссылка на файл
            const link = document.createElement('a');
            link.href = URL.createObjectURL(file);
            link.download = fileName;
            link.textContent = 'Скачать файл';
            link.classList.add('file-link');
            
            // Подпись сверху
            const fileLabel = document.createElement('div');
            fileLabel.textContent = fileName; // Убираем расширение
            fileLabel.classList.add('file-label');
            
            fileElement.classList.add('file-container'); // Контейнер для обычного файла
            fileElement.appendChild(fileLabel); // Добавляем подпись
            fileElement.appendChild(link);
        }
        
        // Добавляем файл в контейнер сообщений
        messagesContainer.appendChild(fileElement);
    });
}
