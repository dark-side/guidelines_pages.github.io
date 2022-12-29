import React, { useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";

import { getBaseUrl } from "constant";

export const LangRedirect = () => {
  const { lang } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!lang) {
      navigate(`/${getBaseUrl(lang || 'en')}`);
    }
  }, [lang]);

  return (
    <div>test</div>
  )
};
