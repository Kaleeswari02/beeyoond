"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "./jobform.module.css";
import { Icon } from "@iconify/react";
import axios from "axios";


const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup.string().required("Phone number is required"),
  message: yup.string(),

});

export default function JobApplicationModal({ show, onClose, jobTitle }) {
  const [fileName, setFileName] = useState("");
  const [resumeFile, setResumeFile] = useState(null);
  const [resumeError, setResumeError] = useState("");

 const {
  register,
  handleSubmit,
  formState: { errors },
  reset,
} = useForm({
  resolver: yupResolver(schema),
});

  const handleModalClose = () => {
    reset();
    setFileName("");
    onClose();
  };


const onSubmit = async (data) => {
  if (!resumeFile) {
    setResumeError("Resume is required");
    return;
  }

  const formData = new FormData();
  formData.append("name", data.name);
  formData.append("email", data.email);
  formData.append("mobile", data.phone);
  formData.append("message", data.message || "");
  formData.append("jobRoleName", jobTitle);
  formData.append("resume", resumeFile);

  try {
    const response = await axios.post("http://localhost:5000/api/contact", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (response.status === 201) {
      alert("Application submitted successfully!");
    console.log("55555555555555555555555555")

      handleModalClose();
    } else {
      alert("Error: " + response.data.error);
    console.log("999999999999999999999999999999999999999999999")

    }
  } catch (error) {
    console.error("Submission failed:", error);
    const errMsg = error.response?.data?.error || "Something went wrong while submitting the form.";
    alert(errMsg);
  }
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
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  setResumeFile(file);
                  setFileName(file.name);
                  setResumeError(""); // Clear manual error
                }
              }}
            />
            {resumeError && <p className={`${styles.error} mt-1`}>{resumeError}</p>}

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
