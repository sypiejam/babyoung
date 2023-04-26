import AccountBoxBtn from "./accountBoxBtn";
import { AccountBoxContentDetailBoxStyle } from "./styled";

function AccountBoxContentDetailBox({
    accountName,
    accountNum,
    accountBal,
    setModal,
}) {
    return (
        <AccountBoxContentDetailBoxStyle>
            <div className="account-box-detail-box-up ">
                <div className="account-box-detail-box-up-left">
                    <p>{accountName}</p>
                    <p>{accountNum}</p>
                </div>
                <p
                    className="account-box-detail-box-up-more"
                    onClick={() => {
                        document.body.classList = "hidden";
                        setModal(true);
                    }}>
                    더보기
                </p>
            </div>
            <p className="account-box-detail-middle">{accountBal}원</p>
            <div className="account-box-detail-box-down">
                <AccountBoxBtn title="이체" color="lightgray" />
                <AccountBoxBtn title="모으기" color="lightgreen" />
            </div>
        </AccountBoxContentDetailBoxStyle>
    );
}

export default AccountBoxContentDetailBox;
