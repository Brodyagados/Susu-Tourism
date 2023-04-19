import { createHomePageBaseSection } from '.';

export function createHomePageTourGroup(group) {
    const { title, caption, tours } = group;

    return createHomePageBaseSection()
        .addClass('page__section_tour-group')
        .append(
            $('<div class="tour-group__title" data-aos="fade-right">').text(title),
            $('<div class="tour-group__caption" data-aos="fade-up">').text(caption),
            $('<div class="tour-group-items">').append(
                tours.map(createTour)
            )
        );
}

function createTour(item) {
    const { image, name } = item;

    return $('<div class="tour-group__item" data-aos="fade-up">').append(
        $(`<img src="${image}">`),
        $('<div class="tour-group__item-name" data-aos="zoom-in">').text(name)
    );
}