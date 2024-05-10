import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./QuestionPanel.module.css";

const QuestionPanel: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFAQClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className={styles.questionPanel}>
      <div className={styles.questionContainer}>
        <div className={styles.questionContainerChild} />
        <button className={styles.faq} onClick={onFAQClick}>
          <img className={styles.subtractIcon} alt="" src="/subtract.svg" />
          <div className={styles.noClue}>No Clue?</div>
        </button>
      </div>
    </div>
  );
};

export default QuestionPanel;
