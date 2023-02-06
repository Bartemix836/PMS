import { useState } from "react";
import '../../../Assest/ProcessForm-style/ProcessForm.css';
import { IProcess } from "./Procesess.type1";


type Props = {
    onBackBtnClickHnd: () => void;
    onSubmitClickHnd:(data:IProcess) => void
};

const AddProcess = (props: Props)=> { 
    const [ProductName,setProductName] = useState("")
    const [ProducedQuantity,setProducedQuantity] = useState("")
    const [Target,setTarget] = useState("")
    const [Waste,setWaste] = useState("")
    const[Shift,setShift] = useState(" ")
    const[Leader,setLeader] = useState(" ")
    const[Notes,setNotes] = useState(" ")
    const {onBackBtnClickHnd, onSubmitClickHnd} = props;

    const onProcessName = (e:any) => {
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
    const onLeadeChangeHnd = (e:any) => {
        setLeader(e.target.value)
    };
    const onNotesChangeHnd = (e:any) => {
        setNotes(e.target.value)
    };

    const onSubmitBtnClickHand = (e:any) =>{
        e.preventDefault();
         const data: IProcess ={
            ProductName: ProductName,
            dataReport: new Date().toJSON().toString(),
            ProducedQuantity: ProducedQuantity,
            Target: Target,
            Waste: Waste,
            Shift: Shift,
            Leader: Leader,
            Notes: Notes
        }
        onSubmitClickHnd(data);
        onBackBtnClickHnd();
    }
    
    return ( 
        
        <div className="form-container">
            <div>
                <h3>Add Report</h3>
            </div>
            <form onSubmit={onSubmitBtnClickHand}>
                 <div>
                    <label> Product Name </label>
                    <input type="text" value={ProcessName} onChange={onProcessName} />   
                </div>
                <div>
                    <label>Input Materials </label>
                    <input type="text" value={InputMaterials} onChange={onsetProducedQuantityChangeHnd} />   
                </div>
                <div>
                    <label>Temperature [℃] </label>
                    <input type="text" value={Temerature} onChange={onTargetChangeHnd}/>  
                </div>
                <div>
                    <label>Operation TimWaste         <input type="text" value={OperationTime} onChange={onInputOperationTimeChangeHnd}/>  
                </div>
                <div>
                    <label>Output Product </label>
                    <input type="text" value={OutputProduct} onChange={onOutputProductChangeHnd}/>  
                </div>
                <div>
                    <label>Previous Process </label>
                    <input type="text" value={PreviousProcess} onChange={onPreviousProcessChangeHnd}/>  
                </div>
                <div>
                    <input type="button" value="Back" onClick={onBackBtnClickHnd}/>
                    <input type="submit" value="Add Process"/>  
                </div>
            </form>

        </div>   
    );
}

export default AddProcess;