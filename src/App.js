import React from "react";
import TopBar from "./Components/TopBar";
import "./App.css";
import DonationForm from "./Components/DonationForm";
import Progress from "./Components/Progress";
import RecentDonations from "./Components/RecentDonations";

const targetAmount = 1000;
const donations = [
  {
    amount: 250,
    caption: "You really need this. Really.",
    id: 1,
    name: "Jo",
  },
  {
    amount: 30,
    caption: "Here, take a break from work!",
    id: 2,
    name: "Rami",
  },
  {
    amount: 20,
    caption: "LOL! You are too funny. Happy to do this for you. :)",
    id: 3,
    name: "Michelle",
  },
  {
    amount: 5,
    caption: "Have fun!",
    id: 4,
    name: "Malinda",
  },
  {
    amount: 30,
    caption: "Come visit me in Miami!",
    id: 5,
    name: "Sam",
  },
];

let totalSoFar = 0
for (let donation of donations) {
  totalSoFar += donation.amount;
}

function App() {
  return (
    <>
      <TopBar />
      <main className="container">
        <section className="sidebar">
          {/* for each component, I added props to be used in the component. I was able to take the variables listed above and turn them into props using curly braces. */}
          <RecentDonations 
          donations = {donations}/>
          </section>
        <section className="">
          <Progress 
            totalSoFar = {totalSoFar}
            targetAmount = {targetAmount} />
          <DonationForm 
            donations = {donations}
            name = {donations.name}
            amount = {donations.amount}
            caption = {donations.caption}
            />
        </section>
      </main>
    </>
  );
}

export default App;
