import { createHomePageMainInfo } from './main-info';

export function createHomePage() {
    return $('<div class="page_home">').append(
        createHomePageSection().append(
            createHomePageMainInfo()
        )
    )
}

function createHomePageSection() {
    return $('<section class="page__section">')
}