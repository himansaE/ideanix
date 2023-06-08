import React, { useEffect, useState } from "react";
import {
  InputDataInterface,
  RegisterSubPageProps,
  initInputData,
} from "../registerData";
import style from "./step.module.css";
import { deepCopy } from "@/lib/lib";
import FormBox from "../components/formBox";
import { FormSelect, FormTextBox } from "../components/formInput";

interface formData_inf {
  name: InputDataInterface;
  id: InputDataInterface;
  phone: InputDataInterface;
  mail: InputDataInterface;
  school: InputDataInterface;
  batch: InputDataInterface;
}
export default function MemberInfo(props: RegisterSubPageProps) {
  const [complete, setComplete] = useState(false);
  const [error_checked, setErrorChecked] = useState(false);

  const [form_data, setFormData] = useState<[formData_inf, formData_inf]>([
    {
      name: initInputData(),
      mail: initInputData(),
      phone: initInputData(),
      id: initInputData(),
      school: initInputData(),
      batch: initInputData(),
    },
    {
      name: initInputData(),
      mail: initInputData(),
      phone: initInputData(),
      id: initInputData(),
      school: initInputData(),
      batch: initInputData(),
    },
  ]);

  useEffect(() => {
    if (props.is_rendered) {
      checkForComplete();
      props.setLastStateComplete(complete);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [complete, props.is_rendered]);

  // When next button clicked
  useEffect(() => {
    if (props.button_click == 0 && !props.is_rendered) return;
    errorCheck();
    if (props.is_rendered) setErrorChecked(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.button_click]);

  const onInputChange = (id: keyof formData_inf, index: number) => {
    return (val: string) => {
      const data = deepCopy(form_data);
      data[index][id].value = val;
      setFormData(data);
    };
  };

  const errorCheck = () => {
    if (!error_checked) return;
    for (const i in form_data) {
      for (const [id, field] of Object.entries(form_data[i])) {
        if (field.value === "" && !field.error) {
          const data = deepCopy(form_data);
          data[i][id as keyof formData_inf].error = true;
          data[i][id as keyof formData_inf].error_text = "This is required.";
          setFormData(data);
        }
        if (field.value !== "" && field.error) {
          const data = deepCopy(form_data);
          data[i][id as keyof formData_inf].error = false;
          data[i][id as keyof formData_inf].error_text = "";
          setFormData(data);
        }
      }
    }
  };
  const checkForComplete = () => {
    for (const i of form_data) {
      for (const [, field] of Object.entries(i)) {
        if (field.value === "") {
          setComplete(false);
          return false;
        }
      }
    }
    setComplete(true);
    return true;
  };
  const handleFocus = (id: keyof formData_inf, i: number) => () => {
    if (form_data[i][id].value === "" && !form_data[i][id].error) {
      const data = deepCopy(form_data);
      data[i][id as keyof formData_inf].error = true;
      data[i][id as keyof formData_inf].error_text = "This is required.";
      setFormData(data);
    }
    if (form_data[i][id].value !== "" && form_data[i][id].error) {
      const data = deepCopy(form_data);
      data[i][id as keyof formData_inf].error = false;
      data[i][id as keyof formData_inf].error_text = "";
      setFormData(data);
    }
    checkForComplete();
  };
  return (
    <div>
      <h3 className={style.form_title}>
        In this step enter your team member details.
      </h3>

      {[2, 3].map((i) => (
        <FormBox key={i}>
          <h3 className={style.form_title}>Member - {i}</h3>
          <FormTextBox
            title="Name of the Member"
            name={"name_" + i}
            data={form_data[i - 2].name}
            onChange={onInputChange("name", i - 2)}
            handleFocus={handleFocus("name", i - 2)}
          />
          <FormTextBox
            title="SLTC Registration Number"
            name={"id_" + i}
            data={form_data[i - 2].id}
            onChange={onInputChange("id", i - 2)}
            handleFocus={handleFocus("id", i - 2)}
          />
          <FormTextBox
            title="Contact Number (WhatsApp)"
            name={"phone_" + i}
            data={form_data[i - 2].phone}
            onChange={onInputChange("phone", i - 2)}
            handleFocus={handleFocus("phone", i - 2)}
          />
          <FormTextBox
            title="SLTC Email - This email will be used to contact the whole team"
            name={"email_" + i}
            data={form_data[i - 2].mail}
            onChange={onInputChange("mail", i - 2)}
            handleFocus={handleFocus("mail", i - 2)}
          />

          <FormSelect
            title="Faculty /School"
            name={"school_" + i}
            data={form_data[i - 2].school}
            onChange={onInputChange("school", i - 2)}
            values={[
              ["soe", "School of Engineering"],
              ["soc", "School of Computing & IT"],
              ["sot", "School of Technology"],
            ]}
            handleFocus={handleFocus("school", i - 2)}
          />
          <FormSelect
            title="Batch"
            name={"batch_" + i}
            data={form_data[i - 2].batch}
            onChange={onInputChange("batch", i - 2)}
            values={[
              ["6", "Batch 6"],
              ["7", "Batch 7"],
              ["8a", "Batch 8A"],
              ["8b", "Batch 8B"],
              ["9a", "Batch 9A"],
              ["9b", "Batch 9B"],
              ["10", "Batch 10"],
            ]}
            handleFocus={handleFocus("batch", i - 2)}
          />
        </FormBox>
      ))}
    </div>
  );
}
