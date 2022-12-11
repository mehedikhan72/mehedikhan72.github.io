document.addEventListener('DOMContentLoaded', function(){
    let show1 = document.querySelector("#show-1")
    show1.addEventListener('click', function() {
        show_details('show-1');
    })

    let hide1 = document.querySelector("#hide-1")
    hide1.addEventListener('click', function() {
        hide_details('hide-1');
    })

    let show2 = document.querySelector("#show-2")
    show2.addEventListener('click', function() {
        show_details('show-2');
    })

    let hide2 = document.querySelector("#hide-2")
    hide2.addEventListener('click', function() {
        hide_details('hide-2');
    })

    let show3 = document.querySelector("#show-3")
    show3.addEventListener('click', function() {
        show_details('show-3');
    })

    let hide3 = document.querySelector("#hide-3")
    hide3.addEventListener('click', function() {
        hide_details('hide-3');
    })
    
    let show4 = document.querySelector("#show-4")
    show4.addEventListener('click', function() {
        show_details('show-4');
    })

    let hide4 = document.querySelector("#hide-4")
    hide4.addEventListener('click', function() {
        hide_details('hide-4');
    })

    let show5 = document.querySelector("#show-5")
    show5.addEventListener('click', function() {
        show_details('show-5');
    })

    let hide5 = document.querySelector("#hide-5")
    hide5.addEventListener('click', function() {
        hide_details('hide-5');
    })



    // let elem2 = document.querySelector("#show-2")
    // elem2.addEventListener('click', function() {
    //     show_details('show-2');
    // })
})

function show_details(elem){
    div = 'ey' + elem;
    let project = document.getElementById(div);
    project.classList.remove('hidden');
    project.classList.add('shown');
    let hide_id = 'hide-' + elem[elem.length - 1]; 

    let show_parent = elem + '-parent';
    let hide_parent = hide_id + '-parent';

    document.getElementById(show_parent).classList.remove('shown');
    document.getElementById(show_parent).classList.add('hidden');
    document.getElementById(hide_parent).classList.remove('hidden');
    document.getElementById(hide_parent).classList.add('shown');

}

function hide_details(elem){
    let show_id = 'show-' + elem[elem.length - 1]; 
    div = 'ey' + show_id;
    let project = document.getElementById(div);
    project.classList.remove('shown');
    project.classList.add('hidden');

    let show_parent = show_id + '-parent';
    let hide_parent = elem + '-parent';

    document.getElementById(show_parent).classList.add('shown');
    document.getElementById(show_parent).classList.remove('hidden');
    document.getElementById(hide_parent).classList.add('hidden');
    document.getElementById(hide_parent).classList.remove('shown');
}

