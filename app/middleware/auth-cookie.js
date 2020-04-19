import Cookies from 'universal-cookie'

export default({req,store}) => {
    if(process.browser){
        return
    }
    const cookies = new Cookies(req.headers.cookie)
    const user = cookiews.get('user')
    if(user && user.id){
        const {id,likes} = userstore.commit('setUser',{user:{id,likes}})
    }
}