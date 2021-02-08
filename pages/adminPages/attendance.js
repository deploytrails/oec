import React, { useState } from "react";
import Layout from "../../components/layout";
import StyleModal from "../../components/modalUtills/styleModal";

const Attendance = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  return (
    <React.Fragment>
      <Layout>
        <h1>Basic Buttons</h1>
        <div>
          <button class=" buttonGreen">Save Button</button>
          &nbsp;
          <button class=" buttonRed">Delete Button</button> &nbsp;
          <button class=" buttonYellow">Edit Button</button> &nbsp;
          <button class=" buttonBlue">Other Button</button>
        </div>
        <br />
        <div>
          <button class=" buttonGreen" disabled>
            Save Button
          </button>
          &nbsp;
          <button class=" buttonRed" disabled>
            Delete Button
          </button>
          &nbsp;
          <button class=" buttonYellow" disabled>
            Edit Button
          </button>
          &nbsp;
          <button class=" buttonBlue" disabled>
            Other Button
          </button>
        </div>
        <br />
        <h1>Input Fields</h1> // Adjust Height of Input and select to same
        <div>
          <input
            class="basicInput"
            type="text"
            placeholder="Your Input "
          ></input>
          &nbsp; &nbsp; &nbsp;
          <select name="qualificationType" class="basicSelect">
            <option selected>Select Your Option</option>
            <option>Option 1</option>
            <option>Option 2</option>

            <option>Option 3</option>
          </select>
        </div>
        <div>
          <h1>Dynamic Modals</h1>
          <button class=" buttonBlue" onClick={() => setShowModal(!showModal)}>
            Open Modal
          </button>
          &nbsp;
          <button
            class=" buttonBlue"
            onClick={() => setShowModal2(!showModal2)}
          >
            Open Modal Options
          </button>
        </div>
        {showModal && (
          <StyleModal
            headder="Custom Modal"
            handleClose={() => setShowModal(!showModal)}
            buttons={
              <>
                <button class="buttonBlue">Open Modal</button>
              </>
            }
          >
            Single button div with fixed height
          </StyleModal>
        )}
        {showModal2 && (
          <StyleModal
            headder="Custom Modal"
            handleClose={() => setShowModal2(!showModal2)}
            buttons={
              <>
                <button class="buttonRed">Delete Button</button>&nbsp;
                <button class="buttonGreen">Update Button</button>
              </>
            }
          >
            Hello this is a test modal to render
          </StyleModal>
        )}
        <div>
          <h1>Basic Table</h1>
        </div>
      </Layout>
    </React.Fragment>
  );
};

export default Attendance;
