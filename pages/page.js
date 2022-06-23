import React from 'react'
import Head from 'next/head'

const Page = (props) => {
  return (
    <>
      <link rel="canonical" href="https://reparaturservice-kormann.de/index">
      
      <div className="page-container">
        <Head>
          <title>Page - Copy of Copy of Landing Page1</title>
          <meta
            property="og:title"
            content="Page - Copy of Copy of Landing Page1"
          />
        </Head>
      </div></link>
      <style jsx>
        {`
          .page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default Page
