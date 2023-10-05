import { Topic } from "../core/interfaces/types";

type TopicState = {
    topics: Topic[]
}

export enum ActionType { ADDED, UPDATED, LOADED }

type ActionAdded = { type: ActionType.ADDED, payload: { topic: Topic } }
type ActionUpdated = { type: ActionType.UPDATED, payload: { topic: Topic } }
type ActionLoaded = { type: ActionType.LOADED, payload: { topics: Topic[] } }

type Action = ActionAdded | ActionUpdated | ActionLoaded


function reducer(state: TopicState, action: Action): TopicState {

    switch (action.type) {
        case ActionType.ADDED: {
            const new_topic = action.payload.topic
            return { topics: [new_topic, ...state.topics] }
        }
        case ActionType.UPDATED: {
            const updatedTopic = action.payload.topic;
            const updatedTopics = state.topics.map((topic) => {
                if (topic.id === updatedTopic.id) {
                    return updatedTopic;
                }
                return topic;
            });
            return { topics: updatedTopics };
        }
        case ActionType.LOADED: {
            return { topics: [...action.payload.topics] }
        }
        default: {
            console.warn('Action Inválida')
            return state
        }
    }

}

export { reducer as TopicReducer };