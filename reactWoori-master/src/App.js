import { useState } from "react";
import AccountBox from "./components/styled/account/accountBox";
import Footer from "./components/styled/common/footer";
import Header from "./components/styled/common/header";
import Modal from "./components/styled/common/modal";
import PageTitle from "./components/styled/common/pageTitle";

function App() {
    const dummy = [
        {
            id: 2132323,
            title: "입출금 1",
            totalBal: 2321329,
            data: [
                {
                    accountName: "우리은행 WON 통장",
                    accountNum: "123-2324-23-1234",
                    accountBal: 231221232,
                },
                {
                    accountName: "신한은행 Sol 통장",
                    accountNum: "923-22324-2-7234",
                    accountBal: 233441232,
                },
            ],
        },
        {
            id: 21323,
            title: "입출금 2",
            totalBal: 2321329,
            data: [
                {
                    accountName: "하나은행 1Q 통장",
                    accountNum: "123-24-23-122324",
                    accountBal: 239112123232,
                },
            ],
        },
    ];

    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <Header />
            <PageTitle title="계좌 조회" />
            {dummy.map((item) => (
                <AccountBox
                    title={item.title}
                    totalBal={item.totalBal}
                    key={item.id}
                    data={item.data}
                    setModal={setModalOpen}
                />
            ))}
            <Footer />
            <Modal isOpen={modalOpen} setIsOpen={setModalOpen} />
        </>
    );
}

export default App;
