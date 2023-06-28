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
import { MIN_MEM_COUNT } from "@/lib/projectData";

interface formData_inf {
  name: InputDataInterface;
  id: InputDataInterface;
  phone: InputDataInterface;
  mail: InputDataInterface;
  school: InputDataInterface;
  batch: InputDataInterface;
}

const GenInitInputData = (count: number) => {
  const list = [];
  for (let i = 0; i < count; i++) {
    list.push({
      name: initInputData(),
      mail: initInputData(),
      phone: initInputData(),
      id: initInputData(),
      school: initInputData(),
      batch: initInputData(),
    });
  }
  return list;
};

export default function MemberInfo(props: RegisterSubPageProps) {
  const [complete, setComplete] = useState(false);
  const [error_checked, setErrorChecked] = useState(false);

  useEffect(() => {
    if (props.mem_count - 1 > form_data.length) {
      const _form_data = [
        ...deepCopy(form_data),
        ...GenInitInputData(props.mem_count - 1 - form_data.length),
      ];
      setFormData([
        ..._form_data,
        ...GenInitInputData(form_data.length - (props.mem_count - 1)),
      ]);
    }
    if (props.mem_count - 1 < form_data.length) {
      const _form_data = deepCopy(form_data).slice(0, props.mem_count - 1);
      setFormData(_form_data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.mem_count]);

  const [form_data, setFormData] = useState<formData_inf[]>(
    GenInitInputData(MIN_MEM_COUNT - 1)
  );

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

      {form_data.map((data, i) => (
        <FormBox key={i}>
          <h3 className={style.form_title}>Member - {i + 2}</h3>
          <FormTextBox
            title="Name of the Member"
            name={"name_" + (i + 2)}
            data={form_data[i].name}
            onChange={onInputChange("name", i)}
            handleFocus={handleFocus("name", i)}
          />
          <FormTextBox
            title="SLTC Registration Number"
            name={"id_" + (i + 2)}
            data={form_data[i].id}
            onChange={onInputChange("id", i)}
            handleFocus={handleFocus("id", i)}
          />
          <FormTextBox
            title="Contact Number (WhatsApp)"
            name={"phone_" + (i + 2)}
            data={form_data[i].phone}
            onChange={onInputChange("phone", i)}
            handleFocus={handleFocus("phone", i)}
          />
          <FormTextBox
            title="SLTC Email - This email will be used to contact the whole team"
            name={"email_" + (i + 2)}
            data={form_data[i].mail}
            onChange={onInputChange("mail", i)}
            handleFocus={handleFocus("mail", i)}
          />

          <FormSelect
            title="Faculty /School"
            name={"school_" + (i + 2)}
            data={form_data[i].school}
            onChange={onInputChange("school", i)}
            values={[
              ["soe", "School of Engineering"],
              ["soc", "School of Computing & IT"],
              ["sot", "School of Technology"],
            ]}
            handleFocus={handleFocus("school", i)}
          />
          <FormSelect
            title="Batch"
            name={"batch_" + (i + 2)}
            data={form_data[i].batch}
            onChange={onInputChange("batch", i)}
            values={[
              ["6", "2023"],
              ["7", "2024"],
              ["8a", "2025A"],
              ["8b", "2025B"],
              ["9a", "2026A"],
              ["9b", "2026B"],
              ["10", "2027"],
            ]}
            handleFocus={handleFocus("batch", i)}
          />
        </FormBox>
      ))}
    </div>
  );
}
