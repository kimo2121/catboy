import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import { FAQTypes } from "./types";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import "./FAQ.css";
const Accordion = withStyles({
  root: {
    boxShadow: "none",
    textAlign: "left",
    fontSize: "16px",
    color: "white",
    borderRadius: "5px",
    fontWeight: "bolder",
    backgroundColor: "#212529",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "#212529",
    borderRadius: "5px",
    color: "white",
    margin: "2.5vh 0",
    marginBottom: -1,
    minHeight: 89,
    "&$expanded": {
      minHeight: 89,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2.5),
  },
}))(MuiAccordionDetails);

const CustomizedAccordions: React.FC<FAQTypes> = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel: any) => (event: any, newExpanded: any) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div id="FAQ" className="faq-component">
      <h1>FAQ</h1>
      <div className="accordion-wrpper">
        <Accordion
          square
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography
              className={
                expanded === "panel1"
                  ? "question-styles active"
                  : "question-styles"
              }
            >
              Are You Related to the Catboy token?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Not in any way shape or form. This project was started long before
              the token was even a thought and it was decided not to pause it
              due to a failing token.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          square
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography
              className={
                expanded === "panel2"
                  ? "question-styles active"
                  : "question-styles"
              }
            >
              Where do I view them?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              If using Trust Wallet they should appear in your collectibles tab.
              If using metamask you will need to look up your wallet on bscscan
              and add each one individually by contract address and ID number.
              <br />
              Alternately you can go to tofunft.com or lootex.io/vault in your
              smart browser and usually view them there. NOTE: It often takes
              10-15 minutes before they show up depending on Blockchain
              congestion but they should show up under erc 721 transactions on
              bscscan almost immediately. If they are on bscscan they are in
              your wallet.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          square
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography
              className={
                expanded === "panel3"
                  ? "question-styles active"
                  : "question-styles"
              }
            >
              Where can I sell them?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              In the beginning you should be able to sell them on tofunft.com
              and lootex.io . Be sure to maintain a consistently high floor. The
              higher the floor the more that sell. After fully minted we will
              apply for Nftkey and PancakeSwap as well.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          square
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
            <Typography
              className={
                expanded === "panel4"
                  ? "question-styles active"
                  : "question-styles"
              }
            >
              Who is the artist?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              The artist of this collection is NFT Demon, an experienced NFT
              artist with four large collections on BSC. This makes him the
              largest NFT artist in all of BSC. Nobody else has done more
              collections and all of his have been successful. The art speaks
              for itself. If you have any issues with the nfts feel free to
              contact NFT Demon on Telegram @NFTDemon
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          square
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
            <Typography
              className={
                expanded === "panel5"
                  ? "question-styles active"
                  : "question-styles"
              }
            >
              What is the price?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              1st 1,000- .02 bnb <br />
              2nd 1,000- .04 bnb <br />
              3rd 1,000- .06 bnb <br />
              4th 1,000- .08 bnb <br />
              5th 1,000- .10 bnb <br />
              6th 1,000- .12 bnb <br />
              7th 1,000- .14 bnb <br />
              8th 1,000- .16 bnb <br />
              9th 1,000- .18 bnb <br />
              Final 1,000- .20 bnb
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};
export default CustomizedAccordions;
