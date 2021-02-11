import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout";
import Cookies, { set } from "js-cookie";
import { COLORS } from "../../../constants";
import css from "@emotion/css";
import { Formik } from "formik";
import * as TABLE from "../../../components/dashboards/styles/table.styles";
import { getClassScheduleData } from "../../../services/classScheduleService";
import { getClassScheduleDataDayWise } from "../../../services/classScheduleService";
import { getDeptFacultyDataForTimeTable } from "../../../services/reportsService";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const FacTimeTable = () => {
  const [facData, setFacData] = useState([]);
  const [classScheduleData, setClassScheduleData] = useState([]);
  const deptId = Cookies.get("departId");
  const [facId, setFacId] = useState();
  const [submitting, setSubmitting] = useState(true);

  const loadFacData = async () => {
    const data = await getDeptFacultyDataForTimeTable(deptId);
    setFacData(data.facultyDetails);
  };
  useEffect(() => {
    loadFacData();
  }, []);
  const getClassSchedule = async (facId) => {
    const data = await getClassScheduleData(facId);
    console.log(data);
    setClassScheduleData(data);
  };
  const getClassScheduleDayWise = async (startdate) => {
    const data = await getClassScheduleDataDayWise(facId, startdate);
    setClassScheduleData(data);
  };
  const periodList = (period, classday) => {
    let timetabledata = classScheduleData?.facTimeTableDetails?.timetabledata;

    for (let timedat of timetabledata) {
      if (
        timedat.length == 1 &&
        timedat[0][22].includes(period) &&
        timedat[0][5].includes(classday)
      ) {
        return (
          timedat[0][2] +
          "-" +
          timedat[0][4] +
          "-" +
          timedat[0][6] +
          "-" +
          timedat[0][22]
        );
      }
    }
  };
  const timeconvert = (date) => {
    let time = new Date(date);
    let hours = time.getHours() > 12 ? time.getHours() - 12 : time.getHours();
    let am_pm = time.getHours() >= 12 ? "PM" : "AM";
    hours = hours < 10 ? "0" + hours : hours;
    let minutes =
      time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
    time = hours + ":" + minutes + " " + am_pm;
    return time;
  };

  const handleChange = (e) => {
    
    for (let i = 0; i < facData.length; i++) {
      if (facData[i].facultyNumber == e.target.value) {
        setFacId(facData[i].facultyId);
        getClassSchedule(facData[i].facultyId).then(setSubmitting(false));
      }
    }
  };
  const handleClick = (e) => {
    html2canvas(document.querySelector("#capture")).then((canvas) => {
      document.body.appendChild(canvas);
      const imgData = canvas.toDataURL("image/png");
      // const pdf = new jsPDF('landscape');

      const pdf = new jsPDF({
        orientation: "landscape",
      });
      pdf.text(
        70,
        10,
        "Annamacharya Institue of Technology & Sciences:: Rajampet"
      );
      pdf.text(110, 18, "(An Autonomous Institution)");
      pdf.text(100, 25, "Faculty Week Wise Time Table");
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.text("Hi How are you", 40, 250, "center");
      pdf.addImage(imgData, "PNG", 0, 30, pdfWidth, pdfHeight - 100);
      // const imgProps= pdf.getImageProperties(imgData);
      // const pdfWidth = pdf.internal.pageSize.getWidth();
      // const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      // pdf.addImage(imgData, 'PNG', 0, 0,200,150);
      pdf.save(facId + "Faculty_timetablereport.pdf");
    });
  };
  return (
    <React.Fragment>
      <Layout>
        <div>
          Faculty Time Table Report
          <Formik></Formik>
          <div>
            <label
              htmlFor="facutyNo"
              css={css`
                font-size: 14px;
                display: block;
                color: ${COLORS.BLACK};
                .errorBorder {
                  border-color: ${COLORS.RED};
                }
              `}
            >
              <b> Faculty Number</b>
              <input
                css={css`
                  display: block;
                  width: 20%;
                  height: 42px;
                  padding: 0px 10px;
                  margin-bottom: 0px;
                  box-sizing: border-box;
                  font-family: "Open Sans", sans-serif;
                  border: 1px solid ${COLORS.GRAY_DARK};
                  -webkit-border-radius: 4px;
                  -moz-border-radius: 4px;
                  -ms-border-radius: 4px;
                  border-radius: 4px;
                  font-size: 14px;
                  &:focus {
                    outline: none;
                  }
                `}
                required
                type="text"
                minLength="10"
                maxLength="10"
                name="facultyNo"
                placeholder="Faculty Number"
                onChange={(e) => handleChange(e)}
              />
            </label>
          </div>
        </div>
        <div>
          {/* <Formik
            initialValues={{
              classDate: "",
            }}
          >
            {({ values, errors, touched, handleBlur }) => (
              <form>
                <div
                  className="text-sm font-sans"
                  css={css`
                    & > p {
                      display: block;
                      //margin-right: 10px;
                    }
                    & > p > span {
                      float: right;
                      width: 35%;
                      color: ${COLORS.BLACK};
                    }
                    & > p > span > svg {
                      margin-right: 4px;
                    }
                  `}
                >
                  <p>
                    <span>
                      <input
                        type="date"
                        name="classdate"
                        onChange={(e) =>
                          getClassScheduleDayWise(e.target.value)
                        }
                        onBlur={handleBlur}
                        placeholder="Class Date"
                        value={values.classdate}
                        className="block w-5/12 text-black py-2 px-4 box-border  float-right mt-4 rounded shadow focus: outline-none"
                        css={
                          errors.classdate &&
                          touched.classdate &&
                          errors.classdate &&
                          css`
                            border: 1px solid ${COLORS.RED};
                          `
                        }
                      />
                      <div
                        css={css`
                          position: absolute;
                          right: 10px;
                          top: 70px;
                          font-size: 14px;
                          color: ${COLORS.RED_DARKER};
                        `}
                      >
                        {errors.classdate &&
                          touched.classdate &&
                          errors.classdate}
                      </div>
                    </span>
                  </p>
                </div>
              </form>
            )}
          </Formik> */}

          <button
            type="button"
            className="bg-green-400 block  mx-auto px-2 py-1 rounded mb-2"
            disabled={submitting}
            onClick={(e) => handleClick(e)}
          >
            Download Faculty Timetable Report
          </button>

          <div className="clearfix px-2 pb-2"></div>
          <div className="clearfix pb-6" id="capture">
            <TABLE.TableWrapper>
              <TABLE.TableTR>
                {/* <TABLE.TableTh>Day</TABLE.TableTh> */}
                {classScheduleData &&
                  classScheduleData?.facTimeTableDetails?.totalperiods.map(
                    (period, index) => (
                      <TABLE.TableTh key={index}>
                        {period[3]}--{timeconvert(period[1])} --{" "}
                        {timeconvert(period[2])}
                      </TABLE.TableTh>
                    )
                  )}
              </TABLE.TableTR>

              {classScheduleData?.facTimeTableDetails?.dayDate.map(
                (classday, index) => (
                  <TABLE.TableTRR key={index}>
                    <TABLE.TableTdd>{classday}</TABLE.TableTdd>
                    {classScheduleData?.facTimeTableDetails?.totalperiods.map(
                      (period, index) => (
                        <TABLE.TableTdd key={index}>
                          {periodList(period[3], classday)}
                        </TABLE.TableTdd>
                      )
                    )}
                  </TABLE.TableTRR>
                )
              )}
            </TABLE.TableWrapper>
          </div>
        </div>
        ;
      </Layout>
    </React.Fragment>
  );
};

export default FacTimeTable;
