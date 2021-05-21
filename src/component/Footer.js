import React, { Component } from "react";
import "../css/Footer.css";
import { Link } from 'react-router-dom';

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
  faDiscord,
  faTelegramPlane,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faChevronRight, faBookOpen } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(
  fab,
  faChevronRight,
  faDiscord,
  faTelegramPlane,
  faBookOpen,
  faGithub
);

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer-light-medium">
        <div className="container">
          <div className="footer-head">
            <div className="head-text">
              <h3></h3>
              <p className="footer-link">
                <a href="#"></a>
              </p>
            </div>
            <div className="head-action">
              <div className="buttons">
                <a
                  className="button primary-btn raised action-button is-bold"
                  href="https://discord.gg/VdbtGJNtzc"
                >
                  <FontAwesomeIcon className="icon-space" icon={faDiscord} />{" "}
                  Join Discord
                </a>
                <a
                  className="button primary-btn raised action-button is-bold"
                  href="https://t.me/swap_community2"
                >
                  <FontAwesomeIcon
                    className="icon-space"
                    icon={faTelegramPlane}
                  />{" "}
                  Join Telegram
                </a>
              </div>
            </div>
          </div>
          <div className="columns footer-body">
            <div className="column is-4">
              <div className="pt-10 pb-10">
                <a href="/">
                  <img
                    className="small-footer-logo"
                    src="assets/img/logos/logo/swap-logo-white-outline.png"
                    alt="Swap Logo"
                  />
                </a>
              </div>
              <div>
                <span className="moto">Secure Private Defi</span>
                <div className="social-links">
                  <a href="https://github.com/swap-community">
                    <span className="icon">
                      <FontAwesomeIcon icon={faGithub} />
                    </span>
                  </a>
                  <a href="https://github.com/swap-community/swap/wiki">
                    <span className="icon">
                      <FontAwesomeIcon icon={faBookOpen} />
                    </span>
                  </a>
                  <a href="https://discord.gg/VdbtGJNtzc">
                    <span className="icon">
                      <FontAwesomeIcon icon={faDiscord} />
                    </span>
                  </a>
                  <a href="https://t.me/swap_community2">
                    <span className="icon">
                      <FontAwesomeIcon icon={faTelegramPlane} />
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div className="column is-6 is-offset-2">
              <div className="columns">
                <div className="column">
                  <ul className="footer-column">
                    <li className="column-header"><a href="/getstarted">Get Started</a></li>
                    <li className="column-item">
                      <Link to="/wallets">Wallets</Link>
                    </li>
                    <li className="column-item">
                      <Link to="/exchanges">
                        Exchanges
                      </Link>
                    </li>
                    <li className="column-item">
                      <Link to="/mining">
                        Mining
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="column">
                  <ul className="footer-column">
                    <li className="column-header"><a href="/community">Community</a></li>
                    <li className="column-item">
                      <a href="https://discord.gg/VdbtGJNtzc" target="blank">
                        Discord
                      </a>
                    </li>
                    <li className="column-item">
                      <a href="https://t.me/swap_community2" target="blank">
                        Telegram
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="column">
                  <ul className="footer-column">
                    <li className="column-header"><a href="/development">Development</a></li>
                    <li className="column-item">
                      <a href="https://github.com/swap-community">GitHub</a>
                    </li>
                    <li className="column-item">
                      <a href="https://github.com/swap-community/swap/wiki">
                        Wiki
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-copyright has-text-centered">
            <p>
              <span className="copyleft">&copy;</span> 2018-2021 | Swap | No
              Rights Reserved <i className="im im-icon-Bird"></i>
            </p>
          </div>
        </div>
        <div id="backtotop">
          <a href="#"></a>
        </div>
      </footer>
    );
  }
}