import React, { useState } from "react";
import Layout from "../components/layout";
import { Flex, Text } from "rebass";
import LoadingIndicator from "../components/loadingIndicator";

const register = () => {
  const [loaded, setLoaded] = useState(false);
  const onLoad = () => setLoaded(true);
  return (
    <Layout instructorAd={false}>
      {!loaded ? (
        <Flex justifyContent="center" m={3}>
          <LoadingIndicator />
        </Flex>
      ) : null}
      <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js" />
      <iframe
        className="airtable-embed airtable-dynamic-height"
        src="https://airtable.com/embed/shr7GQzrLKHSVSW5t?backgroundColor=gray"
        frameBorder="0"
        width="100%"
        height="3596"
        style={{ background: "transparent" }}
        onLoad={() => onLoad()}
      />
    </Layout>
  );
};

export default register;
