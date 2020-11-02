import React, { useEffect, useState } from 'react';
import * as TABLE from "../../components/dashboards/styles/table.styles";
import PulseLoader from "react-spinners/PulseLoader";
import { getSyllabusData } from "../../services/courceCoordinatorAllocationService";

const Syllabus = ({ courseData }) => {

    const [syllabusData, setSyllabusData] = useState([]);

    const loadSyllabusData = async (courseCode, courseCoordintorId) => {
        const sylbusData = await getSyllabusData(courseCode, courseCoordintorId);
        setSyllabusData(sylbusData?.UnitTopic);
    };

    useEffect(() => {
        loadSyllabusData(courseData.coursecode, courseData.coordinatorId);
    }, []);

    return (
        <React.Fragment>

            <TABLE.TableWrapper>
                <TABLE.TableTR>
                    <TABLE.TableTh>Course Code</TABLE.TableTh>
                    <TABLE.TableTh>Course Name</TABLE.TableTh>
                    <TABLE.TableTh>Unit</TABLE.TableTh>
                    <TABLE.TableTh>Topic</TABLE.TableTh>
                </TABLE.TableTR>

                {!syllabusData && <PulseLoader size="10" color="#3aafa9" />}

                {syllabusData &&
                    syllabusData.length &&
                    syllabusData.map((syllbus) => (
                        <TABLE.TableTRR key={syllbus?.unittopicId}>
                            <TABLE.TableTdd>{syllbus?.coursecode}</TABLE.TableTdd>
                            <TABLE.TableTdd>{syllbus?.coursecode}</TABLE.TableTdd>
                            <TABLE.TableTdd>{syllbus.topic}</TABLE.TableTdd>
                            <TABLE.TableTdd>{syllbus.unit}</TABLE.TableTdd>
                        </TABLE.TableTRR>
                    ))}

            </TABLE.TableWrapper>
        </React.Fragment>
    );
}

export default Syllabus;