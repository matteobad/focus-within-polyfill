var shadowRootClosedContainer = document.querySelector('.shadowRootOpen-container')
var shadowRootOpenContainer = document.querySelector('.shadowRootClosed-container')

// ShadowRoot open
var shadowOpenContainer = document.createElement('DIV')
var shadowOpenRoot = shadowOpenContainer.attachShadow({ mode: 'open' })
var openInputEl = document.createElement('INPUT')
openInputEl.placeholder = 'ShadowRoot Open'
shadowOpenRoot.appendChild(openInputEl)

// ShadowRoot close
var shadowCloseContainer = document.createElement('DIV')
var shadowCloseRoot = shadowCloseContainer.attachShadow({ mode: 'closed' })
var closeInputEl = document.createElement('INPUT')
closeInputEl.placeholder = 'ShadowRoot Close'
shadowCloseRoot.appendChild(closeInputEl)

// append to #main
shadowRootOpenContainer.appendChild(shadowOpenContainer)
shadowRootClosedContainer.appendChild(shadowCloseContainer)
