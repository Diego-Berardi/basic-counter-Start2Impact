
// take the content section
const content = document.querySelector('#content');

// create a div button container 
const btnContainer = document.createElement('div');
btnContainer.setAttribute('class','btn-container');

//create number div
const number = document.createElement('div');
number.setAttribute('class', 'number' );

content.appendChild(number);
content.appendChild(btnContainer);


// create - button
const btnMeno = document.createElement('button');
btnMeno.setAttribute('class', 'btn' );
btnMeno.setAttribute('id','btn-Meno');
btnMeno.textContent= '-';
btnContainer.appendChild(btnMeno);

// create reset button
const btnReset = document.createElement('button');
btnReset.setAttribute('id','btn-reset');
btnContainer.appendChild(btnReset);

// create + button 
const btnPiu = document.createElement('button');
btnPiu.setAttribute('class', 'btn' );
btnPiu.setAttribute('id','btn-Piu');
btnPiu.textContent= '+';
btnContainer.appendChild(btnPiu);


// declare the counter
let counter = 0;
display();

// function change value
function changeValue (){
    if(this.id === 'btn-reset' ) {
        counter = 0;
    } else if (this.id === 'btn-Meno' ){
        counter--;
    } else{
        counter++;
    }
    display();
}

// function display value
function display (){
    number.textContent= counter;
}

//add event
btnContainer.querySelectorAll('button').forEach(btn => btn.addEventListener('click', changeValue));
