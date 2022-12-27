import React, { useEffect } from 'react';
import { useParams, useNavigate, useLocation } from "react-router-dom";

import { getBaseUrl } from "constant";

export const LangRedirect = () => {
  const { lang } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!lang) {
      navigate(`/${getBaseUrl(lang || 'en')}`);
    }
  }, []);

  return (
    <div>test</div>
  )
};
