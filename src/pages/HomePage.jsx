
import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import JobListings from "../components/JobListings";
import JobListing from "../components/JobListings";
import ViewAllJobs from "../components/ViewAllJobs";

 

const HomePage = () => {
  return (
    <>
    <Hero />
    {/* <!-- Developers and Employers --> */}
    <HomeCards />
    {/* <!-- Browse Jobs --> */}
<JobListings isHome={true} />

{/* View All Jobs */}
<ViewAllJobs/>


  </>);
}

export default HomePage