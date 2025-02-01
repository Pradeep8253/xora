"use client";
import React from "react";
import { Element } from "react-scroll";
import { features } from "../constants";

function Features() {
  return (
    <section>
      <Element name="features">
        <div className="container">
          <div className="relative flex ">
            {features.map((feature) => (
              <div key={feature.id}>{feature.title}</div>
            ))}
          </div>
        </div>
      </Element>
    </section>
  );
}

export default Features;
