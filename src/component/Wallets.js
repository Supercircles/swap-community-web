import React, { Component } from "react";
import Navbar from "./Navbar";
import "../css/Wallets.css";

export default class GetStarted extends Component {
  render() {
    return (
      <span>
        <div
          className="hero parallax is-cover is-relative is-default is-bold"
          data-background="assets/img/graphics/backgrounds/tropical_background1.jpg"
          data-color="#151933"
          data-color-opacity="0.9"
        >
          <Navbar />
          <div id="main-hero" className="hero-body ">
            <div className="container has-text-centered">
              <div className="columns">
                <div className="column is-6 is-offset-3 has-text-centered is-header-caption">
                  <h1 className="title is-spaced main-title is-2">
                    <i class="im im-icon-Wallet"></i> Wallets
                  </h1>
                  <h2 className="subtitle is-5 light-text">
                    Choose a wallet and secure your seed key
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section section-alt section-feature is-medium">
          <div className="container">
            <div className="columns services-cards is-minimal is-vcentered is-gapless is-multiline">
              <div className="column">
                <div className="card light-bordered has-text-centered">
                  <div className="card-icon">
                    <i className="im im-icon-Two-Windows"></i>
                  </div>
                  <div className="card-title">
                    <h4>Light Web Wallet</h4>
                  </div>
                  <div className="card-content">
                    <p className="description">
                      <p className="mb-10">
                        Convenient browser access.<br />
                        For full privacy features: Download a wallet and sync Daemon.
                      </p>
                      <p className="description">
                        <div className="button primary-btn raised action-button">
                          <a href="https://wallet.swap-community.com/">
                            Login Online
                          </a>
                        </div>
                      </p>
                      <p className="version"></p>
                    </p>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="card light-bordered has-text-centered">
                  <div className="card-icon">
                    <i className="im im-icon-Android"></i>
                  </div>
                  <div className="card-title">
                    <h4>Android Wallet</h4>
                  </div>
                  <div className="card-content">
                    <p className="description">
                      <p className="mb-10">Send and recieve from your Phone</p>
                      <p className="description">
                        <a href="https://play.google.com/store/apps/details?id=com.swap.xwpwallet">
                          <img
                            alt="Google Play Store"
                            src="assets/img/logos/brands/google_play_store_badge.png"
                          />
                        </a>
                      </p>
                    </p>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="card light-bordered has-text-centered">
                  <div className="card-icon">
                    <i className="im im-icon-Usb-2"></i>
                  </div>
                  <div className="card-title">
                    <h4>Hardware Wallet</h4>
                  </div>
                  <div className="card-content">
                    <p className="description walletName">
                      <p className="mb-10">Use cold storage with Ledger</p>
                      <p className="description">
                        <a href="https://github.com/swap-dev/ledger-app-swap/releases/download/1.5.1/app.hex">
                          Swap Ledger App
                        </a>
                      </p>
                      <p className="version">v1.5.1</p>
                    </p>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="card light-bordered has-text-centered">
                  <div className="card-icon">
                    <i className="im im-icon-Windows-Microsoft"></i>
                  </div>
                  <div className="card-title">
                    <h4>Windows Wallets</h4>
                  </div>
                  <div className="card-content">
                    <p className="description walletName">
                      <a href="https://github.com/swap-dev/swap-electron-gui-wallet/releases/download/v3.2.1/Swap.Electron.Wallet.Setup.3.2.1.exe">
                        Windows Electron GUI
                      </a>
                    </p>
                    <p className="version">v3.2.1 Crested Coua</p>
                    <span className="hash">Official SHA256 Hash</span>
                    <pre>97715E7E84AEE41FFC41176802D8794A</pre>
                    <pre>AD18261EFCA5DBDA9DE10878AC597CD1</pre>
                    <hr />
                    <p className="description walletName">
                      <a href="https://github.com/swap-dev/swap-gui/releases/download/v3.2.1.0/swap-v3.2.1-gui-win.zip">
                        Windows Qt GUI
                      </a>
                    </p>
                    <p className="version">v3.2.1 Crested Coua</p>
                    <span className="hash">Official SHA256 Hash</span>
                    <pre>DD49C000AEC135872014351759709824</pre>
                    <pre>439D22D228A12D879BF592E828CC3653</pre>
                    <hr />
                    <p className="description walletName">
                      <a href="https://github.com/swap-dev/swap/releases/download/v3.2.1/swap-3.2.1-cli-win64.zip">
                        Windows CLI
                      </a>
                    </p>
                    <p className="version">v3.2.1 Crested Coua</p>
                    <span className="hash">Official SHA256 Hash</span>
                    <pre>88FE1D43C60C7B29E3520288CE88C529</pre>
                    <pre>2F18AC7C6A59DA5C0160D6D19BA5D79A</pre>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="card light-bordered has-text-centered">
                  <div className="card-icon">
                    <i className="im im-icon-Linux"></i>
                  </div>
                  <div className="card-title">
                    <h4>Linux Wallets</h4>
                  </div>
                  <div className="card-content">
                    <p className="description walletName">
                      <a href="https://github.com/swap-dev/swap-electron-gui-wallet/releases/download/v3.2.1/Swap.Electron.Wallet-3.2.1.AppImage">
                        Linux Electron GUI
                      </a>
                    </p>
                    <p className="version">v3.2.1 Crested Coua</p>
                    <span className="hash">Official SHA256 Hash</span>
                    <pre>09BF90F59B444646BF7DF92C8F13EC40</pre>
                    <pre>DD1128E5CCCD0DF5F7CA01918A543403</pre>
                    <hr />
                    <p className="description walletName">
                      <a href="https://github.com/swap-dev/swap-gui/releases/download/v3.2.1.0/swap-v3.2.1-gui-linux.tar.gz">
                        Linux Qt GUI
                      </a>
                    </p>
                    <p className="version">v3.2.1 Crested Coua</p>
                    <span className="hash">Official SHA256 Hash</span>
                    <pre>6314322A6B5A40A5F990DD70D6A22B9B</pre>
                    <pre>C8A814B29FBA66B5DA1C6212EAC6D00C</pre>
                    <hr />
                    <p className="description walletName">
                      <a href="https://github.com/swap-dev/swap/releases/download/v3.2.1/swap-3.2.1-cli-linux.tar.gz">
                        Linux CLI
                      </a>
                    </p>
                    <p className="version">v3.2.1 Crested Coua</p>
                    <span className="hash">Official SHA256 Hash</span>
                    <pre>A72D30273346E8A07FAA0001D9F46C81</pre>
                    <pre>D11E378346F4BB1E39FFFD859118C9F6</pre>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="card light-bordered has-text-centered">
                  <div className="card-icon">
                    <i className="im im-icon-iOS-Apple"></i>
                  </div>
                  <div className="card-title">
                    <h4>Mac Wallets</h4>
                  </div>
                  <div className="card-content">
                    <p className="description walletName">
                      <a href="https://github.com/swap-dev/swap-electron-gui-wallet/releases/download/v3.2.0/Swap.Electron.Wallet-mac-3.2.0.zip">
                        Mac Electron GUI
                      </a>
                    </p>
                    <p className="version">v3.2.0 Crested Coua</p>
                    <hr />
                    <p className="description walletName">
                      <a href="https://github.com/swap-dev/swap/releases/download/swap-v3.1/swap-3.1-gui-mac.dmg">
                        Mac Qt GUI
                      </a>
                    </p>
                    <p className="version">v3.1.0 Crested Coua</p>
                    <hr />
                    <p className="description walletName">
                      <a href="https://github.com/swap-dev/swap/releases/download/v3.2.0/swap-v3.2.0-cli-mac.zip">
                        Mac CLI
                      </a>
                    </p>
                    <p className="version">v3.2.0 Crested Coua</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </span>
    );
  }
}
