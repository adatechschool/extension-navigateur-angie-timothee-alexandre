const inputList = document.querySelectorAll('input')
const listOfThemes = []

for (const theme of inputList){
    if (theme.checked) {listOfThemes.push(theme.id)}
}



export {listOfThemes}