import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
    <div className="box-layout">
        <div className="heading__container">
            <h1 className="heading__main-title show-for-mobile--main-title">Car<span className="heading__main-span">Trac</span></h1>
            <p className="heading__sub-title">Track maintenance and repair history.</p>
        </div>
        <div className="box-layout__box">
            <p className="box-layout__title">Existing/New Users</p>
            <button className="button--login" onClick={startLogin}>Login with <span className="Google-G">G</span><span className="Google-or">o</span><span className="Google-oy">o<span className="Google-g">g</span></span><span className="Google-l">l</span><span className="Google-e">e</span></button>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);