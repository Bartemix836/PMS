import { useState } from 'react';
import { dummyProcesessList, IProcess, PageEnum } from './Procesess.type';
import ProcesessList1 from './ProcesessList';
import '../Assest/home-style/home.css';
import AddProcess from './AddProcess';

const Home = ()=>{
const [ProcesessList, setProcesessList] = useState(
    dummyProcesessList as IProcess[]
    );
 const [shownPage, setShownPage] = useState(PageEnum.list)

 const onAddProcessClickHnd = () =>{
    setShownPage(PageEnum.add)
 };
const showListPage = () =>{
    setShownPage(PageEnum.list)
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
                <input type="button" value="Add Process" onClick={onAddProcessClickHnd}/>
                <ProcesessList1 list={ProcesessList}/>
                </>
            )}

            {shownPage === PageEnum.add && <AddProcess onBackBtnClickHnd={showListPage}/> }
        </section>
 </>
 );   
}

export default Home;