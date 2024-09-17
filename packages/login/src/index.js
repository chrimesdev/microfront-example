import("./bootstrap");

const appElement = document.querySelector("#dev-login");
appElement.innerHTML = `
    <h1>Sign in</h1>
    <form>
      <div class="nhsuk-form-group">
        <label class="nhsuk-label" for="email">Email address</label>
        <input class="nhsuk-input" id="email" name="email" type="email" />
      </div>
      <div class="nhsuk-form-group">
        <label class="nhsuk-label" for="password">Password</label>
        <input
          class="nhsuk-input"
          id="password"
          name="password"
          type="password"
        />
      </div>
      <p><a href="#">Reset your password</a>, if you cannot remember it.</p>
      <button class="nhsuk-button" data-module="nhsuk-button" type="submit">
        Continue
      </button>
    </form>
`;
