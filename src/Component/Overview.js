import React, { useContext } from "react";

// component
import SideProfile from "./SideProfile";
import SearchBar from "./SearchBar";
import PopularRepoCard from "./PopularRepoCard";
import RecentEvent from "./RecentEvent";

// css
import "../App.css";
import "../Css/SideProfile.css";
import "../Css/Overview.css";

// context
import { UserName, UserData, UserStar, UserRepo, UserEvent } from "../Context";

// github contribution calender
import GitHubCalendar from "react-github-calendar";

// tooltip
import ReactTooltip from "react-tooltip";

// loader
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Overview = () => {
  // global values
  const [userName] = useContext(UserName);
  const [userData] = useContext(UserData);
  const [userStar] = useContext(UserStar);
  const [userRepo] = useContext(UserRepo);
  const [userEvent] = useContext(UserEvent);

  return (
    // right section
    <div className="right__section">
      {/* check user data and set side profile */}
      {userData == null ? (
        <Loader
          className="side__profile"
          style={{ textAlign: "center" }}
          type="Oval"
          color="#177df1"
          height={30}
          width={30}
        />
      ) : (
        <SideProfile />
      )}

      {/* right section details */}
      <div className="right__section__details">
        {/* search bar */}
        <SearchBar />

        {/* user main section */}
        <div className="user__main__section">
          <p>
            Profile is created at :
            <span>
              {userData == null ? (
                <Loader
                  type="ThreeDots"
                  color="#177df1"
                  height={20}
                  width={20}
                />
              ) : (
                userData.created_at
              )}
            </span>
          </p>

          {/* activity */}
          <div className="activity">
            <h1>
              Repositories{" "}
              <span>
                {userData == null ? (
                  <Loader
                    type="ThreeDots"
                    color="#177df1"
                    height={20}
                    width={20}
                  />
                ) : (
                  userData.public_repos
                )}
              </span>
            </h1>
            <h1>
              Stars{" "}
              <span>
                {userStar == null ? (
                  <Loader
                    type="ThreeDots"
                    color="#177df1"
                    height={20}
                    width={20}
                  />
                ) : (
                  userStar.length
                )}
              </span>
            </h1>
            <h1>
              Followers{" "}
              <span>
                {userData == null ? (
                  <Loader
                    type="ThreeDots"
                    color="#177df1"
                    height={20}
                    width={20}
                  />
                ) : (
                  userData.followers
                )}
              </span>
            </h1>
            <h1>
              Following{" "}
              <span>
                {userData == null ? (
                  <Loader
                    type="ThreeDots"
                    color="#177df1"
                    height={20}
                    width={20}
                  />
                ) : (
                  userData.following
                )}
              </span>
            </h1>
          </div>

          {/* porpular repo */}
          <div className="section">
            <h1>POPULAR REPOSITORY</h1>
            {userRepo == null ? (
              <Loader
                style={{ textAlign: "center" }}
                type="Oval"
                color="#177df1"
                height={30}
                width={30}
              />
            ) : (
              <div className="sub__section">
                {userRepo.length === 0 ? (
                  <h1
                    style={{
                      fontSize: "1.01rem",
                      fontWeight: "normal",
                    }}
                  >
                    No repository available here.
                  </h1>
                ) : (
                  userRepo.slice(0, 4).map((repo) => {
                    return (
                      <PopularRepoCard
                        key={repo.id}
                        name={repo.name}
                        description={repo.description}
                        star={repo.stargazers_count}
                        fork={repo.forks_count}
                      />
                    );
                  })
                )}
              </div>
            )}
          </div>

          {/* contribution chart */}
          <div className="section">
            <h1>CONTRIBUTION</h1>
            <div className="sub__section">
              <GitHubCalendar username={userName} color="hsl(212, 89%, 52%)">
                <ReactTooltip delayShow={50} html />
              </GitHubCalendar>
            </div>
          </div>

          {/* recent event */}
          <div className="section">
            <h1>RECENT EVENT</h1>
            {userEvent == null ? (
              <Loader
                style={{ textAlign: "center", marginBottom: "50px" }}
                type="Oval"
                color="#177df1"
                height={30}
                width={30}
              />
            ) : (
              <div className="sub__section">
                {userEvent.length === 0 ? (
                  <h1
                    style={{
                      fontSize: "1.01rem",
                      fontWeight: "normal",
                      marginBottom: "50px",
                    }}
                  >
                    No recent event available here.
                  </h1>
                ) : (
                  userEvent.slice(0, 5).map((eachEvent) => {
                    return (
                      <RecentEvent
                        key={eachEvent.id}
                        type={eachEvent.type}
                        name={eachEvent.repo.name}
                        head={eachEvent.payload.head}
                        message={
                          eachEvent.payload.commits == null
                            ? "No message"
                            : eachEvent.payload.commits[0].message
                        }
                        date={eachEvent.created_at}
                      />
                    );
                  })
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
