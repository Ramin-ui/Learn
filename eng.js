const form = document.querySelector('#form');
const input = document.querySelector('#input');
const ul = document.querySelector('#ul');
const tooltip = document.querySelector('.tooltip');

form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    let li = document.createElement('li')
    if (input.value !== '') {
        tooltip.style.visibility = 'hidden';
        input.classList.remove('input_error');
        li.innerHTML = `${input.value}<i class="fa fa-trash-alt trash"></i>`;
        ul.append(li)
        input.value = ''
    } else {
        tooltip.style.visibility = 'visible';
        input.classList.add('input_error');
    }
    
    const trash = document.querySelectorAll('.trash')
    trash.forEach((trash) => {
        trash.addEventListener('click',(evt) => {
            evt.preventDefault();
            evt.target.parentNode.remove()
        })
    })    
});


