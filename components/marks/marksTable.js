import React, { useState } from 'react';
import { css } from "@emotion/core";
import moment from "moment";
import Cookies from "js-cookie";
import Layout from "../../components/layout";
import ViewMarksEntry from "../../pages/allocated-cources/marks-entry-view";
import {
    getMarksByFacultyId,
    getMarksToViewByCourseId
} from "../../services/marksEntryServices";



const MarksTable = ({ marksData, examType }) => {

    const [isMarksView, setMarksView] = useState(false);
    const [studentMarks, setStudentMarks] = useState({});
    const [questionsInfo, setQuestionsInfo] = useState({});

    const uniqueTypes = [];
    marksData.filter(marks => marks.examType === examType).map(filteredMarks => (
        uniqueTypes.push(filteredMarks)
    ));

    const toggleMarksView = () => {
        setMarksView(true);
    };

    const closeMarksView = () => {
        setMarksView(false);
    };

    const openMarksViewData = (data) => {
        setStudentMarks(data);
        setQuestionsInfo(data);
        toggleMarksView();
    };

    return (

        <React.Fragment>

            {(uniqueTypes.length) > 0 ?
                <table
                    className="w-full block bg-white shadow-lg mb-4 border"
                    css={css`
                            position: relative;
                            top: -5px;
                          `}
                >
                    <tr className="block">
                        <th className="w-2/12 px-1 py-2 text-left">
                            Coure Code
                            </th>
                        <th className="w-2/12 px-1 py-2 text-left">
                            Coure Name
                            </th>
                        <th className="w-2/12 px-1 py-2 text-left">
                            Exam Type
                            </th>
                        <th className="w-1/12 px-1 py-2 text-left">
                            Exam Date
                            </th>
                        <th className="w-1/12 px-1 py-2 text-left">
                            Semester
                            </th>
                        <th className="w-1/12 px-1 py-2 text-left">
                            Section
                            </th>
                    </tr>

                    {uniqueTypes && uniqueTypes.map((x) => (

                        <tr className="block">
                            <React.Fragment>
                                <td className="border w-2/12 px-2 py-2 border-l-0 text-sm">
                                    {x?.courseCode}
                                </td>
                                <td className="border w-2/12 px-2 py-2 text-sm">
                                    {x?.courseName}
                                </td>
                                <td className="border w-1/12 px-2 py-2 text-sm">
                                    {x?.examType}
                                </td>
                                <td className="border w-2/12 px-2 py-2 text-sm">
                                    {moment(x?.examDate).format("hh:mm A")}
                                </td>
                                <td className="border w-1/12 px-2 py-2 text-sm">
                                    {x?.semester}
                                </td>
                                <td className="border w-1/12 px-2 py-2 text-sm">
                                    {x?.section}
                                </td>
                                <td className="border w-2/12 px-2 py-2 border-r-0 text-sm">
                                    <button
                                        type="button"
                                        className="bg-green-400 block  mx-auto px-2 py-1 rounded mb-2"
                                        onClick={() =>
                                            getMarksToViewByCourseId(
                                                x?.examScheduleID,
                                                x?.courseCode,
                                                x?.examTypeID
                                            ).then((data) => {
                                                openMarksViewData(data);
                                                console.log("dataaa", data);
                                            })
                                        }
                                    >
                                        View Marks
                                  </button>
                                    <button
                                        type="button"
                                        className="bg-yellow-400 block  mx-auto px-2 py-1 rounded"
                                    >
                                        Import/Export Data
                                  </button>
                                </td>
                            </React.Fragment>
                        </tr>

                    ))}
                </table>
                : <p className="w-full block bg-white shadow-lg mb-4 border text-center" > {examType} Exams are not scheduled yet.</p>}
            {isMarksView && (
                <ViewMarksEntry
                    closeMarksView={closeMarksView}
                    studentMarks={studentMarks?.MarksArray}
                    questions={questionsInfo?.questions}
                    courseCode={uniqueTypes[0]?.courseCode}
                    courseName={uniqueTypes[0]?.courseName}
                />
            )}
        </React.Fragment>
    )
}

export default MarksTable;