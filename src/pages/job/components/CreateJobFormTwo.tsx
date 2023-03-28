import { ChangeEvent, FormEvent } from "react";
import Button from "../../../components/Button";
import RadioButton from "../../../components/RadioButton";
import TextField from "../../../components/TextField";
import { IFInitialValue } from "../../../hooks/useFormField";
import { SetStateT } from "../../../utils/types";
import { REQUIRED_FILED } from "../constants";

export const CreateJobFormTwo = ({
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
    const errors: { [key: string]: string | null } = {};
    let hasErrors = false;

    const EXPERIENCE_MIN_MAX_HAS_VALUES =
      formData[experienceMin.name].value && formData[experienceMax.name].value;

    if (EXPERIENCE_MIN_MAX_HAS_VALUES) {
      const experienceMin = isNaN(formData[experienceMin.name].value);
      const EXPERIENCE_MIN_VALUE_LESSER_THAN_MAX =
        formData[experienceMin.name].value <
        formData[experienceMax.name]!.value;
    }

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
