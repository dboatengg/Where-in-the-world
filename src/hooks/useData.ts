import axios from "axios";
import { useEffect, useState } from "react";

export interface ApiResponse {
    region:string;
    population:number;
    name:{common:string}
    flags:string[]
    capital:string
}

export const useData =(url:string) =>{
   const [data, setData] = useState<ApiResponse[]>([])
   const [error, setError] = useState<string |null>(null)
   const [loading, setLoading] = useState(false)

   useEffect(() => {
    setLoading(true)
    const fetchData = async () =>{
        try {
            const response = await axios.get<ApiResponse[]>(url)
            setData(response.data)
            setLoading(false)
        }
        catch(error:any){
            setError(error.message)
            setLoading(false)
        }
    }
    fetchData()
   }, [url])

   return {data,loading,error}
}