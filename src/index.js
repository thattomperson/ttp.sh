import './styles.css';

import swal from 'sweetalert2';

const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const f = e.target;

  const data = {};

  for (let i = 0; i < f.length; i += 1) {
    const field = f[i];
    data[field.name] = field.value;
  }

  const s = swal({
    title: 'Sending message',
    text: 'One second please',
    onOpen: () => {
      swal.showLoading();
    },
  });

  fetch(f.action, {
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json',
    },
    method: f.method,
    mode: 'no-cors',
  }).then(() => {
    swal('Awesome', 'Your message has been sent', 'success');

    for (let i = 0; i < f.length; i += 1) {
      f[i].value = '';
    }
  });
});
