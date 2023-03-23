import React, {
  ChangeEvent,
  ChangeEventHandler,
  Dispatch,
  FormEvent,
  FormEventHandler,
  useState,
} from "react";
import Button from "../../components/Button";
import RadioButton from "../../components/RadioButton";
import TextField from "../../components/TextField";
import useFormField, { IFInitialValue } from "../../hooks/useFormField";
import { SetStateT } from "../../utils/types";

type Props = {
  label: string;
  placeHolder: string;
  name: string;
  value: string | number | readonly string[] | undefined;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
};

const REQUIRED_FILED = ["jobTitle", "companyName", "industry"];

export default function CreateJob() {
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

  const [currentForm, setCurrentForm] = useState(1);

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
        <FormOne
          formData={formOneData}
          onFormChange={onFormOneChange}
          setErrors={setFormOneErrors}
          onClickNext={onClickNext}
        />
      )}

      {currentForm === 2 && (
        <FormTwo
          formData={formTwoData}
          onFormChange={onFormTwoChange}
          setErrors={setFormTwoErrors}
          onClickNext={onClickNext}
        />
      )}
    </section>
  );
}

const FormOne = ({
  formData,
  onFormChange,
  setErrors,
  onClickNext,
}: {
  formData: IFInitialValue;
  onFormChange: SetStateT<IFInitialValue>;
  setErrors: (errors: { [key: string]: string | null }) => void;
  onClickNext: (value: number) => void;
}) => {
  const {
    jobTitle,
    companyName,
    industry,
    location,
    remoteType,
  }: IFInitialValue = formData;
  console.log("jobTitle : ", jobTitle);
  const onChange = (event: ChangeEvent<HTMLFormElement>) => {
    onFormChange((prevState) => {
      console.log("1 name : ", event.target.name);
      console.log("1 value : ", event.target.value);
      return {
        ...prevState,
        [event.target.name]: {
          ...prevState[event.target.name],
          value: event.target.value,
          error: REQUIRED_FILED.includes(event.target.name)
            ? event.target.value
              ? null
              : "Kindly fill this required field"
            : prevState[event.target.name].error,
        },
      };
    });
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const errors: { [key: string]: string | null } = {};
    let hasErrors = false;
    for (const key in formData) {
      const IS_REQUIRED_FILED = REQUIRED_FILED.includes(key);
      if (IS_REQUIRED_FILED === true && !formData[key].value) {
        errors[key] = "Kindly fill this required field";
        hasErrors = true;
      }
    }
    setErrors({ ...errors });
    if (hasErrors === false) {
      onClickNext(2);
    }
  };

  const isButtonDisabled = () => {
    let result: boolean = false;
    for (const key in formData) {
      console.log(key, " Value : ", formData[key].value);
      const IS_REQUIRED_FILED = REQUIRED_FILED.includes(key);
      if (IS_REQUIRED_FILED === true && !formData[key].value) {
        result = true;
        break;
      }
    }
    console.log("Result : ", result);
    return result;
  };
  return (
    <form onChange={onChange} onSubmit={onSubmit}>
      <TextField
        name={jobTitle.name}
        value={(jobTitle.value || "") as string}
        placeHolder="ex. UX UI Designer"
        label="Job title"
        className="mb-6"
        error={jobTitle.error}
        required={true}
      />
      <TextField
        name={companyName.name}
        value={(companyName.value || "") as string}
        placeHolder="ex. Google"
        label="Company name"
        className="mb-6"
        error={companyName.error}
        required={true}
      />
      <TextField
        name={industry.name}
        value={(industry.value || "") as string}
        placeHolder="ex. Information Technology "
        label="Industry"
        className="mb-6"
        error={industry.error}
        required={true}
      />
      <div className="flex items-center gap-x-6 mb-24">
        <TextField
          name={location.name}
          value={(location.value || "") as string}
          placeHolder="ex. Chennai"
          label="Location"
          className="w-1/2 mb-6"
        />
        <TextField
          name={remoteType.name}
          value={(remoteType.value || "") as string}
          placeHolder="ex. In-office"
          label="Remote type"
          className="w-1/2 mb-6"
        />
      </div>
      <Button
        type="submit"
        disabled={isButtonDisabled()}
        title="Next"
        className="ml-auto"
        onClick={() => {}}
      />
    </form>
  );
};

