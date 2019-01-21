export default {
    setToken(state, payload) {
        state.token = payload
    },
    setUserProfile(state, payload) {
    	state.user_profile = payload
    },
    clearUserProfile(state, payload) {
    	state.user_profile = {}
    },
    setLiveBroadcastURL(state, payload) {
    	state.live_broadcast = {...state.live_broadcast, url: payload}
    }
}