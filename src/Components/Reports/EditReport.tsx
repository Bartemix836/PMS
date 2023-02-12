import { useState } from "react";
import { IReport } from "./Report.type";
import "../../Assest/report-style/report-form-style/reportform.css";

type Props = {
  data: IReport;
  onBackBtnClickHnd: () => void;
  onUpdateClickHnd: (data: IReport) => void;
};

const EditReport = (props: Props) => {
  const {data, onBackBtnClickHnd, onUpdateClickHnd } = props;

  const [ProductName,setProductName] = useState(data.ProductName);
    const [ProducedQuantity,setProducedQuantity] = useState(data.ProducedQuantity);
    const [Target,setTarget] = useState(data.Target);
    const [Waste,setWaste] = useState(data.Waste);
    const[Shift,setShift] = useState(data.Shift);
    const[Leader,setLeader] = useState(data.Leader);
    const[Notes,setNotes] = useState(data.Notes);

    const onProductName = (e:any) => {
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

  const onSubmitBtnClickHnd = (e: any) => {
    e.preventDefault();
    const updatedData: IReport = {
        dataReport: data.dataReport,
        ProductName: ProductName,
        ProducedQuantity: ProducedQuantity,
        Target: Target,
        Waste: Waste,
        Shift: Shift,
        Leader: Leader,
        Notes: Notes
    };
    onUpdateClickHnd(updatedData);
    onBackBtnClickHnd();
  };

  return (
    <div className="form-container-report">
        <div>
            <h3>Edit Report</h3>
        </div>
        <form onSubmit={onSubmitBtnClickHnd}>
             <div>
                <label>Product Name:</label>
                <input type="text" value={ProductName} onChange={onProductName} />   
            </div>
            <div>
                <label>Produced Quantity: </label>
                <input type="nubmer" value={ProducedQuantity} onChange={onProducedQuantityChangeHnd} />   
            </div>
            <div>
                <label>Target:</label>
                <input type="nubmer" value={Target} onChange={onTargetChangeHnd}/>  
            </div>
            <div>
                <label>Waste:</label>
                <input type="text" value={Waste} onChange={onWasteChangeHnd}/>  
            </div>
            <div>
                <label>Shift: </label>
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
            <div>
                <input type="button" value="Back" onClick={onBackBtnClickHnd}/>
                <input type="submit" value="Update Process"/>  
            </div>
        </form>

    </div> 
  );
};

export default EditReport;