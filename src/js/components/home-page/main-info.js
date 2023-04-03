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
        $(`<article class="page-main-info__np" style="--title-image: url(${npImage})">`).append(
            $('<h1 class="page-main-info__title">').text(npTitle),
            $(`<img class="page-main-info__logo" src="${nationalProjectImage}" alt="">`),
            $('<ul class="page-main-info-subtitle">').append(
                npSubtitles.map((itm) => $('<li class="page-main-info-subtitle__text">').text(itm))
            )
        );

    const $title =
        $(`<article class="page-main-info-description" style="--title-image: url(${infoImage})">`).append(
            $('<h1 class="page-main-info__title">').text(infoTitle),
            $('<ul class="page-main-info-subtitle">').append(
                infoSubtitles.map((itm) => $('<li class="page-main-info-subtitle__text">').text(itm))
            )
        );
    
    const $images =
        $('<article class="page-main-info-images">').append(
            images.map((image) =>
               $(`<img class="page-main-info-images__item" src="${image}"
                        alt="">`)
            )
        );
    
    const $note = $('<aside class="page-main-info__note">').text(note);

    return $('<div class="page-main-info">').append(
        $nationalProjectInfo,
        $title,
        $images,
        $note
    )
}