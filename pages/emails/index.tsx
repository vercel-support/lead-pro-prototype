import { useEffect, useState } from "react";
import parse from "html-react-parser";
import { Box } from "components";
import { emails } from "constants/emails";
import { useRouter } from "next/router";
import _ from "underscore";
import { BASE_URL } from "constants/baseUrl";

const Attribute = ({ label, value }) => {
  return (
    <Box mb={4}>
      <Box
        textTransform="uppercase"
        fontSize="xs"
        lineHeight="none"
        opacity={0.5}
      >
        {label}
      </Box>
      <Box fontSize="sm">{value}</Box>
    </Box>
  );
};

const MJML = ({ email }) => {
  const [html, setHtml] = useState("");

  useEffect(() => {
    fetch(`${BASE_URL}/api/compile`, {
      method: "post",
      body: JSON.stringify({ email }),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setHtml(data.html);
      });
  }, [email]);

  return <div>{parse(html)}</div>;
};

export default function PageDashboard({ status }) {
  const [selectedEmail, setEmail] = useState(emails[0]);

  const router = useRouter();

  const { query } = router;

  const { email } = query;

  useEffect(() => {
    const e = _.findWhere(emails, { slug: email });

    if (e) {
      setEmail(e);
    }
  }, [email]);

  const handleSelectEmail = (newEmail) => {
    router.push(
      {
        pathname: "/emails",
        query: { email: newEmail.slug },
      },
      undefined,
      { shallow: true }
    );
  };

  return (
    <Box display="flex" width="100%">
      <Box w={300} bg="white" borderRight="1px solid" borderColor="gray.100">
        {emails.map((email) => {
          const isActive = selectedEmail.slug === email.slug ? true : false;

          return (
            <Box
              px={5}
              h={16}
              borderBottom="1px solid"
              cursor="pointer"
              display="flex"
              alignItems="center"
              borderColor="gray.100"
              onClick={() => handleSelectEmail(email)}
              bg={isActive ? "white" : "gray.50"}
              color={isActive ? "gray.900" : "gray.500"}
            >
              <Box>
                <Box
                  fontSize="xs"
                  lineHeight="none"
                  textTransform="uppercase"
                  opacity={0.75}
                  mb={1}
                >
                  {email.type}
                </Box>
                <Box lineHeight="none">{email.name}</Box>
              </Box>
            </Box>
          );
        })}
      </Box>
      <Box flex={1} width="100%" bg="gray.50">
        <Box
          h={16}
          bg="white"
          borderBottom="1px solid"
          borderColor="gray.100"
          display="flex"
          px={5}
          alignItems="center"
        >
          {selectedEmail.name}
        </Box>
        <Box py={12}>
          <Box maxW="500px" mx="auto">
            <Attribute label="Subject" value={selectedEmail.subject} />
            <Attribute label="Timing" value={selectedEmail.timing} />
            <MJML email={selectedEmail.slug} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
