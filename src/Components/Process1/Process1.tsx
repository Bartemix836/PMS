import { useEffect, useState } from 'react';
import { IProcess, PageEnum } from './Procesess.type1';
import ProcesessList1 from './ProcesessList1';
import '../../Assest/home-style/home.css';
import AddProcess1 from './AddProcess1';
import EditProcess1 from './EditProcess1';


const FirstProcess = ()=>{
 const [ProcesessList, setProcesessList] = useState([] as IProcess[]);
 const [shownPage, setShownPage] = useState(PageEnum.list)
 const [datatoEdit, setDatatoEdit] = useState({} as IProcess);
  
 //saved data after refreshing 
 useEffect(()=>{
   const listInString = window.localStorage.getItem("ProcessList1")
    if(listInString){
        setProcesessList(JSON.parse(listInString));
    }
 },[]);

 const onAddProcess1ClickHnd = () =>{
    setShownPage(PageEnum.add)
 };
const showListPage = () =>{
    setShownPage(PageEnum.list)
}
 
const _setProcessList = (list:IProcess[]) =>{
    setProcesessList(list);
    window.localStorage.setItem("ProcessList1",JSON.stringify(list));
}


const addProcess1 = (data:IProcess) =>{
    _setProcessList([...ProcesessList,data]);
}
const deleteProcess = (data:IProcess)=>{
    // To index 
    const indexToDelete = ProcesessList.indexOf(data);
    const tempList = [...ProcesessList];

    tempList.splice(indexToDelete,1);
    _setProcessList(tempList)  // update list 
};
const editProcess1Data =(data: IProcess)=>{
    setShownPage(PageEnum.edit);
    setDatatoEdit(data)
}

const updateData =(data:IProcess) =>{
    const filteredData = ProcesessList.filter(x=> x.dataProcess1=== data.dataProcess1)[0];
    const indexofRecord = ProcesessList.indexOf(filteredData);
    const tempData = [...ProcesessList]
    tempData[indexofRecord] = data;
    _setProcessList(tempData)
}
 return (
    <> 
        <section className='section-content'>
            {shownPage === PageEnum.list &&(
                <>
                <input className="add-btn" type="button" value="Add Process" onClick={onAddProcess1ClickHnd}/>
                <ProcesessList1 list={ProcesessList} onDeleteClickHnd={deleteProcess} onEdit={editProcess1Data}/>
                </>
            )}

            {shownPage === PageEnum.add && <AddProcess1 onBackBtnClickHnd={showListPage} onSubmitClickHnd={addProcess1} />} 

            {shownPage === PageEnum.edit && <EditProcess1 data={datatoEdit} onBackBtnClickHnd ={showListPage} onUpdateBtnClickHnd={updateData}/> }
        </section>
    </>
  );   
};

export default FirstProcess;