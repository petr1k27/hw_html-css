import sprite from '../../assets/images/sprite.svg';

type IconPropsType = {
    id: string;
}

export const Icon = (props:IconPropsType) => {
    return (
        <svg width='97px' height='59px' xmlns='http://www.w3.org/2000/svg' >
            <use xlinkHref={`${sprite}#${props.id}`} />
        </svg>
    );
};
