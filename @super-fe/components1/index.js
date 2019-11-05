import style from "./style.less";
import React from "react";
import Textright from "../components1-text";
import Imgleft from "../components1-img";
import con from "../components0-common";
con();
const Item = () => (
    <header>
        <h1>Preact Item Components</h1>
        <Imgleft />
        <h2>Item 组件里的文案</h2>
        <Textright />
    </header>
);

export default Item;
