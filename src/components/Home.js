import React, { Component } from "react";
export default function Home() {
  return (
    <div>
      <div id="top">
        <div id="inner-top">
          <div id="logo">
            <a href="Homepage.html">
              <img src="PAHK.png" width="200" height="80" />
            </a>
          </div>

          <div id="icons">
            <div>
              <a href="https://wa.me/85293221317">
                <img src="Whatsapp-v3.png" width="50" />
              </a>
            </div>
            <div>
              <a href="">
                <img src="Wechat-v3.png" width="50" />
              </a>
            </div>
            <div>
              <a>
                <img src="Skype.png" width="50" />
              </a>
            </div>
            <div>
              <img src="dropdown.png" width="50" style="display: none" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
