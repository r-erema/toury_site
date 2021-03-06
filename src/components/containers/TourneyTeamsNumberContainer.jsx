import React from 'react';
import {CHANGE_TOURNEY_TEAMS_COUNT_ACTION, changeTourneyTeamsCountAction} from "../../actions";
import {players, tourneyTeamsCount} from "../../reducers";
import {connect} from "react-redux";
import TourneyTeamsNumberView from "../views/TourneyTeamsNumberView.jsx";

const mapStateToProps= (state) => {
    return {
        tourneyTeamsCount: tourneyTeamsCount(state.tourneyTeamsCount, CHANGE_TOURNEY_TEAMS_COUNT_ACTION),
        players: players(state.players)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeTourneyTeamsCount: (event) => {
            dispatch(changeTourneyTeamsCountAction(event.target.value))
        }
    };
};

const TourneyTeamsNumberContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TourneyTeamsNumberView);

export default TourneyTeamsNumberContainer;