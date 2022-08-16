import React from 'react'
import Clothes from "../pages/Clothes";
import Tech from "../pages/Tech";
import All from '../pages/All';
import { Link, Route, Routes, } from "react-router-dom";
const img = require("../images/logo.png");
const dollor = require("../images/$.png");
const vector = require("../images/Vector.png");
const shopping = require("../images/shopping.png");

function Nav() {
  return (
    <div>
        <header>
            <nav>
                <ul>
                    <li>All</li>
                    <li>Clothes</li>
                    <li>Tech</li>
                </ul>
            </nav>
        </header>
  </div>
  )
}

export default Nav