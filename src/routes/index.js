import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import AccountBox from "../components/styled/account/accountBox";
import Footer from "../components/styled/common/footer";
import Header from "../components/styled/common/header";
import Modal from "../components/styled/common/modal";
import PageTitle from "../components/styled/common/pageTitle";

function RootRoute() {
    const [modalOpen, setModalOpen] = useState(false);

    const dummy = {
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
    };
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/header" element={<Header />} />
                <Route
                    path="/pageTitle"
                    element={<PageTitle title="계좌 정보" />}
                />
                <Route
                    path="/accountBox"
                    element={
                        <AccountBox
                            key={dummy.id}
                            title={dummy.title}
                            totalBal={dummy.totalBal}
                            data={dummy.data}
                            setModal={setModalOpen}
                        />
                    }
                />
                <Route path="footer" element={<Footer />} />
            </Routes>
            <Modal isOpen={modalOpen} setIsOpen={setModalOpen} />
        </BrowserRouter>
    );
}

export default RootRoute;
