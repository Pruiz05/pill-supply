'use client'

import { createClient } from '@/utils/supabase/client'
import { useEffect, useState } from 'react'

const PillPage = () => {
    const [pills, setPills] = useState<any[] | null>(null)
    const supabase = createClient()

    useEffect(() => {
        const getData = async () => {
            const { data } = await supabase.from('pills').select()
            setPills(data)
        }
        getData()
    }, [])

    return <pre>{JSON.stringify(pills, null, 2)}</pre>
}

export default PillPage