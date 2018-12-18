// @flow
import React from "react";
import QRCode from 'qrcode.react';

type State = {
  tid: String,
  userName: String
};

type Props = {
  data: Object
}

class BusinessCard extends React.Component<Props, State> {

    state = {
        tid: this.props.data.tid,
        userName: this.props.data.userName
    };

    // constructor() {
    //     super();
    //     this.state = {
    //         tid: this.props.data.tid,
    //         userName: this.props.data.userName
    //     };
    // }

    render() {

        const url = `https://demagic.blob.core.windows.net/faces/${this.state.tid}.jpg`;
        console.log(url);

        return (
            <div>
              <img src={url} width='128' height='128' />
                <QRCode
                    value={this.state.userName}
                    size={128}
                    bgColor={"#ffffff"}
                    fgColor={"#000000"}
                    level={"L"}
                  />
            </div>
        );
    }
}


export default BusinessCard;
