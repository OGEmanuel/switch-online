import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";

const Notice = ({
  name,
  email,
  phone,
  message,
  companyName,
  timestamp,
}: {
  name: string;
  email: string;
  phone: string;
  message: string;
  companyName: string;
  timestamp: string;
}) => {
  return (
    <Html>
      <Head />
      <Preview>New Contact Form Submission - {name}</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                brand: {
                  dark: "#05201F",
                  teal: "#5AE0E6",
                },
              },
            },
          },
        }}
      >
        <Head>
          <style>
            {`
          @media (min-width: 640px) {
            .sm\\:px-6 { padding-left: 1.5rem !important; padding-right: 1.5rem !important; }
            .sm\\:my-10 { margin-top: 2.5rem !important; margin-bottom: 2.5rem !important; }
            .sm\\:p-8 { padding: 2rem !important; }
            .sm\\:text-2xl { font-size: 1.5rem !important; line-height: 2rem !important; }
            .sm\\:mb-6 { margin-bottom: 1.5rem !important; }
          }
        `}
          </style>
        </Head>
        <Body className="bg-[#05201F] text-white text-base font-sans">
          <Container className="max-w-full px-4 sm:px-6">
            <Img
              src="https://i.ibb.co/tZxNZzg/logo.png"
              width="50"
              height="50"
              alt="Switch Online"
              className="mx-auto my-6 sm:my-10 max-w-full h-auto"
            />

            <Container className="bg-[#5AE0E6] p-4 sm:p-8 rounded-lg">
              <Heading className="text-center text-[#05201F] text-xl sm:text-2xl font-bold mb-4 sm:mb-6 leading-tight">
                New Contact Form Submission
              </Heading>

              <Section className="mb-4">
                <Text className="text-[#05201F] text-base">
                  Hello <strong>Admin</strong>,
                </Text>

                <Text className="text-[#05201F] text-base">
                  A new contact form has been submitted on your website at{" "}
                  <strong>{timestamp}</strong>.
                </Text>
              </Section>

              <Section className="bg-white rounded-md p-4 mb-4">
                <Text className="text-[#05201F] text-base font-bold mb-2">
                  Submission Details:
                </Text>
                <ul className="list-none p-0 m-0 space-y-2">
                  <li className="text-sm text-[#05201F]">
                    <strong>Company Name:</strong> {companyName}
                  </li>
                  <li className="text-sm text-[#05201F]">
                    <strong>Name:</strong> {name}
                  </li>
                  <li className="text-sm text-[#05201F]">
                    <strong>Email:</strong> {email}
                  </li>
                  {phone && (
                    <li className="text-sm text-[#05201F]">
                      <strong>Phone:</strong> {phone}
                    </li>
                  )}
                  <li className="text-sm text-[#05201F]">
                    <strong>Message:</strong> {message}
                  </li>
                </ul>
              </Section>

              <Section className="mt-6 text-center">
                <Text className="text-[#05201F] text-base">
                  Please review and respond to this inquiry at your earliest
                  convenience.
                </Text>
                <Text className="text-[#05201F] text-xl font-bold">
                  Switch Online Support Team
                </Text>
              </Section>
            </Container>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default Notice;
