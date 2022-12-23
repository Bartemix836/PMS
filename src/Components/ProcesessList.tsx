import { useState } from 'react';
import { IProcess } from './Procesess.type';
import '../Assest/ProcesessList-style/procesesslist.css';
import ProcessModal from './ProcessModal';


type Props = {
    list: IProcess[];
    onDeleteClickHnd:(data:IProcess) => void;
    onEdit:(data: IProcess ) => void;
};


const ProcesessList = (props: Props) =>{

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
            <h3 className='list-header'>Process Flow </h3>
        </div>
        <table>
            <tbody>
                <tr className='header-table'> 
                    <th>Data</th>
                    <th>Process Name</th>
                    <th>Input Materials</th>
                    <th>OperationTime [h]</th>
                    <th>Temperature [℃]</th>
                    <th>Output Product</th>
                    <th>Previous Process</th>
                    <th className='last-column'></th>
                </tr>
                {list.map(procesess=>{
                    return(
                    <tr key={procesess.dataProcess} >
                        <td>{`${procesess.dataProcess.slice(0,10)}`}</td>
                        <td>{`${procesess.ProcessName}`}</td>
                        <td>{`${procesess.InputMaterials}`}</td>
                        <td>{`${procesess.OperationTime}`}</td>
                        <td>{`${procesess.Temperature}`}</td>
                        <td>{`${procesess.OutputProduct}`}</td>
                        <td>{`${procesess.PreviousProcess}`}</td>
                        <td>
                            <div className='buttons'>
                                <input className='ViewBtn' type="button" value="View" onClick={()=>viewProcess(procesess)}/>
                                <input className='EditBtn' type="button" value="Edit" onClick={()=> onEdit(procesess)}/>
                                <input className='DeleteBtn' type="button" value="Delete" onClick={()=>onDeleteClickHnd(procesess)}/>
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

export default ProcesessList;