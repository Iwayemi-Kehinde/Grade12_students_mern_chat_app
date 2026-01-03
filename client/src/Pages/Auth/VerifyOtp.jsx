import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
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

const OTPRow = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

const OTPInput = styled.input`
  width: 48px;
  height: 54px;
  border-radius: 10px;
  border: none;
  outline: none;
  background: #121626;
  color: #fff;
  font-size: 1.2rem;
  text-align: center;
`;

const Button = styled(motion.button)`
  width: 100%;
  padding: 14px;
  border-radius: 12px;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  color: #fff;
  background: linear-gradient(135deg, #6c76fd, #9c5bf8);
`;

const Resend = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  text-align: center;
  color: #7f89ff;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export default function VerifyOTP() {
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const inputs = useRef([]);
    const navigate = useNavigate()

    const handleChange = (value, index) => {
        if (!/^\d?$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < 5) {
            inputs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputs.current[index - 1].focus();
        }
    };

    const submitOTP = () => {
        const code = otp.join("");
        console.log(code); // send to backend
    };

    return (
        <Page>
            <Card
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Title>Verify code</Title>
                <Subtitle>
                    Enter the 6-digit code sent to your email
                </Subtitle>

                <OTPRow>
                    {otp.map((digit, i) => (
                        <OTPInput
                            key={i}
                            maxLength={1}
                            value={digit}
                            ref={(el) => (inputs.current[i] = el)}
                            onChange={(e) => handleChange(e.target.value, i)}
                            onKeyDown={(e) => handleKeyDown(e, i)}
                        />
                    ))}
                </OTPRow>

                <Button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} onClick={() => {
                    submitOTP()
                    navigate("/reset-password")
                }}>
                    Verify OTP
                </Button>

                <Resend>Resend code</Resend>
            </Card>
        </Page>
    );
}
