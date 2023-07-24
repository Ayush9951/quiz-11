import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./Question.module.css";
import { Modal } from "@mui/material";

const Question = (props: any) => {
  const [title, setTitle] = useState<string>();
  const [desc, setDesc] = useState<string>();
  const [optionCount, setOptionCount] = useState<string>("");
  const [options, setOptions] = useState<string[]>([]);
  const [branch, setBranch] = useState<string>();
  const [subject, setSubject] = useState<string>();
  const [answer, setAnswer] = useState<string>();

  const count = parseInt(optionCount);
  const optionDivs = [];

  for (let i = 0; i < count; i++) {
    optionDivs.push(
      <input
        className={styles.input}
        key={"options_" + i + 1}
        type="text"
        value={options[i]}
        onChange={(res) => {
          let optionsTemp = options;
          optionsTemp[i] = res?.target?.value;
          console.log(options);
          setOptions(optionsTemp);
        }}
        placeholder={`Enter Option ${i + 1}`}
      />
    );
  }

  const answersDivs = [];
  for (let i = 0; i < count; i++) {
    answersDivs.push(
      <option key={i} className={styles.option} value={`option ${i + 1}`}>
        Option {i + 1}
      </option>
    );
  }

  return (
    <Modal
      open={props.open}
      onClose={props.closeModal}
      sx={{ overflow: "scroll", scrollBehavior: "smooth" }}
    >
      <div className={styles.container}>
        <CloseIcon
          sx={{ float: "right", cursor: "pointer" }}
          onClick={props.closeModal}
        />
        <div>
          <h2 className={styles.title}>Add Question</h2>
          <div className={styles.wrapper}>
            <label className={styles.label} htmlFor="title">
              Title:
            </label>
            <input
              className={styles.input}
              id="title"
              value={title}
              onChange={(res) => setTitle(res?.target?.value)}
              type="text"
              placeholder="Enter Question Title"
            />
          </div>

          <div className={styles.wrapper}>
            <label className={styles.label} htmlFor="description">
              Description:
            </label>
            <textarea
              className={styles.textArea}
              id="description"
              value={desc}
              onChange={(res) => setDesc(res?.target?.value)}
              placeholder="Enter Question Description"
            />
          </div>

          <div className={styles.wrapper}>
            <label className={styles.label} htmlFor="options-count">
              Enter number of Options?
            </label>
            <input
              className={styles.input}
              type="number"
              value={optionCount}
              onChange={(res) => setOptionCount(res?.target?.value)}
              id="options-count"
            />
          </div>

          {optionCount && optionCount > "0" && (
            <div className={styles.wrapper}>
              <label className={styles.label} htmlFor="options">
                Options:{" "}
              </label>
              {optionDivs}
            </div>
          )}

          <div className={styles.wrapper}>
            <label className={styles.label} htmlFor="branch">
              Branch
            </label>
            <select
              className={styles.select}
              name="branch"
              id="branch"
              value={branch}
              onChange={(res) => setBranch(res.target.value)}
            >
              <option className={styles.option} value="CSE">
                Computer Science Engineering
              </option>
              <option className={styles.option} value="other">
                other
              </option>
            </select>
          </div>
          <div className={styles.wrapper}>
            <label className={styles.label} htmlFor="subject">
              Subject
            </label>
            <select
              className={styles.select}
              name="subject"
              id="subject"
              value={subject}
              onChange={(res) => setSubject(res.target.value)}
            >
              <option className={styles.option} value="Java">
                Java
              </option>
              <option className={styles.option} value="React">
                React
              </option>
              <option className={styles.option} value="other">
                Other
              </option>
            </select>
          </div>
          <div className={styles.wrapper}>
            <label className={styles.label} htmlFor="answer">
              Answer
            </label>
            <select
              className={styles.select}
              name="answer"
              id="answer"
              value={answer}
              onChange={(res) => setAnswer(res.target.value)}
            >
              {answersDivs}
            </select>
          </div>
          <button className={styles.button}>Save</button>
        </div>
      </div>
    </Modal>
  );
};

export default Question;
