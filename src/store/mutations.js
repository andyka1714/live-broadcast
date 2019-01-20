export default {
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