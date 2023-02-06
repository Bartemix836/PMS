import { useState } from 'react';
import { IProcess } from './Procesess.type2';
import '../../../Assest/ProcesessList-style/procesesslist.css';
import ProcessModal from './ProcessModal2';


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
        <table>
            <tbody>
                <tr className='header-table'> 
                <th className='columns'>Data</th>
                    <th className='columns'>Process Name</th>
                    <th className='columns'>Input Materials</th>
                    <th className='columns'>OperationTime [h]</th>
                    <th className='columns'>Temperature [℃]</th>
                    <th className='columns'>Output Product</th>
                    <th className='columns'>Previous Process</th>
                    <th className='last-column'></th>
                </tr>
                {list.map(procesess=>{
                    return(
                    <tr key={procesess.dataProcess2} >
                        <td>{`${procesess.dataProcess2.slice(0,10)}`}</td>
                        <td>{`${procesess.ProcessName2}`}</td>
                        <td>{`${procesess.InputMaterials2}`}</td>
                        <td>{`${procesess.OperationTime2}`}</td>
                        <td>{`${procesess.Temperature2}`}</td>
                        <td>{`${procesess.OutputProduct2}`}</td>
                        <td>{`${procesess.PreviousProcess2}`}</td>
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