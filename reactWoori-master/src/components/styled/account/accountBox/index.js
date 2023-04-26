import { useState } from "react";
import AccountBoxContent from "../accountBoxContent";
import AccountBoxLabel from "../accountBoxLabel";
import { AccountBoxStyle } from "./styled";

function AccountBox({ title, totalBal, data, setModal }) {
    const [labelOpen, setLabelOpen] = useState(false);

    return (
        <AccountBoxStyle>
            <AccountBoxLabel
                title={title}
                totalBal={totalBal}
                isRotate={labelOpen}
                onClick={() => setLabelOpen((prev) => !prev)}
            />
            <AccountBoxContent
                isOpen={labelOpen}
                data={data}
                setModal={setModal}
            />
        </AccountBoxStyle>
    );
}

export default AccountBox;
