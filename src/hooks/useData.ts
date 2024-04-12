import axios from "axios";
import { useEffect, useState } from "react";

interface ApiResponse {
    id:number;
}

export const useData =(url:string) =>{
   const [data, setData] = useState<ApiResponse[]>([])
   const [error, setError] = useState<string |null>(null)
   const [loading, setLoading] = useState(true)

   useEffect(() => {
    const fetchData = async () =>{
        try {
            const response = await axios.get<ApiResponse[]>(url)
            setData(response.data)
            setLoading(false)
        }
        catch(error:any){
            setError(error.message)
        }
    }
    fetchData()
   }, [url])

   return {data,loading,error}
}