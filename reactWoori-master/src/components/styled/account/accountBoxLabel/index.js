import {
    AccountBoxLabelLeftStyle,
    AccountBoxLabelOpenIcon,
    AccountBoxLabelStyle,
} from "./styled";

function AccountBoxLabel({ title, totalBal, isRotate, onClick }) {
    return (
        <AccountBoxLabelStyle onClick={onClick}>
            <AccountBoxLabelLeftStyle>
                <AccountBoxLabelOpenIcon isRotate={isRotate}>
                    &gt;
                </AccountBoxLabelOpenIcon>
                <p>{title}</p>
            </AccountBoxLabelLeftStyle>
            <p>{totalBal}원</p>
        </AccountBoxLabelStyle>
    );
}

export default AccountBoxLabel;
