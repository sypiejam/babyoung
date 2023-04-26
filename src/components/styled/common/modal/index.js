import { useRef } from "react";
import AccountBoxBtn from "../../account/accountBoxContent/accountBoxBtn";
import { ModalContainer, ModalStyle } from "./styled";

function Modal({ isOpen, setIsOpen }) {
    const ref = useRef();

    const onClickOutSide = (e) => {
        if (!ref.current.contains(e.target)) {
            document.body.classList = "";
            setIsOpen(false);
        }
    };

    return (
        <ModalStyle
            onClick={onClickOutSide}
            isOpen={isOpen}
            scroll={window.scrollY}>
            <ModalContainer ref={ref}>
                <p>f</p>
                <p>i</p>
                <p>n</p>
                <p>g</p>
                <p>e</p>
                <p>r</p>
                <AccountBoxBtn title="완료" color="lightblue" />
            </ModalContainer>
        </ModalStyle>
    );
}

export default Modal;
