import React from 'react';
import '../components/Home.css';
import img from '../images/home1.png';
const Home = () => {
    var TxtRotate = function (el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = "";
        this.tick();
        this.isDeleting = false;
    };

    TxtRotate.prototype.tick = function () {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

        var that = this;
        var delta = 300 - Math.random() * 100;

        if (this.isDeleting) {
            delta /= 2;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === "") {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(function () {
            that.tick();
        }, delta);
    };

    window.onload = function () {
        var elements = document.getElementsByClassName("txt-rotate");
        for (var i = 0; i < elements.length; i++) {
            var toRotate = elements[i].getAttribute("data-rotate");
            var period = elements[i].getAttribute("data-period");
            if (toRotate) {
                new TxtRotate(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
        document.body.appendChild(css);
    };
    return (
        <div className='row align-items-center m-2 bg-clor p-3'>

            <div className="col-lg-6 col-sm-6 col-md-6">
                <h5 className='fw-bold text-white'>I am a
    <span className="txt-rotate ms-1" data-period="2000"
                        data-rotate='[ "JR. WEBDEVELOPER", "REACT JS DEVELOPER.", "MERN STACK DEVELOPER" ]'></span>
                </h5>
            </div>
            <div className="col-lg-6 col-sm-6 col-md-6">
                <img className='w-50' src={img} alt="" />
                <div className='mx-3 fw-bold'>
                    <p>Developmet is an art </p>
                </div>
                <br />
                <button className='btn btn-danger'>Projects</button>
            </div>
        </div>
    );
};

export default Home;