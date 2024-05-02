const isValidCPF = (CPF) => {
    const regex = 
    /^\d{3}\.\d{3}\.\d{3}-\d{2}$/
    return regex.test(String(CPF).toLowerCase())
}

const isValidPassword = (password) => { /*credencial de acesso à reserva*/
    const regex = /^[0-9]{6,6}$/
    return regex.test(Number(password))
}
  
const form = document.querySelector('form')
const conta = document.querySelector('.sua-conta')
const message = document.querySelector('.acesso-reserva') /*se permitido, mostrar painel de acesso do hóspede*/
const inputCPF = document.querySelector('input[name="CPF"]')
const inputPassword = document.querySelector('input[name="Password"]')
  
let isValidForm = false
  
const resetInput = (elem) => {
    elem.classList.remove('invalid')
    elem.nextElementSibling.classList.add('error-hidden')
}
  
const invalidateElem = (elem) => {
    elem.classList.add('invalid')
    elem.nextElementSibling.classList.remove('error-hidden')
    isValidForm = false
}
  
const validateInput = () => {
    isValidForm = true
    if (!isValidCPF(inputCPF.value)) {
      invalidateElem(inputCPF)
    }
  
    if (!isValidPassword(inputPassword.value)) {
      invalidateElem(inputPassword)
    }
}
  
form.addEventListener('submit', (e) => {
    e.preventDefault()
    validateInput()
  
    if (isValidForm) {
      form.remove()
      conta.remove()
      message.classList.remove('error-hidden')
      console.log('Acesso permitido')
      document.querySelector('.acesso-reserva').style.display = "block"
    }
})
  
inputCPF.addEventListener('input', () => {
    resetInput(inputCPF)
})
  
inputPassword.addEventListener('input', () => {
    resetInput(inputPassword)
})