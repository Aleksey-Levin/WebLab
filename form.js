import {createTable} from "./createTable.js";
import {editLocalStorage} from "./editLocalStorage.js";

function form() {
    const radioWeek = document.querySelector('.form_week').querySelectorAll('input'); // Инициализируем radiobutton для создания недели
    const radioLanguage = document.querySelector('.form_language').querySelectorAll('input') // Инициализируем radiobutton для определения языка
    const inputMaxLessons = document.querySelector('.form_maxLessons').querySelector('input') // Инициализируем input с макс. кол-вом занятий
    const buttonSubmit = document.getElementById('form_create'); // Инициализируем кнопку для создания таблицы
    const buttonDel = document.getElementById('form_delete'); // Инициализируем кнопку для удаления таблицы
    const buttonSave = document.getElementById('form_save'); // Инициализируем кнопку для сохранения таблицы
    const tableDiv = document.querySelector('.table'); // Инициализруем div в котором будем отрисовывать таблицу
    let radioWeekChecked = '';
    let radioLanguageChecked = '';
    if(localStorage.getItem('tableValue') != null && localStorage.getItem('tableValue')!='[]'){
        console.log(1);
        const formRadioValue = JSON.parse(localStorage.getItem('tableFormRadio'));
        radioWeek.forEach(item=>{
            if(item.value == formRadioValue['radioWeekChecked']){
                item.checked = true;
            }
        })
        radioLanguage.forEach(item=>{
            if(item.value == formRadioValue['radioLanguageChecked']){
                item.checked = true;
            }
        })
        inputMaxLessons.value = formRadioValue['inputMaxLessons'];
        createTable(formRadioValue['radioLanguageChecked'], formRadioValue['radioWeekChecked'], formRadioValue['inputMaxLessons'], JSON.parse(localStorage.getItem('tableValue')));
    }
    else{
    buttonSubmit.addEventListener('click', () => {

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
            createTable(radioLanguageChecked.value, radioWeekChecked.value, inputMaxLessons.value, []);
    })}
    buttonDel.addEventListener('click',()=>{
        tableDiv.innerHTML = '';
        buttonDel.style.display = "none";
        buttonSave.style.display = "none";
        buttonSubmit.style.display = "block";
        localStorage.setItem('tableValue','[]');
        localStorage.setItem('tableFormRadio','[]');
        radioWeek.forEach(item=>{
            if(item.checked){
                item.checked = false;
            }
        })
        radioLanguage.forEach(item=>{
            if(item.checked){
                item.checked = false;
            }
        })
        inputMaxLessons.value = '';
    })

    buttonSave.addEventListener('click',()=>{
        editLocalStorage(radioLanguageChecked, radioWeekChecked, inputMaxLessons);
    })


}
form();