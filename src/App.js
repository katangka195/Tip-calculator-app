import logo from "./img/logo.svg";
import "./App.css";
import dollar from "./img/dollar.svg";
import person from "./img/person.svg";
import { useEffect, useState } from "react";
import { parse } from "postcss";
function App() {
  const [tip, setTip] = useState("0");
  const [Bill, setBill] = useState(0);
  const [people, setPeople] = useState(0);
  const [custom, setCustom] = useState(0);
  const [total, setTotal] = useState(0);

  //bill
  function bill(e) {
    setBill(e.target.value);
  }
  //person
  function People(e) {
    setPeople(e.target.value);
  }

  function Aturmi(e) {
    setCustom(e.target.value);
  }

  const Reset = () => {
    window.location.reload(true);
  };

  const lima = () => {
    if (Bill == 0) {
      const docc = document.querySelector("#bill");
      docc.setAttribute("placeholder", "input bill !!");
      docc.classList.add("placeholder-red-500");
    }
    if (people == 0) {
      const doc = document.querySelector("#people");
      doc.setAttribute("placeholder", "input number of people !!!");
      doc.classList.add("placeholder-red-500");
    } else if (Bill != 0) {
      let Lima = (Bill * 5) / 100;
      let total = Lima / people;
      setTip(total);
    }
  };
  const Sepuluh = () => {
    let sepuluh = (Bill * 10) / 100;
    let total = sepuluh / people;
    setTip(total);
  };
  const Limabelas = () => {
    let limabelas = (Bill * 15) / 100;
    let total = limabelas / people;
    setTip(total);
  };
  const Dualima = () => {
    let result = (Bill * 25) / 100;
    let total = result / people;
    setTip(total);
  };
  const Limapuluh = () => {
    let result = (Bill * 50) / 100;
    let total = result / people;
    setTip(total);
  };
  useEffect(() => {
    let result = (Bill * custom) / 100;
    let total = result / people;
    setTip(total);
  }, [custom]);

  useEffect(() => {
    let a = parseInt(tip);
    let b = parseInt(Bill);
    const tot = a + b;
    setTotal(tot);
  });

  return (
    <div className="bg-[#c5e4e7] h-full w-screen">
      <h1 className="text-center grid justify-items-center p-14">
        <img src={logo} alt="" />
      </h1>
      <div className="grid md:grid-cols-2 grid-cols-1 md:w-[920px]  container  bg-white rounded-xl mx-auto mt-[68px] shadow-lg">
        <div className="w-1/2 ">
          <div>
            <h1 className="container mx-auto p-7 font-semibold text-lg text-[#5e7a7d]">Bill</h1>
            <form action="submit" className="flex ring ring-[#00494d] py-2 rounded-lg w-[373px] ml-5  ">
              <label htmlFor="">
                <img src={dollar} className="p-2" />
              </label>
              <input id="bill" type="number" className="  focus:outline-none w-[370px] text-right" placeholder="0" onChange={bill} />
            </form>
            <h1 className="container mx-auto pl-7 mt-[55px]  font font-semibold text-lg text-[#5e7a7d]">Select Tip %</h1>
            <div className="grid md:grid-cols-3 p-3 grid-cols-2 md:w-[403px] space-x-2 mt-2">
              <button onClick={lima} className="h-[48px] w-[107px] text-white font-bold bg-[#00494d] mt-2 ml-2 focus:bg-[#26c0ab] rounded-lg">
                5%
              </button>
              <button onClick={Sepuluh} className="h-[48px] w-[107px] text-white font-bold bg-[#00494d] mt-2 focus:bg-[#26c0ab] rounded-lg">
                10%
              </button>
              <button onClick={Limabelas} className="h-[48px] w-[107px] text-white font-bold bg-[#00494d] mt-2 focus:bg-[#26c0ab] rounded-lg">
                15%
              </button>
              <button onClick={Dualima} className="h-[48px] w-[107px] text-white font-bold bg-[#00494d] mt-2 focus:bg-[#26c0ab] rounded-lg">
                25%
              </button>
              <button onClick={Limapuluh} className="h-[48px] w-[107px] text-white font-bold bg-[#00494d] mt-2 focus:bg-[#26c0ab] rounded-lg">
                50%
              </button>
              <button className="h-[48px] w-[107px] items-center">
                <input type="number" onChange={Aturmi} className="w-[107px] h-[48px]  text-white font-bold focus:outline-none bg-[#00494d] mt-2 focus:bg-[#26c0ab] rounded-lg text-center " placeholder="custom" />
              </button>
            </div>
          </div>
          <form action="submit" className="container p-7 ">
            <label htmlFor="people">Number Of people</label>
            <div className="container mx-auto flex mt-3  ring ring-[#00494d] py-1 rounded-md w-[373px]  ">
              <img src={person} className="p-2" />
              <input id="people" type="text" className="focus:outline-none text-right p-2 w-full " placeholder="0" onChange={People} />
            </div>
          </form>
        </div>
        <div className="w-1/2 bg-[#00494d] mt-[68px] w-[420px] h-[415px] rounded-lg">
          <h1 className="text-white pt-10 pl-7 font-semibold">Tip Amount</h1>
          <div className="flex justify-between items-center">
            <p className="text-[#26c0ab] pt-3 pl-7">/ person</p>
            <div className="text-[#26c0ab] pr-5 pt-3 text-3xl">$ {tip} </div>
          </div>
          <h1 className="text-white pt-10 pl-7 font-semibold">Total</h1>
          <div className="flex justify-between items-center">
            <p className="text-[#26c0ab] pt-3 pl-7">/ person</p>
            <p className="text-[#26c0ab] pr-5 pt-3 text-3xl">$ {total}</p>
          </div>
          <button onClick={Reset} className="container grid mx-auto mt-24 text-[#00494d] bg-[#26c0ab] w-[342px] h-[50px] items-center rounded-lg font-semibold leading-relaxed">
            RESET
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
