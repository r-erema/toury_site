import {ADD_PLAYER_ACTION, CHANGE_TOURNEY_TEAMS_COUNT_ACTION} from "./actions";
import uniqid from "uniqid";

export const tourneyTeamsCount = (tourneyTeamsCount = 64, action = {}) => {
    switch (action.hasOwnProperty('type') && action.type) {
        case CHANGE_TOURNEY_TEAMS_COUNT_ACTION: {
            return action.count;
        }
        default: {
            return tourneyTeamsCount;
        }
    }
};

export const players = (players = [], action = {}) => {

    switch (action.type) {
        case ADD_PLAYER_ACTION: {
            return [...players, {
                id: uniqid(),
                name: 'Player name',
                teamsCount: 0,
            }]
        }
        default: {
            return players;
        }
    }
};

export const requiredTeams = (teams = []) => {
    return teams;
};