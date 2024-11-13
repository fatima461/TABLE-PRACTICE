const todoList=[];
function addToDo()
{
    let inputText=document.querySelector('.js-name-input')
    todoList.push(inputText.value)
    
    inputText.value=''
    displayText();
}
function displayText(){
    let content = '';
    for (let i=0; i < todoList.length; i++){
        content += `<p>${todoList[i]}</p>`;
    }
    document.querySelector('.js-text').innerHTML= `${content}`
};




//function deleteToDo()
{
     inputText=document.querySelector('.js-name-input')
     todoList.splice(inputText.valua)
     console.log(todoList)
     inputText.value=''

}