// @ts-ignore
import { Services, Hooks, Reducers } from "@khairul/api"

export const getStarlink = () => {
    const hooks = Hooks.useHooks()
    Services.get(`/v4/starlink`)
        .then((res) => {
            hooks.getDispatch()({ type: Reducers.ActionType.SET_DATA, data: res.data })
        })
}