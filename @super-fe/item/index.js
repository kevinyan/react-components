import style from "./style.css";
import React from "react";
import Textright from "../textright";
import Imgleft from "../imgleft";

const Item = () => (
    <header>
        <h1>Preact Item</h1>
        <Imgleft />
        <h2>我是测试文案</h2>
        <Textright />
    </header>
);

export default Item;
