import styled from "styled-components";

export const AccountBoxLabelStyle = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    padding: 1.5rem 0;
`;

export const AccountBoxLabelLeftStyle = styled.div`
    width: 20%;
    display: flex;
    align-items: center;
    gap: 1rem;
`;

export const AccountBoxLabelOpenIcon = styled.p`
    transition: all ease 0.5s;
    ${(props) => (props.isRotate ? "transform: rotate(0.25turn);" : "")}
`;