const FormTwo = ({
  formData,
  onFormChange,
  setErrors,
  onClickNext,
}: {
  formData: IFInitialValue;
  onFormChange: SetStateT<IFInitialValue>;
  setErrors: (errors: { [key: string]: string | null }) => void;
  onClickNext: (value: number) => void;
}) => {
  const {
    experienceMin,
    experienceMax,
    salaryMin,
    salaryMax,
    employee,
    quickApply,
    externalApply,
  }: IFInitialValue = formData;
  const onChange = (event: ChangeEvent<HTMLFormElement>) => {
    onFormChange((prevState) => {
      console.log("1 name : ", event.target.name);
      console.log("1 value checked : ", event.target.checked);
      let value = event.target.value;
      let siblingRadioValue = {};
      if (event.target.type === "radio") {
        value = event.target.checked;
        if (event.target.name === "quickApply") {
          siblingRadioValue = {
            externalApply: {
              ...prevState["externalApply"],
              value: !event.target.checked,
            },
          };
        } else if (event.target.name === "externalApply") {
          siblingRadioValue = {
            quickApply: {
              ...prevState["quickApply"],
              value: !event.target.checked,
            },
          };
        }
      }

      return {
        ...prevState,
        ...siblingRadioValue,
        [event.target.name]: {
          ...prevState[event.target.name],
          value: value,
        },
      };
    });
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // const errors: { [key: string]: string | null } = {};
    // let hasErrors = false;
    // for (const key in formData) {
    //   const IS_REQUIRED_FILED = REQUIRED_FILED.includes(key);
    //   if (IS_REQUIRED_FILED === true && !formData[key].value) {
    //     errors[key] = "Kindly fill this required field";
    //     hasErrors = true;
    //   }
    // }
    // setErrors({ ...errors });
    // if (hasErrors === false) {
    //   onClickNext(2);
    // }
  };

  const isButtonDisabled = () => {
    let result: boolean = false;
    for (const key in formData) {
      console.log(key, " Value : ", formData[key].value);
      const IS_REQUIRED_FILED = REQUIRED_FILED.includes(key);
      if (IS_REQUIRED_FILED === true && !formData[key].value) {
        result = true;
        break;
      }
    }
    console.log("Result : ", result);
    return result;
  };

  console.log("quickApply.value : ", quickApply.value);

  return (
    <form onChange={onChange} onSubmit={onSubmit}>
      <div className="flex items-end gap-x-6 mb-6">
        <TextField
          name={experienceMin.name}
          value={(experienceMin.value || "") as string}
          placeHolder="Minimum"
          label="Experience"
          className="w-1/2"
        />
        <TextField
          name={experienceMax.name}
          value={(experienceMax.value || "") as string}
          placeHolder="Maximum"
          className="w-1/2"
        />
      </div>

      <div className="flex items-end gap-x-6 mb-6">
        <TextField
          name={salaryMin.name}
          value={(salaryMin.value || "") as string}
          placeHolder="Minimum"
          label="Salary"
          className="w-1/2"
        />
        <TextField
          name={salaryMax.name}
          value={(salaryMax.value || "") as string}
          placeHolder="Maximum"
          className="w-1/2"
        />
      </div>

      <TextField
        name={employee.name}
        value={(employee.value || "") as string}
        placeHolder="100"
        label="Total Employee"
        className="mb-6"
      />

      <div className="mb-24">
        <p className="text-black text-sm font-bold mb-3">Apply type</p>
        <div className="flex items-center gap-x-4">
          <RadioButton
            name={quickApply.name}
            checked={quickApply.value as boolean}
            label="Quick apply"
          />
          <RadioButton
            name={externalApply.name}
            checked={externalApply.value as boolean}
            label="External apply"
          />
        </div>
      </div>
      <Button
        type="submit"
        title="Save"
        className="ml-auto"
        onClick={() => {}}
      />
    </form>
  );
};
