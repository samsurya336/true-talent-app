import {
  ChangeEvent,
  FormEvent,
  FormEventHandler,
  useEffect,
  useState,
} from "react";
import { mockData } from "../../utils/constants";
import TextField from "../../components/TextField";
import Modal from "../../components/Modal";
import Header from "../../components/Header";
import Button from "../../components/Button";
import { CreateJobModal, getJobs, IJob } from "../job";
import { useToastSetters } from "../../components/Toast";
import useApi from "../../hooks/useApi";
import api from "../../libs/axios";
import netflixLogo from "../../assets/icons/netflix_logo.svg";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const [isGetJobsApiLoading, data, getJobsApi] = useApi<IJob[]>(getJobs);

  useEffect(() => {
    // getJobsApi();
  }, []);
  console.log("Data : ", data);

  const jobExperience = (
    jobExperience: { min: number; max: number } | undefined
  ): string => {
    if (jobExperience) {
      return `${jobExperience.min} - ${jobExperience.max}`;
    } else {
      return " : ---  -  ---";
    }
  };

  const jobSalary = (
    jobSalary: { min: number; max: number } | undefined
  ): string => {
    if (jobSalary) {
      return `${jobSalary.min} - ${jobSalary.max} / month`;
    } else {
      return "---";
    }
  };

  const totalEmployees = (employees: string | undefined): string => {
    if (employees) {
      return `${employees} employees`;
    } else {
      return "Employees : ---";
    }
  };

  return (
    <>
      <header className="bg-white py-4 px-10 md:px-20 flex flex-row justify-between items-center sticky top-0 ">
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
              {mockData.map((jobDetail: IJob, index) => {
                return (
                  <section
                    key={`jonDetail-${index}`}
                    className="bg-white rounded-lg flex py-4 px-6 flex-row"
                  >
                    <div className="mr-2">
                      <img className="h-12 y-12" src={netflixLogo} alt="" />
                    </div>
                    <div>
                      <h1 className="font-[400] text-2xl">{jobDetail.title}</h1>
                      <p className="font-[400] text-base">
                        {jobDetail.companyName} - {jobDetail.industry}
                      </p>
                      <p className="text-dark-gray font-[400] text-base mb-6">
                        {jobDetail.location || "Location : unknown"} -{" "}
                        {jobDetail.workType || "Work Type : unknown"}
                      </p>
                      <p className="font-[400] text-base mb-2">
                        {jobDetail.jobType || "Job Type : ----"}
                      </p>
                      <p className="font-[400] text-base mb-2">
                        Experience {jobExperience(jobDetail.experience)}
                      </p>
                      <p className="font-[400] text-base mb-2">
                        INR (₹) {jobSalary(jobDetail.salary)}
                      </p>
                      <p className="font-[400] text-base mb-2">
                        {totalEmployees(jobDetail.totalEmployee)}
                      </p>
                      {jobDetail.applyType === "QUICK-APPLY" && (
                        <Button title="Apply Now" onClick={() => {}} />
                      )}
                      {jobDetail.applyType === "EXTERNAL-APPLY" && (
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
          <CreateJobModal />
        </div>
      </Modal>
    </>
  );
}
