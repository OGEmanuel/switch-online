type Props = {
  name: string;
  message: string;
  email: string;
};

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
import * as React from "react";

export const ThankYou = ({ name, message, email }: Props) => {
  return (
    <Html>
      <Head />
      <Preview>Switch Online - Thank You!</Preview>
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
                Thank you for reaching out to Switch Online!
              </Heading>

              <Section className="mb-4">
                <Text className="text-[#05201F] text-base">
                  Dear <strong>{name}</strong>,
                </Text>

                <Text className="text-[#05201F] text-base">
                  We have successfully received your message and will get back
                  to you shortly.
                </Text>

                <Text className="text-[#05201F] text-base font-bold mt-4">
                  Your Submitted Details:
                </Text>
              </Section>

              <Section className="bg-white rounded-md p-4 mb-4">
                <ul className="list-none p-0 m-0 space-y-2">
                  <li className="text-sm text-[#05201F]">
                    <strong>Name:</strong> {name}
                  </li>
                  <li className="text-sm text-[#05201F]">
                    <strong>Email:</strong> {email}
                  </li>
                  <li className="text-sm text-[#05201F]">
                    <strong>Message:</strong> {message}
                  </li>
                </ul>
              </Section>

              <Section className="mt-6 text-center">
                <Text className="text-[#05201F] text-base">Best Regards,</Text>
                <Text className="text-[#05201F] text-xl font-bold">
                  Switch Online Team
                </Text>
              </Section>
            </Container>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ThankYou;
