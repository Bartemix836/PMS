import { IProcess } from './Procesess.type1';
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
            <h3>Process Detais:</h3>
            <div>
                
                <div className='details-label'>
                    <label><span>Data:</span> {data.dataProcess1.slice(0,10)}</label>
                </div>
                <div className='details-label'>
                    <label><span>Process Name:</span> {data.ProcessName1}</label>
                </div>
                <div className='details-label'>
                    <label><span>Input Materials:</span> {data.InputMaterials1}</label>
                </div>
                <div className='details-label'>
                    <label><span>Operation Time: </span>{data.OperationTime1}</label>
                </div>
                <div className='details-label'>
                    <label><span>Output Product:  </span>{data.OutputProduct1}</label>
                </div>
                <div className='details-label'>
                    <label><span>Temperature: </span>{data.Temperature1}</label>
                </div>
            </div>
        </div>
  </div>
    )
}

export default ProcessModal;