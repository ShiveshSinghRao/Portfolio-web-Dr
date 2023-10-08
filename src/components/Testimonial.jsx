import React from "react";

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Testimonial</h2>

      <section>
        <TestimonialCard
          name={"Reena Sharma"}
          feedback={
            "Dr. Rajesh Bhojwani sir is best Gastroenterology surgeon  "
          }
        />

        <TestimonialCard
          name={"Ramzi"}
          feedback={"Dr. Rajesh bhojwani best doctor in  SDMH,  Jaipur"}
        />

        <TestimonialCard
          name={"Sundar Pichai"}
          feedback={
            "I appreciate his dedication to improving the lives of patients."
          }
        />
      </section>
    </div>
  );
};

const TestimonialCard = ({ name, feedback }) => (
  <article>
    <img
      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      alt="User"
    />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);

export default Testimonial;
