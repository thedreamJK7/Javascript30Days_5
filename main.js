const btn = document.querySelectorAll('.btn');
const main = document.querySelector('main');
const contentBox = document.querySelectorAll('.content-box');

main.addEventListener('click', (e)=> {
    const id = e.target.dataset.id;
    if(id) {
        btn.forEach(element => {
            element.classList.remove('active');
        });
        e.target.classList.add('active');
        
        contentBox.forEach(element => {
            element.classList.remove('active'); 
        });
    }

    const activeList = document.getElementById(id);
    activeList.classList.add('active');
})