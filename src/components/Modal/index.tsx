import React, {
  ChangeEventHandler,
  MouseEventHandler,
  ReactNode,
  useEffect,
  useState,
} from "react";
import "./modal.css";

type Props = {
  show: boolean;
  onClickOutSide: MouseEventHandler<HTMLElement> | undefined;
  children: ReactNode;
};

export default function Modal({ show, onClickOutSide, children }: Props) {
  const [_show, setShow] = useState(false);
  const [_visible, setVisible] = useState(false);

  useEffect(() => {
    if (show === true) {
      setShow(true);
      setTimeout(() => {
        setVisible(true);
      }, 100);
    } else {
      closeModal();
    }
  }, [show]);

  const closeModal = () => {
    setVisible(false);
    setTimeout(() => {
      setShow(false);
    }, 500);
  };

  return (
    <>
      {_show === true && (
        <section
          className={`fixed h-screen w-screen top-0 left-0 transition-opacity ease-linear duration-[200ms] ${
            _visible ? "bg-[#0000004d] opacity-100" : "opacity-0"
          }`}
          onClick={(event) => {
            closeModal();
            if (typeof onClickOutSide === "function") {
              onClickOutSide(event);
            }
          }}
        >
          <div
            className={`h-full w-full transition-transform ease-linear duration-[200ms] ${
              _visible ? "scale-100" : "scale-0"
            } `}
          >
            {children}
          </div>
        </section>
      )}
    </>
  );
}
