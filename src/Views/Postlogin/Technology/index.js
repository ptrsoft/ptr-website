import React from 'react'
import SaasArchitecture from '../SaasArchitecture'
import { Link } from 'react-router-dom'

import {Helmet} from "react-helmet-async"
const Technology = () => {
  return (
    <div>
        <Helmet>
<title>Technologies</title>
<meta name='description' content='Cutting-Edge Technology'/>
<link rel="canonical" href="/process" />
    </Helmet>
    <SaasArchitecture/>
    </div>
  )
}

export default Technology