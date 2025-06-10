"use client";
import React from "react";
import styles from "./stats.module.css";

const statsData = [
  {
    img: "/assets/images/stats1.png",
    value: "100",
    label: "Clients",
  },
  {
    img: "/assets/images/stats2.png",
    value: "12",
    label: "Countries",
  },
  {
    img: "/assets/images/stats3.png",
    value: "250",
    label: "Projects",
  },
  {
    img: "/assets/images/stats4.png",
    value: "45",
    label: "Employees",
  },
  {
    img: "/assets/images/stats5.png",
    value: "6",
    label: "Years",
  },
];

const Stats = () => {
  return (
    <section className={`${styles.statsSection}`}>
      <div className="container py-2">
        <div className={`${styles.boxGap} row justify-content-center text-center`}>
          {statsData.map((item, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
              <div className={styles.dropShadow}>
            <div className={styles.hexagonBox}>
            <div className={styles.hexagonInner}>
                <img src={item.img} alt={item.label} className={styles.icon} />
                <h4>{item.value}</h4>
                <p>{item.label}</p>
            </div>
            </div>
            </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
