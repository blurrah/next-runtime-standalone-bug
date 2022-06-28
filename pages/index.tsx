import getConfig from "next/config";
/** Add your relevant code here for the issue to reproduce */
export default function Home({ test }) {
  const { publicRuntimeConfig } = getConfig();
  return (
    <p>
      {test} - {publicRuntimeConfig.publicTest}
    </p>
  );
}

export function getServerSideProps() {
  const { serverRuntimeConfig } = getConfig();

  return {
    props: {
      test: serverRuntimeConfig.test,
    },
  };
}
