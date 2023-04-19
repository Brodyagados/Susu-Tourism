import nationalProjectImage from '../../../images/svg/np_tourism.svg';
import { landing } from '../../constants/landing';

export function createHomePageMainInfo() {
    const {
        header: {
            npTitle, npImage, npSubtitles, infoSubtitles,
            infoImage, infoTitle, images, note
        },
    } = landing;

    const $nationalProjectInfo =
        $(`<article class="page__np" style="--title-image: url(${npImage})">`).append(
            $('<h1 class="page__title">').text(npTitle),
            $(`<img class="page__logo" src="${nationalProjectImage}" alt="">`),
            $('<ul class="page-subtitle">').append(
                npSubtitles.map((itm) => $('<li class="page-subtitle__text">').text(itm))
            )
        );

    const $title =
        $(`<article class="page-description" style="--title-image: url(${infoImage})">`).append(
            $('<h1 class="page__title">').text(infoTitle),
            $('<ul class="page-subtitle">').append(
                infoSubtitles.map((itm) => $('<li class="page-subtitle__text">').text(itm))
            )
        );

    const $images =
        $('<article class="page-images">').append(
            images.map((image) =>
                $(`<img class="page-images__item" src="${image}"
                        alt="">`)
            )
        );

    const $note = $('<aside class="page__note">').text(note);

    return [
        $nationalProjectInfo,
        $title,
        $images,
        $note
    ]
}