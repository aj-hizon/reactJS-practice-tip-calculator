import { useState } from "react";

export default function App() {
  const [billAmount, setBillAmount] = useState(0);
  const [userTipPercentage, setUserTipPercentage] = useState(0);
  const [friendTipPercentage, setFriendTipPercentage] = useState(0);
  const totalTipPercentage = ((userTipPercentage + friendTipPercentage) / 2) /100;
  const totalTip = billAmount * totalTipPercentage;
  
  console.log(totalTipPercentage);
  console.log(billAmount);
  console.log(userTipPercentage);
  console.log(friendTipPercentage);
  
  return (
    <div className="">
      <TotalToPay 
        billAmount={billAmount}
        totalTipPercentage={totalTipPercentage}
        totalTip={totalTip}
      />
      <TotalTip totalTipPercentage={totalTipPercentage} />
      <Inputs 
        billAmount={billAmount} 
        setBillAmount={setBillAmount}
        userTipPercentage={userTipPercentage}
        setUserTipPercentage={setUserTipPercentage}
        friendTipPercentage={friendTipPercentage}
        setFriendTipPercentage={setFriendTipPercentage}
      />
    </div>    
  );
}

function Inputs({ billAmount, setBillAmount, friendTipPercentage, setFriendTipPercentage, userTipPercentage, setUserTipPercentage }){
  return(
    <div className="flex flex-col w-[50%] mx-auto max-w-[30rem] gap-8 py-10">
      <BillAmount 
        billAmount={billAmount} 
        setBillAmount={setBillAmount}
      >How much was the bill
      </BillAmount>

      <YourPercentage
        userTipPercentage={userTipPercentage}
        setUserTipPercentage={setUserTipPercentage}
      >How did you like the service
      </YourPercentage>

      <FriendPercentage 
        friendTipPercentage={friendTipPercentage}
        setFriendTipPercentage={setFriendTipPercentage} 
      >How did your friend like the service
      </FriendPercentage>
    </div>
  )
}

function TotalToPay({ billAmount, totalTipPercentage, totalTip }){
  return(
    <div className="flex flex-col gap-4 justify-center h-[30rem] bg-gradient-to-r from-[#22d7a2] to-[#1aa2b0] text-white text-center tracking-wider">
      <p className="text-[5rem] sm:text-[10rem] mx-auto font-thin">
        ${billAmount + totalTip}
      </p>
      <div className="w-[6rem] h-[0.1rem] bg-white mx-auto"></div>
      <p className=" mx-auto rounded-full font-thin uppercase text-2xl tracking-widest">total</p>
      <div className="grid grid-cols-2 w-[30rem] space-x-2 mx-auto items-center">
          <p className="text-xl sm:text-2xl font-bold tracking-wider text-right">${billAmount}</p>
          <p className="text-white/70 text-sm sm:text-lg font-semibold tracking-widest text-left">BILL</p>
          <p className="text-xl sm:text-2xl font-bold tracking-wider text-right">${(billAmount * totalTipPercentage).toFixed(1)}</p>
          <p className="text-white/70 text-sm sm:text-lg font-semibold tracking-widest text-left">TIP</p>
      </div>
    </div>
  )
}

function TotalTip({ totalTipPercentage }){
  return(
      <div className="bg-[#ecf3f9] text-[#6d7275] flex flex-row justify-between py-2 px-5 items-center">
        <p className="text-[#6d7275]/50 font-medium">TOTAL TIP PERCENTAGE</p>
        <p className="text-2xl">{(totalTipPercentage*100).toFixed(1)}%</p>
      </div>
  )
}

function BillAmount({ billAmount, setBillAmount, children }){
  return(
    <div className="text-center">
      <input 
        className="text-xl py-2 text-[#16d69d] border-2 border-[#22d7a2] rounded-full text-center w-[100%]" 
        type="text"
        value={billAmount}
        onChange={(e) => setBillAmount(Number(e.target.value))}
      />
      <p className="text-sm text-[#6d7275]/50 font-semibold uppercase tracking-wider mt-2">{children}</p>
    </div>
  )
}

function YourPercentage({ children, setUserTipPercentage, userTipPercentage }){
  return(
    <div className="text-center">
      <select 
        className=" text-lg py-2 text-[#16d69d] border-2 border-[#22d7a2] rounded-full text-center w-[100%]" 
        value={userTipPercentage}
        onChange={(e) => setUserTipPercentage(Number(e.target.value))}
      >
        <option value={0}>Dissatified (0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absolutely amazing! (20%)</option>
      </select>
      {/* <input className="text-3xl text-[#16d69d] border-2 border-[#22d7a2] rounded-full text-center py-2" type="number"/> */}
      <p className="text-sm  text-[#6d7275]/50 font-semibold uppercase tracking-wider mt-2">{children}</p>
    </div>
  )
}

function FriendPercentage({ children, setFriendTipPercentage, friendTipPercentage }){
  return(
    <div className="text-center ">
      <select 
        className="text-lg py-2 text-[#16d69d] border-2 border-[#22d7a2] rounded-full text-center w-[100%]" 
        value={friendTipPercentage}
        onChange={(e) => setFriendTipPercentage(Number(e.target.value))}
        >
        <option value={0}>Dissatified (0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absolutely amazing! (20%)</option>
      </select>
      <p className="text-sm text-[#6d7275]/50 font-semibold uppercase tracking-wider mt-2">{children}</p>
    </div>
  )
}


