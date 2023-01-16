//template_nltfluk
//service_litwiq6
//XLo66Pj42bzrGVQqR
const scaleFactor = 1 / 20
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

function closeModal() {
  const exitModal = document.querySelector('body')
  exitModal.classList.remove('modal--open')
}


function moveBackground(event) {
  const shapes = document.querySelectorAll('.shape')
  const x = event.clientX * scaleFactor
  const y = event.clientY * scaleFactor
  console.log(x, y)

  for(let i = 0; i < shapes.length; ++i) {
    const isOdd = i % 2 !== 0
    const boolInt = isOdd ? -1 : 1
    shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
  }
}

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector('.modal__overlay--loading')
  const success = document.querySelector('.modal__overlay--success')
  loading.classList += " modal__overlay--visible"
  emailjs.sendForm(
    "service_litwiq6",
    "template_nltfluk",
    event.target,
    "XLo66Pj42bzrGVQqR"
  ).then(() => {
    // throw new Error("error")
    loading.classList.remove('modal__overlay--visible')
    success.classList += " modal__overlay--visible"
  }).catch(() => {
     loading.classList.remove('modal__overlay--visible')
     alert (
      'Email service is down :(  Please contact me directly at camposss.415@gmail.com'
     )
  })
  // comment out code below when  production
  // product page is done!!  VERY IMPORTANT
  // setTimeout(() => {
  //   loading.classList.remove('modal__overlay--visible')
  //   success.classList += " modal__overlay--visible"
  // }, 1000)
}