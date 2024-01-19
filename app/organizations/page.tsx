import Image from 'next/image'

import Header from "@/app/components/header";
import AsideImage from "@/app/components/asideImage/AsideImage";
import '../layouts.scss';
import './styles.scss';

export default function Page1() {
  return (
    <div className="container">
      <div className="layout1">
        <Header />
        <main className="main">
          <div className="organizations">
            <h2 className="organizations-title">Welcome Back</h2>

            <div className="organizations-text">
              Organizations for +1 458 923 2923
            </div>

            <div className="orgsList">
              <div className="orgsListItem">
                <div className="orgsListItem-imageBox">
                  <Image
                    className="orgsListItem-image"
                    src="/img--org-1.jpg"
                    width={80}
                    height={80}
                    alt="Organization 1"
                  />
                </div>
                <div className="orgsListItem-content">
                  <div className="orgsListItem-name">Nerou</div>
                  <div className="orgsListItem-urlBox">
                    <a href="#" className="orgsListItem-url">incentive.com/nerou/nerou/nerou/nerou</a>
                  </div>
                  <div className="orgsListItem-employees">
                    <div className="orgsListItem-employeesPeople">
                      <div className="orgsListItem-employeesImageBox">
                        <Image
                          className="orgsListItem-employeesImage"
                          src="/pic--avatar-1.jpg"
                          width={80}
                          height={80}
                          alt="Human 1"
                        />
                      </div>
                      <div className="orgsListItem-employeesImageBox">
                        <Image
                          className="orgsListItem-employeesImage"
                          src="/pic--avatar-2.jpg"
                          width={80}
                          height={80}
                          alt="Human 2"
                        />
                      </div>
                      <div className="orgsListItem-employeesImageBox">
                        <Image
                          className="orgsListItem-employeesImage"
                          src="/pic--avatar-3.jpg"
                          width={80}
                          height={80}
                          alt="Human 3"
                        />
                      </div>
                    </div>
                    <div className="orgsListItem-employeesText">15 Employees</div>
                  </div>
                </div>
                <div className="orgsListItem-controls">
                  <button className="button orgsListItem-launchButton">Launch</button>
                </div>
              </div>

              <div className="orgsListItem">
                <div className="orgsListItem-imageBox">
                  <Image
                    className="orgsListItem-image"
                    src="/img--org-1.jpg"
                    width={80}
                    height={80}
                    alt="Organization 1"
                  />
                </div>
                <div className="orgsListItem-content">
                  <div className="orgsListItem-name">Nerou</div>
                  <div className="orgsListItem-urlBox">
                    <a href="#" className="orgsListItem-url">incentive.com/nerou/nerou/nerou/nerou</a>
                  </div>
                  <div className="orgsListItem-employees">
                    <div className="orgsListItem-employeesPeople">
                      <div className="orgsListItem-employeesImageBox">
                        <Image
                          className="orgsListItem-employeesImage"
                          src="/pic--avatar-1.jpg"
                          width={80}
                          height={80}
                          alt="Human 1"
                        />
                      </div>
                      <div className="orgsListItem-employeesImageBox">
                        <Image
                          className="orgsListItem-employeesImage"
                          src="/pic--avatar-2.jpg"
                          width={80}
                          height={80}
                          alt="Human 2"
                        />
                      </div>
                      <div className="orgsListItem-employeesImageBox">
                        <Image
                          className="orgsListItem-employeesImage"
                          src="/pic--avatar-3.jpg"
                          width={80}
                          height={80}
                          alt="Human 3"
                        />
                      </div>
                    </div>
                    <div className="orgsListItem-employeesText">15 Employees</div>
                  </div>
                </div>
                <div className="orgsListItem-controls">
                  <button className="button orgsListItem-launchButton">Launch</button>
                </div>
              </div>
            </div>

            <a href="/create-organisation" className="button aqua organizations-addButton"><i className="organizations-addButtonIcon" />Add Another Organization</a>
          </div>
          <div className="notSeeYourOrg">
            Not seeing your organization? <a href="#">Try Different Phone Number</a>
          </div>
        </main>
        <AsideImage />
      </div>
    </div>
  )
}