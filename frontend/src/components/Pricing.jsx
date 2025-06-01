import React from "react";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

export default function Pricing() {
  const pricing = [
    {
      imgUrl: "/pricing.jpg",
      title: "QUATERLY",
      price: 9999,
      length: 3,
      description: {
        first_desc: "Unlimited Gym Access",
        second_desc: "1 Personal Training Session",
        third_desc: "Access to One Bootcamp per Month",
        fourth_desc: "Body Assessment & Goal Mapping",
        fifth_desc: "5% Discount on Supplements",
      },
    },
    {
      imgUrl: "/pricing.jpg",
      title: "HALF YEARLY",
      price: 17999,
      length: 6,
      description: {
        first_desc: "Unlimited Gym Access",
        second_desc: "Access to 2 Bootcamps per month",
        third_desc: "Free Nutrition Consultation (once per term)",
        fourth_desc: "10% discount on Iron Forge Merchandises",
        fifth_desc: "3 Personal Training Sessions",
      },
    },
    {
      imgUrl: "/pricing.jpg",
      title: "YEARLY",
      price: 29999,
      length: 12,
      description: {
        first_desc: "Unlimited Gym Access",
        second_desc: "Unlimited Bootcamp Access",
        third_desc: "15% discount on supplements & merchandise",
        fourth_desc: "Monthly Progress Tracking",
        fifth_desc: "Free Iron Forge Welcome Kit",
      },
    },
  ];
  return (
    <section className="pricing">
      <h1>IRON FORGE FITNESS PLANS</h1>
      <div className="wrapper">
        {pricing.map((element) => {
          return (
            <div className="card" key={element.title}>
              <img src={element.imgUrl} alt={element.title} />
              <div className="title">
                <h1>{element.title}</h1>
                <h1>PACKAGE</h1>
                <h3>Rs {element.price}</h3>
                <p>For {element.length} Months</p>
              </div>
              <div className="description">
                <p>
                  <Check />
                  {element.description.first_desc}
                </p>
                <p>
                  <Check />
                  {element.description.second_desc}
                </p>
                <p>
                  <Check />
                  {element.description.third_desc}
                </p>
                <p>
                  <Check />
                  {element.description.fourth_desc}
                </p>
                <p>
                  <Check />
                  {element.description.fifth_desc}
                </p>
                <Link to={"/"}>Join Now</Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
