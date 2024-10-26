document.addEventListener('DOMContentLoaded', function() {
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');

    buttons.forEach(function(button){                               //check which button is pressed for finding button name
        button.addEventListener('click', function(e) {              // taking vlues from btn nd checked which btn was pressed nd it will worked only when event is active
            let value = e.target.dataset.num;                       //after clicking on button storing data num in value variable        
            if (value !== undefined) {
                screen.value += value;                              //i will store that values in our screen
            }
        })
    });

    equal.addEventListener('click', function(e){
        if(screen.value === '') {
            screen.value = "Please Enter";
        } else {
               let answer = eval(screen.value);
                screen.value = answer;
        }
    });

    clear.addEventListener('click', function(e){
        screen.value = "";
    });
});


