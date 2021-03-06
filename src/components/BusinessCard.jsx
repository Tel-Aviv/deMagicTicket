// @flow
import React from "react";
import '../main.css';
import QRCode from 'qrcode.react';

type Props = {
  data: Object
}

const BusinessCard = (props: Props)  => {

      if( !props.data.tid )
        return null;

      const url = `https://demagicstorage.blob.core.windows.net/faces/${parseInt(props.data.tid)}.jpg?sv=2018-03-28&ss=b&srt=o&sp=r&se=2019-01-19T19:39:02Z&st=2018-12-11T11:39:02Z&spr=https,http&sig=g1LRnmQXwZ36xj6fvy8IEvn615kewWDKCu9yq5lKRQM%3D`;

      return (
        <div className='main-content'>
          <div className='top-title' >
            <span>אגף מחשוב ומערכות מידע</span>
          </div>
          <div className='wrapper-pic'>
            <img src={url} className='marg-pic' width='145' height='145'/>
          </div>
          <div className='title'>
            <div>{props.data.title}</div>
          </div>
          <div className='lamp-p'>
            <img src='./img/lamp-icon.png' />
          </div>
          <div className='wrapper-qr'>
              <QRCode
                  value={props.data.userName}
                  size={145}
                  bgColor={"#ffffff"}
                  fgColor={"#000000"}
                  renderAs='svg'
                  level={"L"}
                />
          </div>
          <div className='both-logo'>
            <div className='logo-m' style={{float: 'left'}}>
              <img src="img/logo-mich.png" alt="" width="43" height="55" />
            </div>
            <div className='logo-i' style={{float: 'right'}}>
              <img src="img/logo-iria.png" alt="" width="101" height="55" />
            </div>
          </div>
      </div>
    );
}


export default BusinessCard;
