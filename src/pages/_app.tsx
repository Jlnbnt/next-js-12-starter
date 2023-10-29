import React, { useEffect } from 'react'

import { Layout } from '@/components/layout/Layout'
import { SeoHead } from '@/components/layout/seo/SeoHead'

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import frLocale from 'date-fns/locale/fr'
import { AppProps } from 'next/dist/shared/lib/router/router'
import PropTypes from 'prop-types'

import '../styles/reset/reset.css'

export default function App(props: AppProps): JSX.Element {
  const { Component, pageProps } = props

  // Remove the server-side injected CSS.
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles?.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <>
      <SeoHead />
      <LocalizationProvider
        dateAdapter={AdapterDateFns}
        adapterLocale={frLocale}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </LocalizationProvider>
    </>
  )
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
}
