document.addEventListener('DOMContentLoaded', function(){
    let show1 = document.querySelector("#show-1")
    show1.addEventListener('click', function() {
        show_details('show-1');
    })

    let hide1 = document.querySelector("#hide-1")
    hide1.addEventListener('click', function() {
        hide_details('hide-1');
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

