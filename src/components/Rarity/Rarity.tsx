import React from "react";
import {
  Accessory,
  Background,
  Body,
  Clothes,
  Ear,
  Eyes,
  Glasses,
  Hairs,
  Head,
  LeftHand,
  Marks,
  Pants,
  RightHand,
  Tail,
  Tattoos,
} from "./Data";
import "./styles.css";

const Rarity = () => {
  return (
    <div className="rarity">
      <h1>Rarity</h1>
      <div className="rar-det-container">
        <div>
          <h3>Background</h3>
          {Background.map((item, index) => (
            <div key={index}>
              <span>
                <strong>{item.trait}</strong>
              </span>
              <span>{item.chance}</span>
              <span>
                {" "}
                <strong>{item.occurrence}</strong>
              </span>
            </div>
          ))}
        </div>
        <div>
          <h3>Tail</h3>
          {Tail.map((item, index) => (
            <div key={index}>
              <span>
                <strong>{item.trait}</strong>
              </span>
              <span>{item.chance}</span>
              <span>
                {" "}
                <strong>{item.occurrence}</strong>
              </span>
            </div>
          ))}
        </div>

        <div>
          <h3>Body</h3>
          {Body.map((item, index) => (
            <div key={index}>
              <span>
                <strong>{item.trait}</strong>
              </span>
              <span>{item.chance}</span>
              <span>
                {" "}
                <strong>{item.occurrence}</strong>
              </span>
            </div>
          ))}
        </div>
        <div>
          <h3>Head</h3>
          {Head.map((item, index) => (
            <div key={index}>
              <span>
                <strong>{item.trait}</strong>
              </span>
              <span>{item.chance}</span>
              <span>
                {" "}
                <strong>{item.occurrence}</strong>
              </span>
            </div>
          ))}
        </div>
        <div>
          <h3>RightHand</h3>
          {RightHand.map((item, index) => (
            <div key={index}>
              <span>
                <strong>{item.trait}</strong>
              </span>
              <span>{item.chance}</span>
              <span>
                {" "}
                <strong>{item.occurrence}</strong>
              </span>
            </div>
          ))}
        </div>
        <div>
          <h3>Eyes</h3>
          {Eyes.map((item, index) => (
            <div key={index}>
              <span>
                <strong>{item.trait}</strong>
              </span>
              <span>{item.chance}</span>
              <span>
                {" "}
                <strong>{item.occurrence}</strong>
              </span>
            </div>
          ))}
        </div>
        <div>
          <h3>Ear</h3>
          {Ear.map((item, index) => (
            <div key={index}>
              <span>
                <strong>{item.trait}</strong>
              </span>
              <span>{item.chance}</span>
              <span>
                {" "}
                <strong>{item.occurrence}</strong>
              </span>
            </div>
          ))}
        </div>
        <div>
          <h3>Pants</h3>
          {Pants.map((item, index) => (
            <div key={index}>
              <span>
                <strong>{item.trait}</strong>
              </span>
              <span>{item.chance}</span>
              <span>
                {" "}
                <strong>{item.occurrence}</strong>
              </span>
            </div>
          ))}
        </div>
        <div>
          <h3>Clothes</h3>
          {Clothes.map((item, index) => (
            <div key={index}>
              <span>
                <strong>{item.trait}</strong>
              </span>
              <span>{item.chance}</span>
              <span>
                {" "}
                <strong>{item.occurrence}</strong>
              </span>
            </div>
          ))}
        </div>
        <div>
          <h3>LeftHand</h3>
          {LeftHand.map((item, index) => (
            <div key={index}>
              <span>
                <strong>{item.trait}</strong>
              </span>
              <span>{item.chance}</span>
              <span>
                {" "}
                <strong>{item.occurrence}</strong>
              </span>
            </div>
          ))}
        </div>
        <div>
          <h3>Tattoos</h3>
          {Tattoos.map((item, index) => (
            <div key={index}>
              <span>
                <strong>{item.trait}</strong>
              </span>
              <span>{item.chance}</span>
              <span>
                {" "}
                <strong>{item.occurrence}</strong>
              </span>
            </div>
          ))}
        </div>
        <div>
          <h3>Accessory</h3>
          {Accessory.map((item, index) => (
            <div key={index}>
              <span>
                <strong>{item.trait}</strong>
              </span>
              <span>{item.chance}</span>
              <span>
                {" "}
                <strong>{item.occurrence}</strong>
              </span>
            </div>
          ))}
        </div>
        <div>
          <h3>Marks</h3>
          {Marks.map((item, index) => (
            <div key={index}>
              <span>
                <strong>{item.trait}</strong>
              </span>
              <span>{item.chance}</span>
              <span>
                {" "}
                <strong>{item.occurrence}</strong>
              </span>
            </div>
          ))}
        </div>
        <div>
          <h3>Glasses</h3>
          {Glasses.map((item, index) => (
            <div key={index}>
              <span>
                <strong>{item.trait}</strong>
              </span>
              <span>{item.chance}</span>
              <span>
                {" "}
                <strong>{item.occurrence}</strong>
              </span>
            </div>
          ))}
        </div>
        <div>
          <h3>Hairs</h3>
          {Hairs.map((item, index) => (
            <div key={index}>
              <span>
                <strong>{item.trait}</strong>
              </span>
              <span>{item.chance}</span>
              <span>
                {" "}
                <strong>{item.occurrence}</strong>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rarity;
