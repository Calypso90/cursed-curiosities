import Navbar from "./components/Navbar.jsx";
import Artifact from "./components/Artifact.jsx";
import UserStories from "./components/UserStories.jsx";
import Comments from "./components/Comments.jsx";
import SideMeu from "./components/SideMenu.jsx";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex justify-between w-full gap-8">
        <div className="w-5/6">
          <Artifact />
          <UserStories />
          <Comments />
        </div>
        <div className="w-1/6">
          <SideMeu />
        </div>
      </div>
    </>
  );
}
