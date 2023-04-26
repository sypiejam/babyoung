import AccountBoxContentDetailBox from "./accountBoxContentDetailBox";
import { AccountBoxContentStyle } from "./styled";

function AccountBoxContent({ isOpen, data, setModal }) {
    return (
        <AccountBoxContentStyle isOpen={isOpen}>
            {data.map((item) => (
                <AccountBoxContentDetailBox
                    key={item.accountName}
                    accountName={item.accountName}
                    accountNum={item.accountNum}
                    accountBal={item.accountBal}
                    setModal={setModal}
                />
            ))}
        </AccountBoxContentStyle>
    );
}

export default AccountBoxContent;
