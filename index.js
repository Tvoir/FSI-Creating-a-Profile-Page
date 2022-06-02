
let content = document.querySelector('.js-generated.content')

let header = document.createElement('h1')
header.setAttribute('class', 'dog-name')
header.append('Rizzo')
content.append(header)

let dogContent = document.createElement('div')
dogContent.setAttribute('class', 'dog-content')
content.append(dogContent)

let dogImage = document.createElement('img')
dogImage.setAttribute('class', 'dog-image')
dogImage.setAttribute('src', './assets/rizzo.jpg')
dogContent.append(dogImage)

let dogDetails = document.createElement('div')
dogDetails.setAttribute('class', 'dog-details')
dogContent.append(dogDetails)

let headerT = document.createElement('h3')
headerT.textContent ='Description:'
dogDetails.append(headerT)

let bodyP = document.createElement('p')
bodyP.textContent ='This gentle dog is aloof toward her owner, and never comes when called. She always acts as though any stranger she meets will harm her, and dislikes other animals.'
dogDetails.append(bodyP)

let HeaderTimes = document.createElement('h3')
HeaderTimes.textContent ='Feeding Times:'
dogDetails.append(HeaderTimes)




let list = document.createElement('ul')

let timeA = document.createElement('li')
timeA.textContent ='9:00 am'
list.append(timeA)

let timeB = document.createElement('li')
timeB.textContent ='12:00 pm'
list.append(timeB)

let timeC = document.createElement('li')
timeC.textContent ='5:00 pm'
list.append(timeC)
dogDetails.append(list)

let body2 = document.createElement('p')
body2.textContent ='hello'
dogDetails.append(body2)
