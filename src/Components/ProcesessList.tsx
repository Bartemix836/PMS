import '../Assest/ProcesessList-style/procesesslist.css';
import { IProcess } from './Procesess.type';


type Props = {
    list: IProcess[]
}


const ProcesessList = (props: Props) =>{

    const {list} = props;
    return (
    <div>
        <table>
                <tr>
                    <th>IdProcess</th>
                    <th>InputMaterials</th>
                    <th>OperationTime</th>
                    <th>Temperature</th>
                    <th>OutputProduct</th>
                    <th>Actions</th>
                </tr>
                {list.map(procesess=>{
                    return(
                    <tr key={procesess.IdProcess} >
                        <td>{`${procesess.IdProcess.slice(0,10)}`}</td>
                        <td>{`${procesess.InputMaterials}`}</td>
                        <td>{`${procesess.OperationTime}`}</td>
                        <td>{`${procesess.Temperature}`}</td>
                        <td>{`${procesess.OutputProduct}`}</td>
                        <td>
                            <div>
                                <input type="button" value="View" />
                                <input type="button" value="Edit" />
                                <input type="button" value="Delete"/>
                            </div>
                        </td>
                    </tr>
                    ); 
                })}
        
        </table>    
    </div>);
}

export default ProcesessList;