import { HeaderBackBtn, HeaderLogo, HeaderStyle } from "./styled";

function Header() {
    return (
        <HeaderStyle>
            <HeaderBackBtn>&lt;</HeaderBackBtn>
            <HeaderLogo />
        </HeaderStyle>
    );
}

export default Header;
