function show() {
  const contactList = document.getElementById('contact-list')
  console.log(contactList)

  const listElements = document.getElementsByTagName('li')
  console.log(listElements)

  const contactImput = document.getElementsByClassName('contact-imput')
  console.log(contactImput)

  const contacts = document.querySelectorAll('#contact-list > li > label')
  console.log(contacts)
}
