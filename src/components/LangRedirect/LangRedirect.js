import React, { useEffect } from 'react';
import { useParams, useNavigate, useLocation } from "react-router-dom";

export const LangRedirect = () => {
  const { lang } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.state?.from);

  useEffect(() => {
    // TODO update redirect
    if (!lang) {
      navigate(`${lang || 'en'}`);
    }
  }, []);

  return (
    <div>test</div>
  )
};
