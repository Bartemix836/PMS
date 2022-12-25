import { useEffect, useState } from 'react';
import { IProcess, PageEnum } from './Procesess.type2';
import ProcesessList2 from './ProcesessList2';
import AddProcess2 from './AddProcess2';
import EditProcess2 from './EditProcess2';

const SecondProcess = ()=>{
 const [ProcesessList, setProcesessList] = useState([] as IProcess[]);
 const [shownPage, setShownPage] = useState(PageEnum.list)
 const [datatoEdit, setDatatoEdit] = useState({} as IProcess);
  
 //saved data after refreshing 
 useEffect(()=>{
   const listInString = window.localStorage.getItem("ProcessList2")
    if(listInString){
        setProcesessList(JSON.parse(listInString));
    }
 },[]);

 const onAddProcess2ClickHnd = () =>{
    setShownPage(PageEnum.add)
 };
const showListPage = () =>{
    setShownPage(PageEnum.list)
}
 
const _setProcessList = (list:IProcess[]) =>{
    setProcesessList(list);
    window.localStorage.setItem("ProcessList2",JSON.stringify(list));
}


const addProcess2 = (data:IProcess) =>{
    _setProcessList([...ProcesessList,data]);
}
const deleteProcess = (data:IProcess)=>{
    // To index 
    const indexToDelete = ProcesessList.indexOf(data);
    const tempList = [...ProcesessList];

    tempList.splice(indexToDelete,1);
    _setProcessList(tempList)  // update list 
};
const editProcess2Data =(data: IProcess)=>{
    setShownPage(PageEnum.edit);
    setDatatoEdit(data)
}

const updateData =(data:IProcess) =>{
    const filteredData = ProcesessList.filter(x=> x.dataProcess2=== data.dataProcess2)[0];
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
                <input className="add-btn" type="button" value="Add Process" onClick={onAddProcess2ClickHnd}/>
                <ProcesessList2 list={ProcesessList} onDeleteClickHnd={deleteProcess} onEdit={editProcess2Data}/>
                </>
            )}

            {shownPage === PageEnum.add && <AddProcess2 onBackBtnClickHnd={showListPage} onSubmitClickHnd={addProcess2} />} 

            {shownPage === PageEnum.edit && <EditProcess2 data={datatoEdit} onBackBtnClickHnd ={showListPage} onUpdateBtnClickHnd={updateData}/> }
        </section>
    </>
  );   
}

export default SecondProcess;