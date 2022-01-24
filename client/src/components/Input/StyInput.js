import sty from 'styled-components';
import colors from '../../styles/colors';


const Container = sty.div`
    width: 100%;

    .input__label{
        font-size: 14px;
        color: ${colors.black};
    }
    .input{
        margin-top: 5px;
        width: 100%;
        padding: 16px 29px;
        border: 1px solid ${colors.inputBorder}; 
        border-radius: 10px;
    }
    .input__error{
        color: ${colors.red};
        font-size: 12px;
        margin-top: 5px;
    }
`


export default Container;