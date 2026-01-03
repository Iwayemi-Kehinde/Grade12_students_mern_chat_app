import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Mail, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

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

const Card = styled(motion.div)`
  background: #0f1629;
  border-radius: 18px;
  padding: 3rem;
  max-width: 420px;
  width: 100%;
  box-shadow: 0 20px 50px rgba(0,0,0,0.35);

  @media (max-width: 480px) {
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
  margin-bottom: 1.5rem;
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
  padding: 14px;
//   padding-left: 42px;
  border-radius: 10px;
  border: none;
  outline: none;
  background: #121626;
  color: #fff;
  font-size: 0.95rem;
  text-indent: 25px; 

  &::placeholder {
    color: #7f89ff;
  }
`;

const Button = styled(motion.button)`
  width: 100%;
  margin-top: 1rem;
  padding: 14px;
  border-radius: 12px;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  color: #fff;
  background: linear-gradient(135deg, #6c76fd, #9c5bf8);
`;

const Back = styled.div`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  text-align: center;
  color: #7f89ff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  &:hover {
    text-decoration: underline;
  }
`;

export default function ForgotPassword() {
    const [email, setEmail] = useState("");
    const navigate = useNavigate()
    return (
        <Page>
            <Card
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Title>Forgot password?</Title>
                <Subtitle>
                    Enter your email and we’ll send you a one-time code to reset your password.
                </Subtitle>

                <Field>
                    <Icon><Mail size={18} /></Icon>
                    <Input
                        type="email"
                        placeholder="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Field>

                <Button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} onClick={() => navigate("/verify-otp")}>
                    Send OTP
                </Button>

                <Back onClick={() => navigate("/auth", { state: { section: "signin" } })}>
                    <ArrowLeft size={16} />
                    Back to Auth
                </Back>
            </Card>
        </Page>
    );
}
