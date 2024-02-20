"use client";
import Image from "next/image";
import styles from "./page.module.scss";
import { Star } from "@mui/icons-material";
import { services } from "../utils/Utils";
import CommonButton from "../components/common/button/CommonButton";
import Testimonials from "../components/testimonials/Testimonials";
import Blogs from "@/components/blogs/Blogs";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.homeWrapper}>
        <div className={styles.introSection}>
          <div className={styles.inner}>
            <h1>
              Building Brands in the <span>Digital Age</span>
            </h1>
            <p>
              Your partner in navigating the ever-evolving landscape of digital
              marketing. From conceptualization to execution, we craft tailored
              solutions that drive results and elevate your brand to new
              heights.
            </p>
            <CommonButton text={"Get Started"} onclick={""} />
          </div>
          <div className={styles.inner2}>
            <img src="/images/intro.png" alt="home" />
            <div>
              <span>
                <Star style={{ color: "#F8BD38" }} />
                <span>PROJECTS</span>
              </span>
              <p>
                600+<span>Done</span>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.servicesWrapper}>
          <div className={styles.heading}>
            <h2>Explore Our Services</h2>
            <p>
              We are self-service data analytics software that lets you create
              visually.
            </p>
          </div>
          <div className={styles.servicesData}>
            {services.map((item, i) => {
              return (
                <div key={i}>
                  <div className={styles.mobileFlex}>
                    <img src={item.icon} alt={item.title} />
                    <h3>{item.title}</h3>
                  </div>
                  <p>{item.desc}</p>
                </div>
              );
            })}
          </div>
          <CommonButton text={"Learn More"} onclick={""} />
        </div>
        <Testimonials />
        <Blogs />
      </div>
    </main>
  );
}
