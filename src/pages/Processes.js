import { useEffect, useState } from "react";
import FirstProcess from "../Components/Process1/Process1";
import SecondProcess from "../Components/Process2/Process2";
import '../Assest/style-index/index.css';
// import Description from "./Components/Description";

export default function Processes() {
  const [process, setProcess] = useState("Process");
  // const [descriptionVisible, setDesc] = useState (true);
  const [Process1ContentVisible, setProcess1ContentVisible] = useState(false);
  const [Process2ContentVisible, setProcess2ContentVisible] = useState(false);

  useEffect(() => {
    // process === "home" ? setDesc(true): setDesc(false);
    process === "process1"? setProcess1ContentVisible(true) : setProcess1ContentVisible(false);
    process === "process2" ? setProcess2ContentVisible(true) : setProcess2ContentVisible(false);
  }, [process]);

  const handleOnChange = (e) => {
    setProcess(e.target.value);
    // setDesc(false);
  };

  const makeFirstLetterCapital = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

   const renderResult = () => {
    let result;
    process === ""
      ? (result = "")
      : (result = makeFirstLetterCapital(process));
    return result;
  };
  return (
    <div className="container mt-3">
      {/* <article className="article-header">
            <header>
                <h1> Process Flow Management</h1>
            </header>
        </article> */}
      
      <div className="mt-4">
        <select className="form-select" value={process} onChange={handleOnChange}>
          <option value="process1">First Process</option>
          <option value="process2">Second Process</option>
        </select>
      </div>

      <div className="nameProcess">
              <h1>{renderResult()}</h1>
      </div>
      {Process1ContentVisible && <FirstProcess/>}
      {Process2ContentVisible && <SecondProcess/>}
    </div>
  );
}
