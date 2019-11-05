import style from "./index.less";
import React from "react";
import Textright from "../components2-text";
import Imgleft from "../components2-img";
import con from "../components0-common";
con();
const Item02 = () => (
    <header>
        <h1>Preact Item02 Components</h1>
        <Imgleft />
        <h2>Item02 组件里的文案002</h2>
        <Textright />
    </header>
);

export default Item02;
