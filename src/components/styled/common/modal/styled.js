import styled from "styled-components";

export const ModalStyle = styled.div`
    position: absolute;
    top: ${(props) => props.scroll}px;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    ${(props) => (props.isOpen ? "display : block;" : "display : none;")}
`;

export const ModalContainer = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: whitesmoke;
    border-top-left-radius: 3rem;
    border-top-right-radius: 3rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 5rem 0;
    overflow: hidden;
    animation: modal 0.5s ease;

    @keyframes modal {
        from {
            transform: translateY(200px);
        }

        to {
            transform: translateY(0px);
        }
    }
`;
