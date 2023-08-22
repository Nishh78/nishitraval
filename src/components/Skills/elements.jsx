import styled from "@emotion/styled";


export const SkillsConatiner = styled.div`
    margin: 2rem 0px;
`;

export const SkillsItem = styled.div`
    margin-bottom: 1.5rem;
    padding: 1.4rem 1.6rem;
    border-radius: 5px;
    background-color: rgba(39, 19, 65, 1);
    background-clip: padding-box;
    box-shadow: rgba(198, 153, 252, 0.27) 0px 2px 2px -2px, rgba(198, 153, 252, 0.27) 0px 3px 1px -3px, rgba(198, 153, 252, 0.27) 0px 1px 5px -2px;
    z-index: 1;
    border-left: 6px solid rgba(198, 153, 252, 0.565);
`;

export const SkillsItemTitle = styled.h2`
    display: block;
    color: rgb(219, 191, 253);
    font-size: 1.25rem;
    margin-top: -0.5rem;
    text-transform: uppercase;
`;

export const SkillsItemInner = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px 50px;
    margin-top: 1.4rem;
    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 10px 24px;
        margin-top: 0.8rem;
    } 
`;

export const SkillsItemInnerItem = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
`;

export const SkillsItemInnerSubItem = styled.div`
    font-size: 1.6rem;
    color: rgb(198, 153, 252);
    margin-right: 10px;
`;

export const SkillsItemP = styled.div`
    font-size: 1.1rem;
    color: rgb(237, 229, 247);
`;