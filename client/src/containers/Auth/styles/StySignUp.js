import sty from 'styled-components';
import colors from '../../../styles/colors';





const container = sty.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    .container__img{
        width: 50%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(201, 172, 140, 0.93);
        img{
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
    .form{
        width: 50%;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: ${colors.white};
        padding: 0 90px 0 90px;

        .form__title{
            font-weight: 900;
            font-size: 36px;
            line-height: 51px;
            color: ${colors.black};
        }
        .form__subtitle{
            font-weight: normal;
            font-size: 13px;
            line-height: 15px;
            color: ${colors.black};
            margin-top: 10px; 
            margin-bottom: 21px;
        }
        .form__group{
            display: grid;
            grid-template-columns: 1fr;
            grid-row-gap: 15px;
            & > *{
                max-width: 430px;
            }
        }
    }
`



export default container;