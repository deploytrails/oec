import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import moment from "moment";
import Layout from "../../components/layout";
import {
  getAttendanceList,
  getAttendanceListById,
} from "../../services/allocateServices";

const Attendance = () => {
  const [attendance, setIsAttendance] = useState({});
  const [todaysDate] = useState(new Date());
  const [dates, setDates] = useState([]);
  const ProfileId = Cookies.get("employeeID");
  const selectedDate = new Date();
  const operationData = "Initial";

  console.log("selectedDate", selectedDate);

  const getAllAttendance = async () => {
    const data = await getAttendanceList(
      ProfileId,
      selectedDate,
      operationData
    );
    setDates(data?.weeklyDates);
    console.log("data", data);
    return data;
  };

  let operation = "forSwapData";
  const getAllAttendanceById = async () => {
    const data = await getAttendanceListById(ProfileId, operation);
    setIsAttendance(data);
    console.log("data", data);
  };

  useEffect(() => {
    getAllAttendance();
    getAllAttendanceById();
  }, []);

  return (
    <React.Fragment>
      <Layout>
        <div className="h-full bg-white p-4">
          <div>
            <h3 className="inline-block text-2xl">
              Schedule on {moment(todaysDate).format("DD/MM/YYYY")}{" "}
            </h3>
          </div>
          <div>
            {dates &&
              dates.map((date) => (
                <div key={date} className="clearfix">
                  <h4 className="w-6/12 float-left">Date:{date}</h4>{" "}
                  <p className="w-6/12 float-right">View Class</p>
                </div>
              ))}
          </div>
        </div>
      </Layout>
    </React.Fragment>
  );
};

export default Attendance;
