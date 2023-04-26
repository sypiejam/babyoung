import { AccountBoxBtnStyle } from "./styled";

function AccountBoxBtn({ title, color }) {
    return <AccountBoxBtnStyle backColor={color}>{title}</AccountBoxBtnStyle>;
}

export default AccountBoxBtn;
