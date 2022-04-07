import { getAccessToken, useUser } from '@auth0/nextjs-auth0';
import type { GetServerSideProps, NextPage } from 'next'

const Home: NextPage = () => {
  const { user } = useUser();

  return (
    <div>
      <h1>Hello world!!</h1>

      <pre>
        {JSON.stringify(user, null, 2)}
      </pre>
      <a href="/api/auth/login">Login</a>
    </div>
  )
}

export default Home


export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const token = getAccessToken(req, res);

  console.log(token)

  return {
    props: {}
  }
}