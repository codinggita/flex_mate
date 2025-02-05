import React, { useEffect, useState } from "react";
import "./Hirefreelancers.css";
import stars from './assets/stars.png';
import group from './assets/group.png';
import lock from './assets/lock.png';
import why from './assets/hirelandingwhy1.png'

const Feedback = () => {
  const [feedbackData, setFeedbackData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/feedback")
      .then((response) => response.json())
      .then((data) => setFeedbackData(data))
      .catch((error) => console.error("Error fetching feedback:", error));
  }, []);

  return (
    <div>
      <div className="box">
        <h1 className="title">Hire The World's Best <br /> Freelancers on FlexMate</h1>
        <h1 className="belowtitle">Create a project to get matched with freelancers or start browsing</h1>
        <div className="browse-cat">
          Browse Categories
        </div>
        <div className="categories">
          <div className="image-container">
            <img src="https://media.istockphoto.com/id/1650773928/photo/young-woman-working-at-her-home-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=KRJ8GIoCZUzvOF5_H1a71oN3vLvhUbVzuAXw1ykmLDE=" alt="" className="andar" />
            <div className="text-overlay">UI,UX Designer</div>
          </div>
          <div className="image-container">
            <img src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb" alt="" className="andar" />
            <div className="text-overlay">Frontend Developer</div>
          </div>
          <div className="image-container">
            <img src="https://media.istockphoto.com/id/1163542812/photo/profile-side-view-of-his-he-nice-bearded-guy-wearing-checked-shirt-professional-expert-html.webp?a=1&b=1&s=612x612&w=0&k=20&c=Qwab4vV00Ux_mzIMho9xxAtPxVf4UHDyImYPay7YCwY=" alt="" className="andar" />
            <div className="text-overlay">Backend Developer</div>
          </div>
          <div className="image-container">
            <img src="https://images.unsplash.com/photo-1573495612937-f01934eeaaa7" alt="" className="andar" />
            <div className="text-overlay">Full Stack Developer</div>
          </div>
          <div className="image-container">
            <img src="https://media.istockphoto.com/id/977398052/photo/businesswoman-laptop-using.webp?a=1&b=1&s=612x612&w=0&k=20&c=1t7i_f-caKHh6nrK4NmpS4EoQTpEZ1_UQ0ioaflI8A0=" alt="" className="andar" />
            <div className="text-overlay">Social Media Marketing</div>
          </div>
          <div className="image-container">
            <img src="https://media.istockphoto.com/id/1191609321/photo/graphic-designer-drawing-sketches-logo-design.webp?a=1&b=1&s=612x612&w=0&k=20&c=N7FGlN9Rt_CASfqYa8ZCPyzXPlWg6txAjvfzOImBVX8=" alt="" className="andar" />
            <div className="text-overlay">Logo Designer</div>
          </div>
          <div className="image-container">
            <img src="https://media.istockphoto.com/id/538605414/photo/photographer-at-work.webp?a=1&b=1&s=612x612&w=0&k=20&c=muHo5cd5ZOHw7Q2GnPc7FQuTb7rjyaWK8QrG20MGv9Y=" alt="" className="andar" />
            <div className="text-overlay">Product Photographer</div>
          </div>
          <div className="image-container">
            <img src="https://media.istockphoto.com/id/1249219777/photo/shopping-online-concept-parcel-or-paper-cartons-with-a-shopping-cart-logo-in-a-trolley-on-a.webp?a=1&b=1&s=612x612&w=0&k=20&c=SKHGjU04CDDZfEULQheYGuIgcteXQR8Mf5q3mjG0qos=" alt="" className="andar" />
            <div className="text-overlay">E-commerce Marketing</div>
          </div>
        </div>
        <div id="line"></div>
        <div className="below-line">
          Why hire on FlexMate?
        </div>
        <div className="below-below-line">
          Hiring freelance talent on FlexMate is seamless and secure.
        </div>
        <div className="image-conmtainer">
          <img src={stars} alt="" className="locks" />
          <img src={group} alt="" className="locks" />
          <img src={lock} alt="" className="locks" />
        </div>
        <div className="text-container">
          <div className="text-container1">
            <h3 className="upper1">Access to the world’s best creators</h3>
            <h3 className="lower">Get matched from a pool of over 2 million qualified freelancers</h3>
          </div>
          <div className="text-container2">
            <h3 className="upper">All the right tools in one place</h3>
            <h3 className="lower">Start conversations, share files, and join video calls with candidates</h3>
          </div>
          <div className="text-container3">
            <h3 className="upper">Secure payments</h3>
            <h3 className="lower">Pay seamlessly and securely with a debit or credit card on Behance</h3>
          </div>
        </div>
        <img src={why} alt="" className="why"/>
        <div className="browse-cat1">
          Browse Categories
        </div>
        <div id="line"></div>
      </div>
    </div>
  );
};

export default Feedback;