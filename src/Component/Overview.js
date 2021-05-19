import React, { useContext } from "react";

// component
import SideProfile from "./SideProfile";
import SearchBar from "./SearchBar";
import PopularRepoCard from "./PopularRepoCard";
import RecentPush from "./RecentPush";

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
          type="ThreeDots"
          color="#1089ff"
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

        {/* check global values and set users activity */}
        {userData == null ? (
          <Loader
            style={{
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "80vh",
            }}
            type="ThreeDots"
            color="#1089ff"
            height={40}
            width={40}
          />
        ) : (
          // user activity
          <div className="user__activity">
            <p>
              Profile is created at: <span>{userData.created_at}</span>
            </p>

            {/* activity */}
            <div className="activity">
              <h1>
                Repositories <span>{userData.public_repos}</span>
              </h1>
              <h1>
                Stars{" "}
                <span>
                  {userStar == null ? (
                    <Loader
                      type="ThreeDots"
                      color="#1089ff"
                      height={20}
                      width={20}
                    />
                  ) : (
                    userStar.length
                  )}
                </span>
              </h1>
              <h1>
                Followers <span>{userData.followers}</span>
              </h1>
              <h1>
                Following <span>{userData.following}</span>
              </h1>
            </div>

            {/* porpular repo */}
            <div className="popular__repo">
              <h1>POPULAR REPOSITORIES</h1>

              {userRepo == null ? (
                <Loader
                  style={{ textAlign: "center" }}
                  type="ThreeDots"
                  color="#1089ff"
                  height={30}
                  width={30}
                />
              ) : (
                <div className="repo">
                  {userRepo.length === 0 ? (
                    <h1
                      style={{
                        fontSize: "1rem",
                        fontWeight: "normal",
                        letterSpacing: "0px",
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
            <div className="contribution__chart">
              <h1>CONTRIBUTIONS</h1>
              <div className="chart">
                <GitHubCalendar username={userName} color="hsl(210, 100%, 53%)">
                  <ReactTooltip delayShow={50} html />
                </GitHubCalendar>
              </div>
            </div>

            {/* recent event */}
            <div className="recent__event">
              <h1>Recent Pushes</h1>
              {userEvent == null ? (
                <Loader
                  type="ThreeDots"
                  color="#1089ff"
                  height={30}
                  width={30}
                />
              ) : (
                <div className="event">
                  {userEvent.length === 0 ? (
                    <h1
                      style={{
                        fontSize: "1rem",
                        fontWeight: "normal",
                        letterSpacing: "0px",
                      }}
                    >
                      No activity available here.
                    </h1>
                  ) : (
                    userEvent.slice(0, 5).map((eachEvent) => {
                      return (
                        <RecentPush
                          key={eachEvent.id}
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
        )}
      </div>
    </div>
  );
};

export default Overview;
