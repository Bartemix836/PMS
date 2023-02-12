import { useState } from "react";
import { IReport } from "./Report.type";
import "../../Assest/report-style/report.css";
import '../../Assest/style-index/index.css';
import '../../Assest/home-style/home.css';
import ReportModal from "./ReportModal";

type Props = {
  list: IReport[];
  onDeleteClickHnd: (data: IReport) => void;
  onEdit: (data: IReport) => void;
};

const Reports = (props: Props) => {
  const {list, onDeleteClickHnd, onEdit } = props;
  const [showModal, setShowModal] = useState(false);
  const [dataToShow, setDataToShow] = useState(null as IReport | null);

  const viewReport = (data: IReport) => {
    setDataToShow(data);
    setShowModal(true);
  };

  const onCloseModal = () => setShowModal(false);

  return (
    <div>
        <h1 className="ReportName">Report List</h1>
      <table>
        <tr className="header-table">
            <th className='columns'>Data</th>
            <th className='columns'>Product Name </th>
            <th className='columns'>Produced Quantity </th>
            <th className='columns'>Target </th>
            <th className='columns'>Waste</th>
            <th className='columns'>Shift</th>
            <th className='columns'>Leader</th>
            <th className='columns'>Notes</th>
        </tr>
        {list.map((report) => {
          return (
            <tr key={report.dataReport} >
                    <td>{`${report.dataReport.slice(0,10)}`}</td>
                    <td>{`${report.ProductName}`}</td>
                    <td>{`${report.ProducedQuantity}`}</td>
                    <td>{`${report.Target}`}</td>
                    <td>{`${report.Waste}`}</td>
                    <td>{`${report.Shift}`}</td>
                    <td>{`${report.Leader}`}</td>
                    <td>{`${report.Notes}`}</td>
                    <td>
                        <div className='buttons'>
                                <input className='ViewBtn' type="button" value="View" onClick={()=>viewReport(report)}/>
                                <input className='EditBtn' type="button" value="Edit" onClick={()=> onEdit(report)}/>
                                <input className='DeleteBtn' type="button" value="Delete" onClick={()=>onDeleteClickHnd(report)}/>
                        </div>
                    </td>
            </tr>
          );
        })}
      </table>
      {showModal && dataToShow !== null && (
        <ReportModal onClose={onCloseModal} data={dataToShow} />
      )}
    </div>
  );
};
export default Reports;