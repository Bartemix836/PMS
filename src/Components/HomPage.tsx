import { useEffect, useState } from 'react';
import { IProcess, PageEnum } from './Procesess.type';
import ProcesessList1 from './ProcesessList';
import '../Assest/home-style/home.css';
import AddProcess from './AddProcess';
import EditProcess from './EditProcess';

const Home = ()=>{
 const [ProcesessList, setProcesessList] = useState([] as IProcess[]);
 const [shownPage, setShownPage] = useState(PageEnum.list)
 const [datatoEdit, setDatatoEdit] = useState({} as IProcess);
  
 //saved data after refreshing 
 useEffect(()=>{
   const listInString = window.localStorage.getItem("ProcessList")
    if(listInString){
        setProcesessList(JSON.parse(listInString));
    }
 },[]);

 const onAddProcessClickHnd = () =>{
    setShownPage(PageEnum.add)
 };
const showListPage = () =>{
    setShownPage(PageEnum.list)
}
 
const _setProcessList = (list:IProcess[]) =>{
    setProcesessList(list);
    window.localStorage.setItem("ProcessList",JSON.stringify(list));
}


const addProcess = (data:IProcess) =>{
    _setProcessList([...ProcesessList,data]);
}
const deleteProcess = (data:IProcess)=>{
    // To index 
    const indexToDelete = ProcesessList.indexOf(data);
    const tempList = [...ProcesessList];

    tempList.splice(indexToDelete,1);
    _setProcessList(tempList)  // update list 
};
const editProcessData =(data: IProcess)=>{
    setShownPage(PageEnum.edit);
    setDatatoEdit(data)
}

const updateData =(data:IProcess) =>{
    const filteredData = ProcesessList.filter(x=> x.dataProcess=== data.dataProcess)[0];
    const indexofRecord = ProcesessList.indexOf(filteredData);
    const tempData = [...ProcesessList]
    tempData[indexofRecord] = data;
    _setProcessList(tempData)
}
 return (
    <>
        <article className="article-header">
            <header>
                <h1> Production System Management</h1>
            </header>
        </article>
        
        <section className='section-content'>
            {shownPage === PageEnum.list &&(
                <>
                <input className="add-btn" type="button" value="Add Process" onClick={onAddProcessClickHnd}/>
                <ProcesessList1 list={ProcesessList} onDeleteClickHnd={deleteProcess} onEdit={editProcessData}/>
                </>
            )}

            {shownPage === PageEnum.add && <AddProcess onBackBtnClickHnd={showListPage} onSubmitClickHnd={addProcess} />} 

            {shownPage === PageEnum.edit && <EditProcess data={datatoEdit} onBackBtnClickHnd ={showListPage} onUpdateBtnClickHnd={updateData}/> }
        </section>
    </>
  );   
}

export default Home;