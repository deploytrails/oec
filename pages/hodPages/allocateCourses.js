import React, { useState,useEffect } from "react";
import Layout from "../../components/layout";
import {
  getAcadProgrmFacultyData,
  getSemsterData,
  getSectionsData,
  getCoursesData,
  getSubjExpData,
  getFacultyCoursesData,
  insertAllocateCouse
} from "../../services/hodServices/allocateCoursesService";
import Cookies from "js-cookie";

import TableWrap from "../../components/TableUtilities/TableWrap";
import {Formik,Form} from 'formik';
import FormikControl from "../../components/General/FormikControl";


const AllocateCourses = () => {
  const ProfileId = Cookies.get("employeeID");
  const [isDepartmentData, setIsDepartmentData] = useState([]);
  const [isAcademicYearData, setIsAcademicYearData] = useState([]);
  const [isFacultyData, setIsFacultyData] = useState([]);
  const [isSecondaryFacultyData, setIsSecondaryFacultyData] = useState([]);
  const [isTertiaryFacultyData, setIsTertiaryFacultyData] = useState([]);
  const [isQuaternaryFacultyData, setIsQuaternaryFacultyData] = useState([]);
  const [isSemesterData, setIsSemesterData] = useState([]);
  const [isSectionsData, setIsSectionsData] = useState([]);
  const [isCoursesData, setIsCoursesData] = useState([]);
  const [isFacultyCoursesData, setIsFacultyCoursesData] = useState([]);
  const [isSubjectExpData,setIsSubjectExpData] = useState([]);
  const [isDesignationData,setIsDesignationData] = useState([]);

  const loadAcadProgrmFacultyData = async () => {
    const cData = await getAcadProgrmFacultyData('64D1E79A8B6B11E98B0957863D7CDB1C');
    let acdyearOptions = [];
     cData?.academicDetailsArray.forEach(acadYear => {
      acdyearOptions.push({
        value:acadYear.academicID,
        key:acadYear.academicYear
      })
      });
    setIsAcademicYearData(acdyearOptions);
    console.log(acdyearOptions);
    let departOptions = [];
    cData?.departmentDetailsArray.forEach(department => {
      departOptions.push({
        value:department.departmentID,
        key:department.departmentCode+"-"+department.departmentName
      })
      });
    setIsDepartmentData(departOptions);
    console.log(departOptions);
    let facultyOptions = [];
    cData?.facultyDetailsArray.forEach(faculty => {
      facultyOptions.push({
        value:faculty.employeeID,
        key:faculty.employeeName,
        designation:faculty.employeeDesignation
      })
      });
    
    setIsFacultyData(facultyOptions);
    console.log(facultyOptions);
  };

  const loadSemesterData = async (departmentvalue,departmentindex) => {
    const cData = await getSemsterData('201961010429723213238372',departmentvalue);
    console.log("departmentkey",departmentindex);
    
    const departmentkey = isDepartmentData[departmentindex-1]?.key?.split("-")[0];
    console.log("departmentval",departmentkey);
    setIsFacultyCoursesData(isFacultyCoursesData && isFacultyCoursesData.filter (facCour =>facCour?.departmentCode?.includes(departmentkey) ));
    let semesterOptions = [];
    cData?.semesterDetailsArray.forEach(semester => {
      semesterOptions.push({
        value:semester.semesterID,
        key:semester.semesterCode
      })
      });
    
    setIsSemesterData(semesterOptions);
    setIsSectionsData([]);
    console.log(semesterOptions);
  };

  const loadSectionsData = async (semester) => {
    const cData = await getSectionsData(semester);
    let sectionOptions = [];
    cData?.semesterSectionDetailsArray.forEach(section => {
      sectionOptions.push({
        value:section.sectionID,
        key:section.sectionName
      })
      });
    setIsSectionsData(sectionOptions);
    console.log(sectionOptions);
  };

  const loadCoursesData = async (section) => {
    const cData = await getCoursesData('20196101014224570834265',section,'64D1E79A8B6B11E98B0957863D7CDB1C');
    let courseOptions = [];
    cData?.courseArray.forEach(course => {
      courseOptions.push({
        value:course.courseCode,
        key:course.courseName,
        courseID:course.courseID
      })
    })
    setIsCoursesData(courseOptions);
    console.log(courseOptions);
  };

  const loadSecondaryFacultyData = async(empid) => {
  const design= empid && isFacultyData.filter(faculty=> faculty.value.includes(empid));
  setIsDesignationData(Array.isArray(design) ? design[0]?.designation:'');
  loadFacultyCoursesData(empid);
  loadSubjExperienceData(empid);  
  setIsSecondaryFacultyData(isFacultyData);
  setIsSecondaryFacultyData(isFacultyData.filter((faculty) => !faculty.value.includes(empid)));
  };

  const loadTertiaryFacultyData =  async(empid) => {
    setIsTertiaryFacultyData(isSecondaryFacultyData);
    setIsTertiaryFacultyData(isSecondaryFacultyData.filter((faculty) => !faculty.value.includes(empid)));
  }

  const loadQuaternaryFacultyData =  async(empid) => {
    setIsQuaternaryFacultyData(isTertiaryFacultyData);
    setIsQuaternaryFacultyData(isTertiaryFacultyData.filter((faculty) => !faculty.value.includes(empid)));
  }

  const loadFacultyCoursesData =  async(empid) => {
    const cData = await getFacultyCoursesData(empid);
    setIsFacultyCoursesData(cData?.courseDetailsArray);
  }

  const loadSubjExperienceData =  async(empid) => {
    const cData = await getSubjExpData('7G155','201961010429723213238372',empid);
    const subjectExp = cData?.subjectExperienceArray[0]?.subjectexpcount
    setIsSubjectExpData(typeof subjectExp !== "undefined" ? subjectExp : '');
    console.log("subject exp"+cData?.subjectExperienceArray[0]?.subjectexpcount);
  }
  const initialValues={
    AcadYear:'',
    Program:'',
    Semester:'',
    Sections:'',
	  Faculty:'',
	  DesignationName:'',
	  subjectExperienceName:'',
	  Course:'',
	  SecondaryFaculty:'',
	  TertiaryFaculty:'',
	  QuaternaryFaculty:''
  }

  const onSubmit = async (values) =>{
    console.log("values ",values);
    const course= isCoursesData.filter(course => course.value.includes(values.Course));
    console.log("courseId",course);
    values.courseId=course[0]?.courseID;
    values.courseCode=values.Course.split("-")[1];
    values.courseName=course[0]?.courseName;
    console.log("values1 ",values);
    const cData = await insertAllocateCouse(values);
    console.log(cData);

  }


    const thValues = [
    "Course Code",
    "Course Name",
    "Course Type",
    "Academic Year",
    "Program",
    "Semester",
    "Section",
    "Faculty Level"
  ];
  const tdValues = [
    { valueProperty: "courseCode" },
    { valueProperty: "courseName" },
    { valueProperty: "courseType" },
    { valueProperty: "academicYear" },
    { valueProperty: "departmentCode" },
    { valueProperty: "semesterCode" },
    { valueProperty: "section" },
    { valueProperty: "employeeLevel" },
  ];

  useEffect(() => {
    loadAcadProgrmFacultyData();
  }, []);

  return (
    <React.Fragment>
      <Layout>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        >
        {({
            values,
            handleChange
          }) =>( 
        <Form>
        <div className="grid grid-cols-4">
          <div className=" w-screen">
          <FormikControl control = 'select' label='Academic Year' name='AcadYear' 
            options ={isAcademicYearData} onChange={(e) => {
              handleChange(e);
             }}/>
          </div>

          <div className=" w-screen">
          <FormikControl control = 'select' label='Program' name='Program' 
            options ={isDepartmentData} onChange={(e) => {
              handleChange(e);
              loadSemesterData(e.target.value,e.target.selectedIndex);
             }}/>
            </div>

          <div className=" w-screen">
          <FormikControl control = 'select' label='Semester' name='Semester' 
            options ={isSemesterData} onChange={(e) => {
              handleChange(e);
              loadSectionsData(e.target.value);
             }}/>
          </div>

          <div className=" w-screen">
          <FormikControl control = 'select' label='Sections' name='Sections' 
            options ={isSectionsData} onChange={(e) => {
              handleChange(e);
              loadCoursesData(e.target.value);
             }}/>
          </div>
        </div>

        <div className="grid grid-cols-4">
          <div className=" w-screen">
          <FormikControl control = 'select' label='Faculty' name='Faculty' 
            options ={isFacultyData} onChange={(e) => {
              handleChange(e);
              loadSecondaryFacultyData(e.target.value);
             }}/>
          </div>

          <div className=" w-screen">
          <div className="w-2/12 float-left pr-2">
               <FormikControl
                    label="Designation"
                    control="input"
                    name="DesignationName"
                    value={isDesignationData}
                    onChange={handleChange}
                    disabled
                />
          </div>
          </div>
          <div className=" w-screen">          
          <div className="w-2/12 float-left pr-2">       
              <FormikControl
                    label="Subject Experience"
                    control="input"
                    name="subjectExperienceName"
                    value={isSubjectExpData}
                    onChange={handleChange}
                    disabled
                  />
            </div>
          </div>

          <div className=" w-screen">
          <FormikControl control = 'select' label='Course' name='Course' 
            options ={isCoursesData} onChange={(e) => {
              handleChange(e);
              }}/>
          </div>
        </div>              
        <div className="grid grid-cols-4">
          <div className=" w-screen">
          <FormikControl control = 'select' label='Secondary Faculty' name='SecondaryFaculty' 
            options ={isSecondaryFacultyData} onChange={(e) => {
              handleChange(e);
              loadTertiaryFacultyData(e.target.value);
              }}/>
          </div>
          <div className=" w-screen">
          <FormikControl control = 'select' label='Tertiary Faculty' name='TertiaryFaculty' 
            options ={isTertiaryFacultyData} onChange={(e) => {
              handleChange(e);
              loadQuaternaryFacultyData(e.target.value);
              }}/>
          </div>

           <div className=" w-screen">
           <FormikControl control = 'select' label='Quaternary Faculty' name='QuaternaryFaculty' 
            options ={isQuaternaryFacultyData} onChange={(e) => {
              handleChange(e);
              }}/>
          </div>          
          <div>
          <div className=" w-screen">  
          <button type="submit"
              className="float-left bg-blue-400 block  mx-auto px-2 py-1 rounded">
			       Allocate Course
            </button>
            </div>
          </div>          
        </div>             
        </Form>
        )}
        </Formik>           
        {isFacultyCoursesData && isFacultyCoursesData.length > 0 && (
          <div>
            <TableWrap
              thValues={thValues}
              tdValues={tdValues}
              data={isFacultyCoursesData}
            />
          </div>
        )}

        {}
      </Layout>
    </React.Fragment>
  );
};


export default AllocateCourses;
