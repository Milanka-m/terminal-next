import { AxiosPromise } from "axios"
import { axios } from "../../core"

export default {
	show: (): AxiosPromise => 
		axios.get("api/portfolios?populate=images"),
}