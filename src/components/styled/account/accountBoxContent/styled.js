import styled from "styled-components";

export const AccountBoxContentStyle = styled.div`
    width: 100%;
    max-height: 0;
    overflow: hidden;
    transition: all ease 0.5s;
    ${(props) => (props.isOpen ? "max-height : 100vh;" : "")}

    & > .account-box-content-detail {
        padding: 1rem 0;
    }
`;

export const AccountBoxContentDetailBoxStyle = styled.div`
    width: 100%;
    background-color: white;
    padding: 1rem 1rem;
    border-radius: 0.5rem;
    margin-bottom: 0.5rem;

    & > .account-box-detail-box-up {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    & > .account-box-detail-box-up > .account-box-detail-box-up-more {
        text-decoration: underline;
        cursor: pointer;
    }

    & > .account-box-detail-box-up > .account-box-detail-box-up-left > p {
        margin-bottom: 0.5rem;
        color: gray;
    }

    & > .account-box-detail-middle {
        width: 100%;
        text-align: end;
        margin-bottom: 0.5rem;
    }

    & > .account-box-detail-box-down {
        width: 100%;
        display: flex;
        gap: 1rem;
    }
`;

export const AccountBoxBtnStyle = styled.button`
    width: 100%;
    height: 2rem;
    border: none;
    border-radius: 0.5rem;
    background-color: ${(props) => props.backColor};
`;
