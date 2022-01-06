const createTable = () => {
    const languageWords = {
        rus: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
        eng: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    };


    const radioWeek = document.querySelector('.form_week').querySelectorAll('input'); // Инициализируем radiobutton для создания недели
    const radioLanguage = document.querySelector('.form_language').querySelectorAll('input') // Инициализируем radiobutton для определения языка
    const inputMaxLessons = document.querySelector('.form_maxLessons').querySelector('input') // Инициализируем input с макс. кол-вом занятий
    const buttonSubmit = document.getElementById('form_create'); // Инициализируем кнопку для создания таблицы
    const buttonDel = document.getElementById('form_delete'); // Инициализируем кнопку для удаления таблицы
    const tableDiv = document.querySelector('.table'); // Инициализруем div в котором будем отрисовывать таблицу
    const errorText = document.querySelector('.errorText');
    buttonSubmit.addEventListener('click', () => {
        let radioWeekChecked = '';
        let radioLanguageChecked = '';
        radioWeek.forEach(item=>{
            if(item.checked){
                radioWeekChecked = item;
            }
        })
        radioLanguage.forEach(item=>{
            if(item.checked){
                radioLanguageChecked = item;
            }
        })
        if(radioLanguageChecked == '' || radioWeekChecked == '' || inputMaxLessons.value == '' || inputMaxLessons.value == 0){
            errorText.textContent = "Пожалуйста выберите все настройки";
        }
        else{
            errorText.textContent = "";
            const table = document.createElement('table');
            table.className = "createdTable";
            let language = '';
            radioLanguage.forEach(item=>{
                if(item.checked){
                    language = item.value;
                }
            })
            radioWeek.forEach(item => {
                if (item.checked) {
                    for(let i = 0; i < parseInt(item.value); i++){
                        const td = document.createElement('tr');
                        td.textContent = languageWords[language][i];
                        for(let j = 0; j < parseInt(inputMaxLessons.value); j++){
                            const tr = document.createElement('tr');
                            const input = document.createElement('input');
                            tr.appendChild(input);
                            td.appendChild(tr);
                        }
                        table.appendChild(td);
                    }
                    tableDiv.appendChild(table);
                }
            })
            buttonDel.style.display = "block";
            buttonSubmit.style.display = "none";
        }
    })
    buttonDel.addEventListener('click',()=>{
        tableDiv.innerHTML = '';
        buttonDel.style.display = "none";
        buttonSubmit.style.display = "block";
    })

}
createTable();