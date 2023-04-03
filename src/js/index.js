import '../css/index.scss';

import $ from 'jquery';
import { createHomePage } from './components/home-page';

document.addEventListener('DOMContentLoaded', async () => {
    window.$ = $;

    init();
});

function init() {
    $('main').append(
        createHomePage()
    )
}