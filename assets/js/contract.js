

function editable(obj, field, className) {
  function update(evt) {
      for (let i = 0, elm; elm = elms[i]; i++) {
          // update all elements that didn't fire the event
          if (elm != evt.target) elm.innerText = evt.target.innerText.trim() || placeholder
      }
      obj[field] = evt.target.innerText.trim()
      window.location.hash = window.btoa(JSON.stringify(obj))
  }

  function blur(evt) {
      // if the element is empty set it back to the place holder
      if (evt.target.innerText.trim() == '') evt.target.innerText = placeholder
  }

  var elms = document.querySelectorAll('.' + className)
  var placeholder = ''
  if (elms.length > 0 ) {
      placeholder = elms[0].innerText.trim()
      for (let i = 0, elm; elm = elms[i]; i++) {
          if (obj[field]) {
              elm.innerText = obj[field]
          }

          elm.contentEditable = true
          elm.oninput = update
          elm.onblur = blur
      }
  }
}

function bind(fields) {
  var o = {};
  try {
      o = JSON.parse(window.atob(window.location.hash.substr(1)))
  } catch(e) {}
  var v = 'abcdefghijklmnopqrstuvxyz';
  for (let i = 0, field; field = fields[i]; i++) {
      editable(o, v[i], field);
  }
}

bind(['customer-name', 'company-name', 'total', 'payment-details', 'payment-schedule', 'date'])
