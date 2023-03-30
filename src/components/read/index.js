import { Component } from "react";
import { hex2a } from "./ullti.js";
import "./index.css";
export default class Read extends Component {
  renderLi() {
    const readType = this.props.readType;
    let strArr = [];
    let body = [];
    this.props.value.map((items, index) => {
      const item = items.value;
      const type = items.type; // 1接收，2发送
      
      if (item !== undefined) {
        
        for (let hex of Array.from(item)) {
          strArr.push(hex.toString(16).toLocaleUpperCase());
        }

      }

     
    });
    strArr = strArr.map((item) => {
      if (typeof item === "string") {
        if (readType === 1) {
          return (parseInt(item, 16));
        } else if (readType === 2) {
          return item + " ";
    
        }
      }
      return item;
    });

      let encodedBytes = new Uint8Array(strArr);
      const decoder = new TextDecoder();
      const decodedValue = decoder.decode(encodedBytes);
      console.log(decodedValue); // Output: Hello, World!
     // strArr = Array.from(decodedValue);
    
    // if (typeof strArr[strArr.length - 1] === "string") {
    //   strArr.push(<br key={1} />);
    // }
    
    body.push(decodedValue);

    return (
      <span className={this.textColor(1)} >
        {body}
      </span>
    );

  }
  textColor(type) {
    let className = "py-3 ";
    if (type === 1) {
      className += "text-green-700";
    } else if (type === 2) {
      className += "text-blue-700";
    }
    return className;
  }
  scrollToBottom = () => {
    this.bodyEnd.scrollIntoView({ behavior: "smooth" });
  };
  componentDidUpdate() {
    if (this.props.isScroll) {
      this.scrollToBottom();
    }
  }
  render() {
    return (
      <>
        <div className="break-all text-xl" style={{ whiteSpace:"pre-wrap"}}>
            
            {this.renderLi()}
        </div>
        <div
          style={{ float: "left", clear: "both"}}
          ref={(el) => {
            this.bodyEnd = el;
          }}
        ></div>
      </>
    );
  }
}
