import {Icon} from "../../icon/Icon.tsx";

type TechnologyPropsType = {
    iconId: string,
}

export const Technology = (props: TechnologyPropsType) => {
    return (
        <div>
            <Icon iconId={props.iconId} width={'120px'} height={'120px'} viewBox={"0 0 120 120"}/>
        </div>
    );
};
