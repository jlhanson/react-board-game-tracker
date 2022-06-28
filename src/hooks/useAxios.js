import { useState, useEffect } from 'react'
import axios from '../utils/axios'
import { writeToCache, readFromCache } from '../utils/cache'

const useAxios = (url, initialDataValue) => {
  const [data, setData] = useState(initialDataValue)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const axiosData = async () => {
      try {
        //const cached = readFromCache(url)
        const cached = JSON.parse(localStorage.getItem(url))
        let result
        setLoading(true)

        if (cached) {
          result = cached
        } else {
          const res = await axios(url)

          if (res.status === 200) {
            //writeToCache(url, res.data)
            localStorage.setItem(url, JSON.stringify(res.data))
            result = res.data
          }
        }
        setData(result)
      } catch (error) {
        throw error
      } finally {
        setLoading(false)
      }
    }
    axiosData()
  }, [url])

  return { loading, data }
}

export default useAxios
