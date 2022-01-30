import logo from "./img/logo.svg";
import "./App.css";
import dollar from "./img/dollar.svg";
import person from "./img/person.svg";
import { useEffect, useState } from "react";

function App() {
  const [tip, setTip] = useState(0);
  const [Bill, setBill] = useState(0);
  const [people, setPeople] = useState(0);
  const [custom, setCustom] = useState(0);
  const [total, setTotal] = useState(0);

  //bill
  function bill(e) {
    setBill(parseInt(e.target.value));
  }
  //person
  function People(e) {
    setPeople(parseInt(e.target.value));
  }

  function Aturmi(e) {
    setCustom(parseInt(e.target.value));
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
      let res = (Bill * 5) / 100;
      let total = res / people;
      setTip(total);
    }
  };
  const Sepuluh = () => {
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
      let res = (Bill * 10) / 100;
      let total = res / people;
      setTip(total);
    }
  };
  const Limabelas = () => {
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
      let res = (Bill * 15) / 100;
      let total = res / people;
      setTip(total);
    }
  };
  const Dualima = () => {
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
      let res = (Bill * 25) / 100;
      let total = res / people;
      setTip(total);
    }
  };
  const Limapuluh = () => {
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
      let res = (Bill * 50) / 100;
      let total = res / people;
      setTip(total);
    }
  };

  useEffect(() => {
    let result = parseFloat(custom * Bill) / 100;
    let total = parseFloat(result / people);
    setTip(parseFloat(total));
  }, [custom]);

  useEffect(() => {
    if (tip === 0) {
      setTip(0);
    } else {
      const a = parseFloat(tip);
      let b = parseFloat(Bill);
      const tot = a + b;
      setTotal(tot);
    }
  }, [tip]);

  return (
    <div className="  mx-auto h-full w-full left-0 top-0 ring-0 bottom-0 h-full ">
      <h1 className="text-center grid justify-items-center p-14">
        <img src={logo} alt="" />
      </h1>
      <div className=" grid md:grid-cols-2 grid-cols-1 bg-white rounded-xl w-max  gap-2  mx-auto md:gap-2    ">
        <div className="w-1/2 mx-auto   container rounded-lg w-auto">
          <div className="p-10">
            <h1 className="container mx-auto font-semibold text-lg text-[#5e7a7d] ">Bill</h1>
            <form action="submit" className="container mt-3  flex ring ring-[#00494d] py-2 px-2 rounded-lg  w-5/6    ">
              <label htmlFor="">
                <img src={dollar} className="p-2" />
              </label>
              <input id="bill" type="number" className="container items-center focus:outline-none  text-right w-5/6" placeholder="0" onChange={bill} />
            </form>
            <h1 className="container mt-[15px] font-semibold text-lg text-[#5e7a7d]">Select Tip %</h1>
            <div className="grid md:grid-cols-3  grid-cols-2 md:w-[403px] w-[390px]  mt-2  ">
              <button onClick={lima} className="md:h-[48px] md:w-[107px] w-[151px] h-[40px] text-white font-bold bg-[#00494d] mt-2  focus:bg-[#26c0ab] rounded-lg text-xl">
                5%
              </button>
              <button onClick={Sepuluh} className="md:h-[48px] md:w-[107px] w-[151px] h-[40px] text-white font-bold bg-[#00494d] mt-2 focus:bg-[#26c0ab] rounded-lg text-xl ">
                10%
              </button>
              <button onClick={Limabelas} className="md:h-[48px] md:w-[107px] w-[151px] h-[40px] text-white font-bold bg-[#00494d] mt-2 focus:bg-[#26c0ab] rounded-lg text-xl">
                15%
              </button>
              <button onClick={Dualima} className="md:h-[48px] md:w-[107px] w-[151px] h-[40px] text-white font-bold bg-[#00494d] mt-2 focus:bg-[#26c0ab] rounded-lg text-xl">
                25%
              </button>
              <button onClick={Limapuluh} className="md:h-[48px] md:w-[107px] w-[151px] h-[40px] text-white font-bold bg-[#00494d] mt-2  focus:bg-[#26c0ab] rounded-lg text-xl">
                50%
              </button>
              <button className="md:h-[48px] md:w-[107px] w-[151px] h-[40px] items-center">
                <input
                  type="number"
                  onChange={Aturmi}
                  className="md:h-[48px] md:w-[107px] w-[161px] h-[40px] text-xl  text-white font-bold focus:outline-none mt-2 focus:ring-2 text-black focus:ring-[#26c0ab]  rounded-lg text-center text-xl"
                  placeholder="custom"
                />
              </button>
            </div>
          </div>
          <form action="submit" className="container p-7 ml-2 ">
            <label htmlFor="people">Number Of people</label>
            <div className="  flex mt-3  ring ring-[#00494d] py-1 rounded-md w-5/6   ">
              <img src={person} className="p-2" />
              <input id="people" type="text" className="container items-center p-2 focus:outline-none  text-right  " placeholder="0" onChange={People} />
            </div>
          </form>
        </div>
        <div className="w-1/2 pl-9">
          <div className=" mb-28   bg-[#00494d] mt-[30px] md:w-[416px] md:h-[415px] md:w-[350px] md:mt-14 w-[342px] mx-auto container w-full h-[217px] rounded-lg ">
            <h1 className="text-white pt-10 pl-7 font-semibold">Tip Amount</h1>
            <div className="flex justify-between items-center">
              <p className="text-[#26c0ab] pt-3 pl-7">/ person</p>
              <div className="text-[#26c0ab] pr-5 pt-3 text-3xl">$ {tip}</div>
            </div>
            <h1 className="text-white md:pt-10 pt-5 pl-7 font-semibold">Total</h1>
            <div className="flex justify-between items-center">
              <p className="text-[#26c0ab] pt-3 pl-7">/ person</p>
              <p className="text-[#26c0ab] pr-5 md:pt-3 text-3xl">$ {total}</p>
            </div>
            <button onClick={Reset} className="container grid mx-auto md:mt-32 mt-3   text-[#00494d] bg-[#26c0ab] w-[342px] h-[50px] items-center rounded-lg font-semibold leading-relaxed">
              RESET
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
