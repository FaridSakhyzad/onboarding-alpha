'use client';

import React, { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';

import Header from '@/app/components/header';
import AsideImage from '@/app/components/asideImage/AsideImage';

import '../layouts.scss';
import './styles.scss';

export default function Signup() {
  const [ isVerificationCodeSent, setIsVerificationCodeSent ] = useState(false);

  const [ phonePrefix, setPhonePrefix ] = useState('1');
  const [ phoneNumber, setPhoneNumber ] = useState('');
  const [ isPhoneNumberValid, setIsPhoneNumberValid ] = useState(false);

  const router = useRouter();

  const validatePhoneNumber = (phoneNumber:string) => {
    if (phoneNumber.length !== 10) {
      return false;
    }

    return /[0-9]{10}/gi.test(phoneNumber);
  }

  const handlePhonePrefixChange = (e: React.SyntheticEvent) => {
    const { value } = e.target as HTMLSelectElement || {};

    setPhonePrefix(value);
  }

  const handlePhoneNumberChange = (e: React.SyntheticEvent) => {
    const { value } = e.target as HTMLInputElement || {};

    if (value.length > 10) {
      return;
    }

    const phoneNumber = value.replaceAll(/\D/ig, '')

    setPhoneNumber(phoneNumber);

    setIsPhoneNumberValid(validatePhoneNumber(phoneNumber));
  }

  const handlePhoneFormSubmitClick = (e: React.SyntheticEvent) => {
    e.preventDefault();

    sendOtpCodeToPhone(`${phonePrefix}${phoneNumber}`);
  }

  const sendOtpCodeToPhone = (phoneNumber: string) => {
    setIsVerificationCodeSent(true);
  }

  let formatPhoneNumber = (str:string) => {
    const cleaned = ('' + str).replace(/\D/g, '');

    const match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);

    if (match) {
      let intlCode = (match[1] ? '+1 ' : '')
      return [intlCode, ' ', match[2], ' ', match[3], ' ', match[4]].join('')
    }

    return null;
  }

  const [ otpNumbers, setOtpNumbers ] = useState(['', '', '', '']);
  const [ isOtpNumberValid, setIsOtpNumberValid ] = useState(false);

  const validateOtpNumber = (numbersArray: string[]) => {
    const value = numbersArray.join('');

    if (value.length !== 4) {
      return false;
    }

    return /[0-9]{4}/gi.test(value);
  }

  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const input3Ref = useRef(null);
  const input4Ref = useRef(null);

  const inputs = [
    input1Ref,
    input2Ref,
    input3Ref,
    input4Ref,
  ]

  const handleOtpChange = (e: React.SyntheticEvent, index: number) => {
    const { value } = e.target as HTMLInputElement || {};

    const newOtpNumbers = [...otpNumbers];

    newOtpNumbers[index] = value;

    setOtpNumbers(newOtpNumbers);

    setIsOtpNumberValid(validateOtpNumber(newOtpNumbers));

    if (value === '') {
      return;
    }

    if (!inputs || !inputs[index + 1]) {
      return;
    }

    if (inputs[index + 1].current === null) {
      return;
    }

    // @ts-ignore
    inputs[index + 1].current.focus();
  }

  const handleContinueButtonClick = (e: React.SyntheticEvent) => {
    e.preventDefault();

    router.push('/organizations', { scroll: false })
  }

  return (
    <div className="container">
      <div className="layout1">
        <Header />

        <main className="main">
          <div className="signup">
            {!isVerificationCodeSent && (
              <>
                <h1 className="signupTitle">Welcome to Incentive</h1>
                <div className="signupText">
                  <p className="signupTextPara">Enter your phone number to get started</p>
                </div>

                <form className="signupForm">
                  <div className="signupPhone">
                    <div className="custom-select signupPhonePrefix">
                      <select
                        className="select"
                        onChange={handlePhonePrefixChange}
                        defaultValue={phonePrefix}
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                    <input
                      type="tel"
                      placeholder="Enter Phone Number"
                      className="input signupPhoneNumber"
                      onChange={handlePhoneNumberChange}
                      value={phoneNumber}
                    />
                  </div>

                  <button
                    type="submit"
                    className="button signupSubmitButton"
                    onClick={handlePhoneFormSubmitClick}
                    disabled={!isPhoneNumberValid}
                  >Send OTP Code</button>
                </form>
              </>
            )}

            {isVerificationCodeSent && (
              <>
                <h1 className="signupTitle">Enter Your Verification Code</h1>
                <div className="signupText">
                  <p className="signupTextPara">Sent to {formatPhoneNumber(`+${phonePrefix}${phoneNumber}`)}</p>
                </div>
                <form className="verificationForm">
                  <div className="signupPhoneVerify">
                    <input
                      type="tel"
                      className="input signupPhoneVerifyNumber"
                      maxLength={1}
                      onChange={(e) => handleOtpChange(e, 0)}
                      value={otpNumbers[0]}
                      ref={input1Ref}
                    />
                    <input
                      type="tel"
                      className="input signupPhoneVerifyNumber"
                      maxLength={1}
                      onChange={(e) => handleOtpChange(e, 1)}
                      value={otpNumbers[1]}
                      ref={input2Ref}
                    />
                    <input
                      type="tel"
                      className="input signupPhoneVerifyNumber"
                      maxLength={1}
                      onChange={(e) => handleOtpChange(e, 2)}
                      value={otpNumbers[2]}
                      ref={input3Ref}
                    />
                    <input
                      type="tel"
                      className="input signupPhoneVerifyNumber"
                      maxLength={1}
                      onChange={(e) => handleOtpChange(e, 3)}
                      value={otpNumbers[3]}
                      ref={input4Ref}
                    />
                  </div>

                  <button
                    type="submit"
                    className="button verificationSubmitButton"
                    disabled={!isOtpNumberValid}
                    onClick={handleContinueButtonClick}
                  >Continue</button>

                  <button className="button link verificationSendAgainButton">Send Code Again</button>
                </form>
              </>
            )}
          </div>
        </main>
        <AsideImage />
      </div>
    </div>
  )
}