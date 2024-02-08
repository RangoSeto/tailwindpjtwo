const getmenubtn = document.getElementById('menu-btn');
const getdropdownmenu = document.getElementById('dropdownmenu');

getmenubtn.addEventListener('click',function(){
    getmenubtn.classList.toggle('crossx');
    getdropdownmenu.classList.toggle('hidden');
});