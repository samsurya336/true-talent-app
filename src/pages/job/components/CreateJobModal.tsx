import React, {
  ChangeEvent,
  ChangeEventHandler,
  Dispatch,
  FormEvent,
  FormEventHandler,
  useState,
} from "react";
import Button from "../../../components/Button";
import RadioButton from "../../../components/RadioButton";
import TextField from "../../../components/TextField";
import useFormField, { IFInitialValue } from "../../../hooks/useFormField";
import { SetStateT } from "../../../utils/types";
import { CreateJobFormOne } from "./CreateJobFormOne";
import { CreateJobFormTwo } from "./CreateJobFormTwo";

type Props = {
  label: string;
  placeHolder: string;
  name: string;
  value: string | number | readonly string[] | undefined;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
};

export function CreateJobModal() {
  const {
    data: formOneData,
    onFormChange: onFormOneChange,
    setErrors: setFormOneErrors,
  } = useFormField({
    jobTitle: {
      value: "",
    },
    companyName: {
      value: "",
    },
    industry: {
      value: "",
    },
    location: {
      value: "",
    },
    remoteType: {
      value: "",
    },
  });

  const {
    data: formTwoData,
    onFormChange: onFormTwoChange,
    setErrors: setFormTwoErrors,
  } = useFormField({
    experienceMin: {
      value: "",
    },
    experienceMax: {
      value: "",
    },
    salaryMin: {
      value: "",
    },
    salaryMax: {
      value: "",
    },
    employee: {
      value: "",
    },
    quickApply: {
      value: true,
    },
    externalApply: {
      value: false,
    },
  });

  const [currentForm, setCurrentForm] = useState(2);

  const onClickNext = (value: number) => {
    setCurrentForm(value);
  };

  return (
    <section
      className="bg-white rounded-lg flex flex-col p-8 w-[370px] sm:w-[577px] max-h-[80vh] overflow-auto"
      onClick={(event) => event.stopPropagation()}
    >
      <section className="flex justify-between items-center mb-6">
        <p className="text-xl">Create a job</p>
        <p className="text-base">Step {currentForm}</p>
      </section>
      {currentForm === 1 && (
        <CreateJobFormOne
          formData={formOneData}
          onFormChange={onFormOneChange}
          setErrors={setFormOneErrors}
          onClickNext={onClickNext}
        />
      )}

      {currentForm === 2 && (
        <CreateJobFormTwo
          formData={formTwoData}
          onFormChange={onFormTwoChange}
          setErrors={setFormTwoErrors}
          onClickNext={onClickNext}
        />
      )}
    </section>
  );
}
