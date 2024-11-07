const name = document.getElementById('username');
const surname = document.getElementById('surname');
const tel = document.getElementById('phone')
const email = document.getElementById('email')
const btnGen = document.getElementById('btnGen')
const resContacts = document.getElementById('res-contacts')


function addCard() {
    const surnameValue = surname.value.trim()
    const nameValue = name.value.trim()
    const telValue = tel.value.trim()
    const emailValue = email.value.trim()

    if (surnameValue && nameValue && telValue && emailValue) {
        const contactCard = createNewElement(surnameValue, nameValue, emailValue, telValue)
        resContacts.append(contactCard)
    }
}

function createNewElement(surnameValue, nameValue, emailValue, telValue) {
    const card = document.createElement("div")

    const surnameEl = document.createElement("h2")
    surnameEl.textContent = surnameValue;

    const nameEL = document.createElement("h2")
    nameEL.textContent = nameValue;

    const telEl = document.createElement("h2")
    telEl.textContent = telValue;

    const emailEL = document.createElement("h2")
    emailEL.textContent = emailValue;

    card.append(surnameEl)
    card.append(nameEL)
    card.append(telEl)
    card.append(emailEL)

    return card;
}

btnGen.addEventListener('click', addCard)






const block = document.getElementById('block')

block.style.background = 'green';
block.style.width = '958.5px';

// block.style.cssText = `

//     background-color: blue;

// `;


block2.style.cssText = `

    background-color: blue;

`;

block.classList.add('block2')

block.classList.remove('add')

