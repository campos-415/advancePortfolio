//template_nltfluk
//service_litwiq6
//XLo66Pj42bzrGVQqR
let isModalOpen = false
let contrastToggle = false 
function toggleContrast() {
  contrastToggle = !contrastToggle
  if (contrastToggle) {
    document.body.classList += ' dark-theme'
  }
  else {
    document.body.classList.remove('dark-theme')
  }
}


function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false
    return document.body.classList.remove('modal--open')
  }
  isModalOpen = !isModalOpen
  document.body.classList += ' modal--open'
}



function contact(event) {
  event.preventDefault();
  const loading = document.querySelector('.modal__overlay--loading')
  const success = document.querySelector('.modal__overlay--success')
  loading.classList += " modal__overlay--visible"
  // emailjs.sendForm(
  //   "service_litwiq6",
  //   "template_nltfluk",
  //   event.target,
  //   "XLo66Pj42bzrGVQqR"
  // ).then(() => {
  //   // throw new Error("error")
  //   loading.classList.remove('modal__overlay--visible')
  //   success.classList += " modal__overlay--visible"
  // }).catch(() => {
  //    loading.classList.remove('modal__overlay--visible')
  //    alert (
  //     'Email service is down :(  Please contact me directly at camposss.415@gmail.com'
  //    )
  // })
  // comment out code below when  production
  // product page is done!!  VERY IMPORTANT
  setTimeout(() => {
    loading.classList.remove('modal__overlay--visible')
    success.classList += " modal__overlay--visible"
  }, 1000)
}