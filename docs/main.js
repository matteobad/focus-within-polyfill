var shadowRootOpenContainer = document.querySelector('.shadowRootOpen-container')
var shadowRootClosedContainer = document.querySelector('.shadowRootClosed-container')
var shadowRootNestedContainer = document.querySelector('.nestedComponents-container')

// ShadowRoot open
var shadowOpenContainer = document.createElement('DIV')
var shadowOpenRoot = shadowOpenContainer.attachShadow({ mode: 'open' })
var openInputEl = document.createElement('INPUT')
openInputEl.placeholder = 'ShadowRoot Open'
shadowOpenRoot.appendChild(openInputEl)
shadowRootOpenContainer.appendChild(shadowOpenContainer)

// ShadowRoot close
var shadowCloseContainer = document.createElement('DIV')
var shadowCloseRoot = shadowCloseContainer.attachShadow({ mode: 'closed' })
var closeInputEl = document.createElement('INPUT')
closeInputEl.placeholder = 'ShadowRoot Close'
shadowCloseRoot.appendChild(closeInputEl)
shadowRootClosedContainer.appendChild(shadowCloseContainer)

// ShadowRoot nested open -> closed
shadowOpenContainer.appendChild(shadowCloseContainer)
shadowRootNestedContainer.appendChild(shadowOpenContainer)
