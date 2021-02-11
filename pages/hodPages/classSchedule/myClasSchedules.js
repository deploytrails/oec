import React, { useState, useEffect } from "react";
import Layout from "../../../components/layout";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { getClassSchedule } from "../../../services/hodServices/classSchedulesService";
import css from "@emotion/css";
import Cookies from "js-cookie";

import "react-big-calendar/lib/css/react-big-calendar.css";
const MyClasSchedules = () => {
  const localizer = momentLocalizer(moment);
  const ProfileId = Cookies.get("employeeID");
  const [events, setEvents] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [popupData, setPopupData] = useState({});

  const [calShow, setCalShow] = useState(false);

  const generateRandomColor = () => {
    var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
  };

  const loadClassScheduleData = async () => {
    const cData = await getClassSchedule(ProfileId);
    console.log(cData);
    if (cData) {
      //Defining dynamic color for the subjects based on the subject code
      var bgColorArray = [];
      var colorItemsProcessed = 0;
      cData?.subjectDetailsArray.forEach((item) => {
        colorItemsProcessed++;
        let colorEvent = {
          title: item.subjectCode,
          color: generateRandomColor(),
        };
        bgColorArray = [...bgColorArray, colorEvent];
        if (colorItemsProcessed === cData?.subjectDetailsArray.length) {
          setSubjects(bgColorArray);
          setCalShow(true);
        }
      });
      //defining events for calander
      var itemsArray = [];
      var itemsProcessed = 0;
      cData?.timeTableDetails.forEach((item) => {
        itemsProcessed++;
        let newEvent = {
          title: item[0],
          allDay: false,
          start: moment(
            item[5].substring(0, 10) + " " + item[6].substring(10)
          ).toDate(),
          end: moment(
            item[5].substring(0, 10) + " " + item[7].substring(10)
          ).toDate(),
          subject: item[2],
          room: item[3],
          section: item[4],
        };
        itemsArray = [...itemsArray, newEvent];
        if (itemsProcessed === cData?.timeTableDetails.length) {
          setEvents(itemsArray);
          console.log(itemsArray);
          setCalShow(true);
        }
      });
    }
  };

  useEffect(() => {
    loadClassScheduleData();
  }, []);
  return (
    <React.Fragment>
      <Layout>
        <div class={popupData?.subject ? "grid grid-cols-3 gap-4" : ""}>
          <div class={popupData?.subject ? "col-span-2" : ""}>
            {" "}
            {calShow && (
              <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
                eventPropGetter={(event) => {
                  const eventData = subjects.find(
                    (ot) => ot.title === event.title
                  );

                  const backgroundColor = eventData?.color;

                  return { style: { backgroundColor } };
                }}
                onSelectEvent={(event) => setPopupData(event)}
              />
            )}
          </div>
          {popupData?.subject && (
            <div class="shadow-2xl bg-green-100 rounded-md">
              <div
                css={css`
                  margin: 30px;
                `}
              >
                <div class="font-normal text-3xl text-black-600">
                  Selected Period
                </div>
                <div class="divide-y-2">
                  <div class="grid grid-cols-2 font-normal text-2xl text-purple-600 py-3">
                    <div class="text-left">Subject:</div>
                    <div class="text-left">{popupData?.subject}</div>
                  </div>
                  <div class="grid grid-cols-2 font-normal text-2xl text-purple-600 py-3">
                    <div class="text-left">Room:</div>
                    <div class="text-left">{popupData?.room}</div>
                  </div>
                  <div class="grid grid-cols-2 font-normal text-2xl text-purple-600 py-3">
                    <div class="text-left">Semeter & Section:</div>
                    <div class="text-left">{popupData?.section}</div>
                  </div>
                  <div class="grid grid-cols-2 font-normal text-2xl text-purple-600 py-3">
                    <div class="text-left">Start Time:</div>
                    <div class="text-left">
                      {moment(popupData?.start).format("hh:mm A")}
                    </div>
                  </div>
                  <div class="grid grid-cols-2 font-normal text-2xl text-purple-600 py-3">
                    <div class="text-left">End Time:</div>
                    <div class="text-left">
                      {moment(popupData?.end).format("hh:mm A")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </Layout>
    </React.Fragment>
  );
};

export default MyClasSchedules;
