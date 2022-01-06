export function createTable(radioLanguageChecked, radioWeekChecked, inputMaxLessons, tableValue) {
    const languageWords = {
        rus: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
        eng: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    };

    const buttonSubmit = document.getElementById('form_create'); // Инициализируем кнопку для создания таблицы
    const buttonDel = document.getElementById('form_delete'); // Инициализируем кнопку для удаления таблицы
    const buttonSave = document.getElementById('form_save'); // Инициализируем кнопку для сохранения таблицы
    const tableDiv = document.querySelector('.table'); // Инициализруем div в котором будем отрисовывать таблицу
    const errorText = document.querySelector('.errorText');

    if (radioLanguageChecked == '' || radioWeekChecked == '' || inputMaxLessons == '' || inputMaxLessons == 0) {
        errorText.textContent = "Пожалуйста выберите все настройки";

    } else {
        errorText.textContent = "";
        const table = document.createElement('table');
        table.className = "createdTable";
        for (let i = 0; i < parseInt(radioWeekChecked); i++) {
            const td = document.createElement('td');
            td.textContent = languageWords[radioLanguageChecked][i];
            for (let j = 0; j < parseInt(inputMaxLessons); j++) {
                const tr = document.createElement('tr');
                const input = document.createElement('input');

                if (tableValue.length > 0 && tableValue[i][j] != undefined) {
                    input.value = tableValue[i][j];
                }
                tr.appendChild(input);
                td.appendChild(tr);
            }
            table.appendChild(td);
        }
        tableDiv.appendChild(table);
        buttonDel.style.display = "block";
        buttonSubmit.style.display = "none";
        buttonSave.style.display = "block";
    }
}