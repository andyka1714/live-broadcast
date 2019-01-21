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
    setStreamInfo(state, payload) {
    	state.stream_info = payload
    },
    setProduct(state, payload) {
    	state.products = payload
    }
}