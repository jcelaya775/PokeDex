import { useState, useEffect } from 'react'
import axios from 'axios'

export default function useSearch(query, pageNumber) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [mons, setMons] = useState([])
    const [hasMore, setHasMore] = useState(false)

    useEffect(() => {
        setMons([])
    }, [query])

    useEffect(() => {
        setLoading(true)
        setError(false)

        let cancel

        axios({
            method: 'GET',
            url: 'http://localhost:5000/api/pokemons',
            params: { q: query, page: pageNumber },
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
            setMons(prevMons => {
                return [...new Set([...prevMons, ...res.data])]
            })
            setHasMore(res.data.length > 0)
            setLoading(false)
        }).catch(e => {
            if (axios.isCancel()) return
            setError(true)
        })
    }, [query, pageNumber])

    return { loading, error, mons, hasMore }
}
