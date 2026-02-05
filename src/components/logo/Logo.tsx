import {Icon} from "../icon/Icon.tsx";

type LogoVariant = "header" | "footer"

type LogoProps = {
    logo: LogoVariant,
}

export const Logo = (props: LogoProps) => {
    return (
        <a href="/">
            <Icon iconId={'logo'} logoVariant={props.logo} width={'97'} height={'59'} viewBox="0 0 97 59"/>
        </a>
    );
};
