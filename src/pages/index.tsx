import { getSession, getAccessToken } from '@auth0/nextjs-auth0';
import type { GetServerSideProps, NextPage } from 'next'
import { withApollo } from '../lib/withApollo';

const Home: NextPage = () => {

  return null;
}



export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = getSession(req, res);

  const token = getAccessToken(req, res);

  console.log(token)

  if (!session) {
    return {
      redirect: {
        destination: '/api/auth/login',
        permanent: false
      }
    }
  } else {
    return {
      redirect: {
        destination: '/app',
        permanent: false
      }
    }
  }
}

export default withApollo(Home)