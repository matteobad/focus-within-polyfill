var shadowRootNestedContainer = document.querySelector('.nestedComponents-container')

// ShadowRoot open
var shadowOpenContainer = document.createElement('DIV')
var shadowOpenRoot = shadowOpenContainer.attachShadow({ mode: 'open' })

// ShadowRoot close
var shadowCloseContainer = document.createElement('DIV')
var shadowCloseRoot = shadowCloseContainer.attachShadow({ mode: 'closed' })
var closeInputEl = document.createElement('INPUT')
closeInputEl.placeholder = 'ShadowRoot Input'

shadowOpenRoot.appendChild(shadowCloseContainer)
shadowCloseRoot.appendChild(closeInputEl)
shadowRootNestedContainer.appendChild(shadowOpenContainer)
