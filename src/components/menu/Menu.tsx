import styled from "styled-components";

type MenuVariant = "header" | "footer";

type MenuProps = {
    variant?: MenuVariant;
};
type StyledMenuProps = {
    $variant?: MenuVariant;
};

export const Menu = (props : MenuProps) => {
    return (
        <StyledMenu $variant={props.variant}>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Tech Stack</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav<StyledMenuProps>`
    ul {
        display: flex;
        gap: 70px;
        list-style-type: none;
        margin: 20px;
        padding: 0;
    }

    a {
        text-decoration: none;
        font-family: DM Sans, sans-serif;
        line-height: 26px;
        text-align: center;
        vertical-align: middle;

        ${({$variant}) => {
            switch ($variant) {
                
                case "header":
                    return `
            font-size: 20px;
            font-weight: 500;
            color: #666666;
          `;
                case "footer":
                    return `
            font-size: 18px;
            font-weight: 400;
            color: #42446E;
          `;
                default:
                    return `
            font-size: 16px;
            font-weight: 500;
          `;
            }
        }};

    }
`