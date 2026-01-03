import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Mail, Lock, User } from "lucide-react";
import { useNavigate, useLocation  } from "react-router-dom";

const Page = styled.div`
  min-height: 100vh;
  background: #121626;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  color: #fff;
  font-family: Inter, system-ui, sans-serif;
`;

const Layout = styled.div`
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const Brand = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: flex-end;

  @media (max-width: 900px) {
    align-items: center;
    text-align: center;
  }
`;

const Logo = styled.div`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
`;

const Tagline = styled.p`
  font-size: 1.1rem;
  opacity: 0.8;
`;

const Card = styled(motion.div)`
  background: #0f1629;
  border-radius: 18px;
  padding: 3rem;
  max-width: 420px;
  width: 100%;
  box-shadow: 0 20px 50px rgba(0,0,0,0.35);
  justify-self: end;

  @media (max-width: 900px) {
    justify-self: center;
    padding: 2rem;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 0.4rem;
`;

const Subtitle = styled.p`
  color: #ccc;
  margin-bottom: 2rem;
`;

const Field = styled.div`
  position: relative;
  margin-bottom: 1.2rem;
`;

const Icon = styled.div`
  position: absolute;
  top: 50%;
  left: 14px;
  transform: translateY(-50%);
  color: #9aa4ff;
`;

const Input = styled.input`
  width: 100%;
  padding: 14px 14px 14px 14px;
  border-radius: 10px;
  border: none;
  outline: none;
  background: #121626;
  color: #fff;
  font-size: 0.95rem;
    text-indent: 27px;

  &::placeholder {
    color: #7f89ff;
    margin-left: 30px;
  }
`;

const ForgotPassword = styled.p`
  margin-top: 0.4rem;
  font-size: 0.85rem;
  text-align: right;

  span {
    color: #7f89ff;
    cursor: pointer;
    font-weight: 500;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 0.8;
      text-decoration: underline;
    }
  }
`;


const Button = styled(motion.button)`
  width: 100%;
  margin-top: 1.6rem; /* was 1rem */
  padding: 14px;
  border-radius: 12px;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  color: #fff;
  background: linear-gradient(135deg, #6c76fd, #9c5bf8);
`;

const SwitchText = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  text-align: center;

  span {
    color: #0f28c8;
    cursor: pointer;
    font-weight: 600;
  }
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: 1.5rem 0;
  font-size: 0.85rem;
  opacity: 0.7;

  &::before,
  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background: #2a2f55;
  }

  span {
    margin: 0 10px;
  }
`;

const GoogleBtn = styled(motion.button)`
  width: 100%;
  padding: 13px;
  border-radius: 12px;
  border: 1px solid #2a2f55;
  background: transparent;
  color: #fff;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
`;

export default function AuthPage() {
  const [mode, setMode] = useState("signup");
  const navigate = useNavigate()
  const location = useLocation()
  useEffect(() => {
    if (location.state?.section) {
      setMode(location.state.section);
    }
  }, [location.state?.section]);  
  return (
    <Page>
      <Layout>
        <Brand>
          <Logo>SS3 Chat App</Logo>
          <Tagline>Connect . Collaborate . Communicate</Tagline>
        </Brand>

        <Card
          key={mode}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Title>{mode === "signup" ? "Create account" : "Sign in"}</Title>
          <Subtitle>
            {mode === "signup"
              ? "Join SS3 chat today!"
              : "Welcome back to SS3 chat"}
          </Subtitle>

          {mode === "signup" && (
            <Field>
              <Icon><User size={18} /></Icon>
              <Input placeholder="Full name" />
            </Field>
          )}

          <Field>
            <Icon><Mail size={18} /></Icon>
            <Input placeholder="Email address" />
          </Field>

          <Field>
            <Icon><Lock size={18} /></Icon>
            <Input
              type="password"
              placeholder={mode === "signup" ? "Create password" : "Password"}
            />
          </Field>

          {mode === "signin" && (
            <ForgotPassword onClick={() => navigate("/forgot-password")}>
              <span>Forgot password?</span>
            </ForgotPassword>
          )}

          <Button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            {mode === "signup" ? "Create account" : "Sign in"}
          </Button>

          <Divider><span>OR</span></Divider>

          <GoogleBtn whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="google"
              width="18"
            />
            {mode === "signup" ? "Sign up with Google" : "Sign in with Google"}
          </GoogleBtn>

          <SwitchText>
            {mode === "signup" ? (
              <>Already have an account? <span onClick={() => setMode("signin")}>Sign in</span></>
            ) : (
              <>Don’t have an account? <span onClick={() => setMode("signup")}>Create one</span></>
            )}
          </SwitchText>
        </Card>
      </Layout>
    </Page>
  );
}
