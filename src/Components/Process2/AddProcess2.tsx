
import { useState } from "react";
import "../../Assest/ProcessForm-style/ProcessForm.css";
import { IProcess } from "./Procesess.type2";


type Props = {
    onBackBtnClickHnd: () => void;
    onSubmitClickHnd:(data:IProcess) => void
};

const AddProcess2 = (props: Props)=> { 
    const [ProcessName,setProcessName] = useState("")
    const [InputMaterials,setInputMaterials] = useState("")
    const [Temerature,setTemerature] = useState("")
    const [OperationTime,setOperationTime] = useState("")
    const[OutputProduct,setOutputProduct] = useState(" ")
    const[PreviousProcess,setPreviousProcess] = useState(" ")
    const {onBackBtnClickHnd, onSubmitClickHnd} = props;

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
         const data: IProcess ={
            ProcessName2: ProcessName,
            dataProcess2: new Date().toJSON().toString(),
            InputMaterials2: InputMaterials,
            Temperature2: Temerature,
            OperationTime2: OperationTime,
            OutputProduct2: OutputProduct,
            PreviousProcess2: PreviousProcess
        }
        onSubmitClickHnd(data);
        onBackBtnClickHnd();
    }
    
    return ( 
        
        <div className="form-container">
            <div>
                <h3>Add Process form</h3>
            </div>
            <form onSubmit={onSubmitBtnClickHand}>
                 <div>
                    <label> Process Name </label>
                    <input type="text" value={ProcessName} onChange={onProcessName} />   
                </div>
                <div>
                    <label>Input Materials </label>
                    <input type="text" value={InputMaterials} onChange={onInputMaterialsChangeHnd} />   
                </div>
                <div>
                    <label>Temperature [℃] </label>
                    <input type="text" value={Temerature} onChange={onInputTemperatureChangeHnd}/>  
                </div>
                <div>
                    <label>Operation Time [h] </label>
                    <input type="text" value={OperationTime} onChange={onInputOperationTimeChangeHnd}/>  
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

export default AddProcess2;