import { useTranslation } from "react-i18next"
import { useDispatch } from "react-redux"
import { toastAction } from "../../../common/store/toastReducer"
import BadgeWrap from "../../../common/components/badge/BadgeWrap";
import BadgeItem from "../../../common/components/badge/BadgeItem";

/**
 * 
 * @name AccAccount
 * @role 거래내역 상단에 계좌정보를 담고있는 컴퍼넌트입니다..
 * @props badge(string) - 계좌상태값이 있는경우 넘겨줍니다. 
 * @props account(string) - 계좌정보를 넘겨줍니다. account="123-1234-123456"
 * @props account2(string) - 가상계좌정보를 넘겨줍니다. account2="123-1234-123456"
 * @props product(string) - 상품명을 넘겨줍니다. product="상품명"
 * @props nonCopy(boolean) - 복사기능을 사용하지 않는경우 넘겨줍니다. nonCopy
 * 
 */ 

function AccAccount({badge , account, account2, product, nonCopy}){ 
    const {t} = useTranslation();
    const dispatch = useDispatch();

    const toastEvt = () =>{ //계좌번호 복사 토스트팝업
        dispatch(toastAction({
            option: "false", // 2023-06-02 false로 변경
            title: t("bk0101_0029"),
            btnName : ""
        }))
    }
    return (
        <>
            {   badge &&
                <BadgeWrap>
                    <span className="blind">{t("bk0101_0021")}</span>
                    <BadgeItem color="disabled" text={t("bk0101_0022")} /> {/* 다른케이스 번역본 없음 케이스 확인 필요 */}
                </BadgeWrap>
            }
            {   account && 
                <div className="d-flex">
                    <div className="acc_num">
                        <span className="blind">{t("bk0101_0085")}</span><span>{account}</span>
                    </div>
                    {!nonCopy && <button type="button" className="acc_copy" onClick={toastEvt}><span className="blind">계좌번호 복사</span></button>} {/* 2023-06-02 카피기능 없는경우 추가 */}
                </div>
            }
            {   account2 &&
                <div className="acc_vertual">
                    <span className="blind">{t("bk0101_0085")}</span><span>({account2})</span>
                </div>
            }      
            {product && <div className="acc_name">{product}</div>}
        </>
    )
}

export default AccAccount;
