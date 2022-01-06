export function editLocalStorage(radioLanguageChecked, radioWeekChecked, inputMaxLessons) {
    if (JSON.parse(localStorage.getItem('tableValue')) == []) {
        localStorage.setItem('table', '[]');
    }

    const table = document.querySelector('table');
    const tdTable = table.querySelectorAll('td');

    let localStorageFormRadio = {
        radioLanguageChecked: radioLanguageChecked.value,
        radioWeekChecked: radioWeekChecked.value,
        inputMaxLessons: inputMaxLessons.value
    };

    localStorage.setItem('tableFormRadio', JSON.stringify(localStorageFormRadio));
    let arrLocalStorageTableValue = [];
    tdTable.forEach(trItem => {
        const trTable = trItem.querySelectorAll('tr');
        let tempArr = [];

        trTable.forEach((trItem, index) => {
            tempArr[index] = trItem.querySelector("input").value;
        });
        arrLocalStorageTableValue.push(tempArr);
    });
    localStorage.setItem('tableValue', JSON.stringify(arrLocalStorageTableValue));
}
