import Header from "@/app/components/header";

import '../layouts.scss';
import './styles.scss';

export default function Plans() {
  return (
    <div className="layout2">
      <Header />
      <main className="main">
        <div className="container">
          <div className="plans">
            <h2 className="plans-title">Congratulation! You’ve Successful created an organization.</h2>
            <div className="plans-text">
              <p className="plans-textPara">Now, choose the plan that’s right for your organization</p>
            </div>

            <div className="plansType">
              Monthly
              <label className="switcher plansType-switcher">
                <input type="checkbox" className="switcherControl" />
                <i className="switcherBg" />
                <i className="switcherIcon" />
              </label>
              Annual (25% off)
            </div>

            <div className="pricing">
              <div className="pricingBlock">
                <div className="pricingBlockHeader">
                  <h3 className="pricingName">Basic</h3>
                  <h2 className="pricingPrice">Free</h2>
                  <div className="pricingDescription">
                    <p>Up to 15 users</p>
                  </div>
                </div>

                <ul className="pricingFeaturesList">
                  <li className="pricingFeaturesItem">Step Challenge</li>
                  <li className="pricingFeaturesItem">Specific Rewards Only</li>
                  <li className="pricingFeaturesItem">Feed with Activities</li>
                  <li className="pricingFeaturesItem">Specific Integrations Only</li>
                </ul>

                <a href="#" className="button pricingChooseButton">Choose</a>

                <div className="pricingNote">
                  $5/ month for each additional user
                </div>
              </div>

              <div className="pricingBlock">
                <div className="pricingBlockHeader">
                  <h3 className="pricingName">Core</h3>
                  <h2 className="pricingPrice">$120 <span className="pricingPriceText">/ Month</span></h2>
                  <div className="pricingDescription">
                    <p>Up to 30 users</p>
                  </div>
                </div>

                <ul className="pricingFeaturesList">
                  <li className="pricingFeaturesItem">All Challenges</li>
                  <li className="pricingFeaturesItem">All Rewards</li>
                  <li className="pricingFeaturesItem">Feed with Activities</li>
                  <li className="pricingFeaturesItem">Create Teams</li>
                  <li className="pricingFeaturesItem">Direct, Teams and Challenges Messages</li>
                  <li className="pricingFeaturesItem">All Integrations</li>
                  <li className="pricingFeaturesItem">Analytics</li>
                </ul>

                <a href="#" className="button pricingChooseButton">Choose</a>

                <div className="pricingNote">
                  $5/ month for each additional user
                </div>
              </div>

              <div className="pricingBlock">
                <div className="pricingBlockHeader">
                  <h3 className="pricingName">Pro</h3>
                  <h2 className="pricingPrice">$349<span className="pricingPriceText">/ Month</span></h2>
                  <div className="pricingDescription">
                    <p>Up to 249 users</p>
                  </div>
                </div>

                <ul className="pricingFeaturesList">
                  <li className="pricingFeaturesItem">All Challenges</li>
                  <li className="pricingFeaturesItem">All Rewards</li>
                  <li className="pricingFeaturesItem">Feed with Activities</li>
                  <li className="pricingFeaturesItem">Create Teams</li>
                  <li className="pricingFeaturesItem">All Messages</li>
                  <li className="pricingFeaturesItem">All Integrations</li>
                  <li className="pricingFeaturesItem">Advanced Analytics</li>
                  <li className="pricingFeaturesItem">Support</li>
                </ul>

                <a href="#" className="button pricingChooseButton">Choose</a>

                <div className="pricingNote">
                  $5/ month for each additional user
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}