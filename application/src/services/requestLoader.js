import axios from "axios";
import swal from "sweetalert";
import { baseURL } from "utils/environment";

export default function RequestLoader() {
  let config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const div = document.createElement("div");

  this.Post = function(URL, data) {
    return new Promise((resolve, reject) => {
      this.loaderSpinner(div);
      axios
        .post(baseURL + URL, data, config)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          this.errorHandler(err, reject);
        })
        .finally(() => {
          document.body.removeChild(div);
        });
    });
  };

  this.Get = function(URL) {
    return new Promise((resolve, reject) => {
      this.loaderSpinner(div);
      axios
        .get(baseURL + URL, config)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          this.errorHandler(err, reject);
        })
        .finally(() => {
          document.body.removeChild(div);
        });
    });
  };

  this.errorHandler = (err, reject) => {
    if (err.response) {
      if (err.response.status === 500) {
        reject(err.response.data);
      } else {
        swal(
          "Algo anda mal",
          "Ha ocurrido un errror en la plataforma",
          "error"
        );
        reject("Ha ocurrido un errror en la plataforma");
      }
    } else {
      swal(
        "Algo anda mal",
        "Estamos presentando fallas, en unos minutos las solucionaremos!",
        "error"
      );
    }
  };

  this.loaderSpinner = div => {
    div.innerHTML = `
      <div class="lds-css ng-scope">
        <div class="lds-blocks" style="width:100%;height:100%">
          <div style="left:38px;top:38px;animation-delay:0s"></div>
          <div style="left:80px;top:38px;animation-delay:0.125s"></div>
          <div style="left:122px;top:38px;animation-delay:0.25s"></div>
          <div style="left:38px;top:80px;animation-delay:0.875s"></div>
          <div style="left:122px;top:80px;animation-delay:0.375s"></div>
          <div style="left:38px;top:122px;animation-delay:0.75s"></div>
          <div style="left:80px;top:122px;animation-delay:0.625s"></div>
          <div style="left:122px;top:122px;animation-delay:0.5s"></div>
        </div>
      </div>
      <style type="text/css">
      .lds-css{
        margin: auto;
      }
      @keyframes lds-blocks {
        0% {
          background: #689cc5;
        }
        12.5% {
          background: #689cc5;
        }
        12.625% {
          background: #93dbe9;
        }
        100% {
          background: #93dbe9;
        }
      }
      @-webkit-keyframes lds-blocks {
        0% {
          background: #689cc5;
        }
        12.5% {
          background: #689cc5;
        }
        12.625% {
          background: #93dbe9;
        }
        100% {
          background: #93dbe9;
        }
      }
      .lds-blocks {
        position: relative;
      }
      .lds-blocks div {
        position: absolute;
        width: 40px;
        height: 40px;
        background: #93dbe9;
        -webkit-animation: lds-blocks 1s linear infinite;
        animation: lds-blocks 1s linear infinite;
      }
      .lds-blocks {
        width: 200px !important;
        height: 200px !important;
        -webkit-transform: translate(-100px, -100px) scale(1) translate(100px, 100px);
        transform: translate(-100px, -100px) scale(1) translate(100px, 100px);
      }
      </style>
    `;
    div.style.top = "0";
    div.style.position = "fixed";
    div.style.width = "100%";
    div.style.height = "100vh";
    div.style.backgroundColor = "rgba(0, 0, 0, 0.44)";
    div.style.zIndex = "10";
    div.style.display = "flex";
    document.body.appendChild(div);
  };
}
