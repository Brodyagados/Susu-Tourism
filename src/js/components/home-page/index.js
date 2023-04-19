import { landing } from '../../constants/landing';
import { createHomePageMainInfo } from './main-info';
import { createHomePageTourGroup } from './tour-group';

export function createHomePage() {
    const { header, tourGroups } = landing;

    return $('<div class="page page_home">').append(
        createHomePageMainInfo(header),
        tourGroups.map(createHomePageTourGroup)
    )
}

export function createHomePageBaseSection() {
    return $('<section class="page__section">');
}