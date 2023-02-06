import { useState } from 'react';
import { IProcess } from "./Procesess.type2";
import "../../../Assest/ProcessForm-style/ProcessForm.css";


type Props ={
    data:IProcess;
    onBackBtnClickHnd: () => void;
    onUpdateBtnClickHnd: (data:IProcess) => void 
}


const EditProcess = (props:Props) => {
    const {data,onBackBtnClickHnd,onUpdateBtnClickHnd} = props;
    
    const [ProcessName,setProcessName] = useState(data.ProcessName2);
    const [InputMaterials,setInputMaterials] = useState(data.InputMaterials2);
    const [Temerature,setTemerature] = useState(data.Temperature2);
    const [OperationTime,setOperationTime] = useState(data.OperationTime2);
    const[OutputProduct,setOutputProduct] = useState(data.OutputProduct2);
    const[PreviousProcess,setPreviousProcess] = useState(data.PreviousProcess2);

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
            dataProcess2: data.dataProcess2,
            ProcessName2: ProcessName,
            InputMaterials2: InputMaterials,
            Temperature2: Temerature,
            OperationTime2: OperationTime,
            OutputProduct2: OutputProduct,
            PreviousProcess2: PreviousProcess
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