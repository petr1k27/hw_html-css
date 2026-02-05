import sprite from '../../assets/images/sprite.svg';
import styled from "styled-components";

type IconPropsType = {
    iconId: string,
    logoVariant?: string,
    width?: string,
    height?: string,
    viewBox?: string,
}

export const Icon = (props: IconPropsType) => {
    return (
        <StyledSVG width={props.width || '50'} height={props.height || '50'} viewBox={props.viewBox || '0 0 30 30'}
             xmlns='http://www.w3.org/2000/svg'>
            <use xlinkHref={`${sprite}#${props.logoVariant == "header" ? "header-logo" : props.logoVariant == "footer" ? "footer-logo" : props.iconId} `} />
        </StyledSVG>
    );
};

const StyledSVG = styled.svg`
display: block;
`
