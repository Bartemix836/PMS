import { useEffect, useState } from "react";
import AddReport from "./AddReport";
import EditReport from "./EditReport";
import { IReport, PageEnum } from "./Report.type";
import Reports from "./ReportList";
// import "../../Assest/report-style/report.css";
import '../../Assest/home-style/home.css';

const Home = () => {
  const [ReportList, setReportList] = useState([] as IReport[]);
  const [shownPage, setShownPage] = useState(PageEnum.list);
  const [dataToEdit, setDataToEdit] = useState({} as IReport);

  useEffect(() => {
    const listInString = window.localStorage.getItem("ReportList");
    if (listInString) {
      _setReportList(JSON.parse(listInString));
    }
  }, []);

  const onAddReportClickHnd = () => {
    setShownPage(PageEnum.add);
  };

  const showListPage = () => {
    setShownPage(PageEnum.list);
  };

  const _setReportList = (list: IReport[]) => {
    setReportList(list);
    window.localStorage.setItem("ReportList", JSON.stringify(list));
  };

  const addReport = (data: IReport) => {
    _setReportList([...ReportList, data]);
  };

  const deleteReport = (data: IReport) => {
    // To Index from array i,e employeeList
    // Splice that
    // Update new record

    const indexToDelete = ReportList.indexOf(data);
    const tempList = [...ReportList];

    tempList.splice(indexToDelete, 1);
    _setReportList(tempList);
  };

  const editReportData = (data: IReport) => {
    setShownPage(PageEnum.edit);
    setDataToEdit(data);
  };

  const updateData = (data: IReport) => {
    const filteredData = ReportList.filter((x) => x.dataReport === data.dataReport)[0];
    const indexOfRecord = ReportList.indexOf(filteredData);
    const tempData = [...ReportList];
    tempData[indexOfRecord] = data;
    _setReportList(tempData);
  };

  return (
    <>

      <section className="section-content-report">
        {shownPage === PageEnum.list && (
          <>
            <input
              type="button"
              value="Add Report"
              onClick={onAddReportClickHnd}
              className="add-report-btn"
            />
            <Reports
              list={ReportList}
              onDeleteClickHnd={deleteReport}
              onEdit={editReportData}
            />
          </>
        )}

        {shownPage === PageEnum.add && (
          <AddReport
            onBackBtnClickHnd={showListPage}
            onSubmitClickHnd={addReport}
          />
        )}

        {shownPage === PageEnum.edit && (
          <EditReport
            data={dataToEdit}
            onBackBtnClickHnd={showListPage}
            onUpdateClickHnd={updateData}
          />
        )}
      </section>
    </>
  );
};

export default Home;