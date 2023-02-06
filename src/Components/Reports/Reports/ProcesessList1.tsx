import { useState } from 'react';
import { IProcess } from './Procesess.type1';
import '../../../Assest/reportsList-style/reportslist.css';
import ProcessModal from './ProcessModal1';

type Props = {
    list: IProcess[];
    onDeleteClickHnd:(data:IProcess) => void;
    onEdit:(data: IProcess ) => void;
};


const reportsList1 = (props: Props) =>{

    const {list, onDeleteClickHnd, onEdit} = props;
    const [showModal,  setShowModal] = useState(false);
    const [dataToShow, setDataToShow] = useState(null as IProcess | null);

    const viewProcess = (data: IProcess) => {
        setDataToShow(data);
        setShowModal(true);
    };
    const onCloseModal = () => setShowModal(false);
    
    return (
    <div>
        <div>
            {/* <h3 className='list-header'></h3> */}
        </div>
        <table>
            <tbody>
                <tr className='header-table'> 
                    
                        <th className='columns'>Data</th>
                        <th className='columns'>Product Name </th>
                        <th className='columns'>Produced Quantity </th>
                        <th className='columns'>Target </th>
                        <th className='columns'>Waste</th>
                        <th className='columns'>Shift</th>
                        <th className='columns'>Leader</th>
                        <th className='columns'>Leader</th>
   
                    <th className='last-column'></th>
                </tr>
                {list.map(reports=>{
                    return(
                    <tr key={reports.dataProcess1} >
                        <td>{`${reports.dataProcess1.slice(0,10)}`}</td>
                        <td>{`${reports.ProcessName1}`}</td>
                        <td>{`${reports.InputMaterials1}`}</td>
                        <td>{`${reports.OperationTime1}`}</td>
                        <td>{`${reports.Temperature1}`}</td>
                        <td>{`${reports.OutputProduct1}`}</td>
                        <td>{`${reports.PreviousProcess1}`}</td>
                        <td>
                            <div className='buttons'>
                                <input className='ViewBtn' type="button" value="View" onClick={()=>viewProcess(reports)}/>
                                <input className='EditBtn' type="button" value="Edit" onClick={()=> onEdit(reports)}/>
                                <input className='DeleteBtn' type="button" value="Delete" onClick={()=>onDeleteClickHnd(reports)}/>
                            </div>
                        </td>
                    </tr>
                    ); 
                })}
            </tbody>
        </table>
        {showModal && dataToShow !== null && (
        <ProcessModal onClose={onCloseModal} data={dataToShow} />
      )}
    </div>
    );
}

export default reportsList1;