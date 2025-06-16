"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "./jobform.module.css";
import { Icon } from "@iconify/react";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup.string().required("Phone number is required"),
  message: yup.string(),
  resume: yup.string().required("Name is required"),
  // resume: yup
  //   .mixed()
  //   .required("Resume is required")
  //   .test("fileSize", "File too large", (value) => value && value[0]?.size < 2 * 1024 * 1024)
  //   .test("fileFormat", "Unsupported file format", (value) =>
  //     value &&
  //     ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"].includes(
  //       value[0]?.type
  //     )
  //   ),

});

export default function JobApplicationModal({ show, onClose, jobTitle }) {
  const [fileName, setFileName] = useState("");

 const {
  register,
  handleSubmit,
  formState: { errors },
  setValue,
  trigger, // Add trigger
  reset,
} = useForm({
  resolver: yupResolver(schema),
});

  const handleModalClose = () => {
    reset();
    setFileName("");
    onClose();
  };

  const onSubmit = (data) => {
    console.log("formdetails", jobTitle, data);
    handleModalClose();
  };

  if (!show) return null;

  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContent}>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className={`${styles.jobTitle} m-0`}>{jobTitle}</h2>
          <Icon icon="mdi:close-outline" className={styles.closeBtn} onClick={handleModalClose} />
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.grid}>
            <div>
              <input type="text" placeholder="Name" {...register("name")} autoComplete="off" />
              {errors.name && <p className={styles.error}>{errors.name.message}</p>}
            </div>
            <div>
              <input type="email" placeholder="Email address" {...register("email")} autoComplete="off" />
              {errors.email && <p className={styles.error}>{errors.email.message}</p>}
            </div>
            <div>
              <input type="text" placeholder="Phone Number" {...register("phone")} autoComplete="off" />
              {errors.phone && <p className={styles.error}>{errors.phone.message}</p>}
            </div>

           <div className={styles.fileInputWrapper}>
            <label htmlFor="resume" className={styles.fileLabel}>
              <Icon icon="material-symbols:upload" className={styles.uploadIcon} />
              Upload Resume
            </label>
            <input
              type="file"
              id="resume"
              accept=".pdf,.doc,.docx"
              className={styles.hiddenFileInput}
              {...register("resume")}
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  setFileName(file.name); // Just update file name
                  trigger("resume");      // Re-validate the input
                }
              }}
            />
            {errors.resume && <p className={`${styles.error} mt-1`}>{errors.resume.message}</p>}
            {fileName && <p className={`${styles.fileName} mt-1`}>{fileName}</p>}
          </div>

          </div>

          <textarea placeholder="Message (Optional)" {...register("message")} autoComplete="off" className="mt-3" />
          {errors.message && <p className={styles.error}>{errors.message.message}</p>}

          <div className={styles.buttonWrapper}>
            <button type="submit" className={styles.submitBtn}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
