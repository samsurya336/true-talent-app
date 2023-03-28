import { ChangeEvent, FormEvent } from "react";
import Button from "../../../components/Button";
import TextField from "../../../components/TextField";
import { IFInitialValue } from "../../../hooks/useFormField";
import { SetStateT } from "../../../utils/types";
import { REQUIRED_FILED } from "../constants";

export const CreateJobFormOne = ({
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
