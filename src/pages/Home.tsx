import { FunctionComponent } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import QuestionPanel from "../components/QuestionPanel";
import styles from "./Home.module.css";

const Home: FunctionComponent = () => {
  return (
    <div className={styles.home}>
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
        <div className={styles.questionPanelParent}>
          <QuestionPanel />
          <TextField
            className={styles.askOption}
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

export default Home;
