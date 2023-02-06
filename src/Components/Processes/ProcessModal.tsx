import { IProcess } from './Procesess.type';
import "../Assest/modal-style/ProcessModal.css";



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
                
                <div>
                    <label>Data: {data.dataProcess.slice(0,10)}</label>
                </div>
                <div>
                    <label>Process Name {data.ProcessName}</label>
                </div>
                <div>
                    <label>Input Materials: {data.InputMaterials}</label>
                </div>
                <div>
                    <label>Operation Time: {data.OperationTime}</label>
                </div>
                <div>
                    <label>Output Product {data.OutputProduct}</label>
                </div>
                <div>
                    <label>Temperature: {data.Temperature}</label>
                </div>
            </div>
        </div>
  </div>
    )
}

export default ProcessModal;