import React, { useState } from "react";
import Layout from "../../components/layout";
import { Flex, Box } from "rebass";
import LoadingIndicator from "../../components/loadingIndicator";
import HCaptcha from "@hcaptcha/react-hcaptcha";

const register = () => {
  const [captchaFilled, setCaptchaFilled] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const onLoad = () => setLoaded(true);
  return (
    <Layout instructorAd={false}>
      <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js" />
      {!captchaFilled ? (
        <Flex alignItems="center" justifyContent="center" m={[1, 2, 3]}>
          <HCaptcha
            sitekey="0e33b826-3740-4732-bbc5-98e27fba41d4"
            onVerify={(token) => setCaptchaFilled(true)}
          />
        </Flex>
      ) : (
        <Box>
          {!loaded ? (
            <Flex justifyContent="center">
              <LoadingIndicator />
            </Flex>
          ) : null}

          <iframe
            className="airtable-embed airtable-dynamic-height"
            src="https://airtable.com/embed/shrtLpsHjJtC3KIat?backgroundColor=gray"
            frameBorder="0"
            width="100%"
            height="4062"
            style={{ background: "transparent" }}
            onLoad={() => onLoad()}
          />
        </Box>
      )}
    </Layout>
  );
};

export default register;
