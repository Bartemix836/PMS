import { IProcess } from './Procesess.type2';
import "../../Assest/modal-style/ProcessModal.css";



type Props = {
    onClose:() => void;
    data:IProcess;
};

const ProcessModal = (props: Props) => {
    const {onClose,data} = props;  
    return (
    <div id="myModal" className="modal">
        <div className="modal-content">
            <span className="close" onClick={onClose}>
                &times;
            </span>
            <h3>Process data</h3>
            <div>
                
            <div className='details-label'>
                    <label><span>Data:</span> {data.dataProcess2.slice(0,10)}</label>
                </div>
                <div className='details-label'>
                    <label><span>Process Name:</span> {data.ProcessName2}</label>
                </div>
                <div className='details-label'>
                    <label><span>Input Materials:</span> {data.InputMaterials2}</label>
                </div>
                <div className='details-label'>
                    <label><span>Operation Time: </span>{data.OperationTime2}</label>
                </div>
                <div className='details-label'>
                    <label><span>Output Product:  </span>{data.OutputProduct2}</label>
                </div>
                <div className='details-label'>
                    <label><span>Temperature: </span>{data.Temperature2}</label>
                </div>
            </div>
        </div>
  </div>
    )
}

export default ProcessModal;