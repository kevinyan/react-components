import style from "./style.less";
import React from "react";
import Textright from "../textright";
import Imgleft from "../imgleft";

const Item = () => (
    <header>
        <h1>Preact Item Components</h1>
        <Imgleft />
        <h2>Item 组件里的文案</h2>
        <Textright />
    </header>
);

export default Item;
