import React from "react";
import {
  getData as getResultData,
  dataKeys,
} from "../../src/services/IplResults";
import "bootstrap/dist/css/bootstrap.min.css";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faBaseballBall,
  faCalendarMinus,
  faMapMarkedAlt,
  faRecordVinyl,
  faUser,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
//import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  Button,
  Card,
  ListGroupItem,
  ListGroup,
  CardDeck,
  Container,
} from "react-bootstrap";
// function DisplayResult(props) {
//   const [items, setItems] = React.useState();
//   const [value, setValue] = React.useState();

//   return (
//     <div>
//       <select
//         value={value}
//         onChange={(e) => YearlyResult(e.currentTarget.value)}
//       >
//         <option value="2017">2017</option>
//         <option value="2016">2016</option>
//         <option value="2008">2008</option>
//       </select>
//       {/* {value && <YearlyResult year={value} />} */}
//     </div>
//   );
// }
function DisplayResult(props) {
  const [results, setResults] = React.useState([]);

  React.useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await getResultData(props.match.params.year);

    if (data) {
      setResults(data);
    }
  };

  return (
    <Container>
      <CardDeck>
        <Link to="/Dashboard">
          <FontAwesomeIcon
            style={{ marginTop: "20px" }}
            icon={faArrowLeft}
            size="2x"
            color="#00416d"
          />
        </Link>
        {results.map((elem, index) => {
          return (
            <ResultItem
              key={index}
              team1={elem[dataKeys.team1]}
              team2={elem[dataKeys.team2]}
              city={elem[dataKeys.city]}
              venue={elem[dataKeys.venue]}
              winner={elem[dataKeys.winner]}
              date={elem[dataKeys.date]}
              result={elem[dataKeys.result]}
              toss_winner={elem.tosswinner}
              toss_decision={elem.tossdecision}
              win_by_runs={elem.winbyruns}
              win_by_wickets={elem.winbywickets}
              player_of_match={elem.playerofmatch}
              umpire1={elem[dataKeys.umpire1]}
              umpire2={elem[dataKeys.umpire2]}
              umpire3={elem[dataKeys.umpire3]}
              dl_applied={elem.dlapplied}
            />
          );
        })}
      </CardDeck>
      <Link to="/Dashboard">
        <FontAwesomeIcon
          style={{ marginBottom: "60px", float: "right" }}
          icon={faArrowLeft}
          size="2x"
          color="#00416d"
        />
      </Link>
    </Container>
  );
}
function ResultItem({
  team1,
  team2,
  umpire1,
  umpire2,
  umpire3,
  winner,
  win_by_runs,
  win_by_wickets,
  dl_applied,
  player_of_match,
  venue,
  city,
  date,
  toss_winner,
  toss_decision,
  result,
}) {
  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
      padding: "9px 0 9px 0",
    },
  }));
  let wonByRun;
  let isTie = false;
  if (win_by_runs != 0) {
    wonByRun = true;
  } else {
    wonByRun = false;
  }
  if (result === "tie") {
    isTie = true;
  }
  return (
    <span>
      <br />

      <Card style={{ width: "21rem" }}>
        <Card.Header as="h5">
          {team1}
          <br />
          vs
          <br />
          {team2}
        </Card.Header>
        <Card.Body style={{ textAlign: "left" }}>
          {!isTie ? <Card.Title>{winner}</Card.Title> : ""}

          <Card.Subtitle>
            {!isTie ? (
              <span style={{ color: "gray" }}>
                won the match by
                {wonByRun ? (
                  <span> {win_by_runs} runs</span>
                ) : (
                  <span> {win_by_wickets} wickets</span>
                )}
              </span>
            ) : (
              <Card.Title>Match was a Tie</Card.Title>
            )}
          </Card.Subtitle>
          <hr />

          <Card.Text>
            <FontAwesomeIcon color="#4c4c4c" icon={faMapMarkedAlt} /> &nbsp;{" "}
            {venue}, {city}
          </Card.Text>
          <hr />
          <Card.Text>
            <FontAwesomeIcon color="#4c4c4c" icon={faCalendarMinus} /> &nbsp;{" "}
            {date}
          </Card.Text>
          <hr />
          <Card.Text>
            <FontAwesomeIcon color="#4c4c4c" icon={faRecordVinyl} /> &nbsp; Toss
            won by {toss_winner} based on {toss_decision}
          </Card.Text>
          <hr />
          <Card.Text>
            <FontAwesomeIcon color="#4c4c4c" icon={faUser} /> &nbsp;{" "}
            <strong>Umpires :</strong>
            <br />
            {umpire1}
            <br />
            {umpire2}
            <br />
            {umpire3}
          </Card.Text>
        </Card.Body>

        <Card.Footer style={{ textAlign: "left" }}>
          <FontAwesomeIcon color="#4c4c4c" icon={faBaseballBall} /> &nbsp;{" "}
          <strong>Player of the match :</strong> <br />
          {player_of_match}
        </Card.Footer>
      </Card>
      <br />
    </span>
  );
}

export default DisplayResult;
