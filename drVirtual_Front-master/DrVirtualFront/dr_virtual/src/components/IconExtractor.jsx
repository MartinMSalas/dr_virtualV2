import React from 'react';
import ReactDOM from 'react-dom';
import htmlToImage from 'html-to-image';
import fileSaver from 'file-saver';
import { AiOutlineMenu } from "@react-icons/all-files/ai/AiOutlineMenu";

import { IconContext } from "react-icons";

const MyIcon = () => {
  
  return               <IconContext.Provider value={{ color: "blue", className: "global-class-name" }}>
  <div>
    <AiOutlineMenu></AiOutlineMenu>
  </div>
</IconContext.Provider>;
};

const exportIconAsPng = async () => {
  const node = document.createElement('div');
  ReactDOM.render(<MyIcon />, node);
  const image = await htmlToImage.toPng(node);
  fileSaver.saveAs(image, 'myicon.png');
};

exportIconAsPng();