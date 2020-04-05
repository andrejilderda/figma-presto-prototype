import 'alpinejs';

const css = require('../scss/index.scss').toString();

(function () {
    // import css
    const styles = `<style>${css}</style>`;
    document.head.insertAdjacentHTML('beforeend', styles);
}());

