import SummaryApi from "../common/Index"

const fetchCategoryWiseProduct = async(category)=>{
    console.log(category)
    const response = await fetch(SummaryApi.categoryWiseProduct.url,{
        method : SummaryApi.categoryWiseProduct.method,
        headers : {
            "content-type" : "application/json",
        },
        body : JSON.stringify({
            category : category
        })
    })
    const dataResponse = await response.json()
    return dataResponse
}
export default fetchCategoryWiseProduct