(async () => {
  const username = localStorage.getItem('username');
  if(username) {
    setDisplay('loginControls', 'block');
  } else {
    setDisplay('loginControls', 'block');
  }
})();

async function login() {
  loginOrRegister('/api/auth/login');
}

async function register() {
  loginOrRegister('/api/auth/register');  
}

async function loginOrRegister(endpoint) {
  const username = document.querySelector('#username')?.value;
  const password = document.querySelector('#password')?.value;

  const response = await fetch(endpoint, {
    method: 'post',
    body: JSON.stringify({username: username, password: password}),
    headers: {'Content-type': 'application/json; charset=UTF-8'},
  });

  if(response.ok) {
    console.log('ok');
    window.location.href = 'websites.html'

  } else {
    console.log('unauthorized');
  }
}

function setDisplay(controlID, display) {
  const controlEl= document.querySelector(`#${controlID}`);
  if(controlEl) {
    controlEl.style.display = display;
  }
}
