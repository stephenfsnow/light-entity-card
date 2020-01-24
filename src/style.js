import { css } from 'lit-element';

const style = css`
    .light-entity-card {
        padding: 16px;
    }

    .light-entity-card.group {
        padding-bottom: 0;
        padding-top: 0;
    }

    .ha-slider-full-width ha-slider {
        width: 100%;
    }

    .percent-slider {
        color: var(--primary-text-color);
        margin-top: 5px;
    }

    .light-entity-card__header {
        display: flex;
        justify-content: space-between;
        @apply --paper-font-headline;
        line-height: 40px;
        color: var(--primary-text-color);
        font-size: 24px;
    }

    .group .light-entity-card__header {
        font-size: 16px;
    }

    .light-entity-card-sliders > div {
        margin-top: 10px;
    }

    .group .light-entity-card-sliders > div {
        margin-top: 0px;
    }

    .light-entity-card__toggle {
        display: flex;
        cursor: pointer;
    }

    .light-entity-card__color-picker {
        display: flex;
        justify-content: space-around;
        --ha-color-picker-wheel-borderwidth: 5;
        --ha-color-picker-wheel-bordercolor: white;
        --ha-color-picker-wheel-shadow: none;
        --ha-color-picker-marker-borderwidth: 2;
        --ha-color-picker-marker-bordercolor: white;
    }

    .group .light-entity-card__color-picker {
        width: 50%;
        margin: 0 auto;
    }

    ha-labeled-slider { --paper-slider-input: {width: 100%} }

    .light-entity-card-color_temp {
        background-image: -webkit-linear-gradient( right, rgb(255, 160, 0) 0%, white 50%, rgb(166, 209, 255) 100% );
    }

    .group .light-entity-card-effectlist {
        margin-top: -25px;
    }

    .light-entity-card-center {
        display: flex;
        justify-content:center;
        cursor: pointer;
    }
`;

export default style;
