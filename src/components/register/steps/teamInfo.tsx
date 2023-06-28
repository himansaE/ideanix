import React, { useEffect, useState } from "react";
import {
  InputDataInterface,
  RegisterSubPageProps,
  initInputData,
} from "../registerData";
import FormBox from "../components/formBox";
import style from "./step.module.css";
import { cssClasses } from "@/lib/lib";
import {
  FormFileInput,
  FormSelect,
  FormTextBox,
} from "../components/formInput";
import { MAX_MEM_COUNT, MIN_MEM_COUNT } from "@/lib/projectData";

export interface formData_inf {
  name: InputDataInterface;
  count: InputDataInterface;
  mail: InputDataInterface;
  phone: InputDataInterface;
  leader: InputDataInterface;
  school: InputDataInterface;
  batch: InputDataInterface;
  id: InputDataInterface;
  file: InputDataInterface;
}

export default function TeamInfo(props: RegisterSubPageProps) {
  const [complete, setComplete] = useState(false);
  const [error_checked, setErrorChecked] = useState(false);

  const [form_data, setFormData] = useState<formData_inf>({
    name: initInputData(),
    count: initInputData(),
    mail: initInputData(),
    phone: initInputData(),
    leader: initInputData(),
    id: initInputData(),
    school: initInputData(),
    batch: initInputData(),
    file: initInputData(),
  });

  useEffect(() => {
    if (props.is_rendered) {
      checkForComplete();
      props.setLastStateComplete(complete);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [complete, props.is_rendered]);

  // change member count
  useEffect(() => {
    props.setMemCount(parseInt(form_data.count.value) ?? MIN_MEM_COUNT);
  }, [form_data.count.value]);

  // When next button clicked
  useEffect(() => {
    if (props.button_click == 0 && !props.is_rendered) return;
    errorCheck();
    setErrorChecked(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.button_click]);

  const onInputChange = (id: keyof formData_inf) => {
    return (val: string) => {
      const curr = form_data[id];
      curr.value = val;
      setFormData({ ...form_data, [id]: curr });
      checkForComplete();
    };
  };
  const checkForComplete = () => {
    for (const [, field] of Object.entries(form_data)) {
      if (field.value === "") {
        setComplete(false);
        return false;
      }
    }
    setComplete(true);
    return true;
  };

  const handleFocus = (id: keyof formData_inf) => () => {
    if (form_data[id].value === "" && !form_data[id].error) {
      const curr = form_data[id];
      curr.error = true;
      curr.error_text = "This is required.";
      setFormData({ ...form_data, [id]: curr });
    }
    if (form_data[id].value !== "" && form_data[id].error) {
      const curr = form_data[id];
      curr.error = false;
      curr.error_text = "";
      setFormData({ ...form_data, [id]: curr });
    }
  };
  const errorCheck = () => {
    if (!error_checked) return;
    for (const [id, field] of Object.entries(form_data)) {
      if (field.value === "" && !field.error) {
        field.error = true;
        field.error_text = "This is required.";
        setFormData({ ...form_data, [id]: field });
      }
      if (field.value !== "" && field.error) {
        field.error = false;
        setFormData({ ...form_data, [id]: field });
      }
    }
  };
  return (
    <div>
      <h3 className={style.form_title}>
        In this step enter Team information and the leader.
      </h3>
      <FormBox>
        <FormTextBox
          title="Name of the Team"
          name="team_name"
          data={form_data.name}
          onChange={onInputChange("name")}
          handleFocus={handleFocus("name")}
        />
        <FormTextBox
          title="Number of Team members ( 3 - 5 members )"
          name="mem_count"
          type="number"
          data={form_data.count}
          onChange={(val) => {
            if (isNaN(parseInt(val)))
              return onInputChange("count")(MIN_MEM_COUNT.toString());
            let _val = parseInt(val);
            if (_val >= 10) _val = parseInt(val[1]);
            if (_val >= MAX_MEM_COUNT)
              return onInputChange("count")(MAX_MEM_COUNT.toString());
            if (_val <= MIN_MEM_COUNT)
              return onInputChange("count")(MIN_MEM_COUNT.toString());
            onInputChange("count")(_val.toString());
          }}
          handleFocus={handleFocus("count")}
        />
        <FormFileInput
          title="Project Proposal"
          name="file"
          data={form_data.file}
          onChange={onInputChange("file")}
          handleFocus={handleFocus("file")}
        />
      </FormBox>
      <h3 className={cssClasses(style.form_title, style.form_title_sub)}>
        Team Leader&apos;s Details
      </h3>
      <FormBox>
        <FormTextBox
          title="Member 1 (Team Leader)"
          name="name_1"
          data={form_data.leader}
          onChange={onInputChange("leader")}
          handleFocus={handleFocus("leader")}
        />
        <FormTextBox
          title="SLTC Registration Number"
          name="id_1"
          data={form_data.id}
          onChange={onInputChange("id")}
          handleFocus={handleFocus("id")}
        />
        <FormTextBox
          title="Contact Number (WhatsApp) - This number will be used to contact the whole team"
          name="phone_1"
          data={form_data.phone}
          onChange={onInputChange("phone")}
          handleFocus={handleFocus("phone")}
        />
        <FormTextBox
          title="SLTC Email - This email will be used to contact the whole team"
          name="email_1"
          data={form_data.mail}
          onChange={onInputChange("mail")}
          handleFocus={handleFocus("mail")}
        />

        <FormSelect
          title="Faculty /School"
          name="school_1"
          data={form_data.school}
          onChange={onInputChange("school")}
          handleFocus={handleFocus("school")}
          values={[
            ["soe", "School of Engineering"],
            ["soc", "School of Computing & IT"],
            ["sot", "School of Technology"],
          ]}
        />
        <FormSelect
          title="Your Batch"
          name="batch_1"
          data={form_data.batch}
          onChange={onInputChange("batch")}
          handleFocus={handleFocus("batch")}
          values={[
            ["6", "2023"],
            ["7", "2024"],
            ["8a", "2025A"],
            ["8b", "2025B"],
            ["9a", "2026A"],
            ["9b", "2026B"],
            ["10", "2027"],
          ]}
        />
      </FormBox>
    </div>
  );
}
