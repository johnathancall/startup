async function login() {
  const nameEl = document.querySelector("#username");
  localStorage.setItem("username", nameEl.value);

  const passEl = document.querySelector("#password");
  localStorage.setItem("password", passEl.value);

  const loginReq = {username: nameEl, password: passEl};

  try {
    const response = await fetch('api/login/', {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(loginReq),
    });

  } catch {
      console.log('login failed');
  }

  window.location.href = "websites.html";
}

async function register() {
  const nameEl = document.querySelector("#username");
  localStorage.setItem("username", nameEl.value)

  const passEl = document.querySelector("#password");
  localStorage.setItem("password", passEl.value);

  const regReq = {username: nameEl, password: passEl};

  try {
    const response = await fetch('api/register/', {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(regReq),
    });
    localStorage.setItem("regRes", response);
  } catch (err) {
    localStorage.setItem("regRes", err);
  }

  window.location.href = "websites.html";
}
