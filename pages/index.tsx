import getConfig from "next/config";
/** Add your relevant code here for the issue to reproduce */
export default function Home({ test }) {
  return <p>{test}</p>;
}

export function getServerSideProps() {
  const { serverRuntimeConfig } = getConfig();

  return {
    props: {
      test: serverRuntimeConfig.test,
    },
  };
}
