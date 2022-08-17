let signUp = document.querySelector('.btn-signup')
let modal=document.querySelector('.modal')
let modalContainer = document.querySelector('.js-modal-container')
let modalClose=document.querySelector('.js-modal-close')


function showSignup () {
    modal.classList.add('open')
  }

  function hideSignup() {
    modal.classList.remove('open')
  }

  signUp.addEventListener('click',showSignup)


 modalClose.addEventListener('click',hideSignup)
      
        
  modal.addEventListener('click',hideSignup)
      
  modalContainer.addEventListener('click', function(even){
    even.stopPropagation()

   })