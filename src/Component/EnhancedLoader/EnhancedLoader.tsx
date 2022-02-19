import React, { useEffect, useState } from "react";
import styled from "styled-components";
import LoaderSub from "../../subscribtions/loader/loader";

const StyledEnhancedLoader = styled.div`
  background: #ffffff2b;
  backdrop-filter: blur(9px);
  position: fixed;
  left: 50%;
  top: 2%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  padding: 0 10px;
  border-radius: 12px;
  transform: translate(-50%, -150%);
  transition: 1s;

  &.is-loading {
    transform: translate(-50%, 0%);
  }

  .loader {
    border: 2px solid transparent;
    border-radius: 50%;
    border-top: 2px solid #000000;
    width: 20px;
    height: 20px;
    -webkit-animation: spin 2s linear infinite; /* Safari */
    animation: spin 2s linear infinite;
    margin-right: 10px;
  }

  /* Safari */
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const EnhancedLoader = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingHint, setLoadingHint] = useState("Loading");
  useEffect(() => {
    LoaderSub.subscribe((v) => {
      if (typeof v == "string") {
        setLoadingHint(v);
        setIsLoading(true);
      } else {
        setIsLoading(v);
        if (!v) {
          setLoadingHint("Loading");
        }
      }
    });
  }, []);
  return (
    <StyledEnhancedLoader className={isLoading ? "is-loading" : ""}>
      <div className="loader" />
      <p>{loadingHint}</p>
    </StyledEnhancedLoader>
  );
};

export default EnhancedLoader;
