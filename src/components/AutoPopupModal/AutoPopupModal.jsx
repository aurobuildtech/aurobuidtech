import { useEffect, useRef, useState } from "react";
import { Modal } from "bootstrap";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./autoPopupModal.css"; // ✅ add this css file

function AutoPopupModal() {
  const [show, setShow] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!show) return;

    const modalElement = modalRef.current;
    if (!modalElement) return;

    const modal = Modal.getOrCreateInstance(modalElement, {
      backdrop: true,
      keyboard: true,
      focus: true,
    });

    // ✅ Fix: Prevent "aria-hidden blocked because element retained focus"
    const handleHide = () => {
      if (document.activeElement && document.activeElement.blur) {
        document.activeElement.blur();
      }
    };

    modalElement.addEventListener("hide.bs.modal", handleHide);
    modal.show();

    return () => {
      modalElement.removeEventListener("hide.bs.modal", handleHide);
    };
  }, [show]);

  return (
    <div
      ref={modalRef}
      className="modal fade"
      id="autoPopupModal"
      tabIndex="-1"
      aria-labelledby="autoPopupModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content p-4 rounded-4 shadow-lg apmModal">

          <div className="modal-header border-0 pb-2">
            <h5 className="modal-title fw-bold" id="autoPopupModalLabel">
              Please Enter Your Details Below
            </h5>

            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => {
                // ✅ extra safe blur (fix warning)
                if (document.activeElement?.blur) document.activeElement.blur();
              }}
            />
          </div>

          <div className="modal-body">
            <form>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Name" />
              </div>

              <div className="mb-3">
                <input type="email" className="form-control" placeholder="Email ID" />
              </div>

              <div className="mb-3">
                <input type="tel" className="form-control" placeholder="Contact Number" />
              </div>

              <div className="form-check mb-3">
                <input className="form-check-input" type="checkbox" id="termsCheck" />
                <label className="form-check-label" htmlFor="termsCheck">
                  By signing up, you agree to receive service updates
                </label>
              </div>

              {/* ✅ Bottom row: icons left + smaller submit right */}
              <div className="apmBottomRow">
                <div className="apmQuickIcons">

                  <a
                    className="apmIconBtn whatsapp"
                    href="https://wa.me/919999999999"
                    target="_blank"
                  >
                    <i className="bi bi-whatsapp"></i>
                  </a>

                  <a
                    className="apmIconBtn phone"
                    href="tel:+919999999999"
                  >
                    <i className="bi bi-telephone-fill"></i>
                  </a>

                </div>

                <button type="button" className="btn btn-warning fw-bold apmSubmit">
                  Submit
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

export default AutoPopupModal;