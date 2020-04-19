export const state = () => ({
    isLoggendIn: false,
    user: null
})

export const getters = {
    isLoggendIn: (state) => state.isLoggendIn,
    user: (state) => state.user
}

export const mutations = {
    setUser(state,{user}){
        state.user = user 
        state.isLoggendIn = true
    }
}

export const actions = {
    async login({commit},{id}){
        const user = await this.$axios.$get('/users/${id}.json')
        if(!user.id)throw new Error('Invalid user')
        commit('setUser',{user})
    },
    async register({commit},{id}){
        const payload = {}
        payload[id] = {id}
        await this.$axios.$patch('/users.json',payload)
        const user = await this.$axios.$get('/users/${id}.json')
        if(!user.id) throw new Error ('Invalid user')
        commit('setUser',{user})
    }
}