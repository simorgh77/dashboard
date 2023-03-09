import "./App.css";
import Navbar from "./components/navbar/Navbar";
import ProgressJob from "./components/progressJob/ProgressJob";
import SideBar from "./components/sideBar/SideBar";
import WidgetCards from "./components/widgetCards/WidgetCards";
import ArrivalFeatures from "./components/arrivalsFeatures/ArrivalsFeatures";
import CustomTable from "./components/customTable/CustomTable";
function App() {
  return (
    <div className="wrapper">
      <div className="sideBar">
        <SideBar />
      </div>


      <div className="widgets">
        {WidgetItems.map((widget, index) => (
          <WidgetCards
            key={index}
            icon={widget.icon}
            title={widget.title}
            description={widget.description}
            backgroundColor={widget.backgroundColor}
            titleColor={widget.titleColor}
            descriptionColor={widget.descriptionColor}
          />
        ))}
      </div>

      <div className="contents">
        <div className="saleProgress">
          <h2>Sales Progress</h2>

          <div className="ProgressContent">
            {ProgressItems.map((p, index) => (
              <ProgressJob
                key={index}
                icon={p.icon}
                title={p.title}
                description={p.description}
              />
            ))}
          </div>
        </div>

        <div className="newArrivals">
          <div className="header">
          <div className="">
            <h2>New Arrivals</h2>
            <h5>More than 400+ new members</h5>
          </div>

          <div className="filter">
            <button>Month</button>
            <button>Week</button>
            <button>Day</button>
          </div>
          
          </div>
      <div>
            {Arrivals.map((arrival, index) => (
              <ArrivalFeatures
                key={index}
                icon={arrival.icon}
                title={arrival.title}
                description={arrival.description}
                price={arrival.price}
                paidStatus={arrival.paidStatus}
                currentStatus={arrival.currentStatus}
                backgroundColor={arrival.backgroundColor}
                color={arrival.color}
              />
            ))}
          </div>
          
        </div>
        </div>
      <div className="table">
      <div className="header label">
          <div>
            <h2>New Arrivals</h2>
            <h5>More than 400+ new members</h5>
          </div>
          <div>
      <button className="report">
              New Report
      </button>
      <button className="create">
              Create
      </button>
    </div>
      </div>
      <CustomTable/>

    </div>

 
    </div>
  );
}

export default App;

const WidgetItems = [
  {
    icon: "ShopWidget",
    title: "Shopping Cart",
    description: "Lands, Houses, Ranchos, Farms",
    backgroundColor: "#FFFFFF",
    titleColor: "#3F4254",
    descriptionColor: "#B5B5C3",
  },
  {
    icon: "ApartmentWidget",
    title: "Aparatments",
    description: "Fiats, Shared Rooms, Duplex",
    backgroundColor: "#3699FF",
    titleColor: "#FFFFFF",
    descriptionColor: "#FFFFFF",
  },
  {
    icon: "SalesWidget",
    title: "Sales Stats",
    description: "Lands, Houses, Ranchos, Farms",
    backgroundColor: "#181C32",
    titleColor: "#FFFFFF",
    descriptionColor: "#FFFFFF",
  },
];

const ProgressItems = [
  {
    icon: "Book",
    title: "Biviba SaaS",
    description: "PHP, SQLite, Artisan CLIмм",
  },
  {
    icon: "Mic",
    title: "Biviba SaaS",
    description: "PHP, SQLite, Artisan CLIмм",
  },
  {
    icon: "Messenger",
    title: "Biviba SaaS",
    description: "PHP, SQLite, Artisan CLIмм",
  },
  {
    icon: "Glue",
    title: "Biviba SaaS",
    description: "PHP, SQLite, Artisan CLIмм",
  },
  {
    icon: "Helthy",
    title: "Biviba SaaS",
    description: "PHP, SQLite, Artisan CLIмм",
  },
];

const Arrivals = [
  {
    icon: "Book",
    title: "Sant Outstanding",
    description: "bprow@bnc.cc",
    price: "$2,000,000",
    paidStatus: "Paid",
    currentStatus: "Approved",
    backgroundColor: "#EEE5FF",
    color: "#8950FC",
  },
  {
    icon: "Mic",
    title: "Telegram Application",
    description: "bprow@bnc.cc",
    price: "$2,000,000",
    paidStatus: "Paid",
    currentStatus: "In Progress",
    backgroundColor: "#FFF4DE",
    color: "#FFA800",
  },
  {
    icon: "Messenger",
    title: "Cisco Management",
    description: "bprow@bnc.cc",
    price: "$2,000,000",
    paidStatus: "Paid",
    currentStatus: "Success",
    backgroundColor: " #E8FFF3;",
    color: "#50CD89",
  },
  {
    icon: "Glue",
    title: "Hr Management",
    description: "bprow@bnc.cc",
    price: "$2,000,000",
    paidStatus: "Paid",
    currentStatus: "Rejected",
    backgroundColor: "#FFE2E5",
    color: "#F64E60",
  },
];
