import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { Button } from "react-bootstrap";
import { Offcanvas } from "react-bootstrap";
import { useState } from "react";
import { AddSchema } from "./AddSchema";

export default function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="App">
      <Offcanvas show={show} onHide={handleClose} placement={"end"}>
        <Offcanvas.Header>
          <Offcanvas.Title class="header-part">
            <svg
              onClick={handleClose}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-chevron-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
            &nbsp; Saving Segment
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div class="container">
            <br />
            <h6>Enter the Name of the Segment</h6>
            <input
              class="seg-inp"
              type="text"
              placeholder="Name of the segment"
            />
            <br />
            <br />
            <h6>
              To save your segment, you need to add the schenmas to build the
              query
            </h6>
            <br />
            <div class="pull-right">
              <span class="dot green-dot"></span> - User Traits
              <span class="dot red-dot"></span> - Group Traits
            </div>
            <br />
            <br />
            <AddSchema />
          </div>
          <div class="cta-items">
            <button class="cta-btn1">Save the Segment</button>
            <button class="cta-btn2" onClick={handleClose}>
              Cancel
            </button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

      <Button onClick={handleShow} type="submit">
        Save Segment
      </Button>
    </div>
  );
}
