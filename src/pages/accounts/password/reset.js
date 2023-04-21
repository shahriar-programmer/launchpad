import Layout from "@/components/Layout/Layout";
import PasswordResetForm from "@/components/Accounts/PasswordResetForm";
import Head from "next/head";

export default function reset() {
  return (
    <Layout>
      <Head>
        <title>Password Reset | Launchpad</title>
        <meta name="description" content="Launchpad" />
        <meta name="keywords" content="Launchpad" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PasswordResetForm />
    </Layout>
  )
}
