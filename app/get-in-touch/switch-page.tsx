"use client";

import { useState } from "react";
import FormPage from "./form-page";
import ThankYou from "./thank-you";
import { ContactForm } from "./contact-form";

const SwitchPage = () => {
  const [page, setPage] = useState(0);

  const handleSetPage = () => {
    setPage(1);
  };
  return (
    <>
      {page < 1 ? (
        <FormPage>
          <ContactForm onSetPage={handleSetPage} />
        </FormPage>
      ) : (
        <ThankYou />
      )}
    </>
  );
};

export default SwitchPage;
