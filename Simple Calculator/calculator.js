const inputValue = document.querySelector('.inputValue');
const num = document.querySelectorAll('.num');
const operations = document.querySelectorAll('.operand');
const recordList = document.querySelector('.record-list');

inputValue.innerText = '0';
num.forEach( function(key){
    key.addEventListener('click', function(e){
        e.preventDefault();
        //let lastValue = inputValue.innerHTML.substring(inputValue.innerHTML.length , inputValue.innerHTML.length - 1);
       if(inputValue.innerHTML == '0'){
        inputValue.innerText = '';
       }
        inputValue.innerHTML += e.target.innerHTML
        reduceSize();
    })
})

operations.forEach( function(operand){
    operand.addEventListener('click', function(e){
        e.preventDefault();
        let lastValue = inputValue.innerText.substring(inputValue.innerHTML.length , inputValue.innerHTML.length - 1);

        if(!isNaN(lastValue) && e.target.innerHTML == '='){
            inputValue.innerHTML = eval(inputValue.innerText);
            calculationRecord();
        }
        else if(e.target.innerHTML == 'Del'){
            inputValue.innerHTML = inputValue.innerHTML.substring(0, inputValue.innerHTML.length - 1);

            if(inputValue.innerHTML.length == ''){
                inputValue.innerHTML = '0';
            }
        }
        else if(e.target.innerHTML == 'C'){
            inputValue.innerHTML = '0'
        }
        else{
            if(!isNaN(lastValue)){
                inputValue.innerHTML += e.target.innerHTML;
            }
        }
        
        reduceSize();
    })
})

function calculationRecord(){
    let list = `<li>${inputValue.innerHTML}</li>`;

    recordList.insertAdjacentHTML('beforeend', list)
}

function reduceSize(){
    if(inputValue.innerHTML.length < 6){
        inputValue.style.fontSize = '30px';
    }
    if(inputValue.innerHTML.length >= 7 && inputValue.innerHTML.length < 11){
        inputValue.style.fontSize = '20px';
    }
    else if(inputValue.innerHTML.length >= 11){
        inputValue.style.fontSize = '17px';
    }
}
reduceSize();