import { CustomA } from "../button";
/**
 * 
 * @name AccountListItem 
 * @role 여러 항목 중에 한개의 항목을 선택하는데 활용하며 바텀시트에서 사용합니다.
 * @props type(string) : normal(기본 계좌 리스트 형태), star(즐겨찾기 계좌 리스트 형태)
 * @props callback(function) : click callback 함수
 * @props bankCode(string) : 은행 아이콘 클래스에 사용할 'ci_bank_' 뒷 숫자 코드
 * @props accName(string) : 은행 이름 또는 상품명
 * @props accNum(string) : 계좌 번호
 * @props accNick(string) : 계좌 이름
 * @props money(string) : 출금가능 금액 액수가 들어갑니다.
 * @props btmNone(boolean) : bottom 영역인 출금가능금액 영역이 없을 경우 사용 (기본 계좌 리스트 형태에서 사용)
 * @props btmText(string) : 하단 '출금가능금액' 텍스트 영역
 * @props starId(string) : 즐겨찾기 체크박스에서 사용할 id로 for와 동일하게 사용합니다. 각자 유니크한 id값이 필요합니다.
 * @props onChange(function) : 즐겨찾기 체크시 실행될 함수 
 */

function AccountListItem({type, callback, bankCode, accName, accNum, accNick, money, btmNone, btmText, starId, onChange}){

    return(
        <li className="listbox_list">
            { 
                type === "normal" &&
                <CustomA href="" btnClass="listbox_item" callback={callback}>
                    {AccInnerHtml({type, bankCode, accName, accNum, accNick, btmNone, btmText, money})}
                </CustomA>
            }
            {
                type === "star" &&
                <div className="listbox_item">
                    {AccInnerHtml({type, bankCode, accName, accNum, accNick, starId, onChange})}
                </div>
            }

        </li>          
    )
}

function AccInnerHtml({type, bankCode, accName, accNum, accNick, btmNone, btmText, money, starId, onChange}){
    return(
        <div className="account_wrap">
            <div className="account_box">
                {// 2023-05-31 수정
                    bankCode &&
                    <i className={`ci_bank lg ci_bank_${bankCode}`}></i>
                }
                <div className="inner">
                    <span className="account_name">{accName}</span>
                    {
                        accNum &&
                        <span className="account_num">{accNum}</span>
                        
                    }
                    {
                        accNick &&
                        <span className="account_nick">{accNick}</span>
                    }

                </div>
                {
                    type === "star" &&
                    <span className="chk_star">
                        <input type="checkbox" id={starId} className="blind" onChange={onChange}/>
                        <label htmlFor={starId} className="ico_star"><span className="blind">즐겨찾기 등록</span></label>
                    </span>
                }
            </div>
            {   !btmNone && (type === "normal")  &&
                <div className="account_btm">
                    <span className="txt">{btmText}</span><div className="break"><span className="cur">KRW</span><strong className="num">{money}</strong></div>
                </div>
            }
        </div>
    )
}


export default AccountListItem;
