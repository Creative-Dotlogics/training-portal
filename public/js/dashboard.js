document.querySelectorAll('.dropdown').forEach((dropdown)=>{
  dropdown.addEventListener('click',()=>{
    dropdown.classList.contains('show') ? dropdown.classList.remove('show') :  dropdown.classList.add('show');
  })
})
