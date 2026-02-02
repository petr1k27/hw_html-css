import styled from "styled-components";
import {Icon} from "../../icon/Icon.tsx";

type ResumeCardProps = {
    title: string;
    company: string;
    location: string;
    date: string;
    position: string
}

export const ResumeCard = (props: ResumeCardProps) => {
    return (
        <StyledCard className="job">
            <div className="position">
                <span>{props.position}</span>
            </div>
            <h4>{props.title}</h4>
            <div className="class1">
                <Icon iconId={"building"} width={"12px"} height={"12px"} viewBox={"0 0 12 12"}/>
            </div>
            <span className="company">{props.company}</span>
            <div className="class2">
                <Icon iconId={"location"} width={"12px"} height={"12px"} viewBox={"0 0 12 12"}/>
            </div>
            <span className="location">{props.location}</span>
            <div className="class3">
                <Icon  iconId={"calendar"} width={"16px"} height={"12px"} viewBox={"0 0 16 12"}/>
            </div>
            <time>{props.date}</time>
            <div className="line"></div>

        </StyledCard>
    );
};


const StyledCard = styled.article`
    width: 704px;
    height: 75px;
    position: relative;

    .line {
        width: 696px;
        height: 2px;
        top: 73px;
        position: absolute;
        background-color: #EBEAED;

    }

    .position {
        width: 84px;
        height: 24px;
        border-radius: 100px;
        background-color: #D7FFE0;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: -3px;
        left: 612px;


        span {
            font-family: Poppins, sans-serif;
            font-weight: 600;
            font-size: 9px;
            line-height: 26px;
            color: #018C0F;
        }
    }
    
    .company {
        position: absolute;
        top: 32px;
        left: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .location {
        position: absolute;
        top: 32px;
        left: 262px;
        color: #A7A7A7;
        font-family: Poppins,sans-serif;
        font-weight: 500;
        font-size: 12px;
        line-height: 28px;
        letter-spacing: 1px;
    }

    time {
        position: absolute;
        top: 33px;
        left: 560px;
    }
    
    .class1 {
        position: absolute;
        top: 35px;
    }
    
    .class2 {
        position: absolute;
        top: 35px;
        left: 242px;
    }
    
    .class3 {
        position: absolute;
        top: 36px;
        left: 539px;

    }
;
`
