import '../css/index.scss';

import AOS from 'aos';
import $ from 'jquery';

import { createHomePage } from './components/home-page';

document.addEventListener('DOMContentLoaded', () => {
    window.$ = $;
    AOS.init({ offset: 60 });

    $('main').append(
        createHomePage()
    )
});