import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-wrapper navbar-fade navbar-light is-transparent">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="/">
              <img
                className="light-logo"
                src="assets/img/logos/logo/swap-logo-white.png"
                alt="Swap Logo"
              />
            </a>
            <div className="custom-burger" data-target="">
              <a id="" className="responsive-btn" href="javascript:void(0);">
                <span className="menu-toggle">
                  <span className="icon-box-toggle">
                    <span className="rotate">
                      <i className="icon-line-top"></i>
                      <i className="icon-line-center"></i>
                      <i className="icon-line-bottom"></i>
                    </span>
                  </span>
                </span>
              </a>
            </div>
          </div>
          <div className="navbar-menu">
            <div className="navbar-start">
              <div className="navbar-item has-dropdown is-hoverable">
                <span className="navbar-link">
                  <i className="im im-icon-Leafs"></i>&nbsp; Get Started
                </span>
                <div className="navbar-dropdown is-boxed">
                  <a
                    className="navbar-item is-slide"
                    href="/wallets"
                  >
                    Wallets
                  </a>
                  <a
                    className="navbar-item is-slide"
                    href="/exchanges"
                  >
                    Exchanges
                  </a>
                  <a
                    className="navbar-item is-slide"
                    href="/mining"
                  >
                    Mining
                  </a>
                </div>
              </div>
              <a className="navbar-item is-slide" href="#">
                <i className="im im-icon-Conference"></i>&nbsp; Community
              </a>
              <a className="navbar-item is-slide" href="#">
                <i class="im im-icon-Atom"></i>&nbsp; Development
              </a>
            </div>
            <div className="navbar-end">
              <div className="navbar-item is-button"></div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}