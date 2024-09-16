const appElement = document.querySelector("#dev-footer");
appElement.innerHTML = `
  <footer role="contentinfo">
    <div class="nhsuk-footer-container">
      <div class="nhsuk-width-container">
        <h2 class="nhsuk-u-visually-hidden">Support links</h2>
        <div class="nhsuk-footer">
          <ul class="nhsuk-footer__list">
            <li class="nhsuk-footer__list-item nhsuk-footer-default__list-item">
              <a class="nhsuk-footer__list-item-link" href="#">Accessibility statement</a>
            </li>
            <li class="nhsuk-footer__list-item nhsuk-footer-default__list-item">
              <a class="nhsuk-footer__list-item-link" href="#">Contact us</a>
            </li>
            <li class="nhsuk-footer__list-item nhsuk-footer-default__list-item">
              <a class="nhsuk-footer__list-item-link" href="#">Cookies</a>
            </li>
            <li class="nhsuk-footer__list-item nhsuk-footer-default__list-item">
              <a class="nhsuk-footer__list-item-link" href="#">Privacy policy</a>
            </li>
            <li class="nhsuk-footer__list-item nhsuk-footer-default__list-item">
              <a class="nhsuk-footer__list-item-link" href="#">Terms and conditions</a>
            </li>
          </ul>
          <div>
            <p class="nhsuk-footer__copyright">© NHS England</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
`;
