import Header from '@/app/components/header';
import AsideImage from '@/app/components/asideImage/AsideImage';

import '../layouts.scss';
import './styles.scss';

export default function Signup() {
  return (
    <div className="container">
      <div className="layout1">
        <Header />
        <main className="main">
          <div className="signup">
            <h1 className="signupTitle">Welcome to Incentive</h1>
            <div className="signupText">
              <p className="signupTextPara">Enter your phone number to get started</p>
            </div>
            <form className="signupForm">
              <div className="signupPhone">
                <div className="custom-select signupPhonePrefix">
                  <select className="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </div>
                <input
                  type="tel"
                  placeholder="Enter Phone Number"
                  className="input signupPhoneNumber"
                />
              </div>

              <button
                type="submit"
                className="button signupSubmitButton"
                disabled
              >Send OTP Code</button>
            </form>

            <form className="verificationForm">
              <div className="signupPhoneVerify">
                <input
                  type="number"
                  className="input signupPhoneVerifyNumber"
                />
                <input
                  type="number"
                  className="input signupPhoneVerifyNumber"
                />
                <input
                  type="number"
                  className="input signupPhoneVerifyNumber"
                />
                <input
                  type="number"
                  className="input signupPhoneVerifyNumber"
                />
              </div>

              <button
                type="submit"
                className="button verificationSubmitButton"
                disabled
              >Continue</button>

              <button className="button link verificationSendAgainButton">Send Code Again</button>
            </form>

          </div>
        </main>
        <AsideImage />
      </div>
    </div>
  )
}