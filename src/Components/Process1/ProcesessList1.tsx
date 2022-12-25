import { useState } from 'react';
import { IProcess } from './Procesess.type1';
import '../../Assest/ProcesessList-style/procesesslist.css';
import ProcessModal from './ProcessModal1';

type Props = {
    list: IProcess[];
    onDeleteClickHnd:(data:IProcess) => void;
    onEdit:(data: IProcess ) => void;
};


const ProcesessList1 = (props: Props) =>{

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
                        <th className='columns'>Process Name </th>
                        <th className='columns'>Input Materials </th>
                        <th className='columns'>OperationTime [h] </th>
                        <th className='columns'>Temperature [℃] </th>
                        <th className='columns'>Output Product </th>
                        <th className='columns'>Previous Process </th>
                  
   
                    <th className='last-column'></th>
                </tr>
                {list.map(procesess=>{
                    return(
                    <tr key={procesess.dataProcess1} >
                        <td>{`${procesess.dataProcess1.slice(0,10)}`}</td>
                        <td>{`${procesess.ProcessName1}`}</td>
                        <td>{`${procesess.InputMaterials1}`}</td>
                        <td>{`${procesess.OperationTime1}`}</td>
                        <td>{`${procesess.Temperature1}`}</td>
                        <td>{`${procesess.OutputProduct1}`}</td>
                        <td>{`${procesess.PreviousProcess1}`}</td>
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

export default ProcesessList1;