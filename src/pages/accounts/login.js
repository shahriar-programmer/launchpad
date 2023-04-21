import Layout from "@/components/Layout/Layout";
import LoginForm from "@/components/Accounts/LoginForm";
import Head from "next/head";

export default function login() {
  return (
    <Layout>
      <Head>
        <title>Login | Launchpad</title>
        <meta name="description" content="Launchpad" />
        <meta name="keywords" content="Launchpad" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LoginForm />
    </Layout>
  );
}
