import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Lock } from "lucide-react";
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
  padding: 14px;
//   padding-left: 42px;
text-indent: 25px; 
  border-radius: 10px;
  border: none;
  outline: none;
  background: #121626;
  color: #fff;
`;

const Button = styled(motion.button)`
  width: 100%;
  margin-top: 1.2rem;
  padding: 14px;
  border-radius: 12px;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  color: #fff;
  background: linear-gradient(135deg, #6c76fd, #9c5bf8);
`;

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const navigate = useNavigate()

  const reset = () => {
    console.log(password, confirm); // send to backend
  };

  return (
    <Page>
      <Card
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Title>Create new password</Title>
        <Subtitle>
          Choose a strong password for your account
        </Subtitle>

        <Field>
          <Icon><Lock size={18} /></Icon>
          <Input
            type="password"
            placeholder="New password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Field>

        <Field>
          <Icon><Lock size={18} /></Icon>
          <Input
            type="password"
            placeholder="Confirm password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />
        </Field>

        <Button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} onClick={ () => {
            reset()
            navigate("/auth", {state: {section: "signin"}})
            }}>
          Reset password
        </Button>
      </Card>
    </Page>
  );
}
