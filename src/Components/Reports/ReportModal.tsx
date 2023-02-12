import { IReport } from "./Report.type";
import "../../Assest/modal-style/ProcessModal.css";

type Props = {
  onClose: () => void;
  data: IReport;
};

const EmployeeModal = (props: Props) => {
  const { onClose, data } = props;
  
  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h3>Report Data</h3>
        <div>  

                <div className='details-label'>
                    <label><span>Report Data:</span>{data.dataReport.slice(0,10)}</label>
                </div>
                <div className='details-label'>
                    <label><span>Product Name:</span> {data.ProductName}</label>
                </div>
                <div className='details-label'>
                    <label><span>Produced Quantity:</span> {data.ProducedQuantity}</label>
                </div>
                <div className='details-label'>
                    <label><span>Target: </span>{data.Target}</label>
                </div>
                <div className='details-label'>
                    <label><span>Waste:  </span>{data.Waste}</label>
                </div>
                <div className='details-label'>
                    <label><span>Shift: </span>{data.Shift}</label>
                </div>
                <div className='details-label'>
                    <label><span>Leader: </span>{data.Leader}</label>
                </div>
                <div className='details-label'>
                    <label><span>Notes: </span>{data.Notes}</label>
                </div>
            </div>
      </div>
    </div>
    
  );
  
};

export default EmployeeModal;