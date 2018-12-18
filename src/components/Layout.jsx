import React from "react";
import QRCode from 'qrcode.react';

export default
class Layout extends React.Component {

    constructor() {
        super();
        this.state = {
            title: "Welcome to React SSR!"
        };
    }

    render() {

        //const url = `https://demagic.blob.core.windows.net/faces/${this.props.data.tiz}.jpg`;
        console.log(this.props.data.tiz);

        const url = 'https://demagic.blob.core.windows.net/faces/34276105.jpg'

        return (
            <div>
              <img src={url} width='128' height='128' />
                <QRCode
                    value={"http://picturesofpeoplescanningqrcodes.tumblr.com/"}
                    size={128}
                    bgColor={"#ffffff"}
                    fgColor={"#000000"}
                    level={"L"}
                  />
            </div>
        );
    }
}
