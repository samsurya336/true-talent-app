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
      <header className="bg-white py-4 px-10 md:px-20 flex flex-row justify-between items-center sticky top-0">
        <p className="text-[400] text-2xl">True Talent</p>
        <Button
          title="Create Job"
          themeType=""
          onClick={() => setShowModal(true)}
        />
      </header>

      <div className="bg-light-gray py-2 px-10 md:py-4 md:px-[85px] ">
        <>
          {true && (
            <div className="gap-x-20 gap-y-8 md:gap-y-16 grid grid-cols-1 lg:grid-cols-2">
              {mockData.map((jobDetail, index) => {
                return (
                  <section
                    key={`jonDetail-${index}`}
                    className="bg-white rounded-lg flex py-4 px-6 flex-row"
                  >
                    <div className="mr-2">
                      <div className="h-12 y-12 bg-red-800" />
                    </div>
                    <div>
                      <h1 className="font-[400] text-2xl">{jobDetail.title}</h1>
                      <p className="font-[400] text-base">
                        {jobDetail.companyName} - {jobDetail.industry}
                      </p>
                      <p className="text-dark-grey font-[400] text-[16px] text-base mb-6">
                        {jobDetail.location} - {jobDetail.workType}
                      </p>
                      <p className="font-[400] text-base mb-2">
                        {jobDetail.jobType}
                      </p>
                      <p className="font-[400] text-base mb-2">
                        Experience {jobDetail.experience.min} -{" "}
                        {jobDetail.experience.max}
                      </p>
                      <p className="font-[400] text-base mb-2">
                        INR (₹) {jobDetail.salary.min} - {jobDetail.salary.max}{" "}
                        / Month
                      </p>
                      <p className="font-[400] text-base mb-2">
                        {jobDetail.totalEmployee} employees
                      </p>
                      <p className="font-[400] text-base mb-6">
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
