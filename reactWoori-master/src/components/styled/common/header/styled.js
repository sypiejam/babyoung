import styled from "styled-components";
import fingerLogo from "../../../../assets/logo-finger.png";

export const HeaderStyle = styled.header`
    position: relative;
    width: 100%;
    height: 100px;
    padding: 1rem 1rem;
    background-color: whitesmoke;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const HeaderLogo = styled.img.attrs({
    src: fingerLogo,
})`
    height: 70%;
`;

export const HeaderBackBtn = styled.p`
    position: absolute;
    top: 50%;
    left: 1rem;
    transform: translateY(-50%);
    font-size: 1.4rem;
`;
