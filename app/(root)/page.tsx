import React from "react";
import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import "../globals.css"
import RightSidebar from "@/components/RightSidebar";

const Home = () => {

    const loggedIn = { firstName: 'Assaad', lastName: 'Ziade', email: 'aziade.lb@gmail.com' };


    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox
                        type="greeting"
                        title="Welcome"
                        user={loggedIn?.firstName || "Guest"}
                        subtext="Access and manage your account and transactions efficiently."
                    />

                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={120.35}
                        />
                </header>
            </div>

            <RightSidebar
                user={loggedIn}
                transactions={[]}
                banks={[{ currentBalance: 123.50 }, { currentBalance: 500.50}]}
            />
        </section>
    )
}

export default Home;