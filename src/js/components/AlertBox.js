import React from 'react';

class AlertBox extends React.Component {

whichBox(boxNumber) {
    console.log('?', boxNumber);
    // window.alert('you clicked box', boxNumber);
}

render() {
return (
    <div>
        <h1 class="alert-box__headline">Alert Box</h1>
        <div class="alert-box__main-container">
            <div class="alert-box__sub-container" onClick={(boxNumber) => { var boxNumber = 1; this.whichBox(boxNumber); }}>1</div>
            <div class="alert-box__sub-container" onClick={(boxNumber) => { var boxNumber = 2; this.whichBox(boxNumber); }}>2</div>
            <div class="alert-box__sub-container" onClick={(boxNumber) => { var boxNumber = 3; this.whichBox(boxNumber); }}>3</div>
        </div>
    </div>
);
}
}

module.exports = AlertBox;