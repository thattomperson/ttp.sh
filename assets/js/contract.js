function editable(obj, field, className) {
  var elms = document.querySelectorAll('.' + className)
  var placeholder = ''

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

// var data = {
//     'customer-name': 'dave'
// }

reagere('.content')

function reagere(selector, data) {
    data = data || {}
    var map = {};
    var d = {};
    var root = document.querySelector(selector)
    var nodes = root.querySelectorAll('[x-model]')

    for (let i = 0, node; node = nodes[i]; i++) {
        var name = node.attributes['x-model'].value
        node.contentEditable = true
        node.innerText = d[name] = data[name] = data[name] || node.innerText
        node.oninput = (name) => ((e) => data[name] = e.target.innerText)(name)
        map[name] = map[name] || []
        map[name].push(node)
    }


    var keys = Object.keys(data)
    for (let i = 0, key; key = keys[i]; i++) {        
        Object.defineProperty(data, key, {
            set: update(key),
            get: function () {
                return d[key]
            }
        })
    }

    function update(key) {
        return function (value) {
            d[key] = value
            for (let i = 0, node; node = map[key][i]; i++) {
                node.innerText = value
            }
        }
    }
    console.log(data)
}