import { useState, useEffect } from 'react'
import axios from 'axios'

const useAxios = ( url, initialDataValue ) => {
	const [data, setData] = useState(initialDataValue)
	const [loading, setLoading] = useState(true)

  useEffect(() => {
    const axiosData = async () => {
			try {
				setLoading(true);
				const res = await axios(url)
				if (res.status === 200) {
					setData(res.data)
				}
			} catch (error) {
				throw error;
			} finally {
				setLoading(false)
			}
    }
    axiosData()
  }, [url])

	return { loading, data }
}

export default useAxios