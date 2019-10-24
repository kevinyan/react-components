import style from "./index.less";
import React from "react";
import Textright from "../textright02";
import Imgleft from "../imgleft02";
import con from "../static/common";
con();
const Item02 = () => (
    <header>
        <h1>Preact Item02 Components</h1>
        <Imgleft />
        <h2>Item02 组件里的文案</h2>
        <Textright />
    </header>
);

export default Item02;
