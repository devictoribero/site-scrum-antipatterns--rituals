import React, {Fragment} from 'react'
import { Head, withSiteData, withRouteData } from 'react-static'
import { Link } from '@reach/router'

function View({meta, title, slogan, callToAction, socials}) {
  return (
    <Fragment>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Head>
      
      <header style={{ textAlign: 'center' }}>
        <h1 style={{
          fontSize: '27px'
        }}>
          {title}
        </h1>

        <span style={{
          display: 'block'
        }}>
          {slogan}
        </span>
        
        <Link to="/rituals">{callToAction}</Link>
      </header>

      <footer>
        {socials.map(social => (
          <a key={social.path} href={social.path}>
            {social.label}
          </a>
        ))}
      </footer>
    </Fragment>
  )
}

const sTitle = {
  
}
export default withSiteData(withRouteData(View))