import npImage from '../../images/landing/0.jpg';

import infoTitleImage from '../../images/landing/1.jpg';
import infoImage_1 from '../../images/landing/2.jpg';
import infoImage_2 from '../../images/landing/3.jpg';
import infoImage_3 from '../../images/landing/4.jpg';
import infoImage_4 from '../../images/landing/5.jpg';

import artTourImage_1 from '../../images/landing/6.jpg';
import artTourImage_2 from '../../images/landing/7.jpg';
import artTourImage_3 from '../../images/landing/8.jpg';
import artTourImage_4 from '../../images/landing/9.jpg';

import historyTourImage_1 from '../../images/landing/10.jpg';
import historyTourImage_2 from '../../images/landing/11.jpg';
import historyTourImage_3 from '../../images/landing/12.jpg';
import historyTourImage_4 from '../../images/landing/13.jpg';

import naturalAreasTourImage_1 from '../../images/landing/16.jpg';
import naturalAreasTourImage_2 from '../../images/landing/17.jpg';

import industryTourImage_1 from '../../images/landing/18.jpg';
import industryTourImage_2 from '../../images/landing/19.jpg';
import industryTourImage_3 from '../../images/landing/20.jpg';
import industryTourImage_4 from '../../images/landing/21.jpg';

export const landing = {
    header: {
        npTitle: "Национальный проект «Туризм и индустрия гостеприимства»",
        npSubtitles: [
            "в 2022 году обучающиеся Челябинской области с 5 по 9 класс смогут бесплатно отправиться в путешествие по Южному Уралу",
            "участниками проекта могут стать дети, добившиеся высоких личных результатов в муниципальных, региональных, всероссийских, международных олимпиадах, конкурсных мероприятиях, конференциях, соревнованиях, выставках в сфере «Образование», «Наука», «Культура», «Спорт и физическая культура»"
        ],
        npImage,
        infoTitle: "Краеведческие туры по Челябинской области",
        infoSubtitles: [
            "для школьников 5-9 классов",
            "посещение музеев",
            "познавательные экскурсии",
            "продолжительность тура - 2 дня",
            "проживание в гостинице категории 3*-4*",
            "питание"
        ],
        infoImage: infoTitleImage,
        images: [infoImage_1, infoImage_2, infoImage_3, infoImage_4],
        note: "* Примечание: объекты туристического показа приведены в качестве примеров основных мест посещения на маршрутах. Подробные программы туров определяются компаниями-туроператорами, организующими конкретные туры."
    },
    tourGroups: [
        {
            title: "Искусство и культура",
            caption: "Экскурсии в музеи, выставочные и концертные залы, а также обзорные экскурсии по городам Челябинск и Златоуст расскажут о творчестве людей искусства: художников, скульпторов, архитекторов, композиторов и литераторов, привнёсших значительный вклад в историю культуры Челябинской области.",
            tours: [
                {
                    name: "Сквер им. Петра Столыпина, Зал органной и камерной музыки",
                    image: artTourImage_1
                },
                {
                    name: "Набережная реки Миасс",
                    image: artTourImage_2
                },
                {
                    name: "Челябинский драматический молодёжный театр",
                    image: artTourImage_3
                },
                {
                    name: "Музей Златоустовской оружейной фабрики, Златоустовская гравюра на стали",
                    image: artTourImage_4
                }
            ]
        },
        {
            title: "История региона",
            caption: "Экскурсии познакомят школьников с Челябинском, основанным на естественной географической границе между Уралом и Сибирью. Учащиеся смогут посетить Исторический музей Южного Урала, Информационный центр атомной отрасли, исторический парк «Россия — Моя история», Центр исторического наследия ЮУЖД. В Златоусте юных путешественников ждёт оружейный центр «АиРовка», который познакомит их с историческими ремёслами рудокопов, кузнецов и оружейников.",
            tours: [
                {
                    name: "Государственный исторический музей Южного Урала",
                    image: historyTourImage_1
                },
                {
                    name: "Центр исторического наследия ЮУЖД",
                    image: historyTourImage_2
                },
                {
                    name: "Памятник академику-ядерщику И.В.Курчатову",
                    image: historyTourImage_3
                },
                {
                    name: "Оружейная слобода «АиР», г.Златоуст",
                    image: historyTourImage_4
                }
            ]
        },
        {
            title: "Природные территории и экотуризм",
            caption: "Во время экскурсии по Златоусту в Горном парке им. П.П.Бажова школьники смогут познакомиться со всеми любимыми героями бажовских сказов, увидеть минералы из недр Уральских гор.",
            tours: [
                {
                    name: "Хозяйка Медной горы, Горный парк им. П.П.Бажова",
                    image: naturalAreasTourImage_1
                },
                {
                    name: "Серебряное копытце, Горный парк им. П.П.Бажова",
                    image: naturalAreasTourImage_2
                }
            ]
        },
        {
            title: "Промышленность и профориентация",
            caption: "В Магнитогорске дети посетят обзорную экскурсию по цехам комбината ММК, которая раскроет историю предприятия, покажет его достижения, производственный процесс. Школьники побывают в пожарной части, где им расскажут о работе сотрудников МЧС, а затем прогуляются по парку отдыха «Лукоморье». В Челябинске на экскурсии в студию «Новости 31 канала» участники маршрута узнают, как проходит работа за кадром и рождается телепередача.",
            tours: [
                {
                    name: "Магнитогорский металлургический комбинат",
                    image: industryTourImage_1
                },
                {
                    name: "Памятник «Палатка первых строителей Магнитки»",
                    image: industryTourImage_2
                },
                {
                    name: "Памятник «Тыл — фронту», г.Магнитогорск",
                    image: industryTourImage_3
                },
                {
                    name: "В студии «Новости 31 канала» ",
                    image: industryTourImage_4
                }
            ]
        }
    ]
}