import '../css/index.scss';

import $ from 'jquery';

document.addEventListener('DOMContentLoaded', async () => {
    window.$ = $;

    init();
});

function init() {
    $('main').append(
        $('<h1>').text('Витрина туров')
    )
}