import React, { useEffect } from 'react'
import { Button } from 'antd'
import { get } from '../../utils'

export default function Index() {
  useEffect(() => {
    get('/index-infos').then(() => {
      
    })
  }, [])
  return <div>
    <Button type='primary'>Index</Button>
  </div>
}