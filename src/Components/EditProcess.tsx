import { useState } from 'react';
import { IProcess } from "./Procesess.type";
import "../Assest/ProcessForm-style/ProcessForm.css";


type Props ={
    data:IProcess;
    onBackBtnClickHnd: () => void;
    onUpdateBtnClickHnd: (data:IProcess) => void 
}


const EditProcess = (props:Props) => {
    const {data,onBackBtnClickHnd,onUpdateBtnClickHnd} = props;
    
    const [ProcessName,setProcessName] = useState(data.ProcessName);
    const [InputMaterials,setInputMaterials] = useState(data.InputMaterials);
    const [Temerature,setTemerature] = useState(data.Temperature);
    const [OperationTime,setOperationTime] = useState(data.OperationTime);
    const[OutputProduct,setOutputProduct] = useState(data.OutputProduct);
    const[PreviousProcess,setPreviousProcess] = useState(data.PreviousProcess);

    const onProcessName = (e:any) => {
        setProcessName(e.target.value)
    }
    const onInputMaterialsChangeHnd = (e:any) => {
        setInputMaterials(e.target.value)
    }

    const onInputTemperatureChangeHnd = (e:any) => {
        setTemerature(e.target.value)
    }
    const onInputOperationTimeChangeHnd = (e:any) => {
        setOperationTime(e.target.value)
    }
    const onOutputProductChangeHnd = (e:any) => {
        setOutputProduct(e.target.value)
    };
    const onPreviousProcessChangeHnd = (e:any) => {
        setPreviousProcess(e.target.value)
    };

    const onSubmitBtnClickHand = (e:any) =>{
        e.preventDefault();
         const updatedData: IProcess ={
            dataProcess: data.dataProcess,
            ProcessName: ProcessName,
            InputMaterials: InputMaterials,
            Temperature: Temerature,
            OperationTime: OperationTime,
            OutputProduct: OutputProduct,
            PreviousProcess: PreviousProcess
        }
        onUpdateBtnClickHnd(updatedData);
        onBackBtnClickHnd();
    }

    return(
        <div className="form-container">
        <div>
            <h3>Add Process form</h3>
        </div>
        <form onSubmit={onSubmitBtnClickHand}>
             <div>
                <label>Process Name </label>
                <input type="text" value={ProcessName} onChange={onProcessName} />   
            </div>
            <div>
                <label>Input Materials </label>
                <input type="text" value={InputMaterials} onChange={onInputMaterialsChangeHnd} />   
            </div>
            <div>
                <label>Temperature [℃]</label>
                <input type="text" value={Temerature} onChange={onInputTemperatureChangeHnd}/>  
            </div>
            <div>
                <label>Operation Time [h]</label>
                <input type="text" value={OperationTime} onChange={onInputOperationTimeChangeHnd}/>  
            </div>
            <div>
                <label>OutputProduct </label>
                <input type="text" value={OutputProduct} onChange={onOutputProductChangeHnd}/>  
            </div>
            <div>
                <label>Previous Process </label>
                <input type="text" value={PreviousProcess} onChange={onPreviousProcessChangeHnd}/>  
            </div>
            <div>
                <input type="button" value="Back" onClick={onBackBtnClickHnd}/>
                <input type="submit" value="Update Process"/>  
            </div>
        </form>

    </div> 
    )
}

export default EditProcess