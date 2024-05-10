import { FunctionComponent, useCallback } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./Home1.module.css";

const Home1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHomeContainer1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.home} onClick={onHomeContainer1Click}>
      <img
        className={styles.image1Icon}
        loading="lazy"
        alt=""
        src="/image-1@2x.png"
      />
      <section className={styles.welcomeHowMay}>
        WELCOME, HOW MAY I HELP YOU?
      </section>
      <section className={styles.homeInner}>
        <div className={styles.frameParent}>
          <div className={styles.fAQContainerWrapper}>
            <div className={styles.fAQContainer}>
              <div className={styles.fAQContainerChild} />
              <div className={styles.faq}>
                <div className={styles.specificQuestionDetailsWrapper}>
                  <div className={styles.specificQuestionDetails}>
                    <div className={styles.doesUtsProvide}>
                      Does UTS provide any sponsorship?
                    </div>
                  </div>
                </div>
                <div className={styles.faqInner}>
                  <div className={styles.whatAreTheProgrammesOffereWrapper}>
                    <div className={styles.whatAreThe}>
                      What are the programmes offered in UTS?
                    </div>
                  </div>
                </div>
                <div className={styles.faqChild}>
                  <div className={styles.whatAreTheTuitionFeesForWrapper}>
                    <div className={styles.whatAreThe1}>
                      What are the tuition fees for the programmes?
                    </div>
                  </div>
                </div>
                <div className={styles.applicationGuide}>
                  <div className={styles.howDoI}>
                    How do I apply for UTS full-time programmes?
                  </div>
                </div>
              </div>
            </div>
          </div>
          <TextField
            className={styles.frameChild}
            placeholder="Ask me!"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <img width="49px" height="38px" src="/vector-121.svg" />
              ),
            }}
            sx={{
              "& fieldset": { border: "none" },
              "& .MuiInputBase-root": {
                height: "66px",
                backgroundColor: "#f7f7f7",
                paddingRight: "30px",
                borderRadius: "15px",
                fontSize: "32px",
              },
              "& .MuiInputBase-input": { color: "#9d9d9d" },
            }}
          />
        </div>
      </section>
    </div>
  );
};

export default Home1;
