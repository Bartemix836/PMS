import { useState } from "react";
import { IReport } from "./Report.type";
import "../../Assest/report-style/report-form-style/reportform.css";

type Props = {
  onBackBtnClickHnd: () => void;
  onSubmitClickHnd: (data: IReport) => void;
};

const AddReport = (props: Props) => {
    const [ProductName,setProductName] = useState("")
    const [ProducedQuantity,setProducedQuantity] = useState("")
    const [Target,setTarget] = useState("")
    const [Waste,setWaste] = useState("")
    const[Shift,setShift] = useState(" ")
    const[Leader,setLeader] = useState(" ")
    const[Notes,setNotes] = useState(" ")

  const { onBackBtnClickHnd, onSubmitClickHnd } = props;

  const onProductNameChangeHnd = (e:any) => {
    setProductName(e.target.value)
}

const onProducedQuantityChangeHnd = (e:any) => {
    setProducedQuantity(e.target.value)
}

const onTargetChangeHnd = (e:any) => {
    setTarget(e.target.value)
}
const onWasteChangeHnd = (e:any) => {
    setWaste(e.target.value)
}
const onShiftChangeHnd = (e:any) => {
    setShift(e.target.value)
};
const onLeaderChangeHnd = (e:any) => {
    setLeader(e.target.value)
};
const onNotesChangeHnd = (e:any) => {
    setNotes(e.target.value)
};

  const onSubmitBtnClickHand  = (e: any) => {
    e.preventDefault();
    const data: IReport = {
        ProductName: ProductName,
        dataReport: new Date().toJSON().toString(),
        ProducedQuantity: ProducedQuantity,
        Target: Target,
        Waste: Waste,
        Shift: Shift,
        Leader: Leader,
        Notes: Notes,
    };
    onSubmitClickHnd(data);
    onBackBtnClickHnd();
  };

  return (
    <div className="form-container-report">
    <div>
        <h3>Add Process</h3>
    </div>
    <form onSubmit={onSubmitBtnClickHand}>
         <div>
            <label> Process Name: </label>
            <input type="text" value={ProductName} onChange={onProductNameChangeHnd} />   
        </div>
        <div>
            <label>Produced Quantity:</label>
            <input type="number" value={ProducedQuantity} onChange={onProducedQuantityChangeHnd} />   
        </div>
        <div>
            <label>Target:</label>
            <input type="number" value={Target} onChange={onTargetChangeHnd}/>  
        </div>
        <div>
            <label> Waste:</label>
            <input type="text" value={Waste} onChange={onWasteChangeHnd}/>  
        </div>
        <div>
            <label>Shift:</label>
            <input type="text" value={Shift} onChange={onShiftChangeHnd}/>  
        </div>
        <div>
            <label>Leader:</label>
            <input type="text" value={Leader} onChange={onLeaderChangeHnd}/>  
        </div>
        <div className="note">
            <label className="note-label">Notes:</label>
            <textarea className='note-btn' value={Notes} onChange={onNotesChangeHnd}/>  
        </div>
        <div className="buttons">
            <input type="button" value="Back" onClick={onBackBtnClickHnd}/>
            <input type="submit" value="Add Report"/>  
        </div>
    </form>

</div>
  );
};

export default AddReport;