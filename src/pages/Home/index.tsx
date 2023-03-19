import { ChangeEvent, FormEvent, FormEventHandler, useState } from "react";
import { mockData } from "../../utils/constants";
import TextField from "../../components/TextField";
import Modal from "../../components/Modal";
import Header from "../../components/Header";
import Button from "../../components/Button";
import CreateJob from "../CreateJob";

export default function Home() {
  const [formOneState, setFormOneState] = useState({
    jonTitle: "",
    companyName: "",
    industry: "",
    location: "",
    remoteType: "",
  });
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <header className="bg-white py-[16px] px-[42px] md:px-[85px] flex flex-row justify-between items-center sticky top-0">
        <p className="text-[400] text-[24px]">True Talent</p>
        <Button
          title="Create Job"
          themeType=""
          onClick={() => setShowModal(true)}
        />
      </header>

      <div className="bg-[#E6E6E6] py-[8px] px-[42px] md:py-[16px] md:px-[85px] ">
        {/* <form
        onChange={(event: ChangeEvent<HTMLFormElement>) => {
          setFormOneState((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
          }));
        }}
      >
        <TextField
          label={"Job Title"}
          placeHolder={"ex. UX UI Designer"}
          name={"jonTitle"}
          value={formOneState.jonTitle}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            console.log("2 event : ", event);
          }}
        />
        <TextField
          label={"Company name"}
          placeHolder={"ex. Google"}
          name={"companyName"}
          value={formOneState.companyName}
          onChange={() => {}}
        />
        <TextField
          label={"Industry"}
          placeHolder={"ex. Information Technology "}
          name={"industry"}
          value={formOneState.industry}
          onChange={() => {}}
        />
        <TextField
          label={"Location"}
          placeHolder={"ex. Chennai"}
          name={"location"}
          value={formOneState.location}
          onChange={() => {}}
        />
        <TextField
          label={"Remote type"}
          placeHolder={"ex. In-office"}
          name={"remoteType"}
          value={formOneState.remoteType}
          onChange={() => {}}
        />
      </form> */}
        <>
          {true && (
            <div className="gap-x-[83px] gap-y-[34px] md:gap-y-[79px] grid grid-cols-1 lg:grid-cols-2">
              {mockData.map((jobDetail, index) => {
                return (
                  <section
                    key={`jonDetail-${index}`}
                    className="bg-white rounded-[10px] flex py-[16px] px-[24px] flex-row"
                  >
                    <div className="mr-[8px]">
                      <div
                        style={{
                          height: "48px",
                          width: "48px",
                          backgroundColor: "red",
                        }}
                      />
                    </div>
                    <div>
                      <h1 className="font-[400] text-[24px] leading-[32px]">
                        {jobDetail.title}
                      </h1>
                      <p className="font-[400] text-[16px] leading-[24px]">
                        {jobDetail.companyName} - {jobDetail.industry}
                      </p>
                      <p className="text-[#646464] font-[400] text-[16px] leading-[24px] mb-[24px]">
                        {jobDetail.location} - {jobDetail.workType}
                      </p>
                      <p className="font-[400] text-[16px] leading-[24px] mb-[8px]">
                        {jobDetail.jobType}
                      </p>
                      <p className="font-[400] text-[16px] leading-[24px] mb-[8px]">
                        Experience {jobDetail.experience.min} -{" "}
                        {jobDetail.experience.max}
                      </p>
                      <p className="font-[400] text-[16px] leading-[24px] mb-[8px]">
                        INR (₹) {jobDetail.salary.min} - {jobDetail.salary.max}{" "}
                        / Month
                      </p>
                      <p className="font-[400] text-[16px] leading-[24px] mb-[8px]">
                        {jobDetail.totalEmployee} employees
                      </p>
                      <p className="font-[400] text-[16px] leading-[24px] mb-6">
                        {jobDetail.applyType}
                      </p>
                      {jobDetail.applyType === "quick-apply" && (
                        <Button title="Apply Now" onClick={() => {}} />
                      )}
                      {jobDetail.applyType === "external-apply" && (
                        <Button
                          title="External Apply"
                          themeType="SECONDARY"
                          onClick={() => {}}
                        />
                      )}
                    </div>
                  </section>
                );
              })}
            </div>
          )}
        </>
      </div>
      <Modal
        show={showModal}
        onClickOutSide={(event) => {
          setShowModal(false);
        }}
      >
        <div className="h-full w-full flex justify-center items-center">
          <CreateJob />
        </div>
      </Modal>
    </>
  );
}
