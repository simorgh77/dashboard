import React from "react";
import UserSpecifications from "../userSpecifications/UserSpecifications";
import "./CustomTable.css"
const CustomTable = () => {
  return (
    <table>
      <thead className="thead">
        <tr  className="tableHead">
          <th>PRODUCTS</th>
          <th className="earning">EARNINGS</th>
          <th >COMISSION</th>
          <th className="companyheader">COMPANY</th>
          <th className="ratingheader">RATING</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
          {userSpecifications.map((user, index) => 
          (
            <tr key={index}>
              <UserSpecifications
                profile={user.profile}
                name={user.name}
                skills={user.skills}
                salary={user.salary}
                salaryStatus={user.salaryStatus}
                commissionPrice={user.commissionPrice}
                commissionStatus={user.commissionStatus}
                companyName={user.companyName}
                activity={user.activity}
                rate={user.rate}
                rateStatus={user.rateStatus}
              />
            </tr>
         ) )}
      </tbody>
    </table>
  );
};

export default CustomTable;

const userSpecifications = [
  {
    profile: "Avatar",
    name: "Brad Simmons",
    skills: "HTML, JS, ReactJS",
    salary: "$8,000,000",
    salaryStatus: "In Proccess",
    commissionPrice: "$520",
    commissionStatus: "Paid",
    companyName: "Intertico",
    activity: "Web, UI/UX Design",
    rate: 5,
    rateStatus: "Best Rated",
  },
  {
    profile: "Avatar",
    name: "Brad Simmons",
    skills: "HTML, JS, ReactJS",
    salary: "$8,000,000",
    salaryStatus: "In Proccess",
    commissionPrice: "$520",
    commissionStatus: "Paid",
    companyName: "Intertico",
    activity: "Web, UI/UX Design",
    rate: 5,
    rateStatus: "Best Rated",
  },
  {
    profile: "Avatar",
    name: "Brad Simmons",
    skills: "HTML, JS, ReactJS",
    salary: "$8,000,000",
    salaryStatus: "In Proccess",
    commissionPrice: "$520",
    commissionStatus: "Paid",
    companyName: "Intertico",
    activity: "Web, UI/UX Design",
    rate: 5,
    rateStatus: "Best Rated",
  },
  {
    profile: "Avatar",
    name: "Brad Simmons",
    skills: "HTML, JS, ReactJS",
    salary: "$8,000,000",
    salaryStatus: "In Proccess",
    commissionPrice: "$520",
    commissionStatus: "Paid",
    companyName: "Intertico",
    activity: "Web, UI/UX Design",
    rate: 5,
    rateStatus: "Best Rated",
  },
  {
    profile: "Avatar",
    name: "Brad Simmons",
    skills: "HTML, JS, ReactJS",
    salary: "$8,000,000",
    salaryStatus: "In Proccess",
    commissionPrice: "$520",
    commissionStatus: "Paid",
    companyName: "Intertico",
    activity: "Web, UI/UX Design",
    rate: 5,
    rateStatus: "Best Rated",
  },
  {
    profile: "Avatar",
    name: "Brad Simmons",
    skills: "HTML, JS, ReactJS",
    salary: "$8,000,000",
    salaryStatus: "In Proccess",
    commissionPrice: "$520",
    commissionStatus: "Paid",
    companyName: "Intertico",
    activity: "Web, UI/UX Design",
    rate: 5,
    rateStatus: "Best Rated",
  },
];
