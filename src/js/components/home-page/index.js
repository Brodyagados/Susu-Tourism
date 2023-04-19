import { createHomePageMainInfo } from './main-info';

export function createHomePage() {
    return $('<div class="page page_home">').append(
        $('<section class="page__section page__section_main-info">').append(
            createHomePageMainInfo()
        )
    )
}