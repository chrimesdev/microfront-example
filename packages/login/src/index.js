import("./bootstrap");

const appElement = document.querySelector("#dev-login");

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

const loggedIn = getCookie("loggedIn");

if (loggedIn === "true") {
  appElement.innerHTML = `
    <h1>Hello, Adam Chrimes</h1>
    <ul class="nhsuk-grid-row nhsuk-card-group">
      <li class="nhsuk-grid-column-two-thirds nhsuk-card-group__item">
        <div class="nhsuk-card nhsuk-card--clickable">
          <div class="nhsuk-card__content nhsuk-card__content--primary">
            <h2 class="nhsuk-card__heading nhsuk-heading-m nhsuk-u-margin-bottom-0">
              <a class="nhsuk-card__link" href="#">Add new patient record</a>
            </h2>
            <svg class="nhsuk-icon" xmlns="http://www.w3.org/2000/svg" width="27" height="27" aria-hidden="true" focusable="false">
              <circle cx="13.333" cy="13.333" r="13.333" fill="" />
              <g data-name="Group 1" fill="none" stroke="#fff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2.667">
                <path d="M15.438 13l-3.771 3.771" />
                <path data-name="Path" d="M11.667 9.229L15.438 13" />
              </g>
            </svg>
          </div>
        </div>
      </li>
    </ul>
    <button class="nhsuk-button nhsuk-button--secondary" data-module="nhsuk-button">Sign out</button>
  `;
} else {
  appElement.innerHTML = `
    <h1>Sign in</h1>
    <form id="login-form">
      <div class="nhsuk-form-group">
        <label class="nhsuk-label" for="email">Email address</label>
        <input class="nhsuk-input" id="email" name="email" type="email" />
      </div>
      <div class="nhsuk-form-group">
        <label class="nhsuk-label" for="password">Password</label>
        <input class="nhsuk-input" id="password" name="password" type="password" />
      </div>
      <p><a href="#">Reset your password</a>, if you cannot remember it.</p>
      <button class="nhsuk-button" data-module="nhsuk-button" type="submit">Continue</button>
    </form>
  `;
}

const loginForm = document.querySelector("#login-form");
if (loginForm) {
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    document.cookie = "loggedIn=true; path=/;";
    appElement.innerHTML = `
    <h1>Hello, Adam Chrimes</h1>
    <ul class="nhsuk-grid-row nhsuk-card-group">
      <li class="nhsuk-grid-column-two-thirds nhsuk-card-group__item">
        <div class="nhsuk-card nhsuk-card--clickable">
          <div class="nhsuk-card__content nhsuk-card__content--primary">
            <h2 class="nhsuk-card__heading nhsuk-heading-m nhsuk-u-margin-bottom-0">
              <a class="nhsuk-card__link" href="#">Add new patient record</a>
            </h2>
            <svg class="nhsuk-icon" xmlns="http://www.w3.org/2000/svg" width="27" height="27" aria-hidden="true" focusable="false">
              <circle cx="13.333" cy="13.333" r="13.333" fill="" />
              <g data-name="Group 1" fill="none" stroke="#fff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2.667">
                <path d="M15.438 13l-3.771 3.771" />
                <path data-name="Path" d="M11.667 9.229L15.438 13" />
              </g>
            </svg>
          </div>
        </div>
      </li>
    </ul>
    <button class="nhsuk-button nhsuk-button--secondary" data-module="nhsuk-button">Sign out</button>
  `;
  });
}
