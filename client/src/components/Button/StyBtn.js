import sty from 'styled-components';
import colors from '../../styles/colors';
;


const Container = sty.button`
    width: 100%;
    height: ${props => props.height ? props.height : '46px'};
    border-radius: ${props => props.radius ? props.radius : '99px'};
    font-weight: 500;
    font-size: 18px;
    line-height: 36px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    color: ${colors.white};
    border: none;
    background-color: ${props => props.color ? props.color : colors.primary};
`

export default Container;
